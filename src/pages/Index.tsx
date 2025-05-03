
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Video, 
  TrendingUp, 
  Calendar,
  Trophy 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { TrainingSchedule } from "@/components/TrainingSchedule";
import { QuickActions } from "@/components/QuickActions";
import { MoodTracker } from "@/components/MoodTracker";
import PageContainer from "@/components/layout/PageContainer";

const Index = () => {
  const [userName] = useState("Алексей");

  return (
    <PageContainer
      title={`Привет, ${userName}! 👋`}
      subtitle="Добро пожаловать в твой личный кабинет Самбо-Интерактив"
      activePath="/"
    >
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

      {/* Блок с навигацией на основные разделы */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <Card className="shadow-lg hover:shadow-xl transition-shadow border-purple-200 hover:border-primary cursor-pointer">
          <Link to="/materials" className="block h-full">
            <CardContent className="p-6 flex flex-col items-center text-center h-full">
              <BookOpen size={40} className="text-primary mb-4" />
              <h3 className="font-bold text-lg mb-2">Учебные материалы</h3>
              <p className="text-sm text-muted-foreground">Изучай теорию и технику самбо</p>
            </CardContent>
          </Link>
        </Card>
        
        <Card className="shadow-lg hover:shadow-xl transition-shadow border-purple-200 hover:border-primary cursor-pointer">
          <Link to="/tests" className="block h-full">
            <CardContent className="p-6 flex flex-col items-center text-center h-full">
              <Trophy size={40} className="text-primary mb-4" />
              <h3 className="font-bold text-lg mb-2">Тесты знаний</h3>
              <p className="text-sm text-muted-foreground">Проверь, что ты усвоил, и получи награды</p>
            </CardContent>
          </Link>
        </Card>
        
        <Card className="shadow-lg hover:shadow-xl transition-shadow border-purple-200 hover:border-primary cursor-pointer">
          <Link to="/videos" className="block h-full">
            <CardContent className="p-6 flex flex-col items-center text-center h-full">
              <Video size={40} className="text-primary mb-4" />
              <h3 className="font-bold text-lg mb-2">Видеозадания</h3>
              <p className="text-sm text-muted-foreground">Смотри и выполняй видеоупражнения</p>
            </CardContent>
          </Link>
        </Card>
      </div>
    </PageContainer>
  );
};

export default Index;
