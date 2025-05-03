
import { Medal, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Award {
  icon: string;
  bgColor: string;
  textColor: string;
  name: string;
}

interface SkillRating {
  name: string;
  rating: number;
}

interface AchievementsProps {
  awards: Award[];
  physicalSkills: SkillRating[];
  technicalSkills: SkillRating[];
}

export function Achievements({ awards, physicalSkills, technicalSkills }: AchievementsProps) {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow border-purple-200">
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center text-xl font-bold">
          <Medal className="mr-2 h-5 w-5 text-primary" />
          Достижения
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Последние награды</AccordionTrigger>
            <AccordionContent>
              <div className="grid grid-cols-3 gap-4 py-2">
                {awards.map((award, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div className={`w-14 h-14 ${award.bgColor} rounded-full flex items-center justify-center mb-1`}>
                      <span className={`${award.textColor} text-xl`}>{award.icon}</span>
                    </div>
                    <span className="text-xs text-center">{award.name}</span>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2">
            <AccordionTrigger>Физическая подготовка</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {physicalSkills.map((skill, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span>{skill.name}</span>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star 
                          key={starIndex} 
                          size={16} 
                          className={`${starIndex < skill.rating ? "text-yellow-500 fill-yellow-500" : "text-muted"}`} 
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3">
            <AccordionTrigger>Техническая подготовка</AccordionTrigger>
            <AccordionContent>
              <div className="space-y-2">
                {technicalSkills.map((skill, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span>{skill.name}</span>
                    <div className="flex">
                      {Array.from({ length: 5 }).map((_, starIndex) => (
                        <Star 
                          key={starIndex} 
                          size={16} 
                          className={`${starIndex < skill.rating ? "text-yellow-500 fill-yellow-500" : "text-muted"}`} 
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}

export default Achievements;
