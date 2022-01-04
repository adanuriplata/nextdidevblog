import React, { useEffect } from "react";

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
    <article className="max-w-screen-xl mx-auto px-4 md:px-16 lg:px-32">
      <section className=" mb-10 ">
        <div>
          <div className="md:flex md:justify-evenly">
            <div className="py-10 px-5" id="hubspotWrap">
              <h2 className=" text-3xl ">
                ¿Listo para hacer crecer tu negocio?
              </h2>
              <br />
              <p>Platiquemos. 👉 </p>
              <br />
              <p>También estoy en redes sociales como @distordev</p>
            </div>
            <div className="mx-auto">
              <div
                className="mx-auto max-w-screen-sm md:p-12 p-5 bg-gray-900 hover:shadow-2xl rounded-lg"
                id="divFormHolder"
              ></div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Contact;
