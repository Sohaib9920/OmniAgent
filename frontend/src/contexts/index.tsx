import { AlertProvider } from "./alertContext";
import { LocationProvider } from "./locationContext";

export default function ContextWrapper({ children }) {
  return (
    <>
      <LocationProvider>
        <AlertProvider>{children}</AlertProvider>
      </LocationProvider>
    </>
  );
}
