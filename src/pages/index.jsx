import { Header } from "../components/Header";



import Projects from "../components/Projects/projects";
import Contact from "../components/Contact";
import Home from "../components/Home";


export default function Page() {
  return (
    <div>
      <Header />
      <Home /> 
      <Projects />

      <Contact /> 


    </div>
  )
}