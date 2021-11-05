import MainLayout from "../components/MainLayout/index";
import Hero from "../components/Home/Hero";
import AboutMe from "../components/Home/AboutMe";
import Experience from "../components/Home/Experience";
import Portfolio from "../components/Home/Portfolio";
import Contact from "../components/Home/Contact";

const Home = () => {
  return (
    <>
      <MainLayout>
        <Hero />
        <AboutMe />
        <Experience />
        <Portfolio />
        <Contact />
      </MainLayout>
    </>
  );
};

export default Home;
