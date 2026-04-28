import React, { useState } from 'react';
import { Section, SectionDivider, SectionSubText, SectionTitle } from '../../styles/GlobalComponents';
import {
  ContactCard,
  Form,
  FormRow,
  Input,
  TextArea,
  SubmitButton,
  StatusMessage,
  FallbackText,
  FallbackLink,
} from './ContactStyles';

const initialState = {
  name: '',
  email: '',
  company: '',
  message: '',
  website: '',
};

const Contact = () => {
  const [formValues, setFormValues] = useState(initialState);
  const [status, setStatus] = useState({ type: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const endpoint = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || '/api/contact';
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Unable to send message right now.');
      }

      setStatus({
        type: 'success',
        message: "Thanks! I've logged your message and will reach back ASAP.",
      });
      setFormValues(initialState);
    } catch (error) {
      setStatus({
        type: 'error',
        message: error.message || 'Unable to send message right now.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section id="contact">
      <SectionDivider colorAlt />
      <SectionTitle>Let's Build Together</SectionTitle>
      <SectionSubText style={{maxWidth: '1200px', fontWeight: '400'}}>
        Share what you need, whether it’s a new build, integration, automation, deploy, or bug fix. You’ll hear back from me within one business day.
      </SectionSubText>
      <ContactCard>
        <Form onSubmit={handleSubmit}>
          <FormRow>
            <Input
              name="name"
              placeholder="Your name"
              value={formValues.name}
              onChange={handleChange}
              required
            />
            <Input
              name="email"
              type="email"
              placeholder="Email address"
              value={formValues.email}
              onChange={handleChange}
              required
            />
          </FormRow>
          <Input
            name="company"
            placeholder="Company / Project / Task"
            value={formValues.company}
            onChange={handleChange}
          />
          <TextArea
            name="message"
            placeholder="Tell me about the outcome you're targeting..."
            value={formValues.message}
            onChange={handleChange}
            required
          />
          {/* Honeypot — bots fill this, humans never see it. Submissions with a value are silently rejected server-side. */}
          <input
            type="text"
            name="website"
            tabIndex="-1"
            autoComplete="off"
            value={formValues.website}
            onChange={handleChange}
            style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }}
            aria-hidden="true"
          />
          <SubmitButton type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Sending...' : 'Send message'}
          </SubmitButton>
          {status.message && (
            <StatusMessage error={status.type === 'error'}>
              {status.message}
            </StatusMessage>
          )}
          <FallbackText>
            Or email me directly at{' '}
            <FallbackLink href="mailto:zia.rehman.web@gmail.com">
              zia.rehman.web@gmail.com
            </FallbackLink>
            {' '}— prefer to talk?{' '}
            <FallbackLink
              href="https://calendly.com/zia-rehman-web/30min"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a 30-min call
            </FallbackLink>
            .
          </FallbackText>
        </Form>
      </ContactCard>
    </Section>
  );
};

export default Contact;
