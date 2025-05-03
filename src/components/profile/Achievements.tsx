import { Medal, Star, Award, Trophy, Clock, ThumbsUp, Target, Flag } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Achievement {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  date: string;
  unlocked: boolean;
  type: "bronze" | "silver" | "gold" | "special";
}

export function Achievements() {
  const achievements: Achievement[] = [
    {
      id: 1,
      title: "Первые шаги",
      description: "Успешно пройдено первое тестирование",
      icon: <Star className="h-6 w-6" />,
      date: "15.03.2025",
      unlocked: true,
      type: "bronze"
    },
    {
      id: 2,
      title: "Теоретик",
      description: "Изучено 10 теоретических материалов",
      icon: <BookIcon className="h-6 w-6" />,
      date: "20.03.2025",
      unlocked: true,
      type: "bronze"
    },
    {
      id: 3,
      title: "Настойчивость",
      description: "Посещение 10 тренировок подряд",
      icon: <Flag className="h-6 w-6" />,
      date: "05.04.2025",
      unlocked: true,
      type: "silver"
    },
    {
      id: 4,
      title: "Мастер бросков",
      description: "Освоение всех основных техник бросков",
      icon: <Target className="h-6 w-6" />,
      date: "Не разблокировано",
      unlocked: false,
      type: "gold"
    },
    {
      id: 5,
      title: "Самбист-эрудит",
      description: "100% результат в сложном тесте по истории самбо",
      icon: <Trophy className="h-6 w-6" />,
      date: "Не разблокировано",
      unlocked: false,
      type: "gold"
    },
    {
      id: 6,
      title: "Быстрый старт",
      description: "Выполнение всех заданий первой недели",
      icon: <Clock className="h-6 w-6" />,
      date: "30.03.2025",
      unlocked: true,
      type: "bronze"
    },
    {
      id: 7,
      title: "Отличная техника",
      description: "Получение высшей оценки за выполнение приема",
      icon: <ThumbsUp className="h-6 w-6" />,
      date: "10.04.2025",
      unlocked: true,
      type: "silver"
    },
    {
      id: 8,
      title: "Почетный самбист",
      description: "Особая награда от тренера за усердие и прогресс",
      icon: <Award className="h-6 w-6" />,
      date: "Не разблокировано",
      unlocked: false,
      type: "special"
    }
  ];

  // Функция для получения классов стилей в зависимости от типа достижения
  const getAchievementStyle = (type: string, unlocked: boolean) => {
    if (!unlocked) return "bg-gray-100 text-gray-400 border-gray-200";
    
    switch (type) {
      case "bronze":
        return "bg-amber-100 text-amber-700 border-amber-200";
      case "silver":
        return "bg-slate-100 text-slate-700 border-slate-300";
      case "gold":
        return "bg-yellow-100 text-yellow-700 border-yellow-300";
      case "special":
        return "bg-purple-100 text-purple-700 border-purple-300";
      default:
        return "bg-blue-100 text-blue-700 border-blue-200";
    }
  };

  const getBadgeStyle = (type: string) => {
    switch (type) {
      case "bronze":
        return "bg-amber-500 text-white";
      case "silver":
        return "bg-slate-400 text-white";
      case "gold":
        return "bg-yellow-500 text-white";
      case "special":
        return "bg-primary text-white";
      default:
        return "bg-blue-500 text-white";
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {achievements.map((achievement) => (
        <div 
          key={achievement.id}
          className={`flex items-start p-4 rounded-lg border ${getAchievementStyle(achievement.type, achievement.unlocked)}`}
        >
          <div className={`p-3 rounded-full ${achievement.unlocked ? 'bg-white' : 'bg-gray-50'} mr-3`}>
            {achievement.icon}
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <div className="font-bold">{achievement.title}</div>
              <Badge className={getBadgeStyle(achievement.type)}>
                {achievement.type === "bronze" ? "Бронза" : 
                 achievement.type === "silver" ? "Серебро" : 
                 achievement.type === "gold" ? "Золото" : "Особое"}
              </Badge>
            </div>
            <p className="text-sm mb-1">{achievement.description}</p>
            <div className="text-xs">
              {achievement.unlocked ? (
                <span>Получено: {achievement.date}</span>
              ) : (
                <span className="italic">Не разблокировано</span>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function BookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
    </svg>
  );
}

export default Achievements;
