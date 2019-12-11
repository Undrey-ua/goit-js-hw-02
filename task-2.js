const calculateEngravingPrice = function(string, costPerWord) {
  let total = 0;
  const words = string.split(" ");
  for (const word of words) {
    total += costPerWord;
  }
  return total;
};
const message = "Proin sociis natoque et magnis parturient montes mus";
const cost = calculateEngravingPrice(message, 10);

console.log(cost);

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
);

console.log(calculateEngravingPrice("Donec orci lectus aliquam est", 40));
console.log(calculateEngravingPrice("Donec orci lectus aliquam est", 20));
