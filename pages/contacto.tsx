import { ReactElement } from "react";
import ContactPage from "../components/ContactPage";
import MainLayout from "../components/MainLayout";
import AppMeta from "../components/MainLayout/AppMeta";


const Contacto = () => {
  return (
        <ContactPage />
  );
};

export default Contacto;

Contacto.getLayout = function getLayout(Contacto: ReactElement) {
  return (
    <MainLayout heroTitle="Contacto" >
      <AppMeta 
        title='Contacto'
        description='Iniciemos la conversación, contacta ahora, platiquemos'
      />
      {Contacto}
    </MainLayout>
      ) 
}