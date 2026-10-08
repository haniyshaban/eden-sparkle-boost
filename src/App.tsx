import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import GuardSync from "./pages/GuardSync";
import GuardSyncPrivacy from "./pages/GuardSyncPrivacy";
import NotFound from "./pages/NotFound";
import { ScrollManager } from "./components/ScrollManager";

const queryClient = new QueryClient();

const Providers = ({ children }: { children: ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="font-inter">
        <Toaster />
        <Sonner />
        {children}
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

/** The pages. Used by the browser app below and by the build-time renderer (entry-server.tsx). */
export const AppRoutes = () => (
  <>
    <ScrollManager />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/guardsync" element={<GuardSync />} />
      <Route path="/guardsync/privacy" element={<GuardSyncPrivacy />} />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  </>
);

export const AppShell = Providers;

const App = () => (
  <Providers>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </Providers>
);

export default App;
