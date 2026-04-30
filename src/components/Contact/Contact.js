import React, { useState } from 'react';
import { FaEnvelope, FaWhatsapp, FaRegCalendarCheck, FaMapMarkerAlt, FaClock, FaExternalLinkAlt } from 'react-icons/fa';
import { Section, SectionDivider, SectionSubText, SectionTitle } from '../../styles/GlobalComponents';
import {
  ContactCard,
  Form,
  FormRow,
  Field,
  Label,
  Input,
  TextArea,
  SubmitRow,
  SubmitButton,
  SubmitHint,
  StatusMessage,
  InfoPanel,
  InfoHeading,
  InfoSubText,
  InfoChannelList,
  InfoChannel,
  InfoFootnote,
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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formValues),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Unable to send message right now.');
      }

      setStatus({
        type: 'success',
        message: "Thanks! I've got your message and will reply within one business day.",
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
      <SectionSubText style={{ maxWidth: '720px', fontWeight: '400' }}>
        Share what you need — a new build, integration, automation, deploy, or bug fix. You'll hear back within one business day.
      </SectionSubText>

      <ContactCard>
        <InfoPanel>
          <div>
            <InfoHeading>Quick to reply.</InfoHeading>
            <InfoSubText>
              I read every message myself. Expect a thoughtful response within one business day.
            </InfoSubText>
          </div>

          <InfoChannelList>
            <InfoChannel>
              <FaEnvelope size="1.1rem" />
              <a href="mailto:zia.rehman.web@gmail.com">zia.rehman.web@gmail.com</a>
            </InfoChannel>
            <InfoChannel>
              <FaWhatsapp size="1.1rem" />
              <a href="https://wa.me/+923131407828" target="_blank" rel="noopener noreferrer">
                +92 313 1407828 <FaExternalLinkAlt size="0.75rem" style={{ marginLeft: '0.3rem', verticalAlign: 'baseline' }} />
              </a>
            </InfoChannel>
            <InfoChannel>
              <FaRegCalendarCheck size="1.1rem" />
              <a
                href="https://calendly.com/zia-rehman-web/30min"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a 30-min call <FaExternalLinkAlt size="0.75rem" style={{ marginLeft: '0.3rem', verticalAlign: 'baseline' }} />
              </a>
            </InfoChannel>
          </InfoChannelList>

          <InfoFootnote>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
              <FaMapMarkerAlt size="0.85rem" /> Based in Pakistan (PKT, UTC+5)
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <FaClock size="0.85rem" /> Comfortable overlap with US, UAE, KSA timezones
            </div>
          </InfoFootnote>
        </InfoPanel>

        <Form onSubmit={handleSubmit}>
          <FormRow>
            <Field>
              <Label htmlFor="contact-name">Name</Label>
              <Input
                id="contact-name"
                name="name"
                placeholder="Jane Doe"
                value={formValues.name}
                onChange={handleChange}
                required
              />
            </Field>
            <Field>
              <Label htmlFor="contact-email">Email</Label>
              <Input
                id="contact-email"
                name="email"
                type="email"
                placeholder="jane@company.com"
                value={formValues.email}
                onChange={handleChange}
                required
              />
            </Field>
          </FormRow>

          <Field>
            <Label htmlFor="contact-company">Company / Project (optional)</Label>
            <Input
              id="contact-company"
              name="company"
              placeholder="Acme Inc · Internal CRM"
              value={formValues.company}
              onChange={handleChange}
            />
          </Field>

          <Field>
            <Label htmlFor="contact-message">What are you trying to build or fix?</Label>
            <TextArea
              id="contact-message"
              name="message"
              placeholder="A short description is enough — I'll follow up with the right questions."
              value={formValues.message}
              onChange={handleChange}
              required
            />
          </Field>

          {/* Honeypot — bots fill this, humans never see it. */}
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

          <SubmitRow>
            <SubmitButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending…' : 'Send message'}
            </SubmitButton>
            <SubmitHint>Replies within 1 business day</SubmitHint>
          </SubmitRow>

          {status.message && (
            <StatusMessage error={status.type === 'error'}>
              {status.message}
            </StatusMessage>
          )}
        </Form>
      </ContactCard>
    </Section>
  );
};

export default Contact;
