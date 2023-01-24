import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { Stack, Button } from "@chakra-ui/react";
function Navbar() {
  return (
    <Stack id="button_container" spacing={1.5} direction="row" align="center">
      <Button variant="solid" colorScheme="blackAlpha" className="nav_button">
        <Link to="/Planets">Planets</Link>
      </Button>
      <Button variant="solid" colorScheme="blackAlpha" className="nav_button">
        <Link to="/Astronauts">Astronauts</Link>
      </Button>
      <Button variant="solid" colorScheme="blackAlpha" className="nav_button">
        <Link to="Rovers">Rovers</Link>
      </Button>
      <Button variant="solid" colorScheme="blackAlpha" className="nav_button">
        <Link to="/Constellations">Constellations</Link>
      </Button>
    </Stack>
  );
}

export default Navbar;
