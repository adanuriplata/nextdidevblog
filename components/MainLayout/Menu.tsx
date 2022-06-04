import React from "react";
import Link from "next/link";
import { useRouter } from 'next/router'

interface MenuProps {
  menuMobile?: Boolean;
}

const menuItems = [
  {
    id: "1",
    name: "Inicio",
    url: "/",
    isMobile: true
  },
  {
    id: "2",
    name: "Blog",
    url: "/blog",
    isMobile: true
  },
  {
    id: "3",
    name: "Formación y Cursos",
    url: "/formacion",
    isMobile: true
  },
  {
    id: "4",
    name: "Contacto",
    url: "/contacto",
    isMobile: true
  },
];

const Menu = ({menuMobile= false}: MenuProps) => {
  const { asPath } = useRouter();
  console.log(asPath)

  if(menuMobile) {
    return <div className=" md:hidden flex flex-wrap space-y-4 ">
    {menuItems.filter(item => item.isMobile).map((e) => (
      <div key={e.id} className={`${ asPath === e.url ? 'bg-gray-700' : 'hover:bg-gray-700'} ' w-full py-2'`}>
        <Link href={e.url}>
          <a className={' text-gray-300 w-full hover:bg font-sans items-center font-medium px-3 py-2 focus:outline-none rounded-md text-lg transition duration-500 ease-in-out'}>
            <span className="text-green-ddev">&gt; </span>
            {e.name}
          </a>
        </Link>
      </div>
    ))}
  </div>
  }
  return (
    <div className=" flex space-x-4 flex-wrap  ">
    {menuItems.map((e) => (
      <Link key={e.id} href={e.url}>
        <a className={` ${asPath === e.url ? 'bg-gray-700' : 'hover:bg-gray-700'} ' text-gray-300 font-sans items-center font-medium px-3 py-2 hover:bg focus:outline-none rounded-md transition duration-500 ease-in-out' `}>
          <span className="text-green-ddev">&gt; </span>
          {e.name}
        </a>
      </Link>
    ))}
  </div>
  )

};
export default Menu;
