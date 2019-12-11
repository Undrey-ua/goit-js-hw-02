function sumNumbers() {

  const numbers = [];

  while (true) {

    let input = prompt("Введите число");

    if (input === null) 
      break; 

      numbers.push(+input);

    }

    let total = 0;

    for (let number of numbers) {

      total += number;
    }
    return total;
  }


console.log(sumNumbers());
