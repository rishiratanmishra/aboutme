import React from 'react';
import TestimonialCarousel from './testimonialCard';

const testimonialsData = [
  {
    reviewText:
      'Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.',
    reviewerName: 'Bonnie Green',
    reviewerPost: 'Web developer at Google',
    },
    
    {
        reviewText:
          'Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.',
        reviewerName: ' Green',
        reviewerPost: 'Web developer at Google',
      },
    {
        reviewText:
          'Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.',
        reviewerName: ' Green',
        reviewerPost: 'Web developer at Google',
      },
    {
        reviewText:
          'Flowbite is just awesome. It contains tons of predesigned components and pages starting from login screen to complex dashboard. Perfect choice for your next SaaS application.',
        reviewerName: ' Green',
        reviewerPost: 'Web developer at Google',
      },
  // Add more testimonials as needed
];

const Testimonials = () => {
  return (
    <div>
          <h1>Testimonials</h1>
      <TestimonialCarousel testimonials={testimonialsData} />
    </div>
  );
};

export default Testimonials;
