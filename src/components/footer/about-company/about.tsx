import * as React from "react";

export default function About() {
  return (
    <nav className="pt-[11px] font-light text-ms" style={{ fontFamily: "Roboto" }}>
      <ul className="max-sm:flex max-sm:flex-wrap gap-4 justify-center">
        <li className="hover:text-red">
          <a href="#">About</a>
        </li>
        <li className="hover:text-red">
          <a href="#">Contact</a>
        </li>
        <li className="hover:text-red">
          <a href="#">Press</a>
        </li>
        <li className="hover:text-red">
          <a href="#">Blog</a>
        </li>
        <li className="hover:text-red">
          <a href="#">Terms and Privacy</a>
        </li>
        <li className="hover:text-red">
          <a href="#">Help</a>
        </li>
      </ul>
    </nav>
  );
}
