import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

/**
 * Puts the page in the right place after a link is clicked:
 * the top of the page, or the section named after the "#".
 * Clicking a link to the page you are already on also returns you to the top.
 * Back and forward are left alone so the browser can restore where you were.
 */
export const ScrollManager = () => {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    if (navigationType === "POP") return;

    const id = location.hash.slice(1);
    if (id) {
      // Wait a moment so the new page has rendered its sections
      const timer = window.setTimeout(() => document.getElementById(id)?.scrollIntoView(), 50);
      return () => window.clearTimeout(timer);
    }

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.key, location.hash, navigationType]);

  return null;
};
