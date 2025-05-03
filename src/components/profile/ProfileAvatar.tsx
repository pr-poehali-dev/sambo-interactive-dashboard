import { Camera, Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function ProfileAvatar() {
  return (
    <div className="relative">
      <div className="flex flex-col items-center">
        <div className="relative group">
          <Avatar className="h-28 w-28 border-4 border-primary">
            <AvatarImage 
              src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=2070&auto=format&fit=crop" 
              alt="Алексей" 
            />
            <AvatarFallback>АИ</AvatarFallback>
          </Avatar>
          <button className="absolute bottom-0 right-0 bg-primary text-white p-1.5 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity">
            <Camera size={16} />
          </button>
        </div>
        
        <div className="mt-4 text-center">
          <h2 className="text-2xl font-bold">Алексей Иванов</h2>
          <p className="text-muted-foreground">Группа: Юниоры-2</p>
          <div className="flex justify-center space-x-2 mt-2">
            <Badge variant="outline" className="bg-blue-100 hover:bg-blue-200">10 лет</Badge>
            <Badge variant="outline" className="bg-green-100 hover:bg-green-200">Начинающий</Badge>
          </div>
        </div>
      </div>
      
      <Button 
        variant="outline" 
        size="sm" 
        className="absolute top-0 right-0 p-2 h-8 w-8"
      >
        <Settings size={16} />
        <span className="sr-only">Настройки профиля</span>
      </Button>
    </div>
  );
}

export default ProfileAvatar;
