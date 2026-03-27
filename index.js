const age = 24;
const name = "uttam";
const gender = "male";
const dob = "26/06/2002";

const greeting = () => {
  console.log(`Hello from ${name}`);
};

const details = () => {
  console.log(`name is ${name}\nage is ${age}\ngender is ${gender}`);
};

const sum = (a, b) => {
  return a + b;
};

const learning = () => {
  console.log("Learning Git");
};

greeting();
details();
console.log(sum(5, 8));
learning();
