import { Service, Testimonial, FAQ } from '../types';

export const services: Service[] = [
  {
    id: '1',
    name: 'Deep Clean Premium',
    description: 'Complete transformation of your space with premium eco-friendly products. Perfect for move-ins, special events, or quarterly refresh sessions.',
    basePrice: 189,
    duration: '3-4 hours',
    popular: true
  },
  {
    id: '2',
    name: 'Regular Maintenance',
    description: 'Weekly or fortnightly service to keep your home consistently spotless. Ideal for busy families and working professionals.',
    basePrice: 89,
    duration: '1.5-2 hours'
  },
  {
    id: '3',
    name: 'Commercial Office',
    description: 'Professional office cleaning with flexible scheduling. Create a productive, healthy workspace that impresses clients.',
    basePrice: 149,
    duration: '2-3 hours'
  },
  {
    id: '4',
    name: 'Move In/Out Special',
    description: 'Complete property reset for relocations. Bond-back guarantee and inspection-ready results every time.',
    basePrice: 299,
    duration: '4-6 hours'
  },
  {
    id: '5',
    name: 'Post-Construction',
    description: 'Specialized cleanup after renovations or construction work. Heavy-duty equipment and expert dust removal techniques.',
    basePrice: 249,
    duration: '3-5 hours'
  },
  {
    id: '6',
    name: 'Eco-Luxury Package',
    description: 'Premium service using only certified organic, non-toxic products. Perfect for families with children, pets, or allergies.',
    basePrice: 219,
    duration: '3-4 hours'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    location: 'Bondi Beach, Sydney',
    rating: 5,
    text: 'Absolutely transformed our beachside apartment! The team was incredibly professional, efficient, and left everything spotless. The eco-friendly products were perfect for our family. Worth every penny and more.',
    service: 'Deep Clean Premium'
  },
  {
    id: '2',
    name: 'Marcus Chen',
    location: 'Sydney CBD',
    rating: 5,
    text: 'Our corporate office has never looked better. The team works seamlessly around our business schedule and consistently delivers exceptional results. Our clients always comment on how pristine everything looks.',
    service: 'Commercial Office'
  },
  {
    id: '3',
    name: 'Emma Johnson',
    location: 'Manly, Sydney',
    rating: 5,
    text: 'The eco-luxury package was absolutely perfect for our growing family. Safe, non-toxic products mean our kids can play freely while everything stays perfectly clean. Game-changer for busy parents!',
    service: 'Eco-Luxury Package'
  },
  {
    id: '4',
    name: 'David Rodriguez',
    location: 'Surry Hills, Sydney',
    rating: 5,
    text: 'Move-out cleaning was flawlessly executed. Every detail was covered, and we received our full bond back without any issues. The team even went above and beyond our expectations.',
    service: 'Move In/Out Special'
  },
  {
    id: '5',
    name: 'Lisa Thompson',
    location: 'Double Bay, Sydney',
    rating: 5,
    text: 'Weekly service has completely transformed our lifestyle. Getting my weekends back to spend with family instead of cleaning has been priceless. The consistency and quality are unmatched.',
    service: 'Regular Maintenance'
  },
  {
    id: '6',
    name: 'James Wilson',
    location: 'Paddington, Sydney',
    rating: 5,
    text: 'Post-renovation cleanup was incredible. They handled all the construction dust and debris like true professionals. Our space looked better than when we first bought it!',
    service: 'Post-Construction'
  }
];

export const stats = {
  happyClients: 5247,
  yearsExperience: 12,
  satisfactionRate: 99,
  servicesCompleted: 15683,
  timesSaved: 47891,
  teamMembers: 34
};

export const serviceAreas = [
  'Eastern Suburbs',
  'Inner West', 
  'North Shore',
  'Northern Beaches',
  'CBD & City',
  'South Sydney',
  'Western Sydney',
  'Lower North Shore'
];

export const faqs: FAQ[] = [
  {
    id: '1',
    question: 'What makes Squeaky Kleaners different from other cleaning services?',
    answer: 'We combine premium eco-friendly products, extensively vetted professionals, and a 100% satisfaction guarantee. Our systematic approach and luxury-level attention to detail ensures consistent, exceptional results every single time.'
  },
  {
    id: '2',
    question: 'Are your cleaning products safe for children and pets?',
    answer: 'Absolutely! All our products are certified eco-friendly and completely non-toxic. We prioritize your family\'s health and safety while delivering spotless, sanitized results you can trust.'
  },
  {
    id: '3',
    question: 'What happens if I\'m not completely satisfied with the service?',
    answer: 'We offer a comprehensive 100% satisfaction guarantee. If you\'re not completely happy with any aspect of our service, we\'ll return within 24 hours to make it right, at absolutely no extra cost to you.'
  },
  {
    id: '4',
    question: 'How do you ensure security and handle home access?',
    answer: 'All our team members undergo thorough background checks, are fully bonded and insured. We have strict key management protocols and can accommodate your preferred security arrangements, including lockbox access.'
  },
  {
    id: '5',
    question: 'Can you accommodate my busy schedule?',
    answer: 'Yes! We offer completely flexible scheduling including early mornings, evenings, and weekends. Same-day and emergency services are often available for urgent cleaning needs.'
  }
];