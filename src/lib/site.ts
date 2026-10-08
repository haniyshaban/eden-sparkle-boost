import { useEffect } from "react";

// Contact details used across the site
export const CALENDAR_LINK = "https://calendar.app.google/XGLc2f37DtgD3MTJA";
export const EMAIL = "hello@edenlabs.app";
export const PHONE_DISPLAY = "+91 80739 53644";
export const PHONE_LINK = "tel:+918073953644";
export const LINKEDIN = "https://www.linkedin.com/company/eden-labs-co/";

/** Sets the browser tab title while a page is open */
export const usePageTitle = (title: string) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};
