import { Grid } from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Testimonials, { Clients } from "@/components/Clients";
import { FloatingNav } from "@/components/UI/FloatingNav";
import { navItems } from "@/data";
import { FaHome } from "react-icons/fa";
import Experiences from "@/components/Experiences";

export default function Home() {
  return (
    <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 bg-black/90">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Clients />
        <Experiences />
      </div>
    </main>
  );
}
