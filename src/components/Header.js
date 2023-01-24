import React from "react";
import { Link } from "react-router-dom";
import { Heading } from "@chakra-ui/react";

function Header(props) {
  return (
    <Heading
      className="header"
      as="h1"
      size="4xl"
      bgGradient="linear(to-l, white, black)"
      bgClip="text"
    >
      <Link to="/">{props.name} Gallery</Link>
    </Heading>
  );
}

export default Header;
