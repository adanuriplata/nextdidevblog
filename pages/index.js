import MainLayout from "../components/MainLayout/index";
import Hero from "../components/Home/Hero";
import AboutMe from "../components/Home/AboutMe";
import Experience from "../components/Home/Experience";
import Projects from "../components/Home/Projects";

const Home = () => {
  return (
    <>
      <MainLayout>
        <Hero />
        <AboutMe />
        <Experience />
        <Projects />
      </MainLayout>
    </>
  );
};

export default Home;
