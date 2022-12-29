import React from 'react';
import Link from 'next/link';
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  MainLogoIcon,
  TwitterIcon,
} from '../icons';
// import { MainLogoIcon, LinkedinIcon, GithubIcon, InstagramIcon, TwitterIcon } from "/components/icons";

const AppFooter = (): JSX.Element => {
  const social = [
    {
      url: 'https://github.com/adanuriplata',
      icon: <GithubIcon />,
    },
    {
      url: 'https://www.instagram.com/AdanUriPlata/',
      icon: <InstagramIcon />,
    },
    {
      url: 'https://www.linkedin.com/in/adanuriplata/',
      icon: <LinkedinIcon />,
    },
    {
      url: 'https://twitter.com/AdanUriPlata',
      icon: <TwitterIcon />,
    },
  ];

  return (
    <footer className="bg-gray-900 px-16 py-6 ">
      <div className=" md:flex max-w-6xl mx-auto md:justify-between items-center ">
        <div>
          <div>
            <Link href="/">
              <MainLogoIcon className="mx-auto" />
            </Link>
          </div>
          <div className="text-center m-0 md:text-sm text-xs leading-6 text-white-l-ddev">
            <p>© 2022 | Diseño 🚀 Desarrollo - Adan Uri Plata</p>
            <p>
              🛠 con
              <a
                href="https://nextjs.org/"
                target="_blank"
                rel="noreferrer"
                className=" text-orange-ddev "
              >
                NextJS,
              </a>
              <a
                href="https://tailwindcss.com/"
                target="_blank"
                rel="noreferrer"
                className=" text-orange-ddev "
              >
                Tailwind,
              </a>
              <a
                href="https://es.reactjs.org/"
                target="_blank"
                rel="noreferrer"
                className=" text-orange-ddev "
              >
                React
              </a>
            </p>
          </div>
        </div>
        <div className="">
          <div className="flex justify-center max-w-sm space-x-4 mx-auto pt-4 md:pt-0 ">
            {social.map((e, index) => (
              <a
                key={index}
                href={e.url}
                target="_blank"
                rel="noreferrer"
                className=" w-5 "
              >
                {e.icon}
              </a>
            ))}
          </div>
          <div className="text-center text-white-l-ddev mt-2 text-sm">
            @AdanUriPlata
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
