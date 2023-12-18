import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { signOut } from "next-auth/react";
import { toast } from "sonner";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

type Props = {
  email: string;
};

export default function UserDropdown(props: Props) {
  return (
    <Menu as="div" className="relative inline-block text-left ">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 px-3 py-2 text-sm font-semibold text-gray-900">
          Dein Profil
          <FontAwesomeIcon
            icon={faChevronDown}
            className="h-3.5 w-3.5 mt-0.5 flex-none text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-4 py-3">
            <p className="text-sm">Angemeldet als</p>
            <p className="truncate text-sm font-medium text-gray-900">
              {props.email}
            </p>
          </div>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm",
                  )}
                >
                  Einstellungen
                </a>
              )}
            </Menu.Item>
          </div>
          <div className="py-1">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                signOut();
                toast.success("Du wurdest erfolgreich abgemeldet.");
              }}
              method="POST"
            >
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                      "block w-full px-4 py-2 text-left text-sm",
                    )}
                  >
                    Abmelden
                  </button>
                )}
              </Menu.Item>
            </form>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
