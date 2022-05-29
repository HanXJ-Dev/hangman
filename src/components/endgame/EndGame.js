import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Heading, Text, Center } from "@chakra-ui/react";
import Confetti from "react-confetti";

export default function EndGame(props) {
  const { displayText, restart, word, gameState } = props;
  // Hook
  return (
    <>
      <Center mt={5}>
        <Heading>{displayText}</Heading>
      </Center>

      {gameState === 2 ? (
        <Center mt={5}>
          <Text fontSize="lg" color="tomato">
            <b>Word: {word}</b>
          </Text>
        </Center>
      ) : (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={500}
          recycle={false}
        />
      )}
      <Stack direction="row" mt={5} justify="center">
        <Link to="/">
          <Button colorScheme="teal">Home</Button>
        </Link>
        <Button colorScheme="teal" onClick={restart}>
          Restart
        </Button>
      </Stack>
    </>
  );
}
