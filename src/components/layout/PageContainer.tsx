
import { ReactNode } from "react";
import Navbar from "./Navbar";

interface PageContainerProps {
  title: string;
  subtitle?: string;
  activePath: string;
  children: ReactNode;
}

export function PageContainer({ title, subtitle, activePath, children }: PageContainerProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex flex-col">
      <Navbar activePath={activePath} />
      
      <main className="flex-1">
        <div className="container mx-auto p-4 md:p-6">
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
      </main>
    </div>
  );
}

export default PageContainer;
