import React, { useEffect, useRef, useState } from 'react';
import { FaRegCalendarCheck } from 'react-icons/fa';
import { CALENDLY_URL } from '../../constants/site';
import { FabContainer, FabLink, IconWrap, Label } from './BookCallFabStyles';

const BookCallFab = () => {
  const [hidden, setHidden] = useState(false);
  const [pulsing, setPulsing] = useState(true);
  const linkRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    const contact = document.getElementById('contact');
    if (!contact) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setHidden(entry.isIntersecting));
      },
      { threshold: 0.15 }
    );
    observer.observe(contact);
    return () => observer.disconnect();
  }, []);

  const stopPulse = () => setPulsing(false);

  return (
    <FabContainer $hidden={hidden} aria-hidden={hidden}>
      <FabLink
        ref={linkRef}
        href={CALENDLY_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Book a 30-minute call on Calendly"
        $pulsing={pulsing}
        onMouseEnter={stopPulse}
        onFocus={stopPulse}
        tabIndex={hidden ? -1 : 0}
      >
        <IconWrap aria-hidden="true">
          <FaRegCalendarCheck size="1.2rem" />
        </IconWrap>
        <Label>Book a 30-min call</Label>
      </FabLink>
    </FabContainer>
  );
};

export default BookCallFab;
