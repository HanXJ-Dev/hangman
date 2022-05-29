var WORDS = {
  "ANIMALS":["CAT", "DOG", "GIRAFFE", "DEER", "GORILLA", "MONKEY", "CAMEL", "SNAKE", "WHALE"],
  "SPORTS":["SOCCER", "BASKETBALL", "RUGBY"],
}

function randomWord(topic){
  const idx = Math.floor(Math.random() * (WORDS[topic].length))
  return WORDS[topic][idx]
}

export { WORDS, randomWord }