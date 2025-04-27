
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-50 p-4">
      <div className="text-center max-w-md">
        <h1 className="text-4xl md:text-5xl font-bold mb-2 text-primary">Ой! 🤔</h1>
        <div className="mb-6 relative">
          <img 
            src="https://images.unsplash.com/photo-1625398407796-82650a8c9dd2?q=80&w=500&auto=format&fit=crop" 
            alt="Самбист" 
            className="w-40 h-40 object-cover rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
          />
        </div>
        <p className="text-xl mb-6">Страница, которую вы ищете, не найдена.</p>
        <Button asChild size="lg">
          <Link to="/">Вернуться на главную</Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
