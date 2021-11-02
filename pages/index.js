import MainLayout from "../components/MainLayout/index";
import Hero from "../components/Home/Hero";
import AboutMe from "../components/Home/AboutMe";

const Home = () => {
  return (
    <>
      <MainLayout>
        <Hero />
        <AboutMe />
      </MainLayout>
    </>
  );
};

export default Home;
