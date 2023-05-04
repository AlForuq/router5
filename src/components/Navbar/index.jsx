import React from "react";
import { Container, LinkComp } from "./style";

export const Navbar = () => {
  return (
    <Container>
      <LinkComp
        exact
        // activeStyle={{ color: "red" }}
        to={"/"}
      >
        Logo
      </LinkComp>
      <LinkComp
        // activeStyle={{ color: "red" }}
        to={"/Home"}
      >
        Home
      </LinkComp>
      <LinkComp
        // activeStyle={{ color: "red" }}
        to={"/About"}
      >
        About
      </LinkComp>
      <LinkComp
        exact
        // activeStyle={{ color: "red" }}
        to={"/Contact"}
      >
        Contact
      </LinkComp>
      <LinkComp
        exact
        // activeStyle={{ color: "red" }}
        to={"/Contact/plus"}
      >
        Contact++
      </LinkComp>
      <LinkComp
        // activeStyle={{ color: "red" }}
        to={"/Info"}
      >
        Info
      </LinkComp>
    </Container>
  );
};
