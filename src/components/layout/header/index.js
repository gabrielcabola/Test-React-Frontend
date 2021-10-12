import React from "react";

function Header(props) {
  return (
    <section className="Header">
      <h1>{props.title}</h1>
      {props.children}
    </section>
  );
}

export default Header;