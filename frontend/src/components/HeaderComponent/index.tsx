import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import {
  BellIcon,
  PencilIcon,
  Square2StackIcon,
} from "@heroicons/react/24/outline";
import { UserCircleIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { Link } from "react-router";
import AlertDropdown from "../../alerts/alertDropDown";
import Breadcrumb from "../breadcrumbComponent";

const user = {
  name: "Whitney Francis",
  email: "whitney.francis@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

const userNavigation = [
  { name: "Your Projects", href: "/" },
  {
    name: "Account settings",
    href: "http://localhost:4455/.ory/kratos/public/self-service/settings/browser",
  },
  { name: "Sign out", href: "/" },
];

export default function Header() {
  const [notificationCenter, setNotificationCenter] = useState(true);
  return (
    <header className="flex h-16 w-full items-center bg-white">
      {/* Logo area */}
      <div className="shrink-0">
        <a
          href="/"
          className="flex h-16 w-20 items-center justify-center bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
        >
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=white"
            alt="Your Company"
          />
        </a>
      </div>

      {/* Desktop nav area */}
      <div className="flex min-w-0 flex-1 items-center justify-between">
        <div className="min-w-0 flex-1 ml-5">
          <Breadcrumb></Breadcrumb>
        </div>
        <div className="flex items-center space-x-8 pr-4">
          <div>notrifications</div>
          <div>user profile</div>
        </div>
      </div>
    </header>
  );
}
