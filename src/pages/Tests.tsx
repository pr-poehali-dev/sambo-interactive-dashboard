
import { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, Trophy, Award, Star, BookMarked, CheckCircle, Timer, Brain, Medal, Crown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarHeader, 
  SidebarContent, 
  SidebarMenu, 
  SidebarMenuItem, 
  SidebarMenuButton, 
  SidebarTrigger, 
  SidebarInset 
} from "@/components/ui/sidebar";

// Компонент карточки теста
const TestCard = ({ 
  title, 
  description, 
  difficulty, 
  questions, 
  timeMinutes, 
  completed, 
  image 
}: { 
  title: string;
  description: string;
  difficulty: "легкий" | "средний" | "сложный";
  questions: number;
  timeMinutes: number;
  completed?: boolean;
  image: string;
}) => {
  // Определяем цвет бейджа сложности
  const difficultyColor = {
    "легкий": "bg-green-500",
    "средний": "bg-yellow-500",
    "сложный": "bg-red-500"
  }[difficulty];

  // Анимированный фон для карточек
  const animationClass = completed 
    ? "border-green-300 animate-pulse" 
    : "hover:shadow-xl border-purple-200";

  return (
    <Card className={`overflow-hidden transition-all duration-300 h-full transform hover:-translate-y-2 ${animationClass}`}>
      <div className="aspect-video overflow-hidden bg-muted relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
        {completed && (
          <div className="absolute top-2 right-2 bg-primary text-white rounded-full p-1">
            <CheckCircle size={20} />
          </div>
        )}
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-bold">{title}</CardTitle>
          <Badge className={difficultyColor}>
            {difficulty}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        
        <div className="flex justify-between text-xs text-muted-foreground mb-4">
          <div className="flex items-center">
            <Brain size={16} className="mr-1" />
            {questions} вопросов
          </div>
          <div className="flex items-center">
            <Timer size={16} className="mr-1" />
            {timeMinutes} мин
          </div>
        </div>
        
        <Button 
          variant={completed ? "outline" : "default"} 
          size="sm" 
          className="w-full font-bold"
        >
          {completed ? "Пройти снова" : "Начать тест"}
        </Button>
      </CardContent>
    </Card>
  );
};

// Компонент достижения
const AchievementCard = ({ title, icon, description, progress = 100 }: {
  title: string;
  icon: React.ReactNode;
  description: string;
  progress?: number;
}) => (
  <div className="bg-white rounded-lg p-4 shadow-md border border-purple-100 flex items-center hover:shadow-lg transition-all">
    <div className="mr-4 bg-primary/10 p-3 rounded-full">
      {icon}
    </div>
    <div className="flex-1">
      <h3 className="font-bold text-sm">{title}</h3>
      <p className="text-xs text-muted-foreground">{description}</p>
      <Progress value={progress} className="h-2 mt-2" />
    </div>
    {progress === 100 && (
      <div className="ml-2">
        <Medal className="text-yellow-500" size={24} />
      </div>
    )}
  </div>
);

