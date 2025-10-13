"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
    // refresh after hydration
    setTimeout(() => AOS.refresh(), 0);
  }, []);
  return null;
}
