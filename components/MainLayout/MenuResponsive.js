import React from "react";
import Link from "next/link";

const MenuResponsive = () => {
  const menuItems = [
    {
      id: "1",
      name: "inicio",
      url: "/",
    },
    {
      id: "2",
      name: "Blog",
      url: "/blog",
    },
    {
      id: "3",
      name: "Formación y Cursos",
      url: "/formacion",
    },
    {
      id: "4",
      name: "Contacto",
      url: "/contacto",
    },
  ];

  return (
    <div className=" md:hidden flex flex-wrap space-y-4 ">
      {menuItems.map((e) => (
        <div key={e.id} className="w-full hover:bg-gray-700 py-2">
          <Link href={e.url}>
            <a className=" text-gray-300 w-full font-sans items-center font-medium px-3 py-2 hover:bg focus:outline-none rounded-md text-lg transition duration-500 ease-in-out">
              <span className="text-green-ddev">&gt; </span>
              {e.name}
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};
export default MenuResponsive;
