export interface Service {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  duration: string;
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
}

export interface BookingStep {
  step: number;
  title: string;
  completed: boolean;
}

export interface QuoteData {
  service: string;
  frequency: string;
  rooms: number;
  bathrooms: number;
  addons: string[];
  totalPrice: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}