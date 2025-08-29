import React from 'react';
import { Shield, Clock, Leaf, Award, Users, Zap, CheckCircle } from 'lucide-react';
import { Card } from '../components/Card';
import { AnimatedCounter } from '../components/AnimatedCounter';

export function WhyChooseSection() {
  const features = [
    {
      icon: Shield,
      title: 'Fully Insured & Bonded',
      description: '$2M liability coverage and comprehensive background checks on every team member for complete peace of mind.',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Clock,
      title: 'Same-Day Service',
      description: 'Urgent cleaning needs? We offer flexible same-day scheduling across Sydney with no rush fees.',
      color: 'from-orange-500 to-yellow-500'
    },
    {
      icon: Leaf,
      title: 'Eco-Luxury Products',
      description: 'Premium, certified eco-friendly products that are safe for your family, pets, and the environment.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: Award,
      title: '100% Guarantee',
      description: 'Not completely satisfied? We return within 24 hours to make it perfect, absolutely free of charge.',
      color: 'from-purple-500 to-pink-600'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: '12+ years of experience with ongoing training programs to ensure consistently exceptional results.',
      color: 'from-indigo-500 to-blue-600'
    },
    {
      icon: Zap,
      title: 'Advanced Equipment',
      description: 'Professional-grade equipment and tools that deliver superior results in less time.',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-gray-50 relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gradient-to-bl from-orange-100 to-yellow-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-gradient-to-tr from-cyan-100 to-blue-100 rounded-full blur-3xl opacity-30"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Award className="w-4 h-4 mr-2" />
            Why Sydney Chooses Us
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            The Premium Difference
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 block">
              You Deserve
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're not just another cleaning service. We're your partners in creating spaces 
            where life happens beautifully, every single day.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index} 
                hover 
                className="text-center relative overflow-hidden group"
              >
                {/* Icon Container */}
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${feature.color} mx-auto mb-6 flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </Card>
            );
          })}
        </div>

        {/* Guarantee Section */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-green-600 to-emerald-700 rounded-2xl p-8 lg:p-12 text-white shadow-2xl relative overflow-hidden">
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white rounded-full transform translate-x-24 -translate-y-24"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full transform -translate-x-32 translate-y-32"></div>
            </div>
            
            <div className="relative z-10 text-center">
              <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>
              
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                The Squeaky Kleaners Promise
              </h3>
              <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
                If you're not absolutely delighted with our service, we'll return within 24 hours 
                to make it perfect. No questions asked, no extra charges. That's our guarantee.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <AnimatedCounter 
                    target={100} 
                    suffix="%" 
                    className="text-3xl font-bold text-white block mb-2" 
                  />
                  <div className="text-white/80 text-sm">Satisfaction Rate</div>
                </div>
                <div className="text-center">
                  <AnimatedCounter 
                    target={24} 
                    suffix=" hrs" 
                    className="text-3xl font-bold text-white block mb-2" 
                  />
                  <div className="text-white/80 text-sm">Response Guarantee</div>
                </div>
                <div className="text-center">
                  <AnimatedCounter 
                    target={0} 
                    suffix=" Cost" 
                    prefix="$"
                    className="text-3xl font-bold text-white block mb-2" 
                  />
                  <div className="text-white/80 text-sm">Return Service</div>
                </div>
              </div>

              <Button 
                variant="secondary"
                size="lg" 
                className="bg-white text-green-700 hover:bg-gray-50 shadow-xl"
              >
                <Shield className="w-5 h-5 mr-2" />
                Learn About Our Guarantee
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}