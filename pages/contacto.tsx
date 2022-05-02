import ContactPage from "../components/ContactPage";
import MainHero from "../components/globals/heros/MainHero";
import MainLayout from "../components/MainLayout";


const Contacto = () => {
  return (
    <MainLayout>
      <MainHero title="Contacto" />
      <ContactPage />
    </MainLayout>
  );
};

export default Contacto;
