
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/hooks/useLanguage';

const projects = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&fit=crop&crop=center',
    title: {
      pl: 'Nowoczesny Dom Jednorodzinny',
      en: 'Modern Single-Family House',
      sv: 'Modernt Enfamiljshus'
    },
    location: 'Stockholm',
    category: {
      pl: 'Budownictwo',
      en: 'Construction',
      sv: 'Byggande'
    },
    year: '2023'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&h=400&fit=crop&crop=center',
    title: {
      pl: 'Renowacja Mieszkania',
      en: 'Apartment Renovation',
      sv: 'Lägenhetsdäckning'
    },
    location: 'Göteborg',
    category: {
      pl: 'Remont',
      en: 'Renovation',
      sv: 'Renovering'
    },
    year: '2023'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop&crop=center',
    title: {
      pl: 'Rozbudowa Domu',
      en: 'House Extension',
      sv: 'Husutbyggnad'
    },
    location: 'Malmö',
    category: {
      pl: 'Rozbudowa',
      en: 'Extension',
      sv: 'Tillbyggnad'
    },
    year: '2022'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=600&h=400&fit=crop&crop=center',
    title: {
      pl: 'Nowoczesna Kuchnia',
      en: 'Modern Kitchen',
      sv: 'Modernt Kök'
    },
    location: 'Uppsala',
    category: {
      pl: 'Wnętrza',
      en: 'Interior',
      sv: 'Interiör'
    },
    year: '2023'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&h=400&fit=crop&crop=center',
    title: {
      pl: 'Luksusowa Łazienka',
      en: 'Luxury Bathroom',
      sv: 'Lyxigt Badrum'
    },
    location: 'Västerås',
    category: {
      pl: 'Łazienka',
      en: 'Bathroom',
      sv: 'Badrum'
    },
    year: '2022'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&crop=center',
    title: {
      pl: 'Biuro Nowoczesne',
      en: 'Modern Office',
      sv: 'Modernt Kontor'
    },
    location: 'Linköping',
    category: {
      pl: 'Komercyjne',
      en: 'Commercial',
      sv: 'Kommersiell'
    },
    year: '2023'
  }
];

export const ProjectsSection = () => {
  const { t, language } = useLanguage();

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-6">
            Portfolio
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-construction-900 mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('projects.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id} 
              className="group overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-md"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title[language]}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-construction-500 text-white">
                    {project.category[language]}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-white/90">
                    {project.year}
                  </Badge>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-construction-900 mb-2">
                  {project.title[language]}
                </h3>
                <p className="text-gray-600">
                  📍 {project.location}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600">
            {t('projects.more')}
          </p>
        </div>
      </div>
    </section>
  );
};
