import { Transition } from "@headlessui/react";
import { useState } from "react";

export default function Example() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen((open) => !open)}>Toggle</button>
      <Transition
        show={open}
        enter="transition duration-500 ease-out"
        enterFrom={" translate-x-[-100%]"}
        enterTo={" translate-x-0"}
        leave="transition duration-500 ease-in"
        leaveFrom={" translate-x-0"}
        leaveTo={" translate-x-[-100%]"}
      >
        <div>I will fade in on initial render</div>
      </Transition>
    </>
  );
}
