import React from 'react';
import { Check } from 'lucide-react';
import { Service } from '../types';
import { Card } from './Card';
import { Button } from './Button';

interface ServiceCardProps {
  service: Service;
  onSelect: (service: Service) => void;
}

export function ServiceCard({ service, onSelect }: ServiceCardProps) {
  return (
    <Card hover className="relative h-full flex flex-col">
      {service.popular && (
        <div className="absolute -top-3 -right-3 z-10">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg animate-pulse">
            ⭐ Most Popular
          </div>
        </div>
      )}
      
      <div className="flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
        <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
        
        <div className="flex items-baseline justify-between mb-6">
          <div>
            <span className="text-3xl font-bold text-orange-500">${service.basePrice}</span>
            <span className="text-gray-500 text-sm ml-2">starting from</span>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500 mb-1">Duration</div>
            <span className="text-sm font-semibold text-cyan-700 bg-cyan-100 px-3 py-1 rounded-full">
              {service.duration}
            </span>
          </div>
        </div>

        {/* Service Features */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center text-sm text-gray-600">
            <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
            Eco-friendly products included
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
            Fully insured & bonded team
          </div>
          <div className="flex items-center text-sm text-gray-600">
            <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
            Satisfaction guaranteed
          </div>
        </div>
      </div>
      
      <Button 
        onClick={() => onSelect(service)} 
        className="w-full mt-auto"
        variant="primary"
      >
        Book This Service
      </Button>
    </Card>
  );
}