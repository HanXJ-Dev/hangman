import React, { useState, useEffect } from "react";
import EndGame from "../../components/endgame";
import Hangman from "../../components/hangman";
import Keyboard from "../../components/keyboard";
import { Button, Stack, Heading, Center } from "@chakra-ui/react";
import { WORDS, randomWord } from "../../Words";
import "animate.css";

const LIVES = 6;

export default function Game() {
  const [lives, setLives] = useState(LIVES);
  const [guessed, setGuessed] = useState([]);
  const [topic, setTopic] = useState("");
  const [word, setWord] = useState("");
  const [correctLetters, setCorrectLetters] = useState(-1);
  const [gameState, setGameState] = useState(0);

  const selectTopic = (topic) => {
    let word = randomWord(topic);
    setWord(word);
    setTopic(topic);
    setCorrectLetters(0);
  };

  const countOccurence = (letter) => {
    const re = new RegExp(letter, "g");
    const count = word.match(re).length;
    return count;
  };

  const selectLetter = (event) => {
    setGuessed([...guessed, event.target.name]);

    if (word.toLowerCase().indexOf(event.target.name.toLowerCase()) > -1) {
      setCorrectLetters(correctLetters + countOccurence(event.target.name));
    } else setLives(lives - 1);
  };

  useEffect(() => {
    if (correctLetters === word.length) setGameState(1);
  }, [correctLetters]);

  useEffect(() => {
    if (lives < 1) setGameState(2);
  }, [lives]);

  const generateGame = () => {
    return (
      <>
        <Center>
          <Heading pt={5}>{topic}</Heading>
        </Center>
        <Center mt={5}>
          <Hangman lives={lives} />
        </Center>
        <Center letterSpacing={5}>
          {word.split("").map((letter, idx) => {
            return (
              <Heading
                key={idx}
                className="animate__animated animate__bounceInLeft"
              >
                {guessed.indexOf(letter) > -1 ? (
                  <Heading className="animate__animated animate__flipInX">
                    {letter}
                  </Heading>
                ) : (
                  "_"
                )}
              </Heading>
            );
          })}
        </Center>
        <Center mt={2}>
          <Heading size="xs">Lives: {lives}</Heading>
        </Center>
      </>
    );
  };

  return (
    <>
      {topic === "" ? (
        <>
          <Center mt={5}>
            <Heading>Select Topic</Heading>
          </Center>
          <Stack direction="row" mt={5} justify="center">
            {Object.keys(WORDS).map((topic, idx) => {
              return (
                <Button
                  colorScheme="teal"
                  key={idx}
                  onClick={() => selectTopic(topic)}
                >
                  {topic}
                </Button>
              );
            })}
          </Stack>
        </>
      ) : (
        generateGame()
      )}

      {gameState === 0 ? (
        ""
      ) : (
        <EndGame
          displayText={gameState === 1 ? "You Win! :D" : "You Lose :("}
          restart={() => {
            window.location.reload();
          }}
          word={word}
          gameState={gameState}
        />
      )}

      <Keyboard
        selectLetter={selectLetter}
        started={topic}
        guessed={guessed}
        end={gameState !== 0}
      />
    </>
  );
}
