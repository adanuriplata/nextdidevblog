import React, { useState } from "react";
import Link from "next/link";
import Menu from "./Menu";
import ButtonMenu from "./ButtonMenu";
import { Transition } from "@headlessui/react";
import MainLogoIcon from '../globals/icons/MainLogoIcon';

const AppHeader = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleOpen = (valueopen: boolean) => {
    setIsOpen(valueopen);
  };

  return (
      <nav>
        <div className="relative flex items-center justify-between h-20 md:max-w-3xl lg:max-w-7xl 2xl:max-w-full mx-auto px-8 2xl:px-32">
          <div>
            <Link href="/">
              <a>
                <MainLogoIcon />
              </a>
            </Link>
          </div>
          <div>
            <div className="md:hidden">
              <ButtonMenu handleOpen={handleOpen} isOpen={isOpen} />
            </div>
            <div className="hidden md:block">
              <Menu />
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transform transition duration-500"
          enterFrom="opacity-0 -translate-x-10 "
          enterTo="opacity-100 rotate-0 "
          leave="transform duration-500 transition ease-in-out"
          leaveFrom="opacity-100 -translate-x-20 "
          leaveTo="opacity-0 -translate-x-20 "
        >
          <div className=" w-full px-8">
            <Menu menuMobile/>
          </div>
        </Transition>
      </nav>
  );
};

export default AppHeader;