import MainLayout from "components/MainLayout";
import MainHero from "components/globals/heros/MainHero";
import ContactPage from "components/ContactPage";

const Contacto = () => {
  return (
    <MainLayout>
      <MainHero title="Contacto" />
      <ContactPage />
    </MainLayout>
  );
};

export default Contacto;
