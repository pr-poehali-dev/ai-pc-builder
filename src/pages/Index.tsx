import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [aiInput, setAiInput] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [selectedBuild, setSelectedBuild] = useState<string | null>(null);

  const handleAIGenerate = async () => {
    setIsGenerating(true);
    setProgress(0);
    
    // Simulate AI generation process
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsGenerating(false);
          return 100;
        }
        return prev + 20;
      });
    }, 500);
  };

  const preBuilds = [
    // Gaming builds (10)
    {
      id: 'gaming-ultimate',
      title: 'Gaming Ultimate',
      description: 'Топовая игровая сборка для 4K 144Hz',
      price: '₽249,999',
      cpu: 'Intel i9-14900K',
      gpu: 'RTX 4090',
      ram: '64GB DDR5',
      storage: '2TB NVMe Gen5',
      category: 'gaming'
    },
    {
      id: 'gaming-pro',
      title: 'Gaming Pro',
      description: 'Высокопроизводительная сборка для игр в 4K',
      price: '₽169,999',
      cpu: 'Intel i7-13700K',
      gpu: 'RTX 4080 Super',
      ram: '32GB DDR5',
      storage: '1TB NVMe SSD',
      category: 'gaming'
    },
    {
      id: 'gaming-enthusiast',
      title: 'Gaming Enthusiast',
      description: 'Премиум игровая сборка для киберспорта',
      price: '₽134,999',
      cpu: 'AMD Ryzen 7 7800X3D',
      gpu: 'RTX 4070 Ti Super',
      ram: '32GB DDR5',
      storage: '1TB NVMe SSD',
      category: 'gaming'
    },
    {
      id: 'gaming-performance',
      title: 'Gaming Performance',
      description: 'Отличная производительность в 1440p',
      price: '₽99,999',
      cpu: 'Intel i5-13600K',
      gpu: 'RTX 4070',
      ram: '32GB DDR5',
      storage: '1TB NVMe SSD',
      category: 'gaming'
    },
    {
      id: 'gaming-solid',
      title: 'Gaming Solid',
      description: 'Стабильный гейминг в высоких настройках',
      price: '₽84,999',
      cpu: 'AMD Ryzen 5 7600X',
      gpu: 'RTX 4060 Ti',
      ram: '16GB DDR5',
      storage: '1TB NVMe SSD',
      category: 'gaming'
    },
    {
      id: 'gaming-mid',
      title: 'Gaming Mid',
      description: 'Средний класс для современных игр',
      price: '₽69,999',
      cpu: 'Intel i5-12600K',
      gpu: 'RTX 4060',
      ram: '16GB DDR4',
      storage: '500GB NVMe SSD',
      category: 'gaming'
    },
    {
      id: 'gaming-esports',
      title: 'Gaming Esports',
      description: 'Специально для киберспортивных дисциплин',
      price: '₽79,999',
      cpu: 'AMD Ryzen 5 5600X',
      gpu: 'RTX 4060 Ti',
      ram: '16GB DDR4',
      storage: '500GB NVMe SSD',
      category: 'gaming'
    },
    {
      id: 'gaming-streaming',
      title: 'Gaming + Streaming',
      description: 'Игры плюс стриминг без потери FPS',
      price: '₽114,999',
      cpu: 'AMD Ryzen 7 7700X',
      gpu: 'RTX 4070',
      ram: '32GB DDR5',
      storage: '1TB NVMe SSD',
      category: 'gaming'
    },
    {
      id: 'gaming-amd',
      title: 'Gaming AMD Build',
      description: 'Полная сборка на AMD компонентах',
      price: '₽89,999',
      cpu: 'AMD Ryzen 7 5700X',
      gpu: 'RX 7700 XT',
      ram: '32GB DDR4',
      storage: '1TB NVMe SSD',
      category: 'gaming'
    },
    {
      id: 'gaming-compact',
      title: 'Gaming Compact',
      description: 'Компактная игровая сборка в Mini-ITX',
      price: '₽94,999',
      cpu: 'AMD Ryzen 5 7600X',
      gpu: 'RTX 4060 Ti',
      ram: '16GB DDR5',
      storage: '500GB NVMe SSD',
      category: 'gaming'
    },

    // Work builds (10)
    {
      id: 'workstation-ultimate',
      title: 'Workstation Ultimate',
      description: 'Максимальная производительность для профессионалов',
      price: '₽349,999',
      cpu: 'AMD Threadripper 7980X',
      gpu: 'RTX 4090',
      ram: '128GB DDR5',
      storage: '4TB NVMe Gen5',
      category: 'work'
    },
    {
      id: 'workstation-pro',
      title: 'Workstation Pro',
      description: 'Профессиональная станция для рендеринга',
      price: '₽189,999',
      cpu: 'Intel i9-14900K',
      gpu: 'RTX 4080',
      ram: '64GB DDR5',
      storage: '2TB NVMe SSD',
      category: 'work'
    },
    {
      id: 'workstation-creative',
      title: 'Creative Workstation',
      description: 'Для дизайнеров и видеомонтажёров',
      price: '₽149,999',
      cpu: 'AMD Ryzen 9 7900X',
      gpu: 'RTX 4070 Ti',
      ram: '64GB DDR5',
      storage: '2TB NVMe SSD',
      category: 'work'
    },
    {
      id: 'workstation-dev',
      title: 'Developer Station',
      description: 'Оптимизированная для разработки ПО',
      price: '₽119,999',
      cpu: 'Intel i7-13700K',
      gpu: 'RTX 4060 Ti',
      ram: '32GB DDR5',
      storage: '1TB NVMe SSD',
      category: 'work'
    },
    {
      id: 'workstation-data',
      title: 'Data Science',
      description: 'Анализ данных и машинное обучение',
      price: '₽169,999',
      cpu: 'AMD Ryzen 9 7900X',
      gpu: 'RTX 4070 Ti',
      ram: '64GB DDR5',
      storage: '2TB NVMe SSD',
      category: 'work'
    },
    {
      id: 'workstation-3d',
      title: '3D Workstation',
      description: '3D моделирование и анимация',
      price: '₽199,999',
      cpu: 'Intel i9-13900K',
      gpu: 'RTX 4080',
      ram: '64GB DDR5',
      storage: '2TB NVMe SSD',
      category: 'work'
    },
    {
      id: 'workstation-cad',
      title: 'CAD Workstation',
      description: 'Инженерное проектирование и CAD',
      price: '₽139,999',
      cpu: 'Intel i7-13700K',
      gpu: 'RTX 4070',
      ram: '32GB DDR5',
      storage: '1TB NVMe SSD',
      category: 'work'
    },
    {
      id: 'workstation-server',
      title: 'Server Build',
      description: 'Домашний сервер и виртуализация',
      price: '₽89,999',
      cpu: 'AMD Ryzen 7 5700X',
      gpu: 'Integrated Graphics',
      ram: '64GB DDR4',
      storage: '4TB NVMe SSD',
      category: 'work'
    },
    {
      id: 'workstation-audio',
      title: 'Audio Workstation',
      description: 'Студия звукозаписи и мастеринг',
      price: '₽99,999',
      cpu: 'Intel i7-13700K',
      gpu: 'RTX 4060',
      ram: '32GB DDR5',
      storage: '2TB NVMe SSD',
      category: 'work'
    },
    {
      id: 'workstation-compact',
      title: 'Compact Workstation',
      description: 'Компактная рабочая станция',
      price: '₽79,999',
      cpu: 'AMD Ryzen 5 7600X',
      gpu: 'RTX 4060',
      ram: '32GB DDR5',
      storage: '1TB NVMe SSD',
      category: 'work'
    },

    // Office builds (10)
    {
      id: 'office-executive',
      title: 'Executive Office',
      description: 'Премиум офисная станция для руководителей',
      price: '₽39,999',
      cpu: 'AMD Ryzen 5 5600G',
      gpu: 'Integrated Radeon',
      ram: '16GB DDR4',
      storage: '512GB NVMe SSD',
      category: 'office'
    },
    {
      id: 'office-manager',
      title: 'Manager Pro',
      description: 'Профессиональный офисный компьютер',
      price: '₽34,999',
      cpu: 'Intel i5-12400',
      gpu: 'Intel UHD 730',
      ram: '16GB DDR4',
      storage: '512GB SSD',
      category: 'office'
    },
    {
      id: 'office-accountant',
      title: 'Accountant Station',
      description: 'Для бухгалтерии и финансовых расчётов',
      price: '₽32,999',
      cpu: 'AMD Ryzen 3 5300G',
      gpu: 'Integrated Radeon',
      ram: '16GB DDR4',
      storage: '256GB SSD + 1TB HDD',
      category: 'office'
    },
    {
      id: 'office-secretary',
      title: 'Secretary Desk',
      description: 'Компактное решение для секретарей',
      price: '₽29,999',
      cpu: 'Intel i3-12100',
      gpu: 'Intel UHD 730',
      ram: '8GB DDR4',
      storage: '256GB SSD',
      category: 'office'
    },
    {
      id: 'office-analyst',
      title: 'Data Analyst',
      description: 'Для работы с большими объёмами данных',
      price: '₽37,999',
      cpu: 'AMD Ryzen 5 5600G',
      gpu: 'Integrated Radeon',
      ram: '16GB DDR4',
      storage: '512GB SSD',
      category: 'office'
    },
    {
      id: 'office-hr',
      title: 'HR Department',
      description: 'Для отдела кадров и HR-задач',
      price: '₽31,999',
      cpu: 'Intel i3-12100',
      gpu: 'Intel UHD 730',
      ram: '16GB DDR4',
      storage: '256GB SSD',
      category: 'office'
    },
    {
      id: 'office-call-center',
      title: 'Call Center',
      description: 'Оптимизированный для колл-центров',
      price: '₽27,999',
      cpu: 'AMD Ryzen 3 4300G',
      gpu: 'Integrated Radeon',
      ram: '8GB DDR4',
      storage: '256GB SSD',
      category: 'office'
    },
    {
      id: 'office-multi-monitor',
      title: 'Multi-Monitor Setup',
      description: 'Поддержка до 4 мониторов',
      price: '₽36,999',
      cpu: 'Intel i5-11400',
      gpu: 'Intel UHD 730',
      ram: '16GB DDR4',
      storage: '512GB SSD',
      category: 'office'
    },
    {
      id: 'office-silent',
      title: 'Silent Office',
      description: 'Бесшумная работа в офисе',
      price: '₽33,999',
      cpu: 'AMD Ryzen 3 5300G',
      gpu: 'Integrated Radeon',
      ram: '16GB DDR4',
      storage: '512GB SSD',
      category: 'office'
    },
    {
      id: 'office-reception',
      title: 'Reception Desk',
      description: 'Компьютер для стойки регистрации',
      price: '₽30,999',
      cpu: 'Intel i3-10105',
      gpu: 'Intel UHD 630',
      ram: '8GB DDR4',
      storage: '256GB SSD',
      category: 'office'
    },

    // Budget builds (10)
    {
      id: 'budget-basic',
      title: 'Basic Build',
      description: 'Базовый домашний компьютер',
      price: '₽29,999',
      cpu: 'AMD Ryzen 5 5600G',
      gpu: 'Integrated Radeon',
      ram: '16GB DDR4',
      storage: '512GB SSD',
      category: 'budget'
    },
    {
      id: 'budget-gaming',
      title: 'Budget Gaming',
      description: 'Доступный гейминг в 1080p',
      price: '₽49,999',
      cpu: 'AMD Ryzen 5 5500',
      gpu: 'GTX 1660 Super',
      ram: '16GB DDR4',
      storage: '500GB NVMe SSD',
      category: 'budget'
    },
    {
      id: 'budget-media',
      title: 'Media Center',
      description: 'Домашний медиацентр и просмотр фильмов',
      price: '₽34,999',
      cpu: 'AMD Ryzen 5 5600G',
      gpu: 'Integrated Radeon',
      ram: '16GB DDR4',
      storage: '1TB HDD + 256GB SSD',
      category: 'budget'
    },
    {
      id: 'budget-student',
      title: 'Student Build',
      description: 'Компьютер для учёбы и лёгких игр',
      price: '₽39,999',
      cpu: 'Intel i5-12400F',
      gpu: 'GTX 1650',
      ram: '16GB DDR4',
      storage: '512GB NVMe SSD',
      category: 'budget'
    },
    {
      id: 'budget-work',
      title: 'Budget Work',
      description: 'Рабочий компьютер для офисных задач',
      price: '₽32,999',
      cpu: 'AMD Ryzen 3 5300G',
      gpu: 'Integrated Radeon',
      ram: '8GB DDR4',
      storage: '512GB SSD',
      category: 'budget'
    },
    {
      id: 'budget-mini',
      title: 'Mini Budget',
      description: 'Компактный и экономичный',
      price: '₽27,999',
      cpu: 'Intel i3-12100',
      gpu: 'Integrated UHD 730',
      ram: '8GB DDR4',
      storage: '256GB SSD',
      category: 'budget'
    },
    {
      id: 'budget-upgrade',
      title: 'Upgrade Ready',
      description: 'С возможностью лёгкого апгрейда',
      price: '₽42,999',
      cpu: 'AMD Ryzen 5 5600',
      gpu: 'RX 6500 XT',
      ram: '16GB DDR4',
      storage: '500GB NVMe SSD',
      category: 'budget'
    },
    {
      id: 'budget-htpc',
      title: 'HTPC Build',
      description: 'Домашний кинотеатр',
      price: '₽36,999',
      cpu: 'AMD Ryzen 5 5600G',
      gpu: 'Integrated Radeon',
      ram: '16GB DDR4',
      storage: '2TB HDD + 256GB SSD',
      category: 'budget'
    },
    {
      id: 'budget-esports',
      title: 'Budget Esports',
      description: 'Киберспорт на бюджете',
      price: '₽44,999',
      cpu: 'Intel i5-12400F',
      gpu: 'RX 6600',
      ram: '16GB DDR4',
      storage: '500GB NVMe SSD',
      category: 'budget'
    },
    {
      id: 'budget-silent',
      title: 'Silent Budget',
      description: 'Тихая бюджетная сборка',
      price: '₽38,999',
      cpu: 'AMD Ryzen 5 5600G',
      gpu: 'Integrated Radeon',
      ram: '16GB DDR4',
      storage: '1TB NVMe SSD',
      category: 'budget'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="Cpu" size={32} className="text-blue-600" />
              <h1 className="text-2xl font-bold text-slate-800">AI PC Builder</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#constructor" className="text-slate-600 hover:text-blue-600 transition-colors">Конструктор</a>
              <a href="#catalog" className="text-slate-600 hover:text-blue-600 transition-colors">Каталог</a>
              <a href="#compare" className="text-slate-600 hover:text-blue-600 transition-colors">Сравнение</a>
              <a href="#help" className="text-slate-600 hover:text-blue-600 transition-colors">Помощь</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-slate-800 mb-6 leading-tight">
              Создай идеальный ПК с помощью <span className="text-blue-600">искусственного интеллекта</span>
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Опиши свои потребности, а наш ИИ подберёт оптимальную конфигурацию компьютера под твои задачи и бюджет
            </p>
            <div className="flex justify-center mb-12">
              <img 
                src="/img/8491813b-532d-4ae3-87d2-3c626b1c3b2d.jpg" 
                alt="AI Assistant" 
                className="w-64 h-64 object-cover rounded-full shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* AI Constructor */}
      <section id="constructor" className="py-20 px-6 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-slate-800 mb-4">ИИ-Конструктор</h3>
            <p className="text-xl text-slate-600">Расскажи о своих задачах, и получи персональную сборку</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-xl border-0">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-t-lg">
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Bot" size={24} />
                  <span>Опиши свои потребности</span>
                </CardTitle>
                <CardDescription className="text-blue-100">
                  Например: "Нужен ПК для игр в 1440p, монтажа видео, бюджет до 100k"
                </CardDescription>
              </CardHeader>
              <CardContent className="p-6">
                <Textarea 
                  placeholder="Расскажи, для чего тебе нужен компьютер, какой у тебя бюджет, какие игры планируешь играть..."
                  value={aiInput}
                  onChange={(e) => setAiInput(e.target.value)}
                  className="min-h-32 mb-4 text-lg border-2 border-slate-200 focus:border-blue-500"
                />
                
                {isGenerating && (
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-600">Генерация конфигурации...</span>
                      <span className="text-sm text-slate-600">{progress}%</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>
                )}
                
                <Button 
                  onClick={handleAIGenerate}
                  disabled={!aiInput.trim() || isGenerating}
                  size="lg"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-6"
                >
                  <Icon name="Sparkles" size={20} className="mr-2" />
                  {isGenerating ? 'Создаю сборку...' : 'Создать сборку с ИИ'}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pre-built Configurations */}
      <section id="catalog" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-slate-800 mb-4">Готовые сборки</h3>
            <p className="text-xl text-slate-600">Проверенные конфигурации для разных задач</p>
          </div>
          
          <Tabs defaultValue="all" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-5 mb-8">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="gaming">Игровые</TabsTrigger>
              <TabsTrigger value="work">Рабочие</TabsTrigger>
              <TabsTrigger value="office">Офисные</TabsTrigger>
              <TabsTrigger value="budget">Бюджетные</TabsTrigger>
            </TabsList>
            
            {['all', 'gaming', 'work', 'office', 'budget'].map((category) => (
              <TabsContent key={category} value={category} className="space-y-0">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {preBuilds
                    .filter((build) => category === 'all' || build.category === category)
                    .map((build) => (
                    <Card key={build.id} className="hover:shadow-xl transition-shadow cursor-pointer border-2 hover:border-blue-300">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-xl">{build.title}</CardTitle>
                            <CardDescription className="mt-1">{build.description}</CardDescription>
                          </div>
                          <Badge variant="secondary" className="capitalize">{build.category}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-3 mb-4">
                          <div className="flex items-center space-x-2">
                            <Icon name="Cpu" size={16} className="text-blue-600" />
                            <span className="text-sm font-medium">{build.cpu}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Icon name="Zap" size={16} className="text-green-600" />
                            <span className="text-sm font-medium">{build.gpu}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Icon name="Memory" size={16} className="text-purple-600" />
                            <span className="text-sm font-medium">{build.ram}</span>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Icon name="HardDrive" size={16} className="text-orange-600" />
                            <span className="text-sm font-medium">{build.storage}</span>
                          </div>
                        </div>
                        
                        <div className="flex justify-between items-center">
                          <span className="text-2xl font-bold text-blue-600">{build.price}</span>
                          <Button size="sm" variant="outline">
                            <Icon name="Eye" size={16} className="mr-1" />
                            Подробнее
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold text-slate-800 mb-4">Почему выбирают нас</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Brain" size={32} className="text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Умный ИИ</h4>
              <p className="text-slate-600">Анализирует тысячи конфигураций и подбирает оптимальную под ваши задачи</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="TrendingUp" size={32} className="text-green-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Лучшие цены</h4>
              <p className="text-slate-600">Мониторим цены у всех поставщиков и находим самые выгодные предложения</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={32} className="text-purple-600" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Гарантия качества</h4>
              <p className="text-slate-600">Все компоненты проверены на совместимость и производительность</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <Icon name="Cpu" size={32} className="text-blue-400" />
            <h1 className="text-2xl font-bold">AI PC Builder</h1>
          </div>
          <div className="text-center text-slate-400">
            <p>© 2024 AI PC Builder. Создаем компьютеры будущего уже сегодня.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;