
import { Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface CoachProps {
  name: string;
  title: string;
  rating: number;
  photoUrl: string;
}

export function CoachInfo({ name, title, rating, photoUrl }: CoachProps) {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow border-purple-200">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-xl font-bold">
          <Star className="mr-2 h-5 w-5 text-primary" />
          Мой тренер
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="flex items-center">
          <Avatar className="w-16 h-16 mr-4">
            <AvatarImage src={photoUrl} alt={name} />
            <AvatarFallback>{name.split(' ').map(n => n[0]).join('').slice(0, 2)}</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-bold text-lg">{name}</h3>
            <p className="text-muted-foreground">{title}</p>
            <div className="flex items-center mt-1">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star 
                    key={index} 
                    size={16} 
                    className={`${index < rating ? "text-yellow-500 fill-yellow-500" : "text-muted"}`} 
                  />
                ))}
              </div>
              <span className="text-sm ml-2">{rating}.0</span>
            </div>
          </div>
          <Button className="ml-auto" variant="outline">
            Связаться
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default CoachInfo;
