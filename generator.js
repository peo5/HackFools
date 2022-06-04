const generator = (dataLength, returnLength) => {
  arr = [];
  for (let i = 0; i < returnLength; i++) {
    let aux = getRandomInt(dataLength - 1);
    while (arr.find((x) => aux === x) !== undefined)
      aux = getRandomInt(dataLength - 1);
    arr.push(aux);
  }
  return arr;
};
const getRandomInt = (max) => {
  max = Math.floor(max);
  return Math.floor(Math.random() * max);
};

generator(50, 10);
