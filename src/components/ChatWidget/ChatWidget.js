import React, { useEffect, useRef, useState } from 'react';
import { FaEnvelope, FaRegCalendarCheck } from 'react-icons/fa';
import { FiMessageCircle, FiSend, FiX } from 'react-icons/fi';
import { Availability } from '../../constants/availability';
import {
  Actions,
  Bubble,
  BubbleLabel,
  Composer,
  Footnote,
  Header,
  Message,
  Messages,
  Panel,
  Suggestions,
  Typing,
  Wrapper,
} from './ChatWidgetStyles';

const ENDPOINT = process.env.NEXT_PUBLIC_CHAT_ENDPOINT;
const STORAGE_KEY = 'zia-chat-v1';
const MAX_CHARS = 500;

const WELCOME = {
  role: 'assistant',
  text: "Hi! I'm Zia's AI assistant. Ask me about his availability, experience or skills.",
};

const SUGGESTIONS = [
  'Is Zia available?',
  "What's his Rails experience?",
  'Has he built real-time apps?',
  'How do I hire him?',
];

const ERRORS = {
  rate_limited: "You're sending messages quickly. Please wait a minute and try again.",
  busy: 'The assistant is busy right now. Please try again shortly, or email Zia directly.',
  default: 'Something went wrong. Please try again, or reach Zia by email below.',
};

// Turn URLs and emails in plain-text answers into links
const linkify = (text) =>
  text.split(/(https?:\/\/[^\s)]+|[\w.+-]+@[\w-]+\.[\w.]+)/g).map((part, i) => {
    if (/^https?:\/\//.test(part)) {
      const clean = part.replace(/[.,]$/, '');
      return (
        <React.Fragment key={i}>
          <a href={clean} target="_blank" rel="noopener noreferrer">
            {clean}
          </a>
          {part.slice(clean.length)}
        </React.Fragment>
      );
    }
    if (/^[\w.+-]+@[\w-]+\.[\w.]+$/.test(part)) {
      const clean = part.replace(/\.$/, '');
      return (
        <React.Fragment key={i}>
          <a href={`mailto:${clean}`}>{clean}</a>
          {part.slice(clean.length)}
        </React.Fragment>
      );
    }
    return part;
  });

const ChatWidget = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([WELCOME]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const listRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    try {
      const saved = JSON.parse(sessionStorage.getItem(STORAGE_KEY) || 'null');
      if (Array.isArray(saved) && saved.length) setMessages(saved);
    } catch {
      // ignore bad storage
    }
  }, []);

  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages.slice(-30)));
    } catch {
      // storage full or disabled
    }
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    if (!open) return undefined;
    inputRef.current?.focus();
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  if (!ENDPOINT) return null;

  const send = async (question) => {
    const text = question.trim().slice(0, MAX_CHARS);
    if (!text || loading) return;
    setInput('');
    setLoading(true);

    const history = [...messages.filter((m) => m !== WELCOME && !m.error), { role: 'user', text }];
    setMessages((prev) => [...prev, { role: 'user', text }, { role: 'assistant', text: '' }]);

    const setLast = (patch) =>
      setMessages((prev) => {
        const next = [...prev];
        next[next.length - 1] = { ...next[next.length - 1], ...patch };
        return next;
      });

    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: history.map(({ role, text: t }) => ({ role, text: t })) }),
      });
      if (!res.ok || !res.body) {
        const data = await res.json().catch(() => ({}));
        setLast({ text: ERRORS[data.error] || ERRORS.default, error: true });
        return;
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';
      let answer = '';
      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop();
        for (const line of lines) {
          if (!line.startsWith('data:')) continue;
          const evt = JSON.parse(line.slice(5));
          if (evt.t) {
            answer += evt.t;
            setLast({ text: answer });
          }
          if (evt.error) setLast({ text: answer || ERRORS.default, error: !answer });
        }
      }
      if (!answer) setLast({ text: ERRORS.default, error: true });
    } catch {
      setLast({ text: ERRORS.default, error: true });
    } finally {
      setLoading(false);
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    send(input);
  };

  const showSuggestions = messages.length <= 1;
  const { contact } = Availability;

  return (
    <Wrapper>
      {open && (
        <Panel role="dialog" aria-label="Chat with Zia's AI assistant">
          <Header>
            <span aria-hidden="true">ZR</span>
            <div>
              <strong>Ask about Zia</strong>
              <small>AI assistant · availability &amp; expertise</small>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label="Close chat">
              <FiX />
            </button>
          </Header>

          <Messages ref={listRef} aria-live="polite">
            {messages.map((m, i) => (
              <Message key={i} $role={m.role} $error={m.error}>
                {m.text ? linkify(m.text) : <Typing aria-label="Assistant is typing"><i /><i /><i /></Typing>}
              </Message>
            ))}
            {showSuggestions && (
              <Suggestions>
                {SUGGESTIONS.map((s) => (
                  <button key={s} type="button" onClick={() => send(s)}>
                    {s}
                  </button>
                ))}
              </Suggestions>
            )}
          </Messages>

          <Actions>
            <a href={contact.calendly} target="_blank" rel="noopener noreferrer">
              <FaRegCalendarCheck aria-hidden="true" /> Book a call
            </a>
            <a href={`mailto:${contact.email}`}>
              <FaEnvelope aria-hidden="true" /> Email
            </a>
          </Actions>

          <Composer onSubmit={onSubmit}>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              maxLength={MAX_CHARS}
              placeholder="Ask about Zia's work…"
              aria-label="Your question"
            />
            <button type="submit" disabled={!input.trim() || loading} aria-label="Send">
              <FiSend />
            </button>
          </Composer>
          <Footnote>AI can make mistakes · Powered by Google Gemini</Footnote>
        </Panel>
      )}

      <Bubble
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-label={open ? 'Close chat' : 'Ask about Zia: chat with the AI assistant'}
        $open={open}
      >
        {open ? <FiX size="2.4rem" /> : <FiMessageCircle size="2.4rem" />}
        {!open && <BubbleLabel>Ask about Zia</BubbleLabel>}
      </Bubble>
    </Wrapper>
  );
};

export default ChatWidget;
