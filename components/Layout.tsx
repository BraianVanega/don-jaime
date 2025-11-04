"use client";

import { useEffect } from "react";
import Loader from "./Loader";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
  activeItem?: string;
}

export default function Layout({ children, activeItem = "home" }: LayoutProps) {
  useEffect(() => {
    // Initialize scripts after component mounts
    if (typeof window !== "undefined") {
      // Scripts will be loaded via Next.js Script component in layout.tsx
      // This is just for any client-side initialization if needed
    }
  }, []);

  return (
    <>
      <Loader />
      <div id="main-wrap" className="full-width">
        <Header activeItem={activeItem} />
        <div id="page-content" className="header-static footer-fixed">
          {children}
        </div>
        <Footer />
      </div>
    </>
  );
}
