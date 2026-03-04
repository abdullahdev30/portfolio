import Navbar from "@/componants/navbar"
import Hero from "@/componants/hero"
import About from "@/componants/about"
import Cors from "@/componants/cors"
import Skills from "@/componants/skills"
import Projects from "@/componants/projects"
import Contact from "@/componants/contact"
import Footer from "@/componants/footer"
export default function Home() {
   return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Cors/>
      <Skills/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
   )
}
