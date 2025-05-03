
import { Link } from "react-router-dom";
import { Video, BookOpen, Trophy, User } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function QuickActions() {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow border-purple-200">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-xl font-bold">
          <Trophy className="mr-2 h-5 w-5 text-primary" />
          Быстрые действия
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3">
          <Button asChild variant="outline" className="flex items-center justify-start p-3 h-auto">
            <Link to="/profile" className="flex flex-col items-center text-center">
              <User className="h-6 w-6 mb-2 text-primary" />
              <span className="text-sm">Мой профиль</span>
            </Link>
          </Button>
          <Button asChild variant="outline" className="flex items-center justify-start p-3 h-auto">
            <Link to="/materials" className="flex flex-col items-center text-center">
              <BookOpen className="h-6 w-6 mb-2 text-primary" />
              <span className="text-sm">Учебник</span>
            </Link>
          </Button>
          <Button asChild variant="outline" className="flex items-center justify-start p-3 h-auto">
            <Link to="/tests" className="flex flex-col items-center text-center">
              <Trophy className="h-6 w-6 mb-2 text-primary" />
              <span className="text-sm">Тесты</span>
            </Link>
          </Button>
          <Button asChild variant="outline" className="flex items-center justify-start p-3 h-auto">
            <Link to="/videos" className="flex flex-col items-center text-center">
              <Video className="h-6 w-6 mb-2 text-primary" />
              <span className="text-sm">Видео</span>
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
