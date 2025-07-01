
import { ArrowRight, Phone, MessageCircle, Star, Users, Clock, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/hooks/useLanguage';

export const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="absolute inset-0 hero-overlay"></div>
      <div className="absolute inset-0 construction-pattern"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="text-white space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
                  <Star className="w-4 h-4 text-yellow-400 mr-2" />
                  <span className="text-sm font-medium">{t('services.subtitle')}</span>
                </div>
                
                <h1 className="text-5xl md:text-7xl font-black leading-tight animate-fade-in">
                  <span className="block">{t('hero.title')}</span>
                  <span className="block text-green-300 mt-2">w Szwecji</span>
                </h1>
                
                <p className="text-xl md:text-2xl text-gray-200 max-w-2xl leading-relaxed animate-fade-in" style={{ animationDelay: '0.2s' }}>
                  {t('hero.subtitle')}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <Button 
                  size="lg" 
                  onClick={scrollToContact}
                  className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold group shadow-xl"
                >
                  {t('hero.cta')}
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <div className="flex gap-3">
                  <Button 
                    size="lg" 
                    variant="outline"
                    asChild
                    className="glass-effect text-white hover:bg-white/20 border-white/30 px-6 py-6"
                  >
                    <a href="tel:+46123456789">
                      <Phone className="w-5 h-5 mr-2" />
                      {t('hero.phone')}
                    </a>
                  </Button>
                  
                  <Button 
                    size="lg" 
                    variant="outline"
                    asChild
                    className="bg-green-600/20 border-green-400/40 text-white hover:bg-green-600/30 backdrop-blur-sm px-6 py-6"
                  >
                    <a href="https://wa.me/46123456789" target="_blank" rel="noopener noreferrer">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      WhatsApp
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Right Column - Stats Cards */}
            <div className="grid grid-cols-2 gap-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              <div className="glass-effect p-6 rounded-2xl text-center">
                <div className="w-12 h-12 bg-green-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-6 h-6 text-emerald-900" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">20+</div>
                <div className="text-gray-300 text-sm">{t('hero.stats.experience')}</div>
              </div>

              <div className="glass-effect p-6 rounded-2xl text-center">
                <div className="w-12 h-12 bg-green-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-emerald-900" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-gray-300 text-sm">{t('hero.stats.projects')}</div>
              </div>

              <div className="glass-effect p-6 rounded-2xl text-center">
                <div className="w-12 h-12 bg-green-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-emerald-900" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">100k+</div>
                <div className="text-gray-300 text-sm">{t('hero.stats.hours')}</div>
              </div>

              <div className="glass-effect p-6 rounded-2xl text-center">
                <div className="w-12 h-12 bg-green-400 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-6 h-6 text-emerald-900" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">99%</div>
                <div className="text-gray-300 text-sm">{t('hero.stats.satisfaction')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
