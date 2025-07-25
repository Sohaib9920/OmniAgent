import { HomeIcon } from "@heroicons/react/20/solid";
import { ChevronRightIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { Link } from "react-router";
import { locationContext } from "../../contexts/locationContext";

const breadcrumbNameMap: { [key: string]: string } = {
  "/settings": "Settings",
  "/settings/general": "General",
  "/settings/general/main": "Main",
  "/table": "Table",
};

function getPages(atual: string[]) {
  let pages = [];
  for (let i = 2; i <= atual.length; i++) {
    let to = "/" + atual.slice(1, i).join("/");
    pages.push({ name: breadcrumbNameMap[to], href: to });
  }
  return pages;
}

export default function Breadcrumb() {
  console.log("Breadcrumb rendered");
  const { atual } = useContext(locationContext);

  return (
    <nav className="flex ml-2" aria-label="Breadcrumb">
      <ol className="flex items-center space-x-4">
        <li>
          <Link to="/" className="text-gray-400 hover:text-gray-500">
            <HomeIcon className="h-5 w-5" aria-hidden="true" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {getPages(atual).map((page) => (
          <li key={page.href} className="flex items-center">
            <ChevronRightIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
            <a
              href={page.href}
              className="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"
            >
              {page.name}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
