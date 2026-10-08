import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const SiteManagement = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Header />
    <main className="container mx-auto px-6 py-24">
      <h1 className="text-3xl font-bold mb-4">Site Management (MVP)</h1>
      <p className="text-foreground-muted">Site management tools will be available here.</p>
    </main>
    <Footer />
  </div>
);

export default SiteManagement;
