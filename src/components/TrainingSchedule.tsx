
import { Calendar, Clock, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

interface TrainingEvent {
  id: number;
  day: string;
  time: string;
  title: string;
  location: string;
  trainer: string;
  isUpcoming: boolean;
}

export function TrainingSchedule() {
  const trainings: TrainingEvent[] = [
    {
      id: 1,
      day: "Понедельник",
      time: "16:30 - 18:00",
      title: "Техника бросков",
      location: "Зал №2",
      trainer: "Андрей Петрович",
      isUpcoming: true
    },
    {
      id: 2,
      day: "Среда",
      time: "17:00 - 18:30",
      title: "Отработка захватов",
      location: "Зал №1",
      trainer: "Сергей Михайлович",
      isUpcoming: false
    },
    {
      id: 3,
      day: "Пятница",
      time: "16:30 - 18:00",
      title: "Спарринги",
      location: "Зал №2",
      trainer: "Андрей Петрович",
      isUpcoming: false
    },
  ];

  return (
    <div className="space-y-4">
      {trainings.map((training, index) => (
        <div key={training.id}>
          <div className={`p-3 rounded-lg ${training.isUpcoming ? 'bg-primary/10 border border-primary/20' : 'bg-background'}`}>
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-medium text-base">
                  {training.title}
                  {training.isUpcoming && <span className="text-xs ml-2 bg-primary text-white py-0.5 px-1.5 rounded-full">Ближайшая</span>}
                </h3>
                <div className="text-sm text-muted-foreground">{training.trainer}</div>
              </div>
              <div className="text-right">
                <div className="flex items-center text-sm font-medium">
                  <Calendar className="h-4 w-4 mr-1 text-primary" />
                  {training.day}
                </div>
                <div className="flex items-center text-sm text-muted-foreground mt-1">
                  <Clock className="h-4 w-4 mr-1" />
                  {training.time}
                </div>
              </div>
            </div>
            
            <div className="mt-2 flex items-center text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 mr-1" />
              {training.location}
            </div>
            
            {training.isUpcoming && (
              <div className="mt-3">
                <Button size="sm" className="w-full">Записаться</Button>
              </div>
            )}
          </div>
          
          {index < trainings.length - 1 && <Separator className="my-3" />}
        </div>
      ))}
    </div>
  );
}

export default TrainingSchedule;
