import React, { useRef } from 'react';
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
  CarouselButton
} from './TestimonialsStyles';

const Testimonials = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = direction === 'left' ? -350 : 350; // Scroll by card width approx
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <Section id="testimonials">
      <SectionDivider colorAlt />
      <br />
      <SectionTitle>Testimonials</SectionTitle>
      <SectionText>
        What my colleagues and peers say about working with me.
      </SectionText>
      <TestimonialsContainer>
        <CardsContainer ref={scrollRef}>
          {TestimonialsData.map((card, index) => (
            <Card key={index}>
              <Quote>
                {card.text}
              </Quote>
              <AuthorInfo>
                {card.image ? (
                   <img src={card.image} alt={card.name} style={{width: '45px', height: '45px', borderRadius: '50%', objectFit: 'cover'}} />
                ) : (
                  <AuthorImage>
                    {card.name.split(' ').map((n) => n[0]).join('').substring(0, 2)}
                  </AuthorImage>
                )}
                <AuthorText>
                  <AuthorName>{card.name}</AuthorName>
                  <AuthorRole>{card.role}</AuthorRole>
                </AuthorText>
              </AuthorInfo>
            </Card>
          ))}
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
    </Section>
  );
};

export default Testimonials;
