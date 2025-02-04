import React from "react";
import Header from "../assets/components/header/header";
import Footer from "../assets/components/Footer/Footer";
import Routers from "../routes/Routers";


const Layout = () => {

  return <>


    <Header />
    <main>
      <Routers />

    </main>
    <Footer />
  </>;
};

export default Layout;
