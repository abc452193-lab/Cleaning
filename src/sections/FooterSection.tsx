import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Facebook, 
  Instagram, 
  Star,
  Sparkles,
  CheckCircle,
  Calendar
} from 'lucide-react';
import { serviceAreas } from '../data/mockData';
import { Button } from '../components/Button';

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 text-white relative overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-orange-500/10 to-yellow-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10">
        
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Squeaky Kleaners</h3>
                  <div className="text-sm text-orange-400">Premium Cleaning</div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Sydney's premier cleaning service, transforming homes and businesses 
                with luxury-level care and eco-friendly excellence since 2012.
              </p>
              
              {/* Social Media */}
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all duration-300 hover:scale-110"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-orange-500 transition-all duration-300 hover:scale-110"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h4 className="text-xl font-bold mb-6 flex items-center">
                <Phone className="w-5 h-5 mr-2 text-orange-400" />
                Contact Us
              </h4>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone className="w-5 h-5 text-orange-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <a href="tel:0280001234" className="text-white hover:text-orange-400 transition-colors duration-300 font-medium">
                      (02) 8000 1234
                    </a>
                    <div className="text-sm text-gray-400">24/7 Emergency Line</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="w-5 h-5 text-orange-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <a href="mailto:hello@squeakykleaners.com.au" className="text-white hover:text-orange-400 transition-colors duration-300">
                      hello@squeakykleaners.com.au
                    </a>
                    <div className="text-sm text-gray-400">Quick Response</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-orange-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-white">Sydney Wide Service</div>
                    <div className="text-sm text-gray-400">All Major Areas</div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="w-5 h-5 text-orange-400 mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-white">Mon-Sun: 7AM-8PM</div>
                    <div className="text-sm text-gray-400">Flexible Hours</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Areas */}
            <div className="lg:col-span-1">
              <h4 className="text-xl font-bold mb-6 flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-orange-400" />
                Service Areas
              </h4>
              
              <div className="space-y-2">
                {serviceAreas.map((area) => (
                  <div key={area} className="flex items-center text-gray-300 hover:text-white transition-colors duration-300">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                    {area}
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="text-sm text-orange-400 font-medium mb-1">Not sure if we service your area?</div>
                <div className="text-sm text-gray-300">Call us - we're expanding coverage weekly!</div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1">
              <h4 className="text-xl font-bold mb-6">Quick Actions</h4>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-xl p-4 text-center">
                  <div className="text-sm font-medium mb-2">Get Instant Quote</div>
                  <Button variant="secondary" size="sm" className="bg-white text-orange-600 hover:bg-gray-50 w-full">
                  <Button variant="secondary" size="sm" className="w-full">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Online
                  </Button>
                </div>
                
                <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                  <div className="flex items-center text-sm mb-2">
                    <Star className="w-4 h-4 text-yellow-400 mr-2" />
                    <span className="text-yellow-400 font-medium">5-Star Service</span>
                  </div>
                  <div className="text-sm text-gray-300">
                    Join 5000+ satisfied customers who trust us with their spaces.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
              <div className="mb-4 md:mb-0">
                © {currentYear} Squeaky Kleaners. All rights reserved. ABN: 12 345 678 901
              </div>
              
              <div className="flex items-center space-x-6">
                <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
                <div className="flex items-center text-orange-400">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Licensed & Insured
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
  )
}