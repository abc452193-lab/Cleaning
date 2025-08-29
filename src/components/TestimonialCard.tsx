import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';
import { Card } from './Card';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <Card gradient hover className="h-full relative">
      <Quote className="absolute top-4 right-4 w-8 h-8 text-orange-200" />
      
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i}
            className={`w-5 h-5 transition-colors duration-300 ${
              i < testimonial.rating 
                ? 'text-yellow-500 fill-current' 
                : 'text-gray-300'
            }`}
          />
        ))}
      </div>
      
      <p className="text-gray-700 mb-6 leading-relaxed italic font-medium">
        "{testimonial.text}"
      </p>
      
      <div className="mt-auto pt-4 border-t border-gray-100">
        <p className="font-bold text-gray-900">{testimonial.name}</p>
        <p className="text-sm text-gray-600 mb-1">{testimonial.location}</p>
        <div className="inline-flex items-center bg-orange-100 text-orange-700 px-2 py-1 rounded-full text-xs font-semibold">
          {testimonial.service}
        </div>
      </div>
    </Card>
  );
}