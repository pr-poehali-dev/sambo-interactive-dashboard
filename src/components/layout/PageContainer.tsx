
import { ReactNode } from "react";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import AppSidebar from "./AppSidebar";

interface PageContainerProps {
  title: string;
  subtitle?: string;
  activePath: string;
  children: ReactNode;
}

export function PageContainer({ title, subtitle, activePath, children }: PageContainerProps) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen bg-blue-50">
        <AppSidebar activePath={activePath} />
        
        <SidebarInset className="bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="container p-4 md:p-6 mx-auto">
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {title}
              </h1>
              {subtitle && (
                <p className="text-lg text-muted-foreground">
                  {subtitle}
                </p>
              )}
            </div>
            
            {children}
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}

export default PageContainer;
