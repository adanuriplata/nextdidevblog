import React from "react";
import Link from "next/link";

const Menu = () => {
  const menuItems = [
    {
      id: "1",
      name: "Inicio",
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
    <div className=" flex space-x-4 ">
      {menuItems.map((e) => (
        <Link key={e.id} href={e.url}>
          <a className="text-gray-300 font-sans items-center font-medium px-3 py-2 hover:bg focus:outline-none rounded-md hover:bg-gray-700 transition duration-500 ease-in-out">
            <span className="text-green-ddev">&gt; </span>
            {e.name}
          </a>
        </Link>
      ))}
    </div>
  );
};
export default Menu;
