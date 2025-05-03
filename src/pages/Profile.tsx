
import { useState } from "react";
import PageContainer from "@/components/layout/PageContainer";
import ProfileAvatar from "@/components/profile/ProfileAvatar";
import PersonalInfo from "@/components/profile/PersonalInfo";
import CoachInfo from "@/components/profile/CoachInfo";
import ProgressStats from "@/components/profile/ProgressStats";
import Achievements from "@/components/profile/Achievements";
import { Card, CardContent } from "@/components/ui/card";

const Profile = () => {
  const [profileStats] = useState({
    name: "Алексей Алексеев",
    age: "10 лет 6 месяцев",
    achievementPoints: 320,
    completedTests: 15,
    completedVideos: 8,
    studyMaterials: 22,
  });

  const progressItems = [
    { label: "Общий прогресс", value: 65 },
    { label: "Теоретические знания", value: 80 },
    { label: "Практические навыки", value: 55 },
  ];

  const statsItems = [
    { label: "Пройдено тестов", value: profileStats.completedTests },
    { label: "Видеозаданий", value: profileStats.completedVideos },
    { label: "Материалов изучено", value: profileStats.studyMaterials },
  ];

  const awards = [
    { icon: "🥇", bgColor: "bg-yellow-100", textColor: "text-yellow-500", name: "Первый бросок" },
    { icon: "🔥", bgColor: "bg-blue-100", textColor: "text-blue-500", name: "3 дня подряд" },
    { icon: "📚", bgColor: "bg-green-100", textColor: "text-green-500", name: "Теория усвоена" },
  ];

  const physicalSkills = [
    { name: "Отжимания", rating: 3 },
    { name: "Подтягивания", rating: 2 },
    { name: "Гибкость", rating: 4 },
  ];

  const technicalSkills = [
    { name: "Падения", rating: 4 },
    { name: "Броски", rating: 3 },
    { name: "Удержания", rating: 2 },
  ];

  return (
    <PageContainer 
      title="Мой профиль" 
      subtitle="Персональная информация и достижения"
      activePath="/profile"
    >
      {/* Профиль пользователя и основная информация */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card className="shadow-lg hover:shadow-xl transition-shadow border-purple-200">
          <CardContent className="p-6">
            <ProfileAvatar 
              name={profileStats.name} 
              age={profileStats.age} 
              photoUrl="https://images.unsplash.com/photo-1618841557871-b4664fbf0cb3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2FtYm8lMjBib3l8ZW58MHx8MHx8fDA%3D" 
            />
          </CardContent>
        </Card>
        
        <div className="lg:col-span-2">
          <PersonalInfo 
            name={profileStats.name} 
            age={profileStats.age}
          />
        </div>
      </div>
      
      {/* Мой тренер */}
      <div className="mb-8">
        <CoachInfo 
          name="Иванов Петр Сергеевич" 
          title="Мастер спорта по самбо" 
          rating={5} 
          photoUrl="https://images.unsplash.com/photo-1517344884509-a0c97ec11bcc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8c2FtYm8lMjBjb2FjaHxlbnwwfHwwfHx8MA%3D%3D" 
        />
      </div>
      
      {/* Статистика и достижения */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProgressStats 
          progressItems={progressItems} 
          statsItems={statsItems} 
        />
        
        <Achievements 
          awards={awards} 
          physicalSkills={physicalSkills} 
          technicalSkills={technicalSkills} 
        />
      </div>
    </PageContainer>
  );
};

export default Profile;
