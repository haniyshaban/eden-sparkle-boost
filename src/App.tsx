import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import GuardSync from "./pages/GuardSync";
import GuardSyncPrivacy from "./pages/GuardSyncPrivacy";
import LiveMap from "./pages/LiveMap";
import Dashboard from "./pages/Dashboard";
import SiteManagement from "./pages/SiteManagement";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="font-inter">
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/guardsync" element={<GuardSync />} />
            <Route path="/guardsync/privacy" element={<GuardSyncPrivacy />} />
            <Route path="/live-map" element={<LiveMap />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/site-management" element={<SiteManagement />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
