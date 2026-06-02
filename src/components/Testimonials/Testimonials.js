import React, { useEffect, useRef, useState } from 'react';
import { Section, SectionDivider, SectionTitle, SectionText } from '../../styles/GlobalComponents';
import { TestimonialsData } from '../../constants/constants';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import {
  TestimonialsContainer,
  CardsContainer,
  Card,
  Quote,
  AuthorInfo,
  AuthorImage,
  AuthorText,
  AuthorName,
  AuthorRole,
  CarouselButtons,
  CarouselButton,
  ReadMoreButton,
  ModalOverlay,
  ModalContent,
  ModalClose
} from './TestimonialsStyles';

const Testimonials = () => {
  const scrollRef = useRef(null);
  const closeButtonRef = useRef(null);
  const previousFocusRef = useRef(null);
  const [selected, setSelected] = useState(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (!current) return;
    const firstCard = current.firstElementChild;
    const cardWidth = firstCard ? firstCard.getBoundingClientRect().width : 450;
    const gap = 24;
    const step = cardWidth + gap;
    current.scrollBy({ left: direction === 'left' ? -step : step, behavior: 'smooth' });
  };

  const closeModal = () => setSelected(null);

  useEffect(() => {
    if (!selected) return undefined;
    previousFocusRef.current = document.activeElement;
    if (closeButtonRef.current) closeButtonRef.current.focus();
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        closeModal();
      }
    };
    document.addEventListener('keydown', onKeyDown);
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = originalOverflow;
      if (previousFocusRef.current && previousFocusRef.current.focus) {
        previousFocusRef.current.focus();
      }
    };
  }, [selected]);

  return (
    <Section id="testimonials">
      <SectionDivider colorAlt />
      <br />
      <SectionTitle>Testimonials</SectionTitle>
      <SectionText>
        What my colleagues and peers say about working with me.
      </SectionText>
      <TestimonialsContainer aria-label="Testimonials carousel">
        <CardsContainer ref={scrollRef}>
          {TestimonialsData.map((card, index) => {
            const snippet = card.text.length > 160 ? card.text.slice(0, 160) + '…' : card.text;
            return (
              <Card key={index}>
                <Quote>
                  {snippet}
                </Quote>
                <AuthorInfo>
                  {card.image ? (
                    <img
                      src={card.image}
                      alt={`${card.name}, ${card.role}`}
                      style={{ width: '45px', height: '45px', borderRadius: '50%', objectFit: 'cover' }}
                    />
                  ) : (
                    <AuthorImage aria-hidden="true">
                      {card.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')
                        .substring(0, 2)}
                    </AuthorImage>
                  )}
                  <AuthorText>
                    <AuthorName>{card.name}</AuthorName>
                    <AuthorRole>{card.role}</AuthorRole>
                    {card.text.length > 160 && (
                      <ReadMoreButton
                        onClick={() => setSelected(card)}
                        aria-label={`Read full recommendation from ${card.name}`}
                      >
                        Read full recommendation
                      </ReadMoreButton>
                    )}
                  </AuthorText>
                </AuthorInfo>
              </Card>
            );
          })}
        </CardsContainer>
        <CarouselButtons>
          <CarouselButton onClick={() => scroll('left')} aria-label="Previous testimonial">
            <FaChevronLeft />
          </CarouselButton>
          <CarouselButton onClick={() => scroll('right')} aria-label="Next testimonial">
            <FaChevronRight />
          </CarouselButton>
        </CarouselButtons>
      </TestimonialsContainer>
      {selected && (
        <ModalOverlay onClick={closeModal}>
          <ModalContent
            role="dialog"
            aria-modal="true"
            aria-labelledby="testimonial-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <ModalClose ref={closeButtonRef} onClick={closeModal} aria-label="Close recommendation dialog">
              Close ✕
            </ModalClose>
            <h4 id="testimonial-modal-title" style={{ marginTop: 0, marginBottom: 8, fontSize: '18px' }}>
              {selected.name}
            </h4>
            <p style={{ fontSize: '14px', color: '#cbd5e1', marginTop: 0 }}>{selected.role}</p>
            {selected.name === 'Salman Saeed' ? (
              <>
                <p style={{ fontSize: '16px', lineHeight: '26px', marginTop: 12 }}>
                  I had the pleasure of working with Zia and can confidently say he is one of the most reliable and supportive engineers on a team. He is the kind of person who never hesitates to step in and help others, whether it’s solving a complex technical issue or unblocking a teammate under pressure.
                </p>
                <p style={{ fontSize: '16px', lineHeight: '26px', marginTop: 8 }}>
                  Zia takes full ownership of his work and handles challenges with a calm, problem-solving mindset. No matter how difficult the task, he approaches it with responsibility and determination, always focusing on delivering high-quality results.
                </p>
                <p style={{ fontSize: '16px', lineHeight: '26px', marginTop: 8 }}>
                  His technical skills in Ruby on Rails and full-stack development are strong, but what truly sets him apart is his attitude. He is collaborative, proactive, and genuinely invested in the success of the team and the product. Any team would benefit from having Zia onboard. He is not just a skilled engineer, but also a dependable team player you can trust with critical work.
                </p>
              </>
            ) : (
              <p style={{ fontSize: '16px', lineHeight: '26px', marginTop: 12 }}>{selected.text}</p>
            )}
          </ModalContent>
        </ModalOverlay>
      )}
    </Section>
  );
};

export default Testimonials;
