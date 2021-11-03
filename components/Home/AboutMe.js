import React from "react";
import Button from "../globals/buttons/Button";

const AboutMe = () => {
  return (
    <section
      className=" mb-14 md:py-40 py-8 md:max-w-4xl lg:max-w-full
     2xl:pl-72 2xl:pr-72 lg:pl-48 lg:pr-48 md:pl-32 px-8"
    >
      <div className="">
        <h2 className="text-green-ddev text-3xl font-mono">
          &gt;
          <span
            className="text-white-l-ddev text-2xl pl-2 py-2"
            style={{ fontFamily: "'DotGothic16'" }}
          >
            Acerca de mi
          </span>
        </h2>
        <div className="md:flex my-12 justify-around">
          <div className="md:w-1/2 w-full divide-y divide-white-l-ddev p-4">
            <div className="mb-10">
              <img
                className="mx-auto rounded-lg shadow-solid text-teal-400 ddev-hover-button w-40 h-40"
                loading="lazy"
                src="/img/avatar-adan-uri.jpeg"
                alt="Acerca de mi Adan Uri Plata"
              />
            </div>
            <div>
              <h5 className="text-center py-4">
                Últimas tecnologías con las que he trabajado
              </h5>
              <div className="flex font-mono w-full">
                <div className="w-1/2 pl-5 pr-5">
                  <ul className="list-disc">
                    <li>Javascript</li>
                    <li>React.js</li>
                    <li>Google Analytics</li>
                  </ul>
                </div>
                <div className="w-1/2 pl-5">
                  <ul className="list-disc">
                    <li>Google Ads</li>
                    <li>Next.js</li>
                    <li>WordPress</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 w-full py-4 px-2">
            <p className="mb-4">
              👋 Soy Adan Uri Plata <br />{" "}
              <span className="text-green-ddev">Desarrollador web</span> formado
              en la Benemérita Universidad Autónoma de Puebla estudiando{" "}
              <span className="text-green-ddev">
                Ciencias de la Computación.
              </span>
            </p>
            <p className="mb-4">
              Durante mi periodo de estudiante tome trabajos de medio tiempo
              principalmente en áreas de ventas y atención a cliente por lo cual
              desarrolle un gusto por el marketing.
            </p>
            <p className="mb-8">
              Con el surgimiento del marketing digital me interese por la unión
              de la tecnología y le marketing. Cuento con más de 4 años de
              experiencia realizando desarrollo web así como planeando y
              ejecutando estrategias de marketing digital las campañas de google
              Ads son mi especialidad.
            </p>
            <Button copy="Ver Últimos Cursos Aprobados" link="/formacion" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
