import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Aanpak from "@/components/Aanpak";
import Diensten from "@/components/Diensten";
import Team from "@/components/Team";
import Reviews from "@/components/Reviews";
import Tarieven from "@/components/Tarieven";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Aanpak />
        <Diensten />
        <Team />
        <Reviews />
        <Tarieven />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
