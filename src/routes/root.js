import React from "react";
import { Outlet, Link } from "react-router-dom";
import Title from "../components/atom/Title";


export default function Root() {
  return (
    <>
      <header>header</header>
      <Title />
      <nav>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/contact/1"}>Contact</Link>
        </li>
      </nav>
      <Outlet />
      <footer>footer</footer>
    </>
  );
}
