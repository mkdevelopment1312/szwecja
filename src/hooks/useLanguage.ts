
import { useState, useEffect } from 'react';

export type Language = 'pl' | 'en' | 'sv';

interface Translations {
  [key: string]: {
    pl: string;
    en: string;
    sv: string;
  };
}

export const translations: Translations = {
  // Navigation
  'nav.home': {
    pl: 'Strona główna',
    en: 'Home',
    sv: 'Hem'
  },
  'nav.services': {
    pl: 'Usługi',
    en: 'Services',
    sv: 'Tjänster'
  },
  'nav.projects': {
    pl: 'Projekty',
    en: 'Projects',
    sv: 'Projekt'
  },
  'nav.about': {
    pl: 'O nas',
    en: 'About us',
    sv: 'Om oss'
  },
  'nav.contact': {
    pl: 'Kontakt',
    en: 'Contact',
    sv: 'Kontakt'
  },

  // Hero Section
  'hero.title': {
    pl: 'Profesjonalne Usługi Budowlane',
    en: 'Professional Construction Services',
    sv: 'Professionella Byggtjänster'
  },
  'hero.subtitle': {
    pl: 'Ponad 20 lat doświadczenia, 500+ projektów, 100 000+ przepracowanych godzin. Realizujemy Twoje marzenia budowlane.',
    en: 'Over 20 years of experience, 500+ projects, 100,000+ hours worked. We make your construction dreams come true.',
    sv: 'Över 20 års erfarenhet, 500+ projekt, 100 000+ arbetstimmar. Vi förverkligar dina byggdrömmar.'
  },
  'hero.cta': {
    pl: 'Bezpłatna Wycena',
    en: 'Free Quote',
    sv: 'Gratis Offert'
  },
  'hero.phone': {
    pl: 'Zadzwoń teraz',
    en: 'Call now',
    sv: 'Ring nu'
  },
  'hero.stats.experience': {
    pl: 'År erfarenhet',
    en: 'Years experience',
    sv: 'År erfarenhet'
  },
  'hero.stats.projects': {
    pl: 'Projekt',
    en: 'Projects',
    sv: 'Projekt'
  },
  'hero.stats.hours': {
    pl: 'Arbetstimmar',
    en: 'Working hours',
    sv: 'Arbetstimmar'
  },
  'hero.stats.satisfaction': {
    pl: 'Nöjda kunder',
    en: 'Satisfied customers',
    sv: 'Nöjda kunder'
  },

  // Services
  'services.title': {
    pl: 'Nasze Usługi Budowlane',
    en: 'Our Construction Services',
    sv: 'Våra Byggtjänster'
  },
  'services.subtitle': {
    pl: 'Nasze Specjalizacje',
    en: 'Our Specialties',
    sv: 'Våra Specialiteter'
  },
  'services.description': {
    pl: 'Oferujemy kompleksowe usługi budowlane najwyższej jakości. Nasze doświadczenie i profesjonalizm gwarantują sukces każdego projektu.',
    en: 'We offer comprehensive construction services of the highest quality. Our experience and professionalism guarantee the success of every project.',
    sv: 'Vi erbjuder omfattande byggtjänster av högsta kvalitet. Vår erfarenhet och professionalitet garanterar framgång för varje projekt.'
  },
  'services.renovation': {
    pl: 'Remonty i Renowacje',
    en: 'Renovations & Remodeling',
    sv: 'Renovering & Ombyggnad'
  },
  'services.construction': {
    pl: 'Budownictwo Ogólne',
    en: 'General Construction',
    sv: 'Allmän Byggverksamhet'
  },
  'services.roofing': {
    pl: 'Prace Dekarskie',
    en: 'Roofing Services',
    sv: 'Taktjänster'
  },
  'services.electrical': {
    pl: 'Instalacje Elektryczne',
    en: 'Electrical Installation',
    sv: 'Elinstallation'
  },
  'services.plumbing': {
    pl: 'Instalacje Hydrauliczne',
    en: 'Plumbing Services',
    sv: 'VVS-tjänster'
  },
  'services.painting': {
    pl: 'Malowanie i Tapetowanie',
    en: 'Painting & Wallpapering',
    sv: 'Målning & Tapetsering'
  },

  // Projects
  'projects.title': {
    pl: 'Nasze Realizacje',
    en: 'Our Projects',
    sv: 'Våra Projekt'
  },
  'projects.description': {
    pl: 'Sprawdź nasze najnowsze realizacje. Każdy projekt to unikalne wyzwanie, które podejmujemy z pełnym zaangażowaniem.',
    en: 'Check out our latest projects. Each project is a unique challenge that we undertake with full commitment.',
    sv: 'Kolla in våra senaste projekt. Varje projekt är en unik utmaning som vi tar oss an med fullt engagemang.'
  },
  'projects.more': {
    pl: 'I wiele więcej projektów w naszym portfolio!',
    en: 'And many more projects in our portfolio!',
    sv: 'Och många fler projekt i vår portfölj!'
  },

  // About
  'about.title': {
    pl: 'Dlaczego Wybierają Nas',
    en: 'Why Choose Us',
    sv: 'Varför Välja Oss'
  },
  'about.description': {
    pl: 'Jesteśmy zespołem doświadczonych profesjonalistów, którzy z pasją realizują marzenia budowlane naszych klientów. Nasze wieloletnie doświadczenie, nowoczesne podejście i dbałość o detale sprawiają, że każdy projekt staje się sukcesem.',
    en: 'We are a team of experienced professionals who passionately realize the construction dreams of our clients. Our years of experience, modern approach and attention to detail make every project a success.',
    sv: 'Vi är ett team av erfarna proffs som passionerat förverkligar våra kunders byggdrömmar. Vår mångåriga erfarenhet, moderna approach och uppmärksamhet på detaljer gör varje projekt till en framgång.'
  },
  'about.experience': {
    pl: '20+ Lat Doświadczenia',
    en: '20+ Years Experience',
    sv: '20+ År Erfarenhet'
  },
  'about.projects': {
    pl: '500+ Ukończonych Projektów',
    en: '500+ Completed Projects',
    sv: '500+ Slutförda Projekt'
  },
  'about.hours': {
    pl: '100 000+ Godzin Pracy',
    en: '100,000+ Working Hours',
    sv: '100 000+ Arbetstimmar'
  },
  'about.satisfaction': {
    pl: '99% Zadowolonych Klientów',
    en: '99% Customer Satisfaction',
    sv: '99% Nöjda Kunder'
  },

  // Contact
  'contact.title': {
    pl: 'Skontaktuj się z nami',
    en: 'Contact Us',
    sv: 'Kontakta Oss'
  },
  'contact.description': {
    pl: 'Gotowy na realizację swojego projektu? Skontaktuj się z nami już dziś!',
    en: 'Ready to realize your project? Contact us today!',
    sv: 'Redo att förverkliga ditt projekt? Kontakta oss idag!'
  },
  'contact.info': {
    pl: 'Informacje kontaktowe',
    en: 'Contact information',
    sv: 'Kontaktinformation'
  },
  'contact.form.title': {
    pl: 'Wyślij nam wiadomość',
    en: 'Send us a message',
    sv: 'Skicka oss ett meddelande'
  },
  'contact.form.name': {
    pl: 'Imię i nazwisko',
    en: 'Full name',
    sv: 'Fullständigt namn'
  },
  'contact.form.email': {
    pl: 'Adres e-mail',
    en: 'Email address',
    sv: 'E-postadress'
  },
  'contact.form.phone': {
    pl: 'Numer telefonu',
    en: 'Phone number',
    sv: 'Telefonnummer'
  },
  'contact.form.message': {
    pl: 'Wiadomość',
    en: 'Message',
    sv: 'Meddelande'
  },
  'contact.form.send': {
    pl: 'Wyślij wiadomość',
    en: 'Send message',
    sv: 'Skicka meddelande'
  },
  'contact.phone': {
    pl: 'Telefon',
    en: 'Phone',
    sv: 'Telefon'
  },
  'contact.address': {
    pl: 'Adres',
    en: 'Address',
    sv: 'Adress'
  },
  'contact.hours': {
    pl: 'Godziny pracy',
    en: 'Working hours',
    sv: 'Öppettider'
  },
  'contact.hours.time': {
    pl: 'Pon-Pią: 7:00 - 16:00',
    en: 'Mon-Fri: 7:00 - 16:00',
    sv: 'Mån-Fre: 7:00 - 16:00'
  },

  // Footer
  'footer.description': {
    pl: 'Profesjonalne usługi budowlane w Szwecji. Ponad 20 lat doświadczenia w realizacji marzeń budowlanych naszych klientów.',
    en: 'Professional construction services in Sweden. Over 20 years of experience in realizing our clients\' construction dreams.',
    sv: 'Professionella byggtjänster i Sverige. Över 20 års erfarenhet av att förverkliga våra kunders byggdrömmar.'
  },
  'footer.license': {
    pl: 'Licencja budowlana: SE-BUILD-2024',
    en: 'Building license: SE-BUILD-2024',
    sv: 'Bygglicens: SE-BUILD-2024'
  },
  'footer.copyright': {
    pl: 'Wszelkie prawa zastrzeżone. Zaprojektowane przez',
    en: 'All rights reserved. Designed by',
    sv: 'Alla rättigheter förbehållna. Designad av'
  },

  // Stats
  'stats.experience': {
    pl: 'Lat doświadczenia',
    en: 'Years of experience',
    sv: 'År av erfarenhet'
  },
  'stats.projects': {
    pl: 'Ukończonych projektów',
    en: 'Completed projects',
    sv: 'Slutförda projekt'
  },
  'stats.hours': {
    pl: 'Godzin pracy',
    en: 'Working hours',
    sv: 'Arbetstimmar'
  },
  'stats.satisfaction': {
    pl: 'Zadowolonych klientów',
    en: 'Satisfied customers',
    sv: 'Nöjda kunder'
  },

  // Additional
  'features.insurance': {
    pl: 'Pełne Ubezpieczenie',
    en: 'Full Insurance',
    sv: 'Full Försäkring'
  },
  'features.innovation': {
    pl: 'Innowacyjne Rozwiązania',
    en: 'Innovative Solutions',
    sv: 'Innovativa Lösningar'
  }
};

export const useLanguage = () => {
  const [language, setLanguage] = useState<Language>('sv');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && ['pl', 'en', 'sv'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('language', newLanguage);
  };

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return { language, changeLanguage, t };
};
