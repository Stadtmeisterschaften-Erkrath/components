import {Disclosure} from "@headlessui/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronDown} from "@fortawesome/free-solid-svg-icons";
import {signOut} from "next-auth/react";
import {toast} from "sonner";

export default function UserMobileDropdown() {
    return (
        <Disclosure as="div" className="-mx-3 w-full">
            {({ open }) => (
                <>
                    <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Dein Profil
                        <FontAwesomeIcon
                            icon={faChevronDown}
                            className="h-5 w-5 flex-none text-gray-400"
                            aria-hidden="true"
                        />
                    </Disclosure.Button>
                    <Disclosure.Panel className="mt-2 space-y-2">
                        <Disclosure.Button
                            key="settings"
                            as="a"
                            href={"#"}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                            Einstellungen
                        </Disclosure.Button>
                        <Disclosure.Button
                            key="logout"
                            as="a"
                            href={"#"}
                            onClick={(e) => {e.preventDefault(); signOut(); toast.success("Du wurdest erfolgreich abgemeldet.")}}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                        >
                            Abmelden
                        </Disclosure.Button>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}