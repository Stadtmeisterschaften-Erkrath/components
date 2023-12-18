import Link from "next/link";

const navigation = {
  main: [
    { name: "Impressum", href: "/imprint" },
    { name: "Datenschutz", href: "/privacy" },
    { name: "Terms of Service", href: "/tos" },
    { name: "Kontakt", href: "/contact" },
  ],
};

export default function FooterBarBottom() {
  return (
    <footer>
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <a
                href={item.href}
                className="text-sm leading-6 text-gray-600 hover:text-gray-900"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; 2019-{new Date().getFullYear()} Stadtmeisterschaften Erkrath.
          Alle Rechte vorbehalten. Entwickelt von{" "}
          <Link
            className={`underline hover:opacity-80`}
            href={"https://levi-hessmann.de"}
          >
            Levi-Hessmann.de
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}
