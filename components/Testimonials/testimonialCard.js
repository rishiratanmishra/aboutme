import React from 'react';

const TestimonialCard = ({ reviewText, reviewerName, reviewerPost }) => {
  return (
    <div className="bg-white shadow-lg p-6 rounded-lg">
      <p className="text-gray-800">{reviewText}</p>
      <div className="mt-4">
        <h4 className="text-lg font-semibold">{reviewerName}</h4>
        <p className="text-gray-600">{reviewerPost}</p>
      </div>
    </div>
  );
};

const TestimonialCarousel = ({ testimonials }) => {
  return (
    <div className="flex space-x-4">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
    </div>
  );
};

export default TestimonialCarousel;
