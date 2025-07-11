import { useState } from "react";

export default function Example() {
  const [a, seta] = useState(true);
  return (
    <>
      <div
        className={
          (a ? "w-25 bg-amber-950" : "w-0 bg-black") +
          " h-100 transition-all duration-500 overflow-hidden"
        }
      >
        <div className="text-green-700">hy</div>
      </div>
      <button onClick={() => seta(!a)}>click</button>
    </>
  );
}
