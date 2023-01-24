import "./App.css";
import {
  Box,
  Button,
  Card,
  Container,
  Heading,
  Grid,
  Stack,
  GridItem,
} from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Planets from "./pages/Planets";
import Astronauts from "./pages/Astronauts";
import Rovers from "./pages/Rovers";
import Constellations from "./pages/Constellations";

function App() {
  return (
    <Box className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/Planets" element={<Planets />}></Route>
        <Route path="/Astronauts" element={<Astronauts />}></Route>
        <Route path="/Rovers" element={<Rovers />}></Route>
        <Route path="/Constellations" element={<Constellations />}></Route>
      </Routes>
    </Box>

    // <div className="App">
    //   <Heading
    //     className="header"
    //     as="h1"
    //     size="4xl"
    //     bgGradient="linear(to-l, white, black)"
    //     bgClip="text"
    //   >
    //     Space Gallery
    //   </Heading>

    //   <Input
    //     id="search_bar"
    //     variant="outline"
    //     placeholder="Search"
    //     _placeholder={{ color: "white.500" }}
    //     maxW="xl"
    //     color="whiteAlpha.800"
    //   ></Input>

    //   <Stack id="button_container" spacing={1.5} direction="row" align="center">
    //     <Button variant="solid" colorScheme="blackAlpha" className="nav_button">
    //       Planets
    //     </Button>
    //     <Button variant="solid" colorScheme="blackAlpha" className="nav_button">
    //       Asronauts
    //     </Button>
    //     <Button variant="solid" colorScheme="blackAlpha" className="nav_button">
    //       Rovers
    //     </Button>
    //     <Button variant="solid" colorScheme="blackAlpha" className="nav_button">
    //       Constellations
    //     </Button>
    //   </Stack>

    //   {/* <Routes>
    //     <Stack>
    //       <Route></Route>
    //       <Route></Route>
    //       <Route></Route>
    //       <Route></Route>
    //     </Stack>
    //   </Routes> */}

    //   {/* <Container id="photos_container" centerContent></Container> */}
    //   <Box id="photos_container" color="white">
    //     <Grid
    //       h="400px"
    //       templateRows="repeat(3, 1fr)"
    //       templateColumns="repeat(4, 1fr)"
    //       gap={2}
    //     >
    //       <GridItem className="grid_item" rowSpan={1} colSpan={1} />
    //       <GridItem className="grid_item" rowSpan={1} colSpan={1} />
    //       <GridItem className="grid_item" rowSpan={1} colSpan={1} />
    //       <GridItem className="grid_item" rowSpan={1} colSpan={1} />

    //       <GridItem className="grid_item" rowSpan={1} colSpan={1} />
    //       <GridItem className="grid_item" rowSpan={1} colSpan={1} />
    //       <GridItem className="grid_item" rowSpan={1} colSpan={1} />
    //       <GridItem className="grid_item" rowSpan={1} colSpan={1} />

    //       <GridItem className="grid_item" rowSpan={1} colSpan={1} />
    //       <GridItem className="grid_item" rowSpan={1} colSpan={1} />
    //       <GridItem className="grid_item" rowSpan={1} colSpan={1} />
    //       <GridItem className="grid_item" rowSpan={1} colSpan={1} />
    //     </Grid>
    //   </Box>

    //   {/* <div id="photos_container"></div> */}
    // </div>
  );
}

export default App;
