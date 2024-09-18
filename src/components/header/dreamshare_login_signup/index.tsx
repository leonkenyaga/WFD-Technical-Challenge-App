import * as React from "react";
import Login_signup from "./login_signup";
import Dreamshare from "./dreamshare";

export default function Dreamshare_login_signup() {
  return (
    <section className="w-full flex flex-wrap-reverse justify-center md:justify-between lg:px-[200px] md:px-[55px] px-[40px] max-sm:gap-[150px] md:pt-[46px] pt-[30px]">
      <div className="max-sm:hidden">
      <Dreamshare />
        </div>
      <div>
        <Login_signup />
      </div>
    </section>
  );
}
