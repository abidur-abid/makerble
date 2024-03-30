import Image from "next/image";
import Hero from "../components/Hero";
import SectionTitle from "../shared components/SectionTitle";
import AboutMe from "../components/AboutMe";
import Like from "../components/Like";
import Gallery from "../components/Gallery";
import Education from "../components/Education";
import Counter from "../components/Counter";

export default function Home() {
  return (
    <section>
      
        <Hero/>
     
      
      <Counter/>
      
     
     <SectionTitle title={'About Me'}/>
      <AboutMe/>
     
    
     <SectionTitle title={'What I Like To Do'}/>
      <Like/>
     
      
      <SectionTitle title={'My Images'}/>
      <Gallery/>
     
      <SectionTitle title={'My Education'}/>
      <Education/>
      
      
    </section>
  );
}
