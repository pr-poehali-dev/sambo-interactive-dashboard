
import { PenSquare, Camera, Upload } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface ProfileAvatarProps {
  name: string;
  age: string;
  photoUrl: string;
}

export function ProfileAvatar({ name, age, photoUrl }: ProfileAvatarProps) {
  return (
    <div className="flex flex-col items-center">
      <div className="relative mb-4">
        <Avatar className="w-32 h-32 border-4 border-purple-200">
          <AvatarImage src={photoUrl} alt={name} />
          <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <button className="absolute -bottom-1 right-0 bg-primary text-white rounded-full p-2 shadow-md hover:bg-primary/90 transition-colors">
          <PenSquare size={18} />
        </button>
      </div>
      <h2 className="text-xl font-bold text-center mb-1">{name}</h2>
      <p className="text-muted-foreground text-center mb-4">{age}</p>
      
      <div className="w-full space-y-4 mt-2">
        <Button className="w-full flex items-center justify-center gap-2">
          <Camera size={16} />
          Добавить фото
        </Button>
        <Button variant="outline" className="w-full flex items-center justify-center gap-2">
          <Upload size={16} />
          Загрузить видео
        </Button>
      </div>
    </div>
  );
}

export default ProfileAvatar;
