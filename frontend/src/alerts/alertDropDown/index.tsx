import { TrashIcon, XMarkIcon } from "@heroicons/react/24/outline";
import SingleAlert from "./components/singleAlertComponent";
import { useContext } from "react";
import { alertContext } from "../../contexts/alertContext";

export type alertDropdownItem = {
  type: "notice" | "error" | "success";
  title: string;
  link?: string;
  list?: Array<string>;
  id: string;
};

type AlertDropdownProps = {
  closeFunction: () => void;
};

export default function AlertDropdown({ closeFunction }: AlertDropdownProps) {
  console.log("AlertDropdown render");
  const {
    notificationList,
    clearNotificationList,
    removeFromNotificationList,
  } = useContext(alertContext);
  return (
    <div className="z-10 px-8 py-6 pb-8 rounded-md bg-white ring-1 ring-black/5 shadow-lg focus:outline-none w-[36rem] h-[40rem] flex flex-col">
      <div className="flex flex-row justify-between text-md font-medium text-gray-800">
        Notifications
        <div className="flex gap-4">
          <button
            className="hover:text-black"
            onClick={() => {
              closeFunction();
              setTimeout(clearNotificationList, 100);
            }}
          >
            <TrashIcon className="w-5 h-5" />
          </button>
          <button className="hover:text-black" onClick={closeFunction}>
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
      <div className="mt-6 flex flex-col w-full h-full overflow-y-scroll">
        {notificationList.length !== 0 ? (
          notificationList.map((alertItem) => (
            <SingleAlert
              key={alertItem.id}
              dropItem={alertItem}
              removeAlert={removeFromNotificationList}
            ></SingleAlert>
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
