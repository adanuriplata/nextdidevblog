import React from "react";
import MainLogoIcon from "/components/globals/icons/MainLogoIcon";
import Link from "next/link";
import LinkedinIcon from "../../globals/icons/social/LinkedinIcon";
import GithubIcon from "../../globals/icons/social/GithubIcon";
import InstagramIcon from "../../globals/icons/social/InstagramIcon";
import TwitterIcon from "../../globals/icons/social/TwitterIcon";

const AppFooter = () => {
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
    <footer className="bg-gray-900 px-16 py-6 ">
      <div className=" md:flex max-w-6xl mx-auto md:justify-between items-center ">
        <div className="">
          <Link href="/">
            <a>
              <MainLogoIcon className="mx-auto" />
            </a>
          </Link>
          <div className="text-center m-0 md:text-sm text-xs leading-6 text-white-l-ddev">
            <p>© 2021 | Diseño 🚀 Desarrollo - Adan Uri Plata</p>
            <p>
              🛠 con
              <a
                href="https://nextjs.org/"
                target="_blank"
                className=" text-orange-ddev "
              >
                NextJS,
              </a>
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                className=" text-orange-ddev "
              >
                Tailwind,
              </a>
              <a
                href="https://es.reactjs.org/"
                target="_blank"
                className=" text-orange-ddev "
              >
                React
              </a>
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex justify-center max-w-sm space-x-4 mx-auto pt-4 md:pt-0 ">
            {social.map((e) => (
              <Link href={e.url}>
                <a target="_blank" className=" w-5 ">
                  {e.icon}
                </a>
              </Link>
            ))}
          </div>
          <div className="text-center text-white-l-ddev mt-2 text-sm">
            @distordev
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
