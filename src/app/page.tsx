import { Header } from "./components/header";
import { HeroSection } from "./components/hero-section";
import { HexagonalGrid } from "./components/hexagonal-grid";
import { ShareSection } from "./components/share-section";
import { Footer } from "./components/footer";
import CollectiveForm from "./components/CollectiveForm";


export default function Home() {
  return (
    <main className="bg-black">
      <Header />
      <HeroSection />
      <HexagonalGrid />
      <ShareSection />
      <Footer />
    </main>
  );
}
