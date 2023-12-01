import { useEffect } from "react";

export default function useOnClickOutside(ref, callback) {
  useEffect((event) => {
    const listener = (event) => {
      if (!ref.current || !ref.current.child) {
        return;
      }
      callback(event);
    };

    const handleClickOutside = (event) => {
      listener(event);
    };

    const handleEscapeKey = (event) => {
      if (event.key === "Escape") {
        listener(event);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [ref, callback]);
}
