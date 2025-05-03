import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { ru } from "date-fns/locale";
import { cn } from "@/lib/utils";
import { useState } from "react";

export function PersonalInfo() {
  const [birthDate, setBirthDate] = useState<Date | undefined>(new Date(2014, 0, 15)); // 15 января 2014 года

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="firstName">Имя</Label>
          <Input id="firstName" placeholder="Имя" defaultValue="Алексей" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="lastName">Фамилия</Label>
          <Input id="lastName" placeholder="Фамилия" defaultValue="Иванов" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="dob">Дата рождения</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !birthDate && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {birthDate ? (
                  format(birthDate, "PPP", { locale: ru })
                ) : (
                  <span>Выберите дату</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={birthDate}
                onSelect={setBirthDate}
                initialFocus
                locale={ru}
              />
            </PopoverContent>
          </Popover>
        </div>
        <div className="space-y-2">
          <Label htmlFor="group">Группа</Label>
          <Input id="group" placeholder="Группа" defaultValue="Юниоры-2" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="phone">Телефон</Label>
          <Input id="phone" placeholder="Телефон" defaultValue="+7 (900) 123-45-67" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Электронная почта</Label>
          <Input id="email" placeholder="Электронная почта" defaultValue="alexey@example.com" />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="address">Адрес</Label>
        <Input id="address" placeholder="Адрес" defaultValue="ул. Примерная, д. 123, кв. 45" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="emergencyContact">Экстренный контакт</Label>
        <Input 
          id="emergencyContact" 
          placeholder="Имя и телефон контактного лица" 
          defaultValue="Иванова Мария (мама): +7 (900) 987-65-43" 
        />
      </div>

      <div className="pt-4 flex justify-end">
        <Button>Сохранить изменения</Button>
      </div>
    </div>
  );
}

export default PersonalInfo;
