import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SectionHeader } from "@/components/layout/section-header";
import { siteConfig } from "@/config/site";
import { AlternativesList } from "@/features/alternatives/components";
import { SuggestAlternativeForm } from "@/features/suggestions/components/suggest-alternative-form";

function App() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-8">
      <Header />

      <main>
        <SectionHeader
          title="Social Media Alternatives"
          description={siteConfig.tagline}
          action={<SuggestAlternativeForm />}
        />

        <AlternativesList />
      </main>

      <Footer />
    </div>
  );
}

export default App;
