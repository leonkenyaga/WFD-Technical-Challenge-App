import * as React from "react";
import Footer from "../components/footer";
import Header from "../components/header";
import Main from "../components/main";
import { Seo } from "../components/seo";

export default function Home() {

  return (
    <div className="relative min-h-screen">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export const Head = () => (
  <Seo title={undefined} description={undefined} pathname={undefined} children={undefined} />
)