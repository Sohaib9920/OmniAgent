import {
  BoltIcon,
  ChevronRightIcon,
  Cog6ToothIcon,
  HomeIcon,
  LightBulbIcon,
  RocketLaunchIcon,
  TableCellsIcon,
} from "@heroicons/react/24/outline";
import { useContext } from "react";
import { BsPlusSquare } from "react-icons/bs";
import SidebarButton from "./sidebarButton";
import { locationContext } from "../../contexts/locationContext";

export const sidebarNavigation = [
  { name: "Home", href: "/", icon: HomeIcon, current: true },
  { name: "Table", href: "/table/", icon: TableCellsIcon, current: false },
  { name: "Train", href: "#", icon: BoltIcon, current: false },
  { name: "Model Details", href: "#", icon: LightBulbIcon, current: false },
  { name: "Deploy", href: "#", icon: RocketLaunchIcon, current: false },
  { name: "Settings", href: "/settings/", icon: Cog6ToothIcon, current: false },
];

export default function Sidebar() {
  console.log("Sidabar render");
  const { showSideBar, isStackedOpen, setIsStackedOpen } =
    useContext(locationContext);
  return (
    <div
      className={
        (showSideBar ? "w-20" : "w-0") +
        " h-full overflow-hidden transition-all duration-500"
      }
    >
      <nav
        aria-label="Sidebar"
        className="w-20 h-full bg-gray-800 overflow-y-auto flex flex-col justify-between"
      >
        <div className="flex flex-col w-20 items-center space-y-3 p-3">
          {sidebarNavigation.map((item, index) => (
            <SidebarButton item={item} key={index}></SidebarButton>
          ))}
        </div>
        <div className="flex flex-col w-20 items-center space-y-3 p-3">
          <button
            key="New Project"
            className="text-gray-400 hover:bg-gray-700 flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg"
          >
            <span className="sr-only">"New Project"</span>
            <BsPlusSquare className="h-8 w-8" aria-hidden="true" />
          </button>
          <div
            className={` ${
              isStackedOpen ? "h-0 -mt-3" : "h-12"
            } overflow-hidden transition-all duration-500`}
          >
            <button
              className="text-gray-400 flex-shrink-0 inline-flex items-center justify-center rounded-lg h-12 w-12"
              onClick={() => setIsStackedOpen(true)}
            >
              <ChevronRightIcon className="h-6 w-6"></ChevronRightIcon>
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
