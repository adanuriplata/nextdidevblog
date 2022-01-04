import MainLayout from "components/MainLayout";
import MainHero from "components/globals/heros/MainHero";
import Contact from "components/Contact";

const Contacto = () => {
  return (
    <MainLayout>
      <MainHero title="Contacto" />
      <Contact />
    </MainLayout>
  );
};

export default Contacto;
