import React, { Fragment } from "react";
import Header from "./Navbar";
import Footer from "./Footer";

const Layout = ({children}) => {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
};

export default Layout;
