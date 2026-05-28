import { Hero } from '../components/Hero';
import { InteractiveMap } from '../components/InteractiveMap';
import { CultureSection } from '../components/CultureSection';
import { Footer } from '../components/Footer';

export function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <InteractiveMap />
      <CultureSection />
      <Footer />
    </div>
  );
}
