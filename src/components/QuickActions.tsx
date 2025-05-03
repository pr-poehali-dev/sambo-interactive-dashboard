
import { Link } from "react-router-dom";
import { Bell, Calendar, BookOpen, Video, Award } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function QuickActions() {
  const actions = [
    {
      icon: <BookOpen className="h-5 w-5 text-primary" />,
      text: "К учебным материалам",
      path: "/materials",
      notification: "2 новых"
    },
    {
      icon: <Video className="h-5 w-5 text-primary" />,
      text: "Видеозадания",
      path: "/videos",
      notification: null
    },
    {
      icon: <Award className="h-5 w-5 text-primary" />,
      text: "Мои достижения",
      path: "/progress",
      notification: "1 новое"
    },
    {
      icon: <Calendar className="h-5 w-5 text-primary" />,
      text: "Календарь занятий",
      path: "/calendar",
      notification: null
    },
  ];

  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow border-purple-200">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-xl font-bold">
          <Bell className="mr-2 h-5 w-5 text-primary" />
          Быстрые действия
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          {actions.map((action, index) => (
            <Button 
              key={index}
              variant="outline" 
              className="h-auto py-4 flex flex-col items-center justify-center hover:bg-primary/5 hover:border-primary/30"
              asChild
            >
              <Link to={action.path}>
                <div className="relative">
                  {action.icon}
                  {action.notification && (
                    <Badge className="absolute -top-2 -right-2 h-5 min-w-5 px-1 flex items-center justify-center text-xs">
                      {action.notification}
                    </Badge>
                  )}
                </div>
                <span className="mt-2 text-xs font-medium">{action.text}</span>
              </Link>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default QuickActions;
