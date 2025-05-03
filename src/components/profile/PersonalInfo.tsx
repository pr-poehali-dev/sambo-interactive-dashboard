
import { User, ChevronRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface PersonalInfoProps {
  name: string;
  age: string;
  level?: string;
}

export function PersonalInfo({ name, age, level = "Начинающий" }: PersonalInfoProps) {
  const infoItems = [
    { label: "Имя и фамилия", value: name },
    { label: "Возраст", value: age },
    { label: "Уровень подготовки", value: level },
  ];

  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow border-purple-200">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-xl font-bold">
          <User className="mr-2 h-5 w-5 text-primary" />
          Личная информация
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          {infoItems.map((item, index) => (
            <div key={index}>
              {index > 0 && <Separator className="my-4" />}
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="font-medium">{item.label}</h3>
                  <p className="text-muted-foreground">{item.value}</p>
                </div>
                <Button variant="ghost" size="icon">
                  <ChevronRight size={18} />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

export default PersonalInfo;
