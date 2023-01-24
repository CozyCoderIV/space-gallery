import React from "react";
import { Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Constellations() {
  return (
    <div>
      Constellations
      <Button variant="solid" colorScheme="blackAlpha" className="nav_button">
        <Link to="/">Home</Link>
      </Button>
    </div>
  );
}

export default Constellations;
