"use client";

import { Fragment, Suspense, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import {
  faBars,
  faChevronDown,
  faHeart,
  faNewspaper,
  faPersonCircleQuestion,
  faSwimmer,
  faTimes,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dancing_Script } from "next/font/google";
import Wordmark from "@components/brand/Wordmark";
import LoginOrDropdown from "@components/navigation/user/LoginOrDropdown";
import Skeleton from "@components/Skeleton";

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
});

const about = [
  {
    name: "Über die Stadtmeisterschaften",
    description: "Essenzielle Informationen zu den Stadtmeisterschaften",
    href: "/#info",
    icon: faSwimmer,
  },
  {
    name: "Neuigkeiten",
    description:
      "Bleibe immer auf dem neusten Stand zu den Stadtmeisterschaften",
    href: "/#news",
    icon: faNewspaper,
  },
  {
    name: "Ausrichter & Sponsoren",
    description:
      "Ohne unsere Ausrichter und Sponsoren wäre das alles nicht möglich",
    href: "/#sponsors",
    icon: faHeart,
  },
  {
    name: "FAQ",
    description:
      "Häufig gestellte Fragen und Antworten zu den Stadtmeisterschaften",
    href: "/#faq",
    icon: faPersonCircleQuestion,
  },
];

type NavigationBarTopProps = {
  email?: string | null;
};

function classNames(...classes: String[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NavigationBarTop(props: NavigationBarTopProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a
            href="/"
            className={classNames(
              "-m-1.5 p-1.5 text-xl font-bold text-indigo-600",
              dancingScript.className,
            )}
          >
            <Wordmark width={180} />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <FontAwesomeIcon
              icon={faBars}
              className="h-6 w-6"
              aria-hidden="true"
            />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
              Über Uns
              <FontAwesomeIcon
                icon={faChevronDown}
                className="h-3.5 w-3.5 flex-none text-gray-400"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-md rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {about.map((item) => (
                    <div
                      key={item.name}
                      className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                    >
                      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                        <FontAwesomeIcon
                          icon={item.icon}
                          className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                          aria-hidden="true"
                        />
                      </div>
                      <div className="flex-auto">
                        <a
                          href={item.href}
                          className="block font-semibold text-gray-900"
                        >
                          {item.name}
                          <span className="absolute inset-0" />
                        </a>
                        <p className="mt-1 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>

          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Deine Meldungen
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Wettkämpfe
          </a>
          <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
            Support
          </a>
        </Popover.Group>
        <div className="hidden lg:inline-flex lg:flex-1 lg:justify-end">
          <LoginOrDropdown />
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a
              href="/"
              className={classNames(
                "-m-1.5 p-1.5 text-xl font-bold text-indigo-600",
                dancingScript.className,
              )}
            >
              <Wordmark width={180} />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <FontAwesomeIcon
                icon={faTimes}
                className={"h-6 w-6"}
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Über Uns
                        <FontAwesomeIcon
                          icon={faChevronDown}
                          className="h-5 w-5 flex-none text-gray-400"
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {about.map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Deine Meldungen
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Wettkämpfe
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Support
                </a>
              </div>
              <div className="py-6 w-full">
                <LoginOrDropdown />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
