
import { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageSwitch } from '@/components/LanguageSwitch';
import { useLanguage } from '@/hooks/useLanguage';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg border-b border-gray-200/50 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className={`text-2xl font-black transition-colors ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}>
              <span className={isScrolled ? 'text-emerald-600' : 'text-green-300'}>Bygg</span>Expert
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {['home', 'services', 'projects', 'about', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`text-sm font-medium transition-colors hover:text-emerald-500 ${
                  isScrolled ? 'text-gray-700' : 'text-white'
                }`}
              >
                {t(`nav.${item}`)}
              </button>
            ))}
          </div>

          {/* Right Side */}
          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSwitch />
            
            <div className="flex items-center space-x-2">
              <Button
                variant="ghost"
                size="sm"
                asChild
                className={`${isScrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-white hover:text-green-300'}`}
              >
                <a href="tel:+46123456789">
                  <Phone className="w-4 h-4 mr-2" />
                  +46 123 456 789
                </a>
              </Button>
              
              <Button
                size="sm"
                asChild
                className="bg-emerald-600 hover:bg-emerald-700 text-white"
              >
                <a href="https://wa.me/46123456789" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            }`}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-200">
            <div className="px-6 py-4 space-y-4">
              {['home', 'services', 'projects', 'about', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left py-2 text-gray-700 hover:text-emerald-600 font-medium"
                >
                  {t(`nav.${item}`)}
                </button>
              ))}
              
              <div className="pt-4 border-t border-gray-200">
                <LanguageSwitch />
              </div>
              
              <div className="flex flex-col space-y-2 pt-2">
                <Button variant="outline" size="sm" asChild>
                  <a href="tel:+46123456789">
                    <Phone className="w-4 h-4 mr-2" />
                    +46 123 456 789
                  </a>
                </Button>
                
                <Button size="sm" asChild className="bg-emerald-600 hover:bg-emerald-700">
                  <a href="https://wa.me/46123456789" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
