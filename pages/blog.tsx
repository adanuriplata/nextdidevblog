import { ReactElement } from "react";
import MainLayout from "../components/MainLayout";


const Blog = () => {
  return (
      <div>Pagina de blog</div>
  );
};

export default Blog;

Blog.getLayout = function getLayout(Contacto: ReactElement) {
  return (
    <MainLayout heroTitle="Blog" >
      {Contacto}
    </MainLayout>
      ) 
}