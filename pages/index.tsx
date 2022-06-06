import MainLayout from "../components/MainLayout/index";
import Hero from "../components/Home/Hero";
import AboutMe from "../components/Home/AboutMe";
import Experience from "../components/Home/Experience";
import Portfolio from "../components/Home/Portfolio";
import Contact from "../components/Home/Contact";
import { ReactElement } from "react";

const Home = () => {
  return (
    <>
        <Hero />
        <AboutMe />
        <Experience />
        <Portfolio />
        <Contact />
    </>
  );
};

export default Home;

Home.getLayout = function getLayout( Home: ReactElement ) {
  return (
    <MainLayout>
      {Home}
    </MainLayout>
  )
}