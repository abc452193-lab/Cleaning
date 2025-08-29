import React from 'react';
import { Users, Award, TrendingUp } from 'lucide-react';
import { TestimonialSlider } from '../components/TestimonialSlider';
import { AnimatedCounter } from '../components/AnimatedCounter';
import { stats } from '../data/mockData';

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-gradient-to-bl from-yellow-100 to-orange-100 rounded-full blur-3xl opacity-60"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-100 to-blue-100 rounded-full blur-3xl opacity-60"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Users className="w-4 h-4 mr-2" />
            Client Success Stories
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            What Our Clients Say About
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 block">
              Their Squeaky Clean Experience
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real reviews from real families and businesses across Sydney who've experienced 
            the life-changing difference of premium cleaning.
          </p>
        </div>

        {/* Stats Banner */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8 text-white shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <AnimatedCounter 
                  target={stats.happyClients} 
                  suffix="+" 
                  className="text-3xl lg:text-4xl font-bold text-yellow-400 block mb-2" 
                />
                <div className="text-gray-300">Satisfied Customers</div>
              </div>
              <div>
                <AnimatedCounter 
                  target={stats.satisfactionRate} 
                  suffix="%" 
                  className="text-3xl lg:text-4xl font-bold text-green-400 block mb-2" 
                />
                <div className="text-gray-300">Satisfaction Rate</div>
              </div>
              <div>
                <AnimatedCounter 
                  target={stats.servicesCompleted} 
                  suffix="+" 
                  className="text-3xl lg:text-4xl font-bold text-blue-400 block mb-2" 
                />
                <div className="text-gray-300">Services Completed</div>
              </div>
              <div>
                <AnimatedCounter 
                  target={stats.timesSaved} 
                  suffix="hrs" 
                  className="text-3xl lg:text-4xl font-bold text-orange-400 block mb-2" 
                />
                <div className="text-gray-300">Time Saved</div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Slider */}
        <TestimonialSlider />

        {/* Awards & Recognition */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-yellow-100 to-orange-100 p-6 rounded-xl border border-yellow-200">
              <Award className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <div className="font-bold text-gray-900">Sydney's Best 2024</div>
              <div className="text-sm text-gray-600">Cleaning Service Awards</div>
            </div>
            
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 p-6 rounded-xl border border-green-200">
              <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <div className="font-bold text-gray-900">Top 1% Provider</div>
              <div className="text-sm text-gray-600">Customer Satisfaction</div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 p-6 rounded-xl border border-blue-200">
              <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <div className="font-bold text-gray-900">5000+ Families</div>
              <div className="text-sm text-gray-600">Trust Our Service</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}