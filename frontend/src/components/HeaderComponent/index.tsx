import { BellIcon } from "@heroicons/react/24/outline";
import Breadcrumb from "../breadcrumbComponent";

export default function Header() {
  return (
    <header className="relative flex h-16 w-full shrink-0 items-center bg-white">
      {/* Logo area */}
      <div className="static shrink-0">
        <a
          href="/"
          className="flex h-16 items-center justify-center bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 w-20"
        >
          <div className="h-8 w-auto font-extrabold">Omni</div>
        </a>
      </div>

      {/* Desktop nav area */}
      <div className="flex min-w-0 flex-1 items-center justify-between">
        <div className="min-w-0 flex-1 ml-5">
          <Breadcrumb />
        </div>
        <div className="ml-10 flex shrink-0 items-center space-x-10 pr-4">
          <div className="flex items-center space-x-8">
            <span className="inline-flex">
              <button
                type="button"
                className="-mx-1 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 relative"
              >
                <span className="sr-only">View notifications</span>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </span>
            {/* <Menu as="div" className="relative inline-block text-left">
              <Menu.Button className="flex rounded-full bg-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:ring-offset-2">
                <span className="sr-only">Open user menu</span>
                <img
                  className="h-8 w-8 rounded-full"
                  src={user.imageUrl}
                  alt=""
                />
              </Menu.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {userNavigation.map((item, index) => (
                      <Menu.Item key={index}>
                        {({ active }) =>
                          !item.href.includes("http://") ? (
                            <Link
                              to={item.href}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              {item.name}
                            </Link>
                          ) : (
                            <a
                              href={item.href}
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              {item.name}
                            </a>
                          )
                        }
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu> */}
          </div>
        </div>
      </div>
    </header>
  );
}
