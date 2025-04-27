
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const MoodTracker = () => {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  
  const moods = [
    { emoji: "😀", label: "Отлично" },
    { emoji: "🙂", label: "Хорошо" },
    { emoji: "😐", label: "Нормально" },
    { emoji: "😟", label: "Не очень" },
    { emoji: "😞", label: "Плохо" }
  ];
  
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow border-purple-200">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold">Как твое настроение сегодня?</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-center mb-4">
          <div className="flex justify-between mb-6 px-4">
            {moods.map((mood) => (
              <button
                key={mood.emoji}
                onClick={() => setSelectedMood(mood.emoji)}
                className={`flex flex-col items-center ${selectedMood === mood.emoji ? 'scale-125 transition-transform' : ''}`}
              >
                <span className="text-2xl mb-1">{mood.emoji}</span>
                <span className="text-xs">{mood.label}</span>
              </button>
            ))}
          </div>
          
          <Button 
            className="w-full" 
            disabled={!selectedMood}
          >
            Сохранить настроение
          </Button>
          
          <p className="text-xs text-muted-foreground mt-2">
            Отслеживай свое настроение до и после тренировки
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
