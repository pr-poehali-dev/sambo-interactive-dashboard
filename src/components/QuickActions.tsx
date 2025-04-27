
import { BookOpen, Video, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const QuickActions = () => {
  const actions = [
    {
      title: "Учебные материалы",
      description: "Теория и техника самбо",
      icon: <BookOpen className="h-6 w-6 text-primary" />,
      link: "/materials",
      color: "bg-blue-100"
    },
    {
      title: "Видеозадания",
      description: "Новые задания для отработки",
      icon: <Video className="h-6 w-6 text-primary" />,
      link: "/videos",
      color: "bg-purple-100"
    },
    {
      title: "Сообщения",
      description: "Чат с тренером",
      icon: <MessageCircle className="h-6 w-6 text-primary" />,
      link: "/messages",
      color: "bg-green-100"
    }
  ];
  
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow border-purple-200">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold">Быстрые действия</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-3">
          {actions.map((action, index) => (
            <Link 
              key={index} 
              to={action.link}
              className="flex items-center p-3 rounded-lg hover:bg-muted transition-colors"
            >
              <div className={`w-12 h-12 ${action.color} rounded-lg flex items-center justify-center mr-4`}>
                {action.icon}
              </div>
              <div>
                <h3 className="font-medium">{action.title}</h3>
                <p className="text-sm text-muted-foreground">{action.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
