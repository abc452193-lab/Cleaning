import React, { useState, useEffect } from 'react';
import { Play, Phone, Calendar, CheckCircle, Clock, Star, ArrowRight } from 'lucide-react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { AnimatedCounter } from '../components/AnimatedCounter';

export function HeroSection() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [typedText, setTypedText] = useState('');
  const fullText = 'Your Space. Transformed. Guaranteed.';

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    let i = 0;
    const typeInterval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeInterval);
      }
    }, 100);

    return () => clearInterval(typeInterval);
  }, []);

  const nextAvailableTime = new Date();
  nextAvailableTime.setHours(nextAvailableTime.getHours() + 2, 30, 0, 0);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Video Background Effect */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900 via-blue-900 to-slate-900"></div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-orange-500/20 to-yellow-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-tl from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-128 h-128 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column - Hero Content */}
          <div className="text-white space-y-8">
            
            {/* Trust Badge */}
            <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-3 rounded-full">
              <div className="flex items-center mr-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="font-medium">Sydney's #1 Rated Service</span>
              <CheckCircle className="w-5 h-5 ml-2 text-green-400" />
            </div>
            
            {/* Animated Heading */}
            <div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
                <span className="block">{typedText}</span>
                <span className="w-1 h-16 bg-orange-400 inline-block animate-pulse ml-2"></span>
              </h1>
            </div>
            
            <p className="text-xl lg:text-2xl text-gray-200 leading-relaxed max-w-2xl">
              Experience <strong className="text-yellow-300">luxury cleaning</strong> that gives you 
              <strong className="text-orange-300"> 3+ hours every weekend back</strong>. 
              Join 5000+ Sydney families living their best life.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 py-8">
              <div className="text-center">
                <AnimatedCounter 
                  target={5247} 
                  suffix="+" 
                  className="text-3xl font-bold text-yellow-400 block" 
                />
                <p className="text-sm text-gray-300 mt-1">Happy Families</p>
              </div>
              <div className="text-center">
                <AnimatedCounter 
                  target={99} 
                  suffix="%" 
                  className="text-3xl font-bold text-yellow-400 block" 
                />
                <p className="text-sm text-gray-300 mt-1">Satisfaction</p>
              </div>
              <div className="text-center">
                <AnimatedCounter 
                  target={12} 
                  suffix=" Yrs" 
                  className="text-3xl font-bold text-yellow-400 block" 
                />
                <p className="text-sm text-gray-300 mt-1">Experience</p>
              </div>
              <div className="text-center">
                <AnimatedCounter 
                  target={24} 
                  suffix="h" 
                  className="text-3xl font-bold text-yellow-400 block" 
                />
                <p className="text-sm text-gray-300 mt-1">Response Time</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="xl" className="flex items-center shadow-2xl">
                <Calendar className="w-6 h-6 mr-3" />
                Book Same-Day Service
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button variant="outline" size="xl" className="flex items-center backdrop-blur-sm border-white/30 text-white hover:bg-white/10">
                <Play className="w-6 h-6 mr-3" />
                See Transformation
              </Button>
            </div>
          </div>

          {/* Right Column - Interactive Booking Widget */}
          <div className="relative">
            <Card className="bg-white/95 backdrop-blur-lg shadow-2xl border border-white/20 relative overflow-hidden">
              
              {/* Gradient Header */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-orange-500 to-yellow-500"></div>
              
              <div className="relative z-10">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Get Instant Quote</h3>
                  <p className="text-gray-600">Professional estimate in under 60 seconds</p>
                </div>

                <form className="space-y-5">
                  <div className="relative">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Service Type</label>
                    <select className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 appearance-none bg-white">
                      <option>Deep Clean Premium ⭐</option>
                      <option>Regular Maintenance</option>
                      <option>Commercial Office</option>
                      <option>Move In/Out Special</option>
                      <option>Eco-Luxury Package</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Bedrooms</label>
                      <select className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300">
                        <option>1 Bedroom</option>
                        <option>2 Bedrooms</option>
                        <option>3 Bedrooms</option>
                        <option>4+ Bedrooms</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Bathrooms</label>
                      <select className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300">
                        <option>1 Bathroom</option>
                        <option>2 Bathrooms</option>
                        <option>3+ Bathrooms</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Sydney Postcode</label>
                    <input 
                      type="text" 
                      placeholder="e.g. 2000, 2010, 2060..."
                      className="w-full p-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 placeholder-gray-400"
                    />
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-xl border border-green-200">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-700 mb-1">$189 - $299</div>
                      <div className="text-sm text-green-600">Estimated Range</div>
                    </div>
                  </div>

                  <Button className="w-full" size="lg">
                    <Calendar className="w-5 h-5 mr-2" />
                    Get My Free Quote Now
                  </Button>
                </form>

                {/* Live Availability Display */}
                <div className="mt-6 p-5 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl border-2 border-cyan-200">
                  <div className="flex items-center justify-center text-sm text-cyan-700 mb-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="font-semibold">Next Available Slot</span>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-cyan-900">
                      Today at {nextAvailableTime.toLocaleTimeString('en-AU', { 
                        hour: 'numeric', 
                        minute: '2-digit',
                        hour12: true 
                      })}
                    </div>
                    <div className="text-xs text-cyan-600 mt-1">
                      ⚡ Same-day booking available
                    </div>
                  </div>
                </div>

                {/* Emergency Contact */}
                <div className="mt-5 text-center p-4 bg-orange-50 rounded-xl border border-orange-200">
                  <div className="flex items-center justify-center text-sm text-orange-700 mb-2">
                    <Phone className="w-4 h-4 mr-2" />
                    <span className="font-medium">Need immediate service?</span>
                  </div>
                  <a 
                    href="tel:0280001234" 
                    className="text-xl font-bold text-orange-600 hover:text-orange-700 transition-colors duration-300 flex items-center justify-center"
                  >
                    (02) 8000 1234
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </a>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Floating Activity Indicators */}
      <div className="absolute bottom-12 left-8 hidden lg:block">
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
          <div className="text-white text-sm">
            <div className="font-semibold flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              Live Activity
            </div>
            <div className="text-yellow-300">3 bookings in the last hour</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="text-white text-center animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center mb-2">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
          <div className="text-xs opacity-75">Scroll to explore</div>
        </div>
      </div>
    </section>
  );
}