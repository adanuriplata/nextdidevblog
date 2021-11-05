import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    const hubspotObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const s = document.createElement("script");
          s.src = "//js.hsforms.net/forms/shell.js";
          s.charset = "utf-8";
          s.type = "text/javascript";
          if (document.head.appendChild(s)) {
            setTimeout(function () {
              hbspt.forms.create({
                region: "na1",
                portalId: "5518085",
                formId: "e66095e2-568a-4ddc-9fa3-8c9563e8571c",
                target: "#divFormHolder",
              });
            }, 350);
          }
          hubspotObserver.disconnect();
        }
      },
      { treshold: [0] }
    );
    hubspotObserver.observe(document.querySelector("#hubspotWrap"));
  }, []);

  return (
    <section
      className="mb-36 md:py-12 py-8 md:max-w-4xl lg:max-w-full
    2xl:pl-72 2xl:pr-72 lg:pl-48 lg:pr-48 md:pl-32 px-8"
      id="contacto"
    >
      <div className="mx-auto text-center" id="hubspotWrap">
        <header className="text-center mb-12">
          <h2 className="text-green-ddev text-3xl font-mono">
            &gt;
            <span
              className="text-white-l-ddev text-2xl pl-2 py-2"
              style={{ fontFamily: "'DotGothic16'" }}
            >
              Contacto
            </span>
          </h2>
          <p>
            Platiquemos, por correo{" "}
            <a
              href="mailto:adanuriplata@gmail.com"
              className="text-orange-ddev"
            >
              {" "}
              adanuriplata@gmail.com
            </a>{" "}
            o formulario.
          </p>
          <p>También estoy en redes sociales como @distordev</p>
        </header>
        <div className="mx-auto">
          <div
            className="mx-auto max-w-screen-sm md:p-12 p-5 bg-gray-900 hover:shadow-2xl rounded-lg"
            id="divFormHolder"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
