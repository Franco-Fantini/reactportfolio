import { Grid } from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/UI/FloatingNav";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
  <main className="relative flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 bg-black/90">
    <div className="max-w-7xl w-full">
    <FloatingNav
    navItems={[{name: 'Home', link : '/', icon:<FaHome />}]} />
    <Hero/>
    <Grid />
    </div>
  </main>
  );
}
