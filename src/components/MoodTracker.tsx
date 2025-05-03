
import { useState } from "react";
import { SmilePlus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Mood {
  emoji: string;
  label: string;
  selected?: boolean;
}

export function MoodTracker() {
  const [moods, setMoods] = useState<Mood[]>([
    { emoji: "😃", label: "Отлично" },
    { emoji: "🙂", label: "Хорошо" },
    { emoji: "😐", label: "Нормально" },
    { emoji: "😔", label: "Грустно" },
    { emoji: "😫", label: "Устал" }
  ]);
  
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  
  const handleMoodSelect = (index: number) => {
    if (selectedMood === moods[index].emoji) {
      setSelectedMood(null);
    } else {
      setSelectedMood(moods[index].emoji);
    }
  };

  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow border-purple-200">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-xl font-bold">
          <SmilePlus className="mr-2 h-5 w-5 text-primary" />
          Как настроение сегодня?
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-5 gap-2 mb-4">
          {moods.map((mood, index) => (
            <Button
              key={index}
              variant="outline"
              className={`h-auto py-2 flex flex-col items-center justify-center transition-all
                ${selectedMood === mood.emoji ? 'ring-2 ring-primary bg-primary/5' : 'hover:bg-primary/5'}`}
              onClick={() => handleMoodSelect(index)}
            >
              <span className="text-2xl mb-1">{mood.emoji}</span>
              <span className="text-xs">{mood.label}</span>
            </Button>
          ))}
        </div>
        
        <Button 
          className="w-full" 
          disabled={!selectedMood}
        >
          Сохранить настроение
        </Button>
      </CardContent>
    </Card>
  );
}

export default MoodTracker;
