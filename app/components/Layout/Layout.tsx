import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

type Props = {
  children: React.ReactNode;
};

export const Layout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="container mx-auto py-2 flex-1">{children}</div>
        <Footer />
      </div>
    </>
  );
};

Layout.defaultProps = {};

export default Layout;
