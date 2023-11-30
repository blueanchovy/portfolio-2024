import { useEffect, useState } from "react";

export default function useDevice(width) {
  const [isTabletOrSmaller, setIsTabletOrSmaller] = useState(false);
  const [isMobileOrSmaller, setIsMobileOrSmaller] = useState(false);
  const [isXOrSmaller, setIsXOrSmaller] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsTabletOrSmaller(
        window?.matchMedia("(max-width: 1023px)")?.matches || false
      );
      setIsMobileOrSmaller(
        window?.matchMedia("(max-width: 767px)")?.matches || false
      );
      setIsXOrSmaller(
        window?.matchMedia(`(max-width: ${width}px)`)?.matches || false
      );
    };
    if (typeof window !== "undefined") {
      setIsTabletOrSmaller(
        window?.matchMedia("(max-width: 1023px)")?.matches || false
      );
      setIsMobileOrSmaller(
        window?.matchMedia("(max-width: 767px)")?.matches || false
      );
      setIsXOrSmaller(
        window?.matchMedia(`(max-width: ${width}px)`)?.matches || false
      );

      window?.addEventListener("resize", handleResize);

      return () => {
        window?.removeEventListener("resize", handleResize);
      };
    }
  }, [width]);

  return {
    isTabletOrSmaller,
    isMobileOrSmaller,
    isXOrSmaller,
  };
}