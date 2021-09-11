import React from "react";
import Header from "./Header";
import Footer from "./Footer";
export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="pt-20">{children}</div>
      <Footer />
    </>
  );
}
