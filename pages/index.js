import MainLayout from "../components/MainLayout/index";
import Hero from "../components/Home/Hero";
import AboutMe from "../components/Home/AboutMe";
import Experience from "../components/Home/Experience";
import Portfolio from "../components/Home/Portfolio";

const Home = () => {
  return (
    <>
      <MainLayout>
        <Hero />
        <AboutMe />
        <Experience />
        <Portfolio />
      </MainLayout>
    </>
  );
};

export default Home;
