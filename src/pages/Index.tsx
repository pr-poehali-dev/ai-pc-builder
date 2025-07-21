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
    {
      id: 'gaming-pro',
      title: 'Gaming Pro',
      description: 'Высокопроизводительная сборка для игр в 4K',
      price: '₽89,999',
      cpu: 'Intel i7-13700K',
      gpu: 'RTX 4070 Ti',
      ram: '32GB DDR5',
      storage: '1TB NVMe SSD',
      category: 'gaming'
    },
    {
      id: 'workstation',
      title: 'Workstation',
      description: 'Профессиональная станция для работы',
      price: '₽129,999',
      cpu: 'AMD Ryzen 9 7900X',
      gpu: 'RTX 4080',
      ram: '64GB DDR5',
      storage: '2TB NVMe SSD',
      category: 'work'
    },
    {
      id: 'budget',
      title: 'Budget Build',
      description: 'Оптимальное соотношение цена/качество',
      price: '₽39,999',
      cpu: 'AMD Ryzen 5 5600X',
      gpu: 'RX 6600 XT',
      ram: '16GB DDR4',
      storage: '500GB NVMe SSD',
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
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="all">Все</TabsTrigger>
              <TabsTrigger value="gaming">Игровые</TabsTrigger>
              <TabsTrigger value="work">Рабочие</TabsTrigger>
              <TabsTrigger value="budget">Бюджетные</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="space-y-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {preBuilds.map((build) => (
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