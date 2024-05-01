import { Inter } from "next/font/google";
import Hero from '@/components/Hero';
import About from "@/components/about";

const Home = () => {
  return (
    <>
      <Hero />
      <About />
    </>
  )
}

export default Home;