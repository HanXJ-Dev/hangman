import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, useBreakpointValue, Center } from "@chakra-ui/react";
import "animate.css"

const style = {
  color: "#69C9D0",
};

const KEYS = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");
const ROW = [
  [0, 10],
  [10, 19],
  [19, 27],
];

export default function Keyboard(props) {
  const { selectLetter, started, guessed, end } = props;

  const buttonSize = useBreakpointValue(["xs", "md"]);

  const generateKeys = (rowIndex) => {
    return [...KEYS.slice(rowIndex[0], rowIndex[1])].map((letter, idx) => {
      return (
        <Button
          isDisabled={started === "" || end ? true : false || guessed.includes(letter)}
          colorScheme={guessed.includes(letter) || started === "" || end ? "blackAlpha": "gray"}
          name={letter}
          key={idx}
          shadow="md"
          size={buttonSize}
          color={style.color}
          onClick={(event) => selectLetter(event)}
          className="animate__animated animate__rollIn"
        >
          {letter}
        </Button>
      );
    });
  };
  return (
    <div>
      {ROW.map((rowIndex, idx) => {
        return (
          <Stack idx={idx} direction="row" mt={5} mx={2} justify="center">
            {generateKeys(rowIndex)}
          </Stack>
        );
      })}
      <Center my={5}>
        <Link to="/">
          <Button colorScheme="teal">Back</Button>
        </Link>
      </Center>
    </div>
  );
}
