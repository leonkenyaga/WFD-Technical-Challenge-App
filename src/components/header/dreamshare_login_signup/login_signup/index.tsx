import * as React from "react";
import Login from "./login";
import Signup from "./signup";

export default function Login_signup() {
  return (
    <section
      style={{ fontFamily: "Montserrat Variable" }}
      className="flex justify-between"
    >
      <Login />
      <Signup />
    </section>
  );
}
