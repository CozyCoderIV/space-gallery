import React from "react";
import "../App.css";
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
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

function Home() {
  return (
    <div className="home">
      <Header name="Space" />

      <Input
        id="search_bar"
        variant="outline"
        placeholder="Search"
        _placeholder={{ color: "white.500" }}
        maxW="xl"
        color="whiteAlpha.800"
      ></Input>

      <Navbar />

      <Box id="photos_container" color="white">
        <Grid
          h="400px"
          templateRows="repeat(3, 1fr)"
          templateColumns="repeat(4, 1fr)"
          gap={2}
        >
          <GridItem className="grid_item" rowSpan={1} colSpan={1} />
          <GridItem className="grid_item" rowSpan={1} colSpan={1} />
          <GridItem className="grid_item" rowSpan={1} colSpan={1} />
          <GridItem className="grid_item" rowSpan={1} colSpan={1} />

          <GridItem className="grid_item" rowSpan={1} colSpan={1} />
          <GridItem className="grid_item" rowSpan={1} colSpan={1} />
          <GridItem className="grid_item" rowSpan={1} colSpan={1} />
          <GridItem className="grid_item" rowSpan={1} colSpan={1} />

          <GridItem className="grid_item" rowSpan={1} colSpan={1} />
          <GridItem className="grid_item" rowSpan={1} colSpan={1} />
          <GridItem className="grid_item" rowSpan={1} colSpan={1} />
          <GridItem className="grid_item" rowSpan={1} colSpan={1} />
        </Grid>
      </Box>
    </div>
  );
}

export default Home;
