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

const canDrive = () => {
  return age >= 18 ? "can Drive" : "can't drive";
};

greeting();
details();
console.log(sum(5, 8));
learning();
console.log(`${name} is age of ${age} can drive ? : ${canDrive()}`);

function hello() {
  return `hello ${name}`;
}

function newFeature() {
  console.log("new feature created in feature branch");
  console.log("new feature created in feature branch A");
}

function newFeatureB() {
  console.log("new feature created in feature branch");
  console.log("new feature created in feature branch B");
}

function newFeatureC() {
  console.log("new feature created in feature branch");
  console.log("new feature created in feature branch C");
  console.log("new feature created in feature branch c2");
}
console.log(hello());
