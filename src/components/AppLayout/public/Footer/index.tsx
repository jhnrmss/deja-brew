import { navigations } from "@/components/AppNavigation";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";

const socials = [
  { name: "Twitter", href: "#", icons: FaXTwitter },
  { name: "Instagram", href: "#", icons: FaInstagram },
  { name: "Facebook", href: "#", icons: FaFacebook },
];
export const Footer = () => {
  return (
    <footer className="bg-primary-text">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <nav
          className="-mb-6 columns-2 sm:flex sm:justify-center sm:space-x-12"
          aria-label="Footer"
        >
          {navigations.map((item) => (
            <div key={item.name} className="pb-6">
              <a
                href={item.href}
                className="text-sm leading-6 text-accent-dark hover:text-accent-dark/90"
              >
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <div className="mt-10 flex justify-center space-x-10">
          {socials.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-accent-dark hover:text-accent-dark/90"
            >
              <span className="sr-only">{item.name}</span>
              <item.icons className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-10 text-center text-xs leading-5 text-accent-dark">
          &copy; Build & Design by Jhnrmss
        </p>
      </div>
    </footer>
  );
};
