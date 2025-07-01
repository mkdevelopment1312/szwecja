
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

export const Footer = () => {
  const { t, language } = useLanguage();

  return (
    <footer className="bg-construction-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold mb-4">
              <span className="text-construction-400">Bygg</span>Expert
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              {t('footer.description')}
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="tel:+46123456789"
                className="flex items-center text-gray-300 hover:text-construction-400 transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                +46 123 456 789
              </a>
              <a 
                href="https://wa.me/46123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-green-400 transition-colors"
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-construction-400">
              {t('nav.services')}
            </h3>
            <ul className="space-y-2 text-gray-300">
              <li>{t('services.renovation')}</li>
              <li>{t('services.construction')}</li>
              <li>{t('services.roofing')}</li>
              <li>{t('services.electrical')}</li>
              <li>{t('services.plumbing')}</li>
              <li>{t('services.painting')}</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-construction-400">
              {t('nav.contact')}
            </h3>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-2 mt-1 flex-shrink-0" />
                <div>
                  <p>Byggvägen 123</p>
                  <p>123 45 Stockholm</p>
                  <p>Sverige</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                <a href="tel:+46123456789" className="hover:text-construction-400 transition-colors">
                  +46 123 456 789
                </a>
              </div>
              
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                <a href="mailto:kontakt@byggexpert.se" className="hover:text-construction-400 transition-colors">
                  kontakt@byggexpert.se
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2025 ByggExpert. {t('footer.copyright')} <span className="text-construction-400 font-medium">Kamil Maślanka</span>
            </div>
            
            <div className="flex space-x-6 mt-4 md:mt-0">
              <div className="text-gray-400 text-sm">
                {t('footer.license')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
