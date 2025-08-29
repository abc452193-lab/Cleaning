import React, { useState, useEffect } from 'react';
import { Calendar, Phone, MessageCircle, Clock, ArrowRight, Sparkles, CheckCircle, Zap } from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

export function FinalCTASection() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 45,
    seconds: 30
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else {
          return { hours: 23, minutes: 59, seconds: 59 }; // Reset
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900 relative overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-tl from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Main CTA Content */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-orange-500/20 text-orange-300 px-6 py-3 rounded-full text-sm font-medium mb-6 backdrop-blur-sm border border-orange-500/30">
            <Sparkles className="w-4 h-4 mr-2" />
            Limited Time: First Clean 20% Off
          </div>
          
          <h2 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Your Dream Home
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400 block">
              Awaits You
            </span>
          </h2>
          
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Stop spending your precious weekends cleaning. Start living your best life with 
            Sydney's most trusted premium cleaning service.
          </p>

          {/* Countdown Timer */}
          <div className="max-w-md mx-auto mb-12">
            <Card className="bg-gradient-to-r from-red-500 to-orange-500 text-white border-0 shadow-2xl">
              <div className="text-center">
                <div className="text-sm font-medium mb-2 opacity-90">Special Offer Ends In:</div>
                <div className="flex justify-center space-x-4 text-2xl font-bold">
                  <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
                    <div>{timeLeft.hours.toString().padStart(2, '0')}</div>
                    <div className="text-xs opacity-75">HRS</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
                    <div>{timeLeft.minutes.toString().padStart(2, '0')}</div>
                    <div className="text-xs opacity-75">MIN</div>
                  </div>
                  <div className="bg-white/20 rounded-lg p-3 backdrop-blur-sm">
                    <div>{timeLeft.seconds.toString().padStart(2, '0')}</div>
                    <div className="text-xs opacity-75">SEC</div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* CTA Options */}
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-8 mb-16">
          
          {/* Primary CTA */}
          <Card className="lg:col-span-2 bg-gradient-to-r from-orange-500 to-yellow-500 text-white border-0 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/50 to-yellow-600/50"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">Book Your First Clean</h3>
              <p className="text-xl mb-6 opacity-90">
                Same-day availability • 20% off first service • 100% satisfaction guarantee
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="secondary"
                  size="lg" 
                  className="flex-1"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Schedule Online
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white/10 flex-1"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now: (02) 8000 1234
                </Button>
              </div>
            </div>
          </Card>

          {/* Emergency Service */}
          <Card className="bg-gradient-to-br from-red-500 to-orange-600 text-white border-0 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full transform translate-x-12 -translate-y-12"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 rounded-full mb-4 flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Emergency Service</h3>
              <p className="mb-6 opacity-90">
                Need cleaning right now? Our emergency team is standing by.
              </p>
              <Button 
                variant="outline" 
                className="w-full border-white text-white hover:bg-white/10"
              >
                <Clock className="w-4 h-4 mr-2" />
                Emergency Clean
              </Button>
            </div>
          </Card>
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center text-white">
            <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <div className="text-sm opacity-75">No Contracts</div>
          </div>
          <div className="text-center text-white">
            <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <div className="text-sm opacity-75">Instant Booking</div>
          </div>
          <div className="text-center text-white">
            <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <div className="text-sm opacity-75">Eco-Friendly</div>
          </div>
          <div className="text-center text-white">
            <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <div className="text-sm opacity-75">Money-Back Guarantee</div>
          </div>
        </div>
      </div>
    </section>
  );
}