import React, { useState } from 'react';
import { ArrowLeftRight, Play, CheckCircle } from 'lucide-react';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

export function BeforeAfterSection() {
  const [activeImage, setActiveImage] = useState(0);
  
  const transformations = [
    {
      id: 1,
      title: 'Living Room Deep Clean',
      location: 'Bondi Beach Home',
      service: 'Deep Clean Premium',
      description: 'Complete transformation of cluttered family space into pristine living area'
    },
    {
      id: 2,
      title: 'Commercial Office',
      location: 'Sydney CBD',
      service: 'Commercial Office',
      description: 'Professional workspace cleaned to impress clients and boost productivity'
    },
    {
      id: 3,
      title: 'Post-Renovation',
      location: 'Manly Apartment',
      service: 'Post-Construction',
      description: 'Construction dust and debris completely removed, revealing beautiful renovation'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-orange-100 to-yellow-100 rounded-full blur-3xl opacity-50"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <ArrowLeftRight className="w-4 h-4 mr-2" />
            Real Transformations
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            See the Magic
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-yellow-500 block">
              We Create
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real before and after photos from our recent transformations across Sydney. 
            Your space could be next!
          </p>
        </div>

        {/* Image Gallery */}
        <div className="max-w-5xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {transformations.map((transformation, index) => (
              <Card 
                key={transformation.id}
                hover
                className="group cursor-pointer relative overflow-hidden"
                onClick={() => setActiveImage(index)}
              >
                {/* Image Placeholder with Gradient */}
                <div className="w-full h-64 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-400 rounded-lg mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3">
                      <div className="text-xs font-semibold text-orange-600 mb-1">{transformation.service}</div>
                      <div className="text-sm font-bold text-gray-900">{transformation.title}</div>
                    </div>
                  </div>
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                      <Play className="w-6 h-6 text-orange-500 ml-1" />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-bold text-gray-900">{transformation.title}</h4>
                  <p className="text-sm text-gray-600">{transformation.location}</p>
                  <p className="text-sm text-gray-500">{transformation.description}</p>
                  
                  <div className="flex items-center text-xs text-green-600 font-medium">
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Completed in {transformation.service === 'Deep Clean Premium' ? '3 hours' : '2 hours'}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Video CTA */}
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-gradient-to-r from-slate-800 to-gray-900 text-white border-0 shadow-2xl relative overflow-hidden">
            
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full transform translate-x-20 -translate-y-20"></div>
              <div className="absolute bottom-0 left-0 w-56 h-56 bg-white rounded-full transform -translate-x-28 translate-y-28"></div>
            </div>
            
            <div className="relative z-10 p-8 lg:p-12">
              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                Ready to Transform Your Life?
              </h3>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
                Don't wait another weekend. Join thousands of Sydney families who've discovered 
                the luxury of a professionally cleaned home.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button size="xl" className="px-12 shadow-2xl">
                  <Calendar className="w-6 h-6 mr-3" />
                  Book Your First Clean
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button 
                  variant="outline" 
                  size="xl" 
                  className="border-white text-white hover:bg-white hover:text-gray-900 px-12"
                >
                  <MessageCircle className="w-6 h-6 mr-3" />
                  Get Custom Quote
                </Button>
              </div>

              {/* Final Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-sm">
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span className="text-gray-300">Same-Day Available</span>
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span className="text-gray-300">100% Guarantee</span>
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span className="text-gray-300">Eco-Friendly</span>
                </div>
                <div className="flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                  <span className="text-gray-300">Fully Insured</span>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}