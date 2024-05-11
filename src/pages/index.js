import { Inter } from "next/font/google";
import Hero from '@/components/Hero';
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Image from "next/image";
import busan from "@/images/busan.jpg";

const Home = () => {
  return (
    <>
    <div className="hero-image">
      <Image src={busan} />
    </div>
      <div className="content-container">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </>
  )
}

export default Home;