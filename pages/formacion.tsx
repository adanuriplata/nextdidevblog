import { ReactElement } from "react";
import MainLayout from "../components/MainLayout";
import { Course, PlaceHolderCourse } from "../components/ui";
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

        <div className="my-16">
          <h4 className="md:text-left text-xl my-3">👨‍🎓 Ingeniería Desarrollo de Software</h4>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 bg-gray-900 md:p-2 pl-0">
            {
              isLoading ? 
              <PlaceHolderCourse quantity={3} />
              :
            courses.filter( course => course.category == "Ingenieria de Software y Desarrollo")
          . map( item => <Course key={item.uid } {...item} />)
            }
          </div>
        </div>

        <div className="my-16">
          <h4 className="md:text-left text-xl my-3">📈 Marketing</h4>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 bg-gray-900 md:p-2 pl-0">
          {
            isLoading ? 
            <PlaceHolderCourse quantity={3} />
            :
            courses?.filter( course => course.category == "Marketing")
            .map( item => <Course key={item.uid } {...item} />)
            }
          </div>
        </div>

        <div className="my-16">
          <h4 className="md:text-left text-xl my-3">👨‍🎓 Emprendimiento y Desarrollo Personal</h4>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 bg-gray-900 md:p-2 pl-0">
          {
            isLoading ? 
            <PlaceHolderCourse quantity={3} />
            :
          courses?.filter( course => course.category == "Emprendimiento y Desarrollo Personal")
          .map( item => <Course key={item.uid } {...item} />)
          }
          </div>
        </div>

        <div className="my-16">
          <h4 className="md:text-left text-xl my-3">👨‍🎓 Web3</h4>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 bg-gray-900 md:p-2 pl-0">
          {
            isLoading ? 
            <PlaceHolderCourse quantity={3} />
            :
          courses?.filter( course => course.category == "Web3")
          .map( item => <Course key={item.uid } {...item} />)
          }
          </div>
        </div>

      </section>
  </>

  );
};

export default Formacion;

Formacion.getLayout = function getLayout(Formacion: ReactElement) {
  return (
    <MainLayout heroTitle="Formación Académica" >
      {Formacion}
    </MainLayout>
      )
}