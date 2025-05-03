
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  User,
  BookOpen,
  Video,
  MessageCircle,
  Medal,
  TrendingUp,
  Calendar,
  Trophy,
  Camera,
  Upload,
  ChevronRight,
  PenSquare,
  ChevronDown,
  Star
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
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
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

const Profile = () => {
  const [profileStats] = useState({
    name: "Алексей Алексеев",
    age: "10 лет 6 месяцев",
    achievementPoints: 320,
    completedTests: 15,
    completedVideos: 8,
    studyMaterials: 22,
  });

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-blue-50">
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
                    <User size={20} className="mr-2" />
                    <span>Главная</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Профиль" isActive={true}>
                  <Link to="/profile" className="flex items-center">
                    <User size={20} className="mr-2" />
                    <span>Профиль</span>
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
                <SidebarMenuButton asChild tooltip="Тесты знаний">
                  <Link to="/tests" className="flex items-center">
                    <Trophy size={20} className="mr-2" />
                    <span>Тесты знаний</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Видеозадания">
                  <Link to="/videos" className="flex items-center">
                    <Video size={20} className="mr-2" />
                    <span>Видеозадания</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Мой прогресс">
                  <Link to="/progress" className="flex items-center">
                    <TrendingUp size={20} className="mr-2" />
                    <span>Мой прогресс</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Сообщения">
                  <Link to="/messages" className="flex items-center">
                    <MessageCircle size={20} className="mr-2" />
                    <span>Сообщения</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild tooltip="Челленджи и награды">
                  <Link to="/challenges" className="flex items-center">
                    <Medal size={20} className="mr-2" />
                    <span>Челленджи и награды</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>
        
        <SidebarInset className="bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="container p-4 md:p-6 mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                Мой профиль
              </h1>
              <p className="text-lg text-muted-foreground">
                Персональная информация и достижения
              </p>
            </div>
            
            {/* Профиль пользователя и основная информация */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <Card className="shadow-lg hover:shadow-xl transition-shadow border-purple-200">
                <CardContent className="p-6">
                  <div className="flex flex-col items-center">
                    <div className="relative mb-4">
                      <Avatar className="w-32 h-32 border-4 border-purple-200">
                        <AvatarImage src="https://images.unsplash.com/photo-1618841557871-b4664fbf0cb3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtYm8lMjBib3l8ZW58MHx8MHx8fDA%3D" alt={profileStats.name} />
                        <AvatarFallback>{profileStats.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <button className="absolute -bottom-1 right-0 bg-primary text-white rounded-full p-2 shadow-md hover:bg-primary/90 transition-colors">
                        <PenSquare size={18} />
                      </button>
                    </div>
                    <h2 className="text-xl font-bold text-center mb-1">{profileStats.name}</h2>
                    <p className="text-muted-foreground text-center mb-4">{profileStats.age}</p>
                    
                    <div className="w-full space-y-4 mt-2">
                      <Button className="w-full flex items-center justify-center gap-2">
                        <Camera size={16} />
                        Добавить фото
                      </Button>
                      <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                        <Upload size={16} />
                        Загрузить видео
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-lg hover:shadow-xl transition-shadow border-purple-200 lg:col-span-2">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-xl font-bold">
                    <User className="mr-2 h-5 w-5 text-primary" />
                    Личная информация
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">Имя и фамилия</h3>
                        <p className="text-muted-foreground">{profileStats.name}</p>
                      </div>
                      <Button variant="ghost" size="icon">
                        <ChevronRight size={18} />
                      </Button>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">Возраст</h3>
                        <p className="text-muted-foreground">{profileStats.age}</p>
                      </div>
                      <Button variant="ghost" size="icon">
                        <ChevronRight size={18} />
                      </Button>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium">Уровень подготовки</h3>
                        <p className="text-muted-foreground">Начинающий</p>
                      </div>
                      <Button variant="ghost" size="icon">
                        <ChevronRight size={18} />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Мой тренер */}
            <Card className="shadow-lg hover:shadow-xl transition-shadow border-purple-200 mb-8">
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center text-xl font-bold">
                  <Star className="mr-2 h-5 w-5 text-primary" />
                  Мой тренер
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center">
                  <Avatar className="w-16 h-16 mr-4">
                    <AvatarImage src="https://images.unsplash.com/photo-1517344884509-a0c97ec11bcc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2FtYm8lMjBjb2FjaHxlbnwwfHwwfHx8MA%3D%3D" alt="Тренер" />
                    <AvatarFallback>ИП</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-bold text-lg">Иванов Петр Сергеевич</h3>
                    <p className="text-muted-foreground">Мастер спорта по самбо</p>
                    <div className="flex items-center mt-1">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} size={16} className="text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                      <span className="text-sm ml-2">5.0</span>
                    </div>
                  </div>
                  <Button className="ml-auto" variant="outline">
                    Связаться
                  </Button>
                </div>
              </CardContent>
            </Card>
            
            {/* Статистика и достижения */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="shadow-lg hover:shadow-xl transition-shadow border-purple-200">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-xl font-bold">
                    <TrendingUp className="mr-2 h-5 w-5 text-primary" />
                    Прогресс обучения
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Общий прогресс</span>
                        <span className="text-sm font-medium">65%</span>
                      </div>
                      <Progress value={65} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Теоретические знания</span>
                        <span className="text-sm font-medium">80%</span>
                      </div>
                      <Progress value={80} className="h-2" />
                    </div>
                    
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Практические навыки</span>
                        <span className="text-sm font-medium">55%</span>
                      </div>
                      <Progress value={55} className="h-2" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{profileStats.completedTests}</div>
                      <p className="text-xs text-muted-foreground">Пройдено тестов</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{profileStats.completedVideos}</div>
                      <p className="text-xs text-muted-foreground">Видеозаданий</p>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-primary">{profileStats.studyMaterials}</div>
                      <p className="text-xs text-muted-foreground">Материалов изучено</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-lg hover:shadow-xl transition-shadow border-purple-200">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-xl font-bold">
                    <Medal className="mr-2 h-5 w-5 text-primary" />
                    Достижения
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger>Последние награды</AccordionTrigger>
                      <AccordionContent>
                        <div className="grid grid-cols-3 gap-4 py-2">
                          <div className="flex flex-col items-center">
                            <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mb-1">
                              <span className="text-yellow-500 text-xl">🥇</span>
                            </div>
                            <span className="text-xs text-center">Первый бросок</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-1">
                              <span className="text-blue-500 text-xl">🔥</span>
                            </div>
                            <span className="text-xs text-center">3 дня подряд</span>
                          </div>
                          <div className="flex flex-col items-center">
                            <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mb-1">
                              <span className="text-green-500 text-xl">📚</span>
                            </div>
                            <span className="text-xs text-center">Теория усвоена</span>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                      <AccordionTrigger>Физическая подготовка</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span>Отжимания</span>
                            <div className="flex">
                              {[1, 2, 3].map((star) => (
                                <Star key={star} size={16} className="text-yellow-500 fill-yellow-500" />
                              ))}
                              {[4, 5].map((star) => (
                                <Star key={star} size={16} className="text-muted" />
                              ))}
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Подтягивания</span>
                            <div className="flex">
                              {[1, 2].map((star) => (
                                <Star key={star} size={16} className="text-yellow-500 fill-yellow-500" />
                              ))}
                              {[3, 4, 5].map((star) => (
                                <Star key={star} size={16} className="text-muted" />
                              ))}
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Гибкость</span>
                            <div className="flex">
                              {[1, 2, 3, 4].map((star) => (
                                <Star key={star} size={16} className="text-yellow-500 fill-yellow-500" />
                              ))}
                              {[5].map((star) => (
                                <Star key={star} size={16} className="text-muted" />
                              ))}
                            </div>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-3">
                      <AccordionTrigger>Техническая подготовка</AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span>Падения</span>
                            <div className="flex">
                              {[1, 2, 3, 4].map((star) => (
                                <Star key={star} size={16} className="text-yellow-500 fill-yellow-500" />
                              ))}
                              {[5].map((star) => (
                                <Star key={star} size={16} className="text-muted" />
                              ))}
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Броски</span>
                            <div className="flex">
                              {[1, 2, 3].map((star) => (
                                <Star key={star} size={16} className="text-yellow-500 fill-yellow-500" />
                              ))}
                              {[4, 5].map((star) => (
                                <Star key={star} size={16} className="text-muted" />
                              ))}
                            </div>
                          </div>
                          <div className="flex justify-between items-center">
                            <span>Удержания</span>
                            <div className="flex">
                              {[1, 2].map((star) => (
                                <Star key={star} size={16} className="text-yellow-500 fill-yellow-500" />
                              ))}
                              {[3, 4, 5].map((star) => (
                                <Star key={star} size={16} className="text-muted" />
                              ))}
                            </div>
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
            
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Profile;
