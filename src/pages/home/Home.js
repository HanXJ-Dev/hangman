import React from "react";
import { Link } from "react-router-dom";
import { Heading, Button, Center } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Center mt={5}>
        <Heading>Hangman!</Heading>
      </Center>
      <Center mt={5}>
        <Link to="/game">
          <Button colorScheme="teal" shadow="md">
            Start game!
          </Button>
        </Link>
      </Center>
    </>
  );
}
