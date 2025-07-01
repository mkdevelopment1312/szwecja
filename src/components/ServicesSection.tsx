
import { Hammer, Home, Zap, Wrench, Brush, Building2 } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';

const services = [
  {
    icon: Home,
    titleKey: 'services.renovation',
    description: {
      pl: 'Kompleksowe remonty mieszkań, domów i biur. Modernizacja wnętrz zgodnie z najnowszymi trendami.',
      en: 'Complete renovation of apartments, houses and offices. Interior modernization according to the latest trends.',
      sv: 'Komplett renovering av lägenheter, hus och kontor. Modernisering av interiörer enligt de senaste trenderna.'
    }
  },
  {
    icon: Hammer,
    titleKey: 'services.construction',
    description: {
      pl: 'Budowa domów jednorodzinnych, dobudówki, rozbudowy. Pełen zakres usług budowlanych.',
      en: 'Construction of single-family houses, extensions, expansions. Full range of construction services.',
      sv: 'Byggande av enfamiljshus, tillbyggnader, utbyggnader. Fullständigt utbud av byggtjänster.'
    }
  },
  {
    icon: Building2,
    titleKey: 'services.roofing',
    description: {
      pl: 'Wymiana pokryć dachowych, remonty dachów, ocieplenia. Gwarancja szczelności na lata.',
      en: 'Roof covering replacement, roof repairs, insulation. Waterproofing guarantee for years.',
      sv: 'Byte av taktäckning, takreparationer, isolering. Täthetsgaranti för år framöver.'
    }
  },
  {
    icon: Zap,
    titleKey: 'services.electrical',
    description: {
      pl: 'Montaż instalacji elektrycznych, modernizacja rozdzielni, oświetlenie LED.',
      en: 'Electrical installation assembly, switchboard modernization, LED lighting.',
      sv: 'Montering av elinstallationer, modernisering av elcentraler, LED-belysning.'
    }
  },
  {
    icon: Wrench,
    titleKey: 'services.plumbing',
    description: {
      pl: 'Instalacje wodno-kanalizacyjne, grzewcze, montaż łazienek, hydraulika.',
      en: 'Water and sewage installations, heating, bathroom installation, plumbing.',
      sv: 'Vatten- och avloppsinstallationer, värme, badrumsinstallation, VVS.'
    }
  },
  {
    icon: Brush,
    titleKey: 'services.painting',
    description: {
      pl: 'Malowanie wnętrz i elewacji, tapetowanie, dekoracje ścienne, lakierowanie.',
      en: 'Interior and facade painting, wallpapering, wall decorations, varnishing.',
      sv: 'Målning av interiörer och fasader, tapetsering, väggdekorationer, lackering.'
    }
  }
];

export const ServicesSection = () => {
  const { t, language } = useLanguage();

  return (
    <section id="services" className="section-padding bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-6">
            {t('services.subtitle')}
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black text-gray-900 mb-6">
            {t('services.title')}
          </h2>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            {t('services.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="service-card group cursor-pointer border-0 overflow-hidden"
            >
              <CardHeader className="text-center pb-4">
                <div className="relative mx-auto w-20 h-20 mb-6">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-300"></div>
                  <div className="relative w-full h-full bg-white rounded-2xl flex items-center justify-center shadow-lg">
                    <service.icon className="w-10 h-10 text-emerald-600" />
                  </div>
                </div>
                
                <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                  {t(service.titleKey)}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="pt-0">
                <CardDescription className="text-gray-600 text-center leading-relaxed text-base">
                  {service.description[language]}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
