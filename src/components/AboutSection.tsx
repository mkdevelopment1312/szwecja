
import { Award, Users, Clock, ThumbsUp, Shield, Lightbulb } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';

const features = [
  {
    icon: Award,
    titleKey: 'about.experience',
    description: {
      pl: 'Dwie dekady w branży budowlanej, setki zadowolonych klientów i niezliczona ilość udanych projektów.',
      en: 'Two decades in the construction industry, hundreds of satisfied customers and countless successful projects.',
      sv: 'Två decennier i byggbranschen, hundratals nöjda kunder och otaliga framgångsrika projekt.'
    }
  },
  {
    icon: Users,
    titleKey: 'about.projects',
    description: {
      pl: 'Od małych remontów po duże inwestycje - każdy projekt realizujemy z równą starannością i profesjonalizmem.',
      en: 'From small renovations to large investments - we carry out each project with equal care and professionalism.',
      sv: 'Från små renoveringar till stora investeringar - vi genomför varje projekt med samma omsorg och professionalism.'
    }
  },
  {
    icon: Clock,
    titleKey: 'about.hours',
    description: {
      pl: 'Ponad 100 tysięcy godzin doświadczenia praktycznego w każdym aspekcie budownictwa i remontów.',
      en: 'Over 100 thousand hours of practical experience in every aspect of construction and renovation.',
      sv: 'Över 100 tusen timmar av praktisk erfarenhet inom alla aspekter av byggande och renovering.'
    }
  },
  {
    icon: ThumbsUp,
    titleKey: 'about.satisfaction',
    description: {
      pl: 'Zadowolenie klientów to nasz priorytet. Dbamy o każdy detal i zawsze dotrzymujemy terminów.',
      en: 'Customer satisfaction is our priority. We take care of every detail and always meet deadlines.',
      sv: 'Kundnöjdhet är vår prioritet. Vi tar hand om varje detalj och håller alltid deadlines.'
    }
  },
  {
    icon: Shield,
    titleKey: 'features.insurance',
    description: {
      pl: 'Wszystkie nasze prace są w pełni ubezpieczone. Gwarantujemy bezpieczeństwo i jakość.',
      en: 'All our work is fully insured. We guarantee safety and quality.',
      sv: 'Allt vårt arbete är fullt försäkrat. Vi garanterar säkerhet och kvalitet.'
    }
  },
  {
    icon: Lightbulb,
    titleKey: 'features.innovation',
    description: {
      pl: 'Stosujemy najnowsze technologie i materiały ekologiczne dla lepszej przyszłości.',
      en: 'We use the latest technologies and eco-friendly materials for a better future.',
      sv: 'Vi använder den senaste tekniken och miljövänliga material för en bättre framtid.'
    }
  }
];

export const AboutSection = () => {
  const { t, language } = useLanguage();

  return (
    <section id="about" className="py-20 bg-construction-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-6">
            {t('services.subtitle')}
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-construction-900 mb-4">
            {t('about.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            {t('about.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md bg-white"
            >
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-construction-500 rounded-full flex items-center justify-center mb-4 group-hover:bg-construction-600 transition-colors">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-construction-900">
                  {t(feature.titleKey)}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  {feature.description[language]}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Company Stats */}
        <div className="mt-20 bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-construction-500 mb-2">20+</div>
              <div className="text-gray-600">
                {t('stats.experience')}
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-construction-500 mb-2">500+</div>
              <div className="text-gray-600">
                {t('stats.projects')}
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-construction-500 mb-2">100k+</div>
              <div className="text-gray-600">
                {t('stats.hours')}
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-construction-500 mb-2">99%</div>
              <div className="text-gray-600">
                {t('stats.satisfaction')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
