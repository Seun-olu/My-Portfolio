"use client";
import dynamic from "next/dynamic";

// Lazy-loaded components
const Navbar = dynamic(() => import("./Components/Navbar"));
const Hero = dynamic(() => import("./Components/Hero"));
const Socials = dynamic(() => import("./Components/Socials"));
const Email = dynamic(() => import("./Components/Email"));
const About = dynamic(() => import("./Components/About"));
const Experience = dynamic(() => import("./Components/Experiences"));
const Projects = dynamic(() => import("./Components/Projects"));
const Contact = dynamic(() => import("./Components/Contact"));
const Footer = dynamic(() => import("./Components/Footer"));

export default function Home() {
  return (
    <main className="flex flex-col bg-[#0a1930] p-2 text-white">
      <Navbar />
      <Socials />
      <Hero id="hero" />
      <About id="about" />
      <Experience id="experience" />
      <Projects id="projects"/>
      <Contact id="contact" />
      <Footer />
      <Email />
    </main>
  );
}
