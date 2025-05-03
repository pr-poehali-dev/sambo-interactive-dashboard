import { User, Phone, Mail, Award, Calendar } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function CoachInfo() {
  return (
    <div className="space-y-4">
      <div className="flex items-center">
        <Avatar className="h-14 w-14 mr-4 border-2 border-primary">
          <AvatarImage 
            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=2080&auto=format&fit=crop" 
            alt="Михаил Петрович" 
          />
          <AvatarFallback>МП</AvatarFallback>
        </Avatar>
        <div>
          <h3 className="font-bold text-lg">Михаил Петрович</h3>
          <div className="flex items-center text-sm text-muted-foreground">
            <Award className="h-4 w-4 mr-1 text-primary" />
            Мастер спорта по самбо
          </div>
        </div>
      </div>
      
      <div className="space-y-2 text-sm">
        <div className="flex items-center">
          <User className="h-4 w-4 mr-2 text-muted-foreground" />
          <span>Стаж тренерской работы: 15 лет</span>
        </div>
        <div className="flex items-center">
          <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
          <span>Тренирует: Пн, Ср, Пт</span>
        </div>
        <div className="flex items-center">
          <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
          <span>+7 (900) 123-45-67</span>
        </div>
        <div className="flex items-center">
          <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
          <span>coach@sambo-interactive.ru</span>
        </div>
      </div>
      
      <Button variant="outline" className="w-full mt-2">Написать тренеру</Button>
      
      <Card className="bg-blue-50 border-blue-200 p-3 text-sm">
        <p className="text-blue-700 mb-2">
          <strong>Совет тренера:</strong>
        </p>
        <p className="text-blue-600 italic">
          "Не забывай каждый день делать упражнения на растяжку, которые мы изучили на последней тренировке!"
        </p>
      </Card>
    </div>
  );
}

export default CoachInfo;
