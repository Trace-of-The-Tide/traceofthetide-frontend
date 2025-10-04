import { Header } from "../components/header";
import { HeroSection } from "../components/hero-section";
import { HexagonalGrid } from "../components/hexagonal-grid";
import { ShareSection } from "../components/share-section";
import { Footer } from "../components/footer";
import Image from "next/image";

export default function OpenCall() {
  return (
    <main className="bg-black relative">
      <Header />
      <Image src="/Subtract.svg" className="absolute inset-0 w-full h-[100px] object-cover top-20 -bottom-30 left-0 z-1 opacity-60" alt="Background pattern" width={1440} height={214} />
      
      <Footer />
    </main>
  )
}
