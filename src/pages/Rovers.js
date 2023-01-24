import React from "react";
import Navbar from "../components/Navbar";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Rovers() {
  return (
    <div>
      Rovers
      {/* <Navbar /> */}
      <Button variant="solid" colorScheme="blackAlpha" className="nav_button">
        <Link to="/">Home</Link>
      </Button>
    </div>
  );
}

export default Rovers;
