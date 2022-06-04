import { ReactElement } from "react";
import ContactPage from "../components/ContactPage";
import MainLayout from "../components/MainLayout";


const Contacto = () => {
  return (
        <ContactPage />
  );
};

export default Contacto;

Contacto.getLayout = function getLayout(Contacto: ReactElement) {
  return (
    <MainLayout heroTitle="Contacto" >
      {Contacto}
    </MainLayout>
      ) 
}