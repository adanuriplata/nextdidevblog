import LinkedinIcon from "/components/globals/icons/social/LinkedinIcon";
import GithubIcon from "/components/globals/icons/social/GithubIcon";
import InstagramIcon from "/components/globals/icons/social/InstagramIcon";
import TwitterIcon from "/components/globals/icons/social/TwitterIcon";
import Link from "next/link";
import Button from "../globals/buttons/Button";

const Hero = () => {
  const social = [
    {
      url: "https://github.com/adanuriplata",
      icon: <GithubIcon />,
    },
    {
      url: "https://www.instagram.com/distordev/",
      icon: <InstagramIcon />,
    },
    {
      url: "https://www.linkedin.com/in/adanuriplata/",
      icon: <LinkedinIcon />,
    },
    {
      url: "https://twitter.com/DistorDev",
      icon: <TwitterIcon />,
    },
  ];
  return (
    <section className="md:py-40 py-8 md:max-w-3xl lg:max-w-7xl 2xl:pl-72 lg:pl-48 md:pl-32 px-8  ">
      <div>
        <p className="text-green-ddev font-mono">Hola, soy</p>
        <h1
          className="text-white-l-ddev text-6xl py-2"
          style={{ fontFamily: "'DotGothic16'" }}
        >
          Adan Uri Plata
        </h1>
        <h2 className="text-3xl py-2">Construyo cosas para internet</h2>
        <div className="flex md:order-2 text-white-l-ddev align-middle pt-4 pb-5">
          <div className="flex max-w-sm space-x-4 pt-4 md:pt-0 ">
            {social.map((e, index) => (
              <Link key={index} href={e.url}>
                <a target="_blank" className=" w-5 ">
                  {e.icon}
                </a>
              </Link>
            ))}
            <span>@distordev</span>
          </div>
        </div>
        <p>
          Soy un <span className="text-green-ddev">Desarrollador Web</span> y{" "}
          <span className="text-green-ddev">Growth Marketer</span> con amplia
          experiencia en React, Wordpress y Google Ads
        </p>
        <br />
        <Button link="/contacto" copy="Contactame ahora" />
      </div>
    </section>
  );
};

export default Hero;
