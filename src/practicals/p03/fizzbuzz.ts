// Write your code below
const score = Number(process.argv[2]);

if (!isNaN(score) && score >0) {
for (let i =1; i <= score; i++) {
if (i %3 ===0 && i %5 ===0) {
console.log("FizzBuzz");
    }else if (i %3 ===0) {
console.log("Fizz");
    }else if (i %5 ===0) {
console.log("Buzz");
    }else {
console.log(i);
    }
  }
}
