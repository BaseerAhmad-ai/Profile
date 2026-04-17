import "./index.css"
import { About } from "./About";
import { Contact } from "./Contact";
import { Hero } from "./Hero";
import { Project } from "./Projects";
import { Skills } from "./Skills";
export function Home() {
  return (
    <>
      <div className="box">
        <Hero />
      </div>
      <About />
      <Skills />
      <Project />
      <Contact />
    </>
  );
}
