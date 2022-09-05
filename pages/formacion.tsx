import { ReactElement } from "react";
import { AppMeta, MainLayout } from "../components/layout";
import { CoursesCategory } from "../components/ui";
import { useFetchCourses } from "../hooks/useFetchCourses";


const Formacion = () => {

  const {isLoading, courses } = useFetchCourses()
  
  return (
    <>
      <section className="md:my-18 my-0">
        <div>
          <p className="md:text-sm text-xs font-mono my-1 text-green-ddev"> <span className="text-3xl">👨‍💻</span> La tecnología,</p>
          <p className="md:text-4xl text-2xl leading-3 font-sans my-1"> industria que mas rápido<span className="text-green-ddev md:text-3xl text-xl"> avanza, cambia y mejora.</span></p>
          <p className="md:text-base text-sm my-2">El ser un <span className="text-green-ddev"> profesional </span> en tecnología <br/> exige hacer de la <span className="text-green-ddev"> educación </span> continua un habito y parte de nuestro <span className="text-green-ddev"> trabajo diario. </span></p> 
        </div>
      </section>

      <section className=" mt-16 bg-gray-900">
        <h3 className="md:text-2xl text-xl text-center font-normal py-3"> Listado de últimos <br/> cursos aprobados y certificaciones:</h3>
      </section>

      <section className="mt-12">

        <CoursesCategory courses={courses} category={"Web 3"} isLoading={isLoading} />
        <CoursesCategory courses={courses} category={"Ingenieria de Software y Desarrollo"} isLoading={isLoading} />
        <CoursesCategory courses={courses} category={"Marketing"} isLoading={isLoading} />
        <CoursesCategory courses={courses} category={"Emprendimiento y Desarrollo Personal"} isLoading={isLoading} />

      </section>
  </>

  );
};

export default Formacion;

Formacion.getLayout = function getLayout(Formacion: ReactElement) {
  return (
    <MainLayout heroTitle="Formación Académica" >
      <AppMeta 
        title='Formación Académica'
        description='La tecnología, industria que mas rápido avanza, cambia y mejora. El ser un profesional en tecnología exige hacer de la educación continua un habito y parte de nuestro trabajo diario'
      />
      {Formacion}
    </MainLayout>
      )
}