import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-background">
      <div className="portfolio-card text-center max-w-md mx-4">
        <div className="space-y-6">
          <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
            <span className="text-4xl font-bold text-primary">404</span>
          </div>
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-foreground">Page Not Found</h1>
            <p className="text-muted-foreground">
              The page you're looking for doesn't exist or has been moved.
            </p>
          </div>
          <a
            href="/"
            className="portfolio-button inline-flex items-center justify-center"
          >
            Return to Portfolio
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
