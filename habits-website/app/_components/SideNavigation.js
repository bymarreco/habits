import {
  HomeIcon,
  CalendarDaysIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import SignOutButton from "./SignOutButton";

const navLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Habits",
    href: "/account/habits",
    icon: <CalendarDaysIcon className="h-5 w-5 text-primary-600" />,
  },
  {
    name: "Guest Profile",
    href: "/account/profile",
    icon: <UserIcon className="h-5 w-5 text-primary-600" />,
  },
];

function SideNavigation() {
  return (
    <nav className="border-r border-primary-900">
      <ul className="flex- flex-col gap-2 h-full text-lg">
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              className={`py-3 px-5 hover:bg-primary-900 hover:text-primary-100 transition-color flex items-center gap-4 font-semibold text-primary-200`}
              href={link.href}
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          </li>
        ))}
        <li className="mt-auto">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;
