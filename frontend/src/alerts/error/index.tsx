import { Transition } from "@headlessui/react";
import { XCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";

export default function ErrorAlert({
  title,
  list = [],
  id,
  removeAlert,
}: {
  title: string;
  list?: Array<string>;
  id: string;
  removeAlert: (id: string) => void;
}) {
  console.log("ErrorAlert render");
  const [show, setShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
      setTimeout(() => {
        removeAlert(id);
      }, 500);
    }, 5000);
  }, []);
  return (
    <Transition
      show={show}
      enter="transition-transform duration-500 ease-out"
      enterFrom="transform translate-x-[-100%]"
      enterTo="transform translate-x-0"
      leave="transition-transform duration-500 ease-in"
      leaveFrom="transform translate-x-0"
      leaveTo="transform translate-x-[-100%]"
    >
      <div>
        <div className="flex bg-red-50 rounded-md p-4 w-96 mt-6">
          <div className="flex-shrink-0">
            <XCircleIcon className="h-5 w-5 text-red-400" aria-hidden="true" />
          </div>
          <div className="ml-3">
            <h3 className="text-sm font-medium text-red-800">{title}</h3>
            {list ? (
              <div className="mt-2 text-sm text-red-700">
                <ul className="list-disc space-y-1 pl-5">
                  {list.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ) : (
              <></>
            )}
          </div>
          <div className="ml-auto pl-3">
            <div className="-mx-1.5 -my-1.5">
              <button
                type="button"
                onClick={() => {
                  setShow(false);
                  setTimeout(() => {
                    removeAlert(id);
                  }, 500);
                }}
                className="inline-flex rounded-md bg-red-50 p-1.5 text-red-500"
              >
                <span className="sr-only">Dismiss</span>
                <XMarkIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </Transition>
  );
}
