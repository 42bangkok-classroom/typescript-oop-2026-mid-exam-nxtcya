// Write your code below
let score = parseInt(process.argv[2]);

if(!score || score <= 0){
    process.exit(1);
}else if(score % 3 === 0 && score % 5 === 0){
    console.log("FizzBuzz");
}else if(score % 3 === 0){
    console.log("Fizz");
}else if(score % 5 === 0){
    console.log("Buzz")
}