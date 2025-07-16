import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverPanel,
} from "@headlessui/react";
import { BellIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { Link } from "react-router";
import AlertDropdown from "../../alerts/alertDropDown";
import Breadcrumb from "../breadcrumbComponent";
import { alertContext } from "../../contexts/alertContext";

type HeaderProps = {
  user: { name: string; email: string; imageUrl: string };
  userNavigation: { name: string; href: string }[];
};

export default function Header({ user, userNavigation }: HeaderProps) {
  console.log("Header render");
  const { notificationCenter, setNotificationCenter } =
    useContext(alertContext);
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
            src="https://img.icons8.com/?size=100&id=997y4SZQkDuP&format=png&color=000000"
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
          <Popover className="relative flex">
            <PopoverButton
              onClick={() => setNotificationCenter(false)}
              className="relative rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
            >
              <span className="sr-only">View notifications</span>
              {notificationCenter && (
                <div className="absolute top-[2px] w-2 h-2 rounded-full bg-red-600 right-[7px]"></div>
              )}
              <BellIcon className="h-6 w-6" aria-hidden="true" />
            </PopoverButton>
            <PopoverPanel
              transition
              className="z-10 transition duration-100 ease-out data-closed:scale-95 data-closed:opacity-0 
            absolute -left-[36rem] top-0 -ml-2"
            >
              {({ close }) => (
                <AlertDropdown closeFunction={close}></AlertDropdown>
              )}
            </PopoverPanel>
          </Popover>
          <Menu as="div" className="relative">
            <MenuButton className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2">
              <span className="sr-only">Open user menu</span>
              <img
                className="h-8 w-8 rounded-full"
                src={user.imageUrl}
                alt=""
              />
            </MenuButton>
            <MenuItems
              transition
              className="transition duration-100 ease-out data-closed:scale-95 data-closed:opacity-0 
              absolute py-1 right-0 z-10 mt-2 w-56 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
            >
              {userNavigation.map((item, index) => (
                <MenuItem key={index}>
                  {!item.href.includes("http://") ? (
                    <Link
                      to={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100"
                    >
                      {item.name}
                    </a>
                  )}
                </MenuItem>
              ))}
            </MenuItems>
          </Menu>
        </div>
      </div>
    </header>
  );
}