// Главный компонент страницы Тесты
const Tests = () => {
  // Тесты для отображения
  const tests = [
    {
      id: 1,
      title: "История самбо",
      description: "Проверь свои знания об истории самбо в России и мире!",
      difficulty: "легкий" as const,
      questions: 10,
      timeMinutes: 5,
      completed: true,
      image: "https://images.unsplash.com/photo-1581617427892-467e4702f03d?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 2,
      title: "Основные правила",
      description: "Узнай, насколько хорошо ты знаешь правила соревнований по самбо",
      difficulty: "средний" as const,
      questions: 15,
      timeMinutes: 10,
      completed: false,
      image: "https://images.unsplash.com/photo-1564415315949-7a0c4c73aab4?q=80&w=2071&auto=format&fit=crop"
    },
    {
      id: 3,
      title: "Техника бросков",
      description: "Тест на знание названий и техники выполнения бросков в самбо",
      difficulty: "сложный" as const,
      questions: 20,
      timeMinutes: 15,
      completed: false,
      image: "https://images.unsplash.com/photo-1576909898981-4d8ad0898682?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: 4,
      title: "Великие самбисты",
      description: "Проверь свои знания о знаменитых чемпионах самбо",
      difficulty: "средний" as const,
      questions: 12,
      timeMinutes: 8,
      completed: false,
      image: "https://images.unsplash.com/photo-1578763397601-ad070819e6d6?q=80&w=2069&auto=format&fit=crop"
    },
    {
      id: 5,
      title: "Подготовка к соревнованиям",
      description: "Что нужно знать перед своими первыми соревнованиями?",
      difficulty: "легкий" as const,
      questions: 8,
      timeMinutes: 5,
      completed: false,
      image: "https://images.unsplash.com/photo-1509470475192-4dc0681a8d17?q=80&w=2071&auto=format&fit=crop"
    },
    {
      id: 6,
      title: "Самбо-квиз для чемпионов",
      description: "Сложный тест для настоящих знатоков самбо!",
      difficulty: "сложный" as const,
      questions: 25,
      timeMinutes: 20,
      completed: false,
      image: "https://images.unsplash.com/photo-1552072092-7f9b8d63efcb?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
        <Sidebar className="border-r border-sidebar-border">
          <SidebarHeader className="py-4">
            <div className="flex items-center px-2">
              <div className="w-10 h-10 rounded-full overflow-hidden mr-2">
                <img src="https://cdn.poehali.dev/files/baf855b2-c5ad-4663-907b-199d6add808c.png" alt="Самбо эмблема" className="w-full h-full object-contain" />
              </div>
              <div>
                <h2 className="text-lg font-bold">Самбо-Интерактив</h2>
              </div>
              <SidebarTrigger className="ml-auto" />
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Главная">
                  <Link to="/" className="flex items-center">
                    <BookOpen size={20} className="mr-2" />
                    <span>Главная</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Учебные материалы">
                  <Link to="/materials" className="flex items-center">
                    <BookOpen size={20} className="mr-2" />
                    <span>Учебные материалы</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild isActive={true} tooltip="Тесты знаний">
                  <Link to="/tests" className="flex items-center">
                    <Trophy size={20} className="mr-2" />
                    <span>Тесты знаний</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Видеозадания">
                  <Link to="/videos" className="flex items-center">
                    <BookOpen size={20} className="mr-2" />
                    <span>Видеозадания</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Мой прогресс">
                  <Link to="/progress" className="flex items-center">
                    <BookOpen size={20} className="mr-2" />
                    <span>Мой прогресс</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Сообщения">
                  <Link to="/messages" className="flex items-center">
                    <BookOpen size={20} className="mr-2" />
                    <span>Сообщения</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Челленджи и награды">
                  <Link to="/challenges" className="flex items-center">
                    <BookOpen size={20} className="mr-2" />
                    <span>Челленджи и награды</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
        
        <SidebarInset>
          <div className="container p-4 md:p-6 mx-auto">
            {/* Заголовок страницы с анимацией */}
            <div className="mb-8 relative">
              <div className="absolute -top-6 -right-6 opacity-10 text-9xl animate-bounce">🏆</div>
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2 relative z-10 animate-fade-in">
                Тесты знаний 🧠
              </h1>
              <p className="text-lg text-muted-foreground relative z-10">
                Проверь свои знания о самбо и получи классные награды!
              </p>
            </div>

            {/* Эмблема самбо */}
            <div className="mb-8 flex justify-center">
              <div className="w-20 h-20 mx-auto">
                <img 
                  src="https://cdn.poehali.dev/files/baf855b2-c5ad-4663-907b-199d6add808c.png" 
                  alt="Самбо эмблема" 
                  className="w-full h-full object-contain bounce-animation"
                />
              </div>
            </div>

            {/* Достижения пользователя */}
            <div className="mb-10 bg-gradient-to-r from-blue-100/70 to-purple-100/70 p-4 md:p-6 rounded-xl border border-purple-200">
              <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
                <Trophy size={24} className="mr-2 text-yellow-500" />
                Твои достижения
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <AchievementCard 
                  title="Знаток истории" 
                  icon={<Award size={24} className="text-primary" />}
                  description="Пройди все тесты по истории самбо"
                  progress={40}
                />
                <AchievementCard 
                  title="Быстрый ум" 
                  icon={<Timer size={24} className="text-primary" />}
                  description="Пройди 5 тестов менее чем за 3 минуты каждый"
                  progress={20}
                />
                <AchievementCard 
                  title="Чемпион знаний" 
                  icon={<Star size={24} className="text-primary" />}
                  description="Набери 100% в 3 сложных тестах подряд"
                  progress={10}
                />
              </div>
            </div>
            
            {/* Рейтинг лучших учеников - новый раздел */}
            <div className="mb-10 bg-gradient-to-r from-yellow-100/70 to-orange-100/70 p-4 md:p-6 rounded-xl border border-yellow-200">
              <h2 className="text-xl font-bold text-amber-700 mb-4 flex items-center">
                <Crown size={24} className="mr-2 text-yellow-500" />
                Лучшие ученики этой недели
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-3 shadow-md flex items-center">
                  <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold mr-3">1</div>
                  <div className="flex-1">
                    <p className="font-bold">Миша К.</p>
                    <p className="text-xs text-muted-foreground">95 баллов</p>
                  </div>
                  <Medal className="text-yellow-500" size={20} />
                </div>
                <div className="bg-white rounded-lg p-3 shadow-md flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold mr-3">2</div>
                  <div className="flex-1">
                    <p className="font-bold">Даша П.</p>
                    <p className="text-xs text-muted-foreground">82 балла</p>
                  </div>
                  <Medal className="text-gray-400" size={20} />
                </div>
                <div className="bg-white rounded-lg p-3 shadow-md flex items-center">
                  <div className="w-8 h-8 rounded-full bg-amber-700 flex items-center justify-center text-white font-bold mr-3">3</div>
                  <div className="flex-1">
                    <p className="font-bold">Саша В.</p>
                    <p className="text-xs text-muted-foreground">78 баллов</p>
                  </div>
                  <Medal className="text-amber-700" size={20} />
                </div>
              </div>
            </div>
            
            {/* Список доступных тестов */}
            <h2 className="text-xl font-bold text-primary mb-4 flex items-center">
              <BookOpen size={24} className="mr-2" />
              Доступные тесты
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
              {tests.map(test => (
                <TestCard key={test.id} {...test} />
              ))}
            </div>

            {/* Подсказка для детей */}
            <div className="bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4 shadow-sm relative overflow-hidden">
              <div className="absolute -right-4 -bottom-4 opacity-10 text-7xl">🌟</div>
              <h3 className="font-bold text-yellow-800 flex items-center mb-2 relative z-10">
                <Star size={18} className="mr-2 text-yellow-500" />
                Совет будущему чемпиону:
              </h3>
              <p className="text-sm text-yellow-700 relative z-10">
                Перед прохождением теста, не забудь повторить материал в разделе "Учебные материалы". 
                А если наберёшь больше 90% правильных ответов, получишь специальную награду и призовые баллы!
              </p>
            </div>
          </div>
        </SidebarInset>
      </div>
      
      {/* Добавляем стили для анимаций */}
      <style jsx>{`
        .bounce-animation {
          animation: bounce 2s infinite;
        }
        
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </SidebarProvider>
  );
};

export default Tests;
