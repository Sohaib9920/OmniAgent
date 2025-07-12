import { TrashIcon, XMarkIcon } from "@heroicons/react/24/outline";
import SingleAlert from "./components/singleAlertComponent";

const notificationList = [
  { type: "success", title: "Settings saved successfully!", id: "success-123" },
  {
    type: "error",
    title: "Failed to upload file(s)",
    list: ["Image size too large", "Unsupported file format"],
    id: "error-456",
  },
  {
    type: "notice",
    title: "New update available!",
    link: "/settings/general/main",
    id: "notice-789",
  },
];

export default function AlertDropdown() {
  return (
    <div className="bg-white w-[36rem] h-[40rem] ring-1 ring-black/5 shadow-lg rounded-md z-10 px-8 py-6 pb-8 flex flex-col">
      <div className="flex justify-between items-center text-gray-800 text-md font-medium">
        Notifications
        <div className="flex items-center gap-4">
          <button className="hover:text-black">
            <TrashIcon className="w-5 h-5"></TrashIcon>
          </button>
          <button className="hover:text-black">
            <XMarkIcon className="w-6 h-6"></XMarkIcon>
          </button>
        </div>
      </div>
      <div className="flex flex-col mt-6 h-full w-full overflow-hidden">
        {notificationList.length !== 0 ? (
          notificationList.map((alertItem) => (
            <SingleAlert key={alertItem.id} dropItem={alertItem}></SingleAlert>
          ))
        ) : (
          <div className="h-full w-full pb-16 text-slate-500 flex justify-center items-center">
            No new notifications
          </div>
        )}
      </div>
    </div>
  );
}
