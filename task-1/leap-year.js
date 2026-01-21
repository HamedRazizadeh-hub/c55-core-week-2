import promptSync from "prompt-sync";
const prompt = promptSync();

const yearInput = prompt("Enter a year:");
const year = Number(yearInput);

if (!Number.isInteger(year) || year < 1 || year > 9999) {
  console.log("Invalid year!");
} else {
  if (year % 400 === 0) {
    console.log(`Yes, ${year} is a leap year`);
  } else if (year % 100 === 0) {
    console.log(`No, ${year} is not a leap year`);
  } else if (year % 4 === 0) {
    console.log(`Yes, ${year} is a leap year`);
  } else {
    console.log(`No, ${year} is not a leap year`);
  }
}
