
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { PersonalInfo } from "@/components/profile/PersonalInfo";
import { ProgressStats } from "@/components/profile/ProgressStats";
import { Achievements } from "@/components/profile/Achievements";
import { CoachInfo } from "@/components/profile/CoachInfo";
import PageContainer from "@/components/layout/PageContainer";

const ProfileAvatar = () => {
  return (
    <div className="flex flex-col items-center">
      <Avatar className="h-28 w-28 border-4 border-primary">
        <AvatarImage src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=2070&auto=format&fit=crop" alt="Алексей" />
        <AvatarFallback>АИ</AvatarFallback>
      </Avatar>
      <div className="mt-4 text-center">
        <h2 className="text-2xl font-bold">Алексей Иванов</h2>
        <p className="text-muted-foreground">Группа: Юниоры-2</p>
        <div className="flex justify-center space-x-2 mt-2">
          <Badge variant="outline" className="bg-blue-100 hover:bg-blue-200">10 лет</Badge>
          <Badge variant="outline" className="bg-green-100 hover:bg-green-200">Начинающий</Badge>
        </div>
      </div>
    </div>
  );
};

export default function Profile() {
  return (
    <PageContainer
      title="Личный профиль"
      subtitle="Управляй своим профилем и отслеживай прогресс"
      activePath="/profile"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Левая колонка с аватаром и карточкой */}
        <div className="space-y-6">
          <Card className="overflow-hidden border-purple-200">
            <CardContent className="pt-6">
              <ProfileAvatar />
            </CardContent>
          </Card>
          
          <Card className="border-purple-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Моя программа</CardTitle>
              <CardDescription>Твой текущий уровень подготовки</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-2">
                <div className="font-semibold">Начинающий самбист</div>
                <Badge className="bg-primary">Уровень 2</Badge>
              </div>
              <div className="w-full bg-muted rounded-full h-2.5 mb-4">
                <div className="bg-primary h-2.5 rounded-full" style={{ width: "65%" }}></div>
              </div>
              <p className="text-muted-foreground text-sm mb-3">
                До следующего уровня осталось пройти 3 темы и сдать 2 теста.
              </p>
              <Button className="w-full">Посмотреть программу</Button>
            </CardContent>
          </Card>
          
          <Card className="border-purple-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Мой тренер</CardTitle>
            </CardHeader>
            <CardContent>
              <CoachInfo />
            </CardContent>
          </Card>
        </div>
      
        {/* Правая колонка с основной информацией */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="info" className="w-full">
            <TabsList className="mb-6 bg-blue-100/50 border border-purple-200">
              <TabsTrigger value="info" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Личная информация
              </TabsTrigger>
              <TabsTrigger value="progress" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Прогресс
              </TabsTrigger>
              <TabsTrigger value="achievements" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                Достижения
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="info">
              <Card className="border-purple-200">
                <CardHeader className="pb-2">
                  <CardTitle>Личная информация</CardTitle>
                  <CardDescription>Основные данные профиля</CardDescription>
                </CardHeader>
                <CardContent>
                  <PersonalInfo />
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="progress">
              <Card className="border-purple-200">
                <CardHeader className="pb-2">
                  <CardTitle>Прогресс обучения</CardTitle>
                  <CardDescription>Твои успехи в изучении самбо</CardDescription>
                </CardHeader>
                <CardContent>
                  <ProgressStats />
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="achievements">
              <Card className="border-purple-200">
                <CardHeader className="pb-2">
                  <CardTitle>Достижения</CardTitle>
                  <CardDescription>Твои награды и достижения</CardDescription>
                </CardHeader>
                <CardContent>
                  <Achievements />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </PageContainer>
  );
}
