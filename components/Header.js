import Link from "next/link";
import ThemeButton from "@/components/ThemeButton";
import { Disclosure } from "@headlessui/react";
import { MenuAlt4Icon, XIcon } from "@heroicons/react/outline";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const navigation = [
  { name: "Inicio", href: "/" },
  { name: "Proyectos", href: "/proyectos" },
  { name: "Blog", href: "/blog" },
];

export default function Header({ currentPage }) {
  return (
    <Disclosure as="header" className="sticky top-0 z-30">
      {({ open }) => (
        <>
          <div className="max-w-2xl px-4 mx-auto bg-white sm:px-6 lg:px-8 dark:bg-black sm:bg-white/80 sm:backdrop-blur dark:sm:bg-black/80 dark:sm:backdrop-blur">
            <div className="flex justify-between h-16 border-b border-slate-300 dark:border-steel-gray-200">
              <div className="flex">
                <div className="flex items-center flex-shrink-0">
                  <Link href="/">
                    <a
                      aria-label="José Aular"
                      className="focus:outline-none focus:ring-1 focus:ring-blue-300/50"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-8 h-8 p-1 rounded-md bg-slate-200 dark:bg-steel-gray-300 text-slate-600 dark:text-slate-400"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path
                          stroke="none"
                          d="M0 0h24v24H0z"
                          fill="none"
                        ></path>
                        <polyline points="5 7 10 12 5 17"></polyline>
                        <line x1={13} y1={17} x2={19} y2={17}></line>
                      </svg>
                    </a>
                  </Link>
                </div>
                <div className="hidden sm:ml-8 sm:flex sm:space-x-6">
                  {navigation.map((nav) => (
                    <Link key={nav.name} href={nav.href}>
                      <a
                        className={classNames(
                          nav.href == currentPage
                            ? "border-blue-400 dark:border-blue-100"
                            : "border-transparent hover:border-blue-400 dark:hover:border-blue-100 focus:border-blue-400 dark:focus:border-blue-100",
                          "inline-flex items-center px-1 pt-1 text-sm font-medium border-b-2 text-slate-600 dark:text-slate-400 focus:outline-none hover:text-black dark:hover:text-white focus:text-black dark:focus:text-white"
                        )}
                      >
                        {nav.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:items-center">
                <ThemeButton />
              </div>
              <div className="flex items-center sm:hidden">
                <ThemeButton />
                <Disclosure.Button className="inline-flex items-center justify-center ml-6 text-slate-600 dark:text-slate-400 hover:text-black dark:hover:text-white focus:outline-none focus:ring-1 focus:ring-blue-300/50">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <MenuAlt4Icon
                      className="block w-6 h-6"
                      aria-hidden="true"
                    />
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="bg-white sm:hidden dark:bg-black">
            <div className="px-4 py-3 space-y-4 border-b border-slate-300 dark:border-steel-gray-200">
              {navigation.map((nav) => (
                <Link key={nav.name} href={nav.href}>
                  <a
                    className={classNames(
                      nav.href === currentPage
                        ? "border-blue-400 dark:border-blue-100"
                        : "border-transparent hover:border-slate-600 dark:hover:border-slate-400 focus:border-slate-600 dark:focus:border-slate-400",
                      "block py-2 pl-3 pr-4  text-slate-600 dark:text-slate-400 border-l-2 hover:bg-slate-200 dark:hover:bg-steel-gray-300 focus:outline-none focus:bg-slate-200 dark:focus:bg-steel-gray-300"
                    )}
                  >
                    {nav.name}
                  </a>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
