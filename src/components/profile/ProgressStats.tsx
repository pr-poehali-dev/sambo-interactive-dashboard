import { TrendingUp, Calendar, Trophy, BookOpen, Video } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function ProgressStats() {
  const progressStats = [
    {
      id: 1,
      title: "Теоретические материалы",
      icon: <BookOpen className="h-5 w-5 text-blue-500" />,
      progress: 70,
      details: "7/10 тем изучено"
    },
    {
      id: 2,
      title: "Практические задания",
      icon: <Video className="h-5 w-5 text-purple-500" />,
      progress: 45,
      details: "5/11 заданий выполнено"
    },
    {
      id: 3,
      title: "Тесты",
      icon: <Trophy className="h-5 w-5 text-yellow-500" />,
      progress: 60,
      details: "3/5 тестов пройдено"
    },
    {
      id: 4,
      title: "Посещаемость тренировок",
      icon: <Calendar className="h-5 w-5 text-green-500" />,
      progress: 85,
      details: "17/20 занятий посещено"
    }
  ];

  const activityLog = [
    {
      date: "03.05.2025",
      activity: "Прошел тест 'История самбо'",
      score: "9/10"
    },
    {
      date: "01.05.2025",
      activity: "Посетил тренировку",
      score: null
    },
    {
      date: "28.04.2025",
      activity: "Изучил материал 'Техника бросков'",
      score: null
    },
    {
      date: "26.04.2025",
      activity: "Посетил тренировку",
      score: null
    },
    {
      date: "25.04.2025",
      activity: "Выполнил видеозадание",
      score: "Отлично"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {progressStats.map((stat) => (
          <Card key={stat.id} className="border-purple-100">
            <CardContent className="pt-6">
              <div className="flex items-center mb-2">
                <div className="p-2 rounded-full bg-white shadow mr-3">
                  {stat.icon}
                </div>
                <div>
                  <div className="font-medium">{stat.title}</div>
                  <div className="text-xs text-muted-foreground">{stat.details}</div>
                </div>
              </div>
              <Progress value={stat.progress} className="h-2" />
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="bg-white rounded-xl p-4 shadow-sm border border-purple-100">
        <div className="flex items-center mb-4">
          <TrendingUp className="h-5 w-5 text-primary mr-2" />
          <h3 className="font-bold">Недавняя активность</h3>
        </div>
        <div className="space-y-3">
          {activityLog.map((log, index) => (
            <div key={index}>
              <div className="flex justify-between items-center">
                <div className="flex items-start">
                  <div className="text-xs font-medium text-muted-foreground w-20">{log.date}</div>
                  <div className="text-sm">{log.activity}</div>
                </div>
                {log.score && (
                  <div className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full">
                    {log.score}
                  </div>
                )}
              </div>
              {index < activityLog.length - 1 && <Separator className="mt-3" />}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProgressStats;
