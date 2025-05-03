
import { useState } from "react";
import { Search } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import PageContainer from "@/components/layout/PageContainer";

const MaterialCard = ({ title, description, category, image, isNew = false }: { 
  title: string; 
  description: string; 
  category: string; 
  image: string;
  isNew?: boolean;
}) => (
  <Card className="overflow-hidden hover:shadow-xl transition-shadow border-purple-200 h-full">
    <div className="aspect-video overflow-hidden bg-muted">
      <img 
        src={image} 
        alt={title}
        className="w-full h-full object-cover transition-transform hover:scale-105"
      />
    </div>
    <CardHeader className="pb-2">
      <div className="flex justify-between items-start">
        <CardTitle className="text-lg font-bold">{title}</CardTitle>
        {isNew && <Badge className="bg-primary">Новое</Badge>}
      </div>
      <div className="text-xs text-muted-foreground">{category}</div>
    </CardHeader>
    <CardContent>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>
      <Button variant="outline" size="sm" className="w-full">
        Открыть материал
      </Button>
    </CardContent>
  </Card>
);

const Materials = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const materials = [
    {
      id: 1,
      title: "Основатели самбо в России",
      description: "История создания самбо и биографии трех великих основателей: Спиридонова В.А., Ощепкова В.С. и Харлампиева А.А.",
      category: "Теория",
      image: "https://images.unsplash.com/photo-1581617427892-467e4702f03d?q=80&w=2070&auto=format&fit=crop",
      type: "theory",
      isNew: true
    },
    {
      id: 2,
      title: "Основы стойки в самбо",
      description: "Изучение правильной стойки и положения тела для эффективной борьбы.",
      category: "Теория",
      image: "https://images.unsplash.com/photo-1555597673-b21d5c935865?q=80&w=2142&auto=format&fit=crop",
      type: "theory"
    },
    {
      id: 3,
      title: "Техника задней подножки",
      description: "Подробный разбор одного из основных приемов самбо с пошаговой демонстрацией.",
      category: "Техника бросков",
      image: "https://images.unsplash.com/photo-1591117207239-788bf8de6c3b?q=80&w=2073&auto=format&fit=crop",
      type: "technique"
    },
    {
      id: 4,
      title: "Видеоурок: защита от захвата",
      description: "Практический урок по защите от разных типов захватов с разбором ошибок.",
      category: "Видеоматериалы",
      image: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=2007&auto=format&fit=crop",
      type: "video"
    },
    {
      id: 5,
      title: "Правила соревнований по самбо",
      description: "Обзор основных правил и регламента соревнований по спортивному самбо.",
      category: "Теория",
      image: "https://images.unsplash.com/photo-1553034545-32d4f2b942cd?q=80&w=2070&auto=format&fit=crop",
      type: "theory"
    },
    {
      id: 6,
      title: "Бросок через бедро",
      description: "Техника выполнения броска через бедро с разбором типичных ошибок начинающих.",
      category: "Техника бросков",
      image: "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?q=80&w=2069&auto=format&fit=crop",
      type: "technique"
    },
    {
      id: 7,
      title: "Мастер-класс от чемпиона",
      description: "Эксклюзивный видеоурок от чемпиона России по самбо с демонстрацией приемов.",
      category: "Видеоматериалы",
      image: "https://images.unsplash.com/photo-1585652757173-57de5e1f3abe?q=80&w=2070&auto=format&fit=crop",
      type: "video",
      isNew: true
    }
  ];

  const filteredMaterials = materials.filter(material => 
    material.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    material.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <PageContainer
      title="Учебные материалы 📚"
      subtitle="Изучай теорию, технику бросков и смотри видеоуроки"
      activePath="/materials"
    >
      {/* Поиск по материалам */}
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Поиск материалов..."
          className="pl-9 bg-white border-purple-200"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      {/* Вкладки по категориям */}
      <Tabs defaultValue="all" className="mb-6">
        <TabsList className="mb-4 bg-blue-100/50 border border-purple-200">
          <TabsTrigger value="all" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Все материалы
          </TabsTrigger>
          <TabsTrigger value="theory" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Теория
          </TabsTrigger>
          <TabsTrigger value="technique" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Техника бросков
          </TabsTrigger>
          <TabsTrigger value="video" className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
            Видеоматериалы
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMaterials.map(material => (
              <MaterialCard key={material.id} {...material} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="theory" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMaterials
              .filter(material => material.type === "theory")
              .map(material => (
                <MaterialCard key={material.id} {...material} />
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="technique" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMaterials
              .filter(material => material.type === "technique")
              .map(material => (
                <MaterialCard key={material.id} {...material} />
              ))}
          </div>
        </TabsContent>
        
        <TabsContent value="video" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMaterials
              .filter(material => material.type === "video")
              .map(material => (
                <MaterialCard key={material.id} {...material} />
              ))}
          </div>
        </TabsContent>
      </Tabs>
    </PageContainer>
  );
};

export default Materials;
