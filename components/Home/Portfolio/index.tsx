import useFetchProjects from "../../../hooks/useFetchProjects";
import { ProjectData } from "../../../types";
import ItemPortfolio from "./ItemPortfolio";

const Portfolio = () => {

  const {isLoading, projects} = useFetchProjects();
  console.log(projects)

  return (
    <section
      className="md:mb-64 mb-36 md:py-24 py-8"
      id="portafolio"
    >
      <div className="mx-auto text-center">
        <header className="text-center mb-12">
          <h2 className="text-green-ddev text-3xl font-mono">
            &gt;
            <span
              className="text-white-l-ddev text-2xl pl-2 py-2"
              style={{ fontFamily: "'DotGothic16'" }}
            >
              Proyectos
            </span>
          </h2>
          <p className="text-lg">
            Algunos de los últimos proyectos que he realizado
          </p>
        </header>
        <div className="grid md:grid-rows-2 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-10 gap-6">
          {
            //TODO: isLoading add placeholder 
            isLoading ? 
             <p>is Loading....</p>
            :
          projects.map((e, i) => (
            <ItemPortfolio key={i} {...e} />
          ))
          }
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
