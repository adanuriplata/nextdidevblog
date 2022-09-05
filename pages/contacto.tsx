import { ReactElement } from 'react';
import { ContactPage } from '../components/ui';
import { AppMeta, MainLayout } from '../components/layout';

const Contacto = () => {
  return <ContactPage />;
};

export default Contacto;

Contacto.getLayout = function getLayout(Contacto: ReactElement) {
  return (
    <MainLayout heroTitle="Contacto">
      <AppMeta
        title="Contacto"
        description="Iniciemos la conversación, contacta ahora, platiquemos"
      />
      {Contacto}
    </MainLayout>
  );
};
