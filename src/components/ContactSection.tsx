
import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Send, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/hooks/useLanguage';
import { useToast } from '@/hooks/use-toast';

export const ContactSection = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    toast({
      title: language === 'pl' ? 'Wiadomość wysłana!' : language === 'en' ? 'Message sent!' : 'Meddelande skickat!',
      description: language === 'pl' ? 'Skontaktujemy się z Tobą wkrótce.' : language === 'en' ? 'We will contact you soon.' : 'Vi kommer att kontakta dig snart.',
    });
    
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-6">
            {t('nav.contact')}
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-construction-900 mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-construction-900">
                  {t('contact.info')}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-construction-500 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-construction-900">
                      {t('contact.phone')}
                    </p>
                    <a href="tel:+46123456789" className="text-construction-600 hover:text-construction-700">
                      +46 123 456 789
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-construction-500 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-construction-900">Email</p>
                    <a href="mailto:kontakt@byggexpert.se" className="text-construction-600 hover:text-construction-700">
                      kontakt@byggexpert.se
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-construction-500 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-construction-900">
                      {t('contact.address')}
                    </p>
                    <p className="text-construction-600">
                      Byggvägen 123<br />
                      123 45 Stockholm, Sverige
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-construction-900">WhatsApp</p>
                    <a 
                      href="https://wa.me/46123456789" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700"
                    >
                      +46 123 456 789
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-construction-500 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-medium text-construction-900">
                      {t('contact.hours')}
                    </p>
                    <p className="text-construction-600">
                      {t('contact.hours.time')}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Google Maps */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-0">
                <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2034.9845737473456!2d18.065430915901937!3d59.334591919476115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f763119640bcb%3A0xa80d27d3679d7766!2sStockholm%2C%20Sweden!5e0!3m2!1sen!2sus!4v1635787194469!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="ByggExpert Location"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-construction-900">
                {t('contact.form.title')}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder={t('contact.form.name')}
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder={t('contact.form.email')}
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full"
                  />
                </div>
                
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder={t('contact.form.phone')}
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full"
                  />
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    placeholder={t('contact.form.message')}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-construction-500 hover:bg-construction-600 text-white"
                  size="lg"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {t('contact.form.send')}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
