import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { EdenMark } from "@/components/EdenMark";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-6">
      <div className="text-center">
        <EdenMark className="mx-auto h-16 w-16 text-sage" />
        <h1 className="heading-lg mt-8 text-ink">This page doesn't exist.</h1>
        <p className="mt-4 text-graphite">The link may be old or mistyped.</p>
        <a href="/" className="btn-ink mt-8">
          Go to the home page
        </a>
      </div>
    </div>
  );
};

export default NotFound;
