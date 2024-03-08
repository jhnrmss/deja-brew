import { Disclosure } from "@headlessui/react";
import { FaBars, FaXmark } from "react-icons/fa6";
import mainLogo from "@/assets/main-logo.png";
import { NavLink } from "react-router-dom";
import { Button } from "..";

export const navigations = [
  {
    name: "Home",
    href: "/",
    current: true,
    restricted: false,
  },
  {
    name: "About Us",
    href: "about",
    current: true,
    restricted: false,
  },
  {
    name: "Service",
    href: "service",
    current: true,
    restricted: false,
  },
  {
    name: "Our Coffee",
    href: "coffee",
    current: true,
    restricted: false,
  },
];
export const Navigation = () => {
  return (
    <Disclosure as="nav" className="bg-gray-50 ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-20 justify-between">
              <div className="flex justify-between w-full">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="h-14 w-auto"
                    src={mainLogo}
                    alt="Dejabrew Logo"
                  />
                </div>
                <div className="hidden h-full md:ml-6 md:flex md:gap-8 tracking-wide">
                  {navigations.map((item) => (
                    <NavLink
                      key={item.name}
                      to={item.href}
                      className="inline-flex px-1 pt-1 items-center font-medium  hover:text-primary text-accent-dark"
                    >
                      {item.name}
                    </NavLink>
                  ))}
                </div>
                <div className="hidden md:flex md:gap-4 md:justify-center md:items-center">
                  <Button variant={"default"} className="text-primary-text">
                    Login
                  </Button>
                  <Button variant={"secondary"} className="text-primary-text">
                    Register
                  </Button>
                </div>
              </div>

              <div className="-mr-2 flex items-center md:hidden">
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-textDark/70 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary">
                  <span className="absolute -inset-0.5" />
                  {open ? (
                    <FaXmark className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <FaBars className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 pb-3 pt-2">
              {navigations.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.href}
                  className="block text-center hover:border-l-4 hover:border-primary hover:bg-primary/10 py-2 pl-3 pr-4 text-base font-medium hover:text-accent-dark"
                >
                  <Disclosure.Button>{item.name}</Disclosure.Button>
                </NavLink>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
