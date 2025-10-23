import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: "Code2",
      title: "Веб-разработка",
      description: "Создаем современные веб-приложения с использованием передовых технологий и фреймворков"
    },
    {
      icon: "Smartphone",
      title: "Мобильные приложения",
      description: "Разрабатываем кроссплатформенные мобильные решения для iOS и Android"
    },
    {
      icon: "Database",
      title: "Системы управления",
      description: "Проектируем и внедряем корпоративные системы и CRM для автоматизации бизнеса"
    },
    {
      icon: "Cloud",
      title: "Облачные решения",
      description: "Миграция в облако и разработка облачных сервисов на базе ведущих платформ"
    },
    {
      icon: "Shield",
      title: "Информационная безопасность",
      description: "Обеспечиваем защиту данных и соответствие требованиям безопасности"
    },
    {
      icon: "Headphones",
      title: "Техподдержка",
      description: "Круглосуточная поддержка и сопровождение разработанных решений"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <h1 className="text-2xl font-heading font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Новология
            </h1>
            <div className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection('hero')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Главная
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                О компании
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Услуги
              </button>
              <button 
                onClick={() => scrollToSection('contacts')}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Контакты
              </button>
            </div>
            <Button 
              onClick={() => scrollToSection('contacts')}
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
            >
              Связаться
            </Button>
          </nav>
        </div>
      </header>

      <section id="hero" className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl md:text-6xl font-heading font-bold mb-6 leading-tight">
                Инновационные{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  IT-решения
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Разрабатываем программное обеспечение с упором на веб-технологии. 
                Превращаем идеи в цифровые решения, которые работают.
              </p>
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection('services')}
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg"
                >
                  Наши услуги
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => scrollToSection('about')}
                  className="border-2 text-lg"
                >
                  О компании
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <img 
                src="https://cdn.poehali.dev/projects/65337a36-d1fa-45d8-a3d2-c123d8c18cdb/files/59449f6c-5f64-437d-9a98-3491b44799ff.jpg" 
                alt="Technology" 
                className="relative rounded-3xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-gradient-to-b from-muted/30 to-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/65337a36-d1fa-45d8-a3d2-c123d8c18cdb/files/abb9ca7d-4e1b-42db-beb3-836d0a670a4a.jpg" 
                alt="Development" 
                className="rounded-3xl shadow-xl w-full"
              />
            </div>
            <div>
              <h2 className="text-4xl font-heading font-bold mb-6">
                О компании{" "}
                <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Новология
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Мы — команда профессионалов, специализирующихся на разработке 
                современного программного обеспечения. Наш главный фокус — 
                веб-технологии и инновационные цифровые решения.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                    <Icon name="Rocket" className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">Инновационный подход</h3>
                    <p className="text-muted-foreground">
                      Используем передовые технологии и методологии разработки
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center flex-shrink-0">
                    <Icon name="Users" className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">Клиентоориентированность</h3>
                    <p className="text-muted-foreground">
                      Глубоко погружаемся в бизнес-задачи каждого клиента
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0">
                    <Icon name="Award" className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg mb-2">Качество и надежность</h3>
                    <p className="text-muted-foreground">
                      Гарантируем высокое качество кода и стабильность решений
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Наши{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                услуги
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр услуг по разработке программного обеспечения для вашего бизнеса
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={service.icon as any} className="text-white" size={28} />
                  </div>
                  <h3 className="font-heading font-semibold text-xl mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Свяжитесь{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                с нами
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Готовы обсудить ваш проект? Мы всегда на связи!
            </p>
          </div>

          <Card className="border-2">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                      <Icon name="Mail" className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg mb-1">Email</h3>
                      <a href="mailto:info@novologia.ru" className="text-primary hover:underline">
                        info@novologia.ru
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-secondary to-accent flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg mb-1">Телефон</h3>
                      <a href="tel:+78001234567" className="text-primary hover:underline">
                        +7 (800) 123-45-67
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0">
                      <Icon name="MapPin" className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold text-lg mb-1">Адрес</h3>
                      <p className="text-muted-foreground">
                        г. Москва, ул. Инновационная, д. 42
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 flex flex-col justify-center">
                  <h3 className="font-heading font-semibold text-xl mb-4">Время работы</h3>
                  <div className="space-y-2 text-muted-foreground">
                    <p className="flex justify-between">
                      <span>Пн - Пт:</span>
                      <span className="font-medium text-foreground">9:00 - 18:00</span>
                    </p>
                    <p className="flex justify-between">
                      <span>Сб - Вс:</span>
                      <span className="font-medium text-foreground">Выходной</span>
                    </p>
                  </div>
                  <div className="mt-6 pt-6 border-t">
                    <p className="text-sm text-muted-foreground mb-3">Следите за нами в соцсетях:</p>
                    <div className="flex gap-3">
                      <button className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center hover:scale-110 transition-transform">
                        <Icon name="Github" className="text-white" size={20} />
                      </button>
                      <button className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary to-accent flex items-center justify-center hover:scale-110 transition-transform">
                        <Icon name="Linkedin" className="text-white" size={20} />
                      </button>
                      <button className="w-10 h-10 rounded-lg bg-gradient-to-br from-accent to-primary flex items-center justify-center hover:scale-110 transition-transform">
                        <Icon name="Twitter" className="text-white" size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 border-t bg-muted/30">
        <div className="container mx-auto text-center">
          <p className="text-muted-foreground">
            © 2024 Новология. Все права защищены.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
