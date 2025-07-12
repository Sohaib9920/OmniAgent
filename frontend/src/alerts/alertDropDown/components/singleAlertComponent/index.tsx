import { Transition } from "@headlessui/react";
import {
  CheckCircleIcon,
  InformationCircleIcon,
  XCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { Link } from "react-router";

export default function SingleAlert({ dropItem }) {
  const [open, setOpen] = useState(true);
  const type = dropItem.type;
  return (
    <Transition show={open} appear={true}>
      <div className="transition duration-500 ease-out data-closed:translate-x-[-100%]">
        {type === "error" ? (
          <div className="bg-red-50 flex rounded-md p-4 mb-2">
            <div className="flex-shrink-0">
              <XCircleIcon
                className="h-5 w-5 text-red-400"
                aria-hidden="true"
              ></XCircleIcon>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">
                {dropItem.title}
              </h3>
              {dropItem.list ? (
                <div className="mt-2 text-sm text-red-700">
                  <ul className="list-disc space-y-1 pl-5">
                    {dropItem.list.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
              ) : (
                <></>
              )}
            </div>
            <div className="ml-auto pl-3 bg-red-50 rounded-md ">
              <XMarkIcon className="h-5 w-5 text-red-600"></XMarkIcon>
            </div>
          </div>
        ) : type === "notice" ? (
          <div className="bg-blue-50 flex rounded-md p-4 mb-2">
            <div className="flex-shrink-0">
              <InformationCircleIcon
                className="h-5 w-5 text-blue-400"
                aria-hidden="true"
              ></InformationCircleIcon>
            </div>
            <div className="ml-3 flex-1 md:flex md:justify-between">
              <h3 className="text-sm font-medium text-blue-800">
                {dropItem.title}
              </h3>
              {dropItem.link ? (
                <div className="mt-3 text-sm md:mt-0 md:ml-6">
                  <Link
                    to={dropItem.link}
                    className="whitespace-nowrap font-medium text-blue-700 hover:text-blue-600"
                  >
                    Details
                  </Link>
                </div>
              ) : (
                <></>
              )}
            </div>
            <div className="ml-auto pl-3 bg-blue-50 rounded-md ">
              <XMarkIcon className="h-5 w-5 text-blue-600"></XMarkIcon>
            </div>
          </div>
        ) : (
          <div className="bg-green-50 flex rounded-md p-4 mb-2">
            <div className="flex-shrink-0">
              <CheckCircleIcon
                className="h-5 w-5 text-green-400"
                aria-hidden="true"
              ></CheckCircleIcon>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-green-800">
                {dropItem.title}
              </h3>
            </div>
            <div className="ml-auto pl-3 bg-green-50 rounded-md ">
              <XMarkIcon className="h-5 w-5 text-green-600"></XMarkIcon>
            </div>
          </div>
        )}
      </div>
    </Transition>
  );
}
