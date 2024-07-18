import Image from "next/image";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Socials from "./Components/Socials";
import Email from "./Components/Email";
import About from "./Components/About";
import Experience from "./Components/Experiences";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";


export default function Home() {
  return (
    <main className="flex flex-col bg-[#0a1930] p-2 text-white">
      <Navbar/>
      <Socials/>
      <Hero/>
      <About/>
      <Experience/>
      <Contact/>
      <Footer/>
      <Email/>
      
    </main>
  );
}
