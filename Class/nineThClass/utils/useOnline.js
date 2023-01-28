import { useEffect, useState } from "react";

const useOnline = () => {
  const [onLine, setOnlie] = useState(true);
  useEffect(() => {
    const online = () => {
      setOnlie(true);
    };
    const offline = () => {
      setOnlie(false);
    };
    window.addEventListener("online", online);
    window.addEventListener("offline", offline);
    return () => {
      window.removeEventListener("online", online);
      window.removeEventListener("offline", offline);
    };
  }, []);
  return onLine;
};
export default useOnline;
