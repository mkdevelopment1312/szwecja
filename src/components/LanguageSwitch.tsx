
import { Globe } from 'lucide-react';
import { useLanguage, Language } from '@/hooks/useLanguage';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

const languages = [
  { code: 'sv' as Language, name: 'Svenska', flag: '🇸🇪' },
  { code: 'pl' as Language, name: 'Polski', flag: '🇵🇱' },
  { code: 'en' as Language, name: 'English', flag: '🇬🇧' },
];

export const LanguageSwitch = () => {
  const { language, changeLanguage } = useLanguage();
  
  const currentLanguage = languages.find(lang => lang.code === language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
          <Globe className="w-4 h-4 mr-2" />
          {currentLanguage?.flag} {currentLanguage?.code.toUpperCase()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white border border-gray-200 shadow-lg z-50">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => changeLanguage(lang.code)}
            className={`cursor-pointer hover:bg-gray-100 ${
              language === lang.code ? 'bg-gray-50 font-medium' : ''
            }`}
          >
            <span className="mr-2">{lang.flag}</span>
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
