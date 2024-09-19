import * as React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Main from "../components/main";

export default function Home() {

  return (
    <div className="relative min-h-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}