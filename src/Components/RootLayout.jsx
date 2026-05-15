import React, { useState, useEffect } from "react";
import Preloader from "./PreLoader.jsx";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollTop.jsx";
export default function RootLayout() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="App" id={load ? "no-scroll" : "scroll"}>
      <Navbar />
      <Preloader load={load} />
      <ScrollToTop />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
