import * as React from "react";
import Footer from "../components/footer";
import Header from "../components/header";

export default function Home(props) {
  return (
    <div className="relative min-h-screen">
      <Header />
      <Footer />
    </div>
  );
}
