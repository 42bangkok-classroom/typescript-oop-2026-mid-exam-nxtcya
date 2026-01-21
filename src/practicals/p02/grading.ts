// Write your code below
let GD = parseFloat(process.argv[2]);

if(isNaN(GD) || GD > 100 || GD < 0 ){
    console.log("Invalid input");
    
}else if(GD >= 80){
    console.log("Grade is A")
}else if(GD >= 70){
    console.log("Grade is B");
}else if(GD >= 60){
    console.log("Grade is C");
}else if(GD >= 50){
    console.log("Grade is B");
}else{
    console.log("Grade is F");
}
