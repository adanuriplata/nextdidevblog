import React from "react";
import Button from "../globals/buttons/Button";

const Experience = () => {
  return (
    <section
      className="md:mb-52 mb-36 md:py-16 py-8"
    >
      <div>
        <h2 className="text-green-ddev text-3xl font-mono ">
          &gt;
          <span
            className="text-white-l-ddev text-2xl pl-2  py-2"
            style={{ fontFamily: "'DotGothic16'" }}
          >
            Experiencia
          </span>
        </h2>
        <div className="md:flex my-5 justify-around items-center">
          <div className="md:w-1/2 w-full px-5">
            <h4 className=" text-xl pb-4">
              <span className="md:text-3xl">🏢</span> Más de
              <span className="text-green-ddev"> 4 años </span> de
              <span className="text-green-ddev">experiencia</span> en la
              industria.
            </h4>
            <p className="pb-4">
              Desde 2017 de manera profesional desarrollando y administrando
              para la web, e-commerce, landing pages, estrategias SEO asi como
              Campañas Publicitarias Digitales.
            </p>
            <p>
              Trabajando para Agencias Creativas, sus Clientes y como
              Freelancer.
            </p>
            <br />
            <Button copy="Ver Portafolio" link="#portafolio" />
          </div>
          <div className="md:w-1/2 w-full px-5">
            <div className="py-12">
              <div className="flex items-center font-mono divide-x divide-green-ddev my-5 md:flex-nowrap	flex-wrap	">
                <div className="md:w-4/12 w-full px-5">
                  <p className="text-xl md:text-base">Desarrollo Web 👨‍💻</p>
                </div>
                <div className="md:w-8/12 w-full px-5">
                  <ul>
                    <li>Desarrollo Front-End</li>
                    <li>Creación y modificacion de Temas Wordpress</li>
                    <li>Creación de E-commerce</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-center font-mono divide-x divide-green-ddev my-5 md:flex-nowrap	flex-wrap	">
                <div className="md:w-4/12 w-full px-5">
                  <p className="text-xl md:text-base"> Marketing Digital 📈</p>
                </div>
                <div className="md:w-8/12 w-full px-5">
                  <ul>
                    <li>Estrategia SEM y SEO</li>
                    <li>
                      Tracking de seguimiento CRM, Google Analytics, Sitio Web
                    </li>
                    <li>Creación de nombre con Design Sprint</li>
                    <li>Gestión y creación campañas Google Ads</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
