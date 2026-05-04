import { SEO } from './components/layout/SEO';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { PrecisionGraft } from './components/sections/PrecisionGraft';
import { Stats } from './components/sections/Stats';
import { CTASection } from './components/sections/CTASection';
import { Footer } from './components/layout/Footer';

function App() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-primary selection:text-black">
      <SEO />
      <Navbar />
      
      <main>
        <Hero />
        <Stats />
        <PrecisionGraft />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}

export default App;
