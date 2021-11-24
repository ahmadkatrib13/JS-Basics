let shoe_size =   window.prompt("give me your shoe size !!");
let birth_year =   window.prompt("give me your birth year !!");

const magicFunction = (shoe_size,birth_year) => {
  return (shoe_size * 2 + 5) * 50 - birth_year +1766;
};

alert("The result is = " + magicFunction(shoe_size,birth_year));