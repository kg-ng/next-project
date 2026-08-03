import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Highlights from "@/components/Highlights";
import Stack from "@/components/Stack";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";
import { SECTION_ID } from "@/constants";

export default function Home() {
  return (
    <main className="relative min-h-screen pixel-bg text-white">
      <Nav />
      <div className="max-w-7xl w-full mx-auto sm:px-6 px-4">
        <Hero />
        <Stats />
        <div id={SECTION_ID.ABOUT}>
          <Highlights />
          <Stack />
        </div>
        <Experience />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
