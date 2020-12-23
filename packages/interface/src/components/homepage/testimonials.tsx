import { Testimonial, TestimonialProps } from './testimonial';

import React from 'react';
import { Section } from '../section';
import styled from '@emotion/styled';
import { useIntl } from 'gatsby-plugin-intl';

const StyledTestimonials = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Testimonials = () => {
  const intl = useIntl();

  const testimonails: TestimonialProps[] = [];

  return (
    <Section 
      title={intl.formatMessage({ id: 'testimonials.title' })}
    >
      <StyledTestimonials>
        {testimonails.map((t: TestimonialProps, i: any) => (
          <Testimonial key={t.author + i} {...t} />
        ))}
      </StyledTestimonials>
    </Section>
  );
};
