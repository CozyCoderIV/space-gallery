import React from "react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Astronauts() {
  return (
    <div>
      Astronauts
      <Button variant="solid" colorScheme="blackAlpha" className="nav_button">
        <Link to="/">Home</Link>
      </Button>
    </div>
  );
}

export default Astronauts;
