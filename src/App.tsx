import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SectionHeader } from "@/components/layout/section-header";
import { copy } from "@/config";
import { AlternativesList } from "@/features/alternatives/components";
import { SuggestAlternativeForm } from "@/features/suggestions/components/suggest-alternative-form";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 transition-colors duration-200">
      <div className="mx-auto max-w-6xl">
        <Header />

        <main className="px-4 pb-24 pt-8 md:px-6 md:pt-12">
          <SectionHeader
            title={copy.pages.home.title}
            description={copy.pages.home.description}
            action={<SuggestAlternativeForm />}
          />

          <AlternativesList />
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
