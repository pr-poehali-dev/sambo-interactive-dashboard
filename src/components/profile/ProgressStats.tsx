
import { TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface StatsItem {
  label: string;
  value: number;
  icon?: string;
}

interface ProgressStatsProps {
  progressItems: Array<{label: string, value: number}>;
  statsItems: StatsItem[];
}

export function ProgressStats({ progressItems, statsItems }: ProgressStatsProps) {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow border-purple-200">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-xl font-bold">
          <TrendingUp className="mr-2 h-5 w-5 text-primary" />
          Прогресс обучения
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          {progressItems.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-sm font-medium">{item.label}</span>
                <span className="text-sm font-medium">{item.value}%</span>
              </div>
              <Progress value={item.value} className="h-2" />
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-3 gap-4 mt-6">
          {statsItems.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-bold text-primary">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default ProgressStats;
