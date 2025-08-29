import React from 'react';
import { Calendar, UserCheck, Sparkles, CheckCircle, ArrowRight, Clock, Shield } from 'lucide-react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

export function ProcessSection() {
  const steps = [
    {
      icon: Calendar,
      title: 'Book in 60 Seconds',
      description: 'Choose your service, preferred date, and time slot in under 2 minutes. Instant confirmation with flexible rescheduling options.',
      color: 'from-orange-400 to-yellow-500',
      details: ['Instant online booking', '24/7 availability', 'Flexible scheduling']
    },
    {
      icon: UserCheck,
      title: 'We Arrive Prepared',
      description: 'Our vetted, insured team arrives with premium supplies and equipment. Background-checked professionals you can completely trust.',
      color: 'from-cyan-500 to-blue-600',
      details: ['Background checked', 'Fully insured & bonded', 'All supplies included']
    },
    {
      icon: Sparkles,
      title: 'Transform Your Space',
      description: 'Systematic, thorough cleaning using premium eco-friendly products. Every corner, every surface, meticulously cleaned to perfection.',
      color: 'from-yellow-400 to-orange-500',
      details: ['Eco-friendly products', 'Systematic approach', 'Quality guaranteed']
    },
    {
      icon: CheckCircle,
      title: 'Enjoy Perfection',
      description: 'Walk into your completely transformed space. 100% satisfaction guaranteed or we return within 24 hours to make it right.',
      color: 'from-green-400 to-emerald-600',
      details: ['Satisfaction guarantee', '24hr return policy', 'Perfect results']
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-cyan-100 to-blue-100 rounded-full blur-3xl opacity-40"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Clock className="w-4 h-4 mr-2" />
            Simple & Seamless Process
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            How We Make Your Life
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 block">
              Beautifully Simple
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From booking to sparkling results, our proven 4-step process ensures 
            a seamless, stress-free experience every single time.
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-7xl mx-auto mb-16">
          <div className="grid lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative group">
                  <Card hover className="h-full text-center relative overflow-hidden">
                    
                    {/* Step Number Badge */}
                    <div className="absolute top-4 right-4 w-10 h-10 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full flex items-center justify-center text-sm font-bold text-gray-700 shadow-md">
                      {index + 1}
                    </div>
                    
                    {/* Icon Container */}
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} mx-auto mb-6 flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-10 h-10 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{step.description}</p>
                    
                    {/* Step Details */}
                    <div className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {detail}
                        </div>
                      ))}
                    </div>
                  </Card>

                  {/* Connection Arrow */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-4 w-8 h-8 items-center justify-center z-10">
                      <div className="w-8 h-0.5 bg-gradient-to-r from-orange-300 to-yellow-300"></div>
                      <ArrowRight className="w-5 h-5 text-yellow-500 absolute right-0 transform translate-x-1/2" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Trust & Security Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-gradient-to-r from-slate-800 to-gray-900 text-white border-0 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-yellow-500/10"></div>
            
            <div className="relative z-10 text-center">
              <div className="flex justify-center mb-6">
                <Shield className="w-16 h-16 text-yellow-400" />
              </div>
              <h3 className="text-3xl font-bold mb-4">Your Trust is Our Foundation</h3>
              <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
                Every team member is background checked, fully insured, and trained to our exacting standards. 
                Your peace of mind is our priority.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-yellow-400 mb-1">100%</div>
                  <div className="text-sm text-gray-300">Background Checked</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-400 mb-1">$2M</div>
                  <div className="text-sm text-gray-300">Insurance Coverage</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-yellow-400 mb-1">12+</div>
                  <div className="text-sm text-gray-300">Years Experience</div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Final CTA Section */}
        <div className="text-center">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white shadow-2xl border-2 border-gray-100 relative overflow-hidden">
              
              {/* Gradient Border */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-500 to-yellow-500"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  Ready to Experience the Difference?
                </h3>
                <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
                  Join thousands of satisfied customers who've made the smart choice for their homes and businesses. 
                  Your first pristine clean is just one click away.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                  <Button size="xl" className="px-12 shadow-xl">
                    <Calendar className="w-6 h-6 mr-3" />
                    Start Your Transformation
                  </Button>
                  <Button variant="outline" size="xl" className="px-12">
                    <UserCheck className="w-6 h-6 mr-3" />
                    Chat with Expert
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="grid md:grid-cols-3 gap-6 pt-6 border-t border-gray-100">
                  <div className="flex items-center justify-center text-sm text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span className="font-medium">No Long-Term Contracts</span>
                  </div>
                  <div className="flex items-center justify-center text-sm text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span className="font-medium">100% Satisfaction Guarantee</span>
                  </div>
                  <div className="flex items-center justify-center text-sm text-gray-600">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                    <span className="font-medium">Same-Day Available</span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}