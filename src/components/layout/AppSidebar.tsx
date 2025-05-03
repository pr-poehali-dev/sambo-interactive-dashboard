
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
} from "lucide-react";
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarTrigger
} from "@/components/ui/sidebar";

interface SidebarLink {
  icon: ReactNode;
  text: string;
  path: string;
  active?: boolean;
}

interface AppSidebarProps {
  activePath: string;
}

export function AppSidebar({ activePath }: AppSidebarProps) {
  const sidebarLinks: SidebarLink[] = [
    { 
      icon: <User size={20} className="mr-2" />, 
      text: "Главная", 
      path: "/", 
      active: activePath === "/"
    },
    { 
      icon: <User size={20} className="mr-2" />, 
      text: "Профиль", 
      path: "/profile", 
      active: activePath === "/profile"
    },
    { 
      icon: <BookOpen size={20} className="mr-2" />, 
      text: "Учебные материалы", 
      path: "/materials", 
      active: activePath === "/materials"
    },
    { 
      icon: <Trophy size={20} className="mr-2" />, 
      text: "Тесты знаний", 
      path: "/tests", 
      active: activePath === "/tests"
    },
    { 
      icon: <Video size={20} className="mr-2" />, 
      text: "Видеозадания", 
      path: "/videos", 
      active: activePath === "/videos"
    },
    { 
      icon: <TrendingUp size={20} className="mr-2" />, 
      text: "Мой прогресс", 
      path: "/progress", 
      active: activePath === "/progress"
    },
    { 
      icon: <MessageCircle size={20} className="mr-2" />, 
      text: "Сообщения", 
      path: "/messages", 
      active: activePath === "/messages"
    },
    { 
      icon: <Medal size={20} className="mr-2" />, 
      text: "Челленджи и награды", 
      path: "/challenges", 
      active: activePath === "/challenges"
    },
  ];

  return (
    <Sidebar className="border-r border-sidebar-border">
      <SidebarHeader className="py-4">
        <div className="flex items-center px-2">
          <div className="w-10 h-10 rounded-full overflow-hidden mr-2">
            <img 
              src="https://cdn.poehali.dev/files/baf855b2-c5ad-4663-907b-199d6add808c.png" 
              alt="Самбо эмблема" 
              className="w-full h-full object-contain" 
            />
          </div>
          <div>
            <h2 className="text-lg font-bold">Самбо-Интерактив</h2>
          </div>
          <SidebarTrigger className="ml-auto" />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {sidebarLinks.map((link, index) => (
            <SidebarMenuItem key={index}>
              <SidebarMenuButton 
                asChild 
                tooltip={link.text} 
                isActive={link.active}
              >
                <Link to={link.path} className="flex items-center">
                  {link.icon}
                  <span>{link.text}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}

export default AppSidebar;
