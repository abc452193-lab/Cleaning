import React, { useState } from 'react';
import { Home, Building2, Sparkles, Calculator, MessageCircle, CheckCircle, Clock } from 'lucide-react';
import { ServiceCard } from '../components/ServiceCard';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { services } from '../data/mockData';
import { Service } from '../types';

export function ServicesSection() {
  const [activeTab, setActiveTab] = useState<'residential' | 'commercial'>('residential');
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const residentialServices = services.filter(s => 
    !['3'].includes(s.id) // Exclude pure commercial services
  );

  const commercialServices = services.filter(s => 
    ['3', '5'].includes(s.id) // Include commercial and post-construction
  );

  const handleServiceSelect = (service: Service) => {
    setSelectedService(service);
    // Scroll to booking or open modal
    console.log('Selected service:', service);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-cyan-50 to-white relative overflow-hidden">
      
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-orange-100 to-yellow-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-100 to-blue-100 rounded-full blur-3xl opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            Premium Services Portfolio
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Choose Your Perfect
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 block">
              Cleaning Experience
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From deep transformations to regular maintenance, we have the perfect solution 
            for every space and lifestyle. All services include our happiness guarantee.
          </p>
        </div>

        {/* Service Type Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-3 shadow-xl border border-gray-100">
            <div className="flex">
              <button
                onClick={() => setActiveTab('residential')}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center ${
                  activeTab === 'residential'
                    ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Home className="w-5 h-5 mr-2" />
                Residential
              </button>
              <button
                onClick={() => setActiveTab('commercial')}
                className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center ${
                  activeTab === 'commercial'
                    ? 'bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-lg transform scale-105'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                <Building2 className="w-5 h-5 mr-2" />
                Commercial
              </button>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {(activeTab === 'residential' ? residentialServices : commercialServices).map((service, index) => (
            <div 
              key={service.id}
              className="transform transition-all duration-500"
              style={{ 
                animationDelay: `${index * 150}ms`,
                opacity: 1,
                transform: 'translateY(0)'
              }}
            >
              <ServiceCard service={service} onSelect={handleServiceSelect} />
            </div>
          ))}
        </div>

        {/* Custom Package Builder */}
        <div className="max-w-5xl mx-auto mb-12">
          <Card className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white border-0 shadow-2xl relative overflow-hidden">
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full transform translate-x-16 -translate-y-16"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full transform -translate-x-24 translate-y-24"></div>
            </div>
            
            <div className="relative z-10 text-center">
              <h3 className="text-3xl lg:text-4xl font-bold mb-4">Need Something Custom?</h3>
              <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                Let our experts create the perfect cleaning package tailored to your unique space, 
                schedule, and specific requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  variant="secondary" 
                  size="lg"
                  className="shadow-lg"
                >
                  <Calculator className="w-5 h-5 mr-2" />
                  Build Custom Package
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white/10"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Speak to Expert
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Service Guarantees */}
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <Card hover className="border border-green-200 bg-gradient-to-br from-green-50 to-emerald-50">
            <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <CheckCircle className="w-8 h-8 text-white" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">100% Satisfaction</h4>
            <p className="text-gray-600 text-sm">Not happy? We'll return to make it right, free of charge.</p>
          </Card>
          
          <Card hover className="border border-blue-200 bg-gradient-to-br from-blue-50 to-cyan-50">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Same-Day Available</h4>
            <p className="text-gray-600 text-sm">Urgent cleaning needs? We're here with flexible scheduling.</p>
          </Card>
          
          <Card hover className="border border-orange-200 bg-gradient-to-br from-orange-50 to-yellow-50">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full mx-auto mb-4 flex items-center justify-center">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Eco-Friendly Always</h4>
            <p className="text-gray-600 text-sm">Safe for family, pets, and the environment. Premium results guaranteed.</p>
          </Card>
        </div>
      </div>
    </section>
  );
}