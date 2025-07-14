import { Link } from "react-router";

type sidebarNavigationItem = {
  name: string;
  href: string;
  icon: any;
  current: boolean;
};

export default function SidebarButton({
  item,
}: {
  item: sidebarNavigationItem;
}) {
  console.log("SidabarButton render");
  return (
    <Link
      key={item.name}
      to={item.href}
      className="text-gray-400 hover:bg-gray-700 flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-lg"
    >
      <span className="sr-only">{item.name}</span>
      <item.icon className="h-6 w-6" aria-hidden="true" />
    </Link>
  );
}
