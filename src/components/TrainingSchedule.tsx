
import { CalendarDays, Clock, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const trainings = [
  {
    id: 1,
    date: "Сегодня, 27 апреля",
    time: "16:00 - 17:30",
    location: "Спортзал «Олимпиец»"
  },
  {
    id: 2,
    date: "Среда, 1 мая",
    time: "15:30 - 17:00",
    location: "Спортзал «Олимпиец»"
  },
  {
    id: 3,
    date: "Пятница, 3 мая",
    time: "16:00 - 17:30",
    location: "Спортзал «Олимпиец»"
  }
];

export const TrainingSchedule = () => {
  return (
    <div className="space-y-3">
      {trainings.map((training, index) => (
        <div key={training.id}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between py-2">
            <div className="flex items-center mb-2 sm:mb-0">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center mr-3 ${index === 0 ? 'bg-primary/20 text-primary' : 'bg-muted'}`}>
                <CalendarDays size={20} />
              </div>
              <div>
                <h3 className={`font-semibold ${index === 0 ? 'text-primary' : ''}`}>{training.date}</h3>
                <div className="flex items-center text-sm text-muted-foreground mt-1">
                  <Clock className="mr-1 h-4 w-4" />
                  <span>{training.time}</span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center sm:flex-shrink-0 ml-10 sm:ml-0 text-sm">
              <MapPin className="h-4 w-4 mr-1 text-muted-foreground" />
              <span className="text-muted-foreground">{training.location}</span>
            </div>
          </div>
          {index < trainings.length - 1 && <Separator />}
        </div>
      ))}
    </div>
  );
};
