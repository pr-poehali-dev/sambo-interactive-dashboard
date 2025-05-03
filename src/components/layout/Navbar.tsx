
import { ReactNode } from "react";
import { Link } from "react-router-dom";
import {
  User,
  BookOpen,
  Video,
  MessageCircle,
  Medal,
  TrendingUp,
  Trophy,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

interface NavLink {
  icon: ReactNode;
  text: string;
  path: string;
  active?: boolean;
}

interface NavbarProps {
  activePath: string;
}

export function Navbar({ activePath }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: NavLink[] = [
    { 
      icon: <User size={18} className="mr-1" />, 
      text: "Главная", 
      path: "/", 
      active: activePath === "/"
    },
    { 
      icon: <User size={18} className="mr-1" />, 
      text: "Профиль", 
      path: "/profile", 
      active: activePath === "/profile"
    },
    { 
      icon: <BookOpen size={18} className="mr-1" />, 
      text: "Учебные материалы", 
      path: "/materials", 
      active: activePath === "/materials"
    },
    { 
      icon: <Trophy size={18} className="mr-1" />, 
      text: "Тесты", 
      path: "/tests", 
      active: activePath === "/tests"
    },
    { 
      icon: <Video size={18} className="mr-1" />, 
      text: "Видео", 
      path: "/videos", 
      active: activePath === "/videos"
    },
    { 
      icon: <TrendingUp size={18} className="mr-1" />, 
      text: "Прогресс", 
      path: "/progress", 
      active: activePath === "/progress"
    },
    { 
      icon: <MessageCircle size={18} className="mr-1" />, 
      text: "Сообщения", 
      path: "/messages", 
      active: activePath === "/messages"
    },
    { 
      icon: <Medal size={18} className="mr-1" />, 
      text: "Награды", 
      path: "/challenges", 
      active: activePath === "/challenges"
    },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-purple-100 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Логотип */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/files/baf855b2-c5ad-4663-907b-199d6add808c.png" 
                alt="Самбо эмблема" 
                className="w-full h-full object-contain" 
              />
            </div>
            <span className="font-bold text-lg hidden md:block">Самбо-Интерактив</span>
          </div>
          
          {/* Десктопное меню */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <Link 
                key={index}
                to={link.path}
                className={`flex items-center px-3 py-2 text-sm rounded-md transition-colors
                  ${link.active 
                    ? 'bg-primary text-white font-medium'
                    : 'hover:bg-primary/10 text-gray-700'
                  }`}
              >
                {link.icon}
                <span>{link.text}</span>
              </Link>
            ))}
          </nav>
          
          {/* Мобильное меню */}
          <div className="flex md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-9 w-9">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Открыть меню</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] sm:w-[300px] pt-10">
                <nav className="flex flex-col gap-2 mt-4">
                  {navLinks.map((link, index) => (
                    <Link 
                      key={index}
                      to={link.path}
                      className={`flex items-center px-3 py-2 text-sm rounded-md transition-colors
                        ${link.active 
                          ? 'bg-primary text-white font-medium'
                          : 'hover:bg-primary/10 text-gray-700'
                        }`}
                    >
                      {link.icon}
                      <span>{link.text}</span>
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
