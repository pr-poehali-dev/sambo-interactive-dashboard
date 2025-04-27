
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Video, 
  MessageCircle, 
  Medal, 
  TrendingUp, 
  User, 
  Calendar 
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
import { TrainingSchedule } from "@/components/TrainingSchedule";
import { QuickActions } from "@/components/QuickActions";
import { MoodTracker } from "@/components/MoodTracker";

const Index = () => {
  const [userName] = useState("Алексей");

  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-blue-50">
        <Sidebar className="border-r border-sidebar-border">
          <SidebarHeader className="py-4">
            <div className="flex items-center px-2">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-primary-foreground mr-2">
                <User size={18} />
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
                <SidebarMenuButton asChild isActive={true} tooltip="Главная">
                  <Link to="/" className="flex items-center">
                    <User size={20} className="mr-2" />
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
                Привет, {userName}! 👋
              </h1>
              <p className="text-lg text-muted-foreground">
                Добро пожаловать в твой личный кабинет Самбо-Интерактив
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <QuickActions />
              <MoodTracker />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <Card className="lg:col-span-2 shadow-lg hover:shadow-xl transition-shadow border-purple-200">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-xl font-bold">
                    <Calendar className="mr-2 h-5 w-5 text-primary" />
                    Расписание тренировок
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <TrainingSchedule />
                </CardContent>
              </Card>
              
              <Card className="shadow-lg hover:shadow-xl transition-shadow border-purple-200">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center text-xl font-bold">
                    <TrendingUp className="mr-2 h-5 w-5 text-primary" />
                    Твой прогресс
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium">Программа обучения</span>
                        <span className="text-sm font-medium">65%</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2.5">
                        <div className="bg-primary h-2.5 rounded-full" style={{ width: "65%" }}></div>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div>
                      <h3 className="font-medium mb-2">Последние достижения:</h3>
                      <div className="flex space-x-2">
                        <div className="flex flex-col items-center">
                          <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mb-1">
                            <span className="text-yellow-500 text-lg">🥇</span>
                          </div>
                          <span className="text-xs">Первый бросок</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mb-1">
                            <span className="text-blue-500 text-lg">🔥</span>
                          </div>
                          <span className="text-xs">3 дня подряд</span>
                        </div>
                        <div className="flex flex-col items-center">
                          <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mb-1">
                            <span className="text-green-500 text-lg">📚</span>
                          </div>
                          <span className="text-xs">Теория</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="pt-2">
                      <Button asChild variant="outline" className="w-full">
                        <Link to="/progress">Подробнее</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Index;
