import { useContext } from "react";
import { locationContext } from "../../contexts/locationContext";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

export default function ExtraSidebar() {
  console.log("ExtraSidebar render");
  const { isStackedOpen, setIsStackedOpen, extraNavigation, extraComponent } =
    useContext(locationContext);
  return (
    <aside
      className={`${
        isStackedOpen ? "w-60" : "w-0"
      } border-r border-gray-200 h-full transition-all duration-500 overflow-hidden`}
    >
      <div className="w-60 h-full overflow-y-auto bg-white">
        <div className="flex justify-between items-center px-4 pt-4">
          <div className="text-gray-900 text-lg ml-2 font-semibold">
            {extraNavigation.title}
          </div>
          <button
            className="text-gray-400"
            onClick={() => setIsStackedOpen(false)}
          >
            <ChevronLeftIcon className="w-6 h-6"></ChevronLeftIcon>
          </button>
        </div>
        <div className="flex flex-col">
          {extraNavigation.options ? (
            <div className="p-4 space-y-1">
              {extraNavigation.options.map((item) =>
                !item.children ? (
                  <div key={item.name}>
                    <Link
                      to={item.href}
                      className="bg-gray-100 text-gray-900
                    group w-full flex items-center p-2 text-sm font-medium rounded-md"
                    >
                      <item.icon className="text-gray-500 mr-3 flex-shrink-0 h-6 w-6" />
                      {item.name}
                    </Link>
                  </div>
                ) : (
                  <Disclosure as="div" className="space-y-1" key={item.name}>
                    {({ open }) => (
                      <>
                        <DisclosureButton
                          className="bg-gray-100 text-gray-900
                    group w-full flex items-center p-2 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        >
                          <item.icon
                            className="mr-3 h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                            aria-hidden="true"
                          />
                          {item.name}
                          <svg
                            className={
                              (open
                                ? "text-gray-400 rotate-90"
                                : "text-gray-300") +
                              " ml-auto h-5 w-5 flex-shrink-0 transition-rotate duration-150 ease-in-out group-hover:text-gray-400"
                            }
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                          >
                            <path d="M6 6L14 10L6 14V6Z" fill="currentColor" />
                          </svg>
                        </DisclosureButton>
                        <DisclosurePanel className="space-y-1">
                          {item.children?.map((subItem) => (
                            <Link
                              to={subItem.href}
                              key={subItem.name}
                              className="bg-gray-100 text-gray-900 group w-full flex items-center p-2 pl-11 text-sm font-medium rounded-md"
                            >
                              <subItem.icon className="text-gray-500 mr-3 flex-shrink-0 h-6 w-6" />
                              {subItem.name}
                            </Link>
                          ))}
                        </DisclosurePanel>
                      </>
                    )}
                  </Disclosure>
                )
              )}
            </div>
          ) : (
            extraComponent
          )}
        </div>
      </div>
    </aside>
  );
}
