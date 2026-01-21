// Write your code below
let num =  parseInt(process.argv[2]);

if(!num || num <= 0){
    process.exit(1);
}
for(let i = 0;i < num  ;i++){
    let row = " ";
    for(let j = 0 ; j <= i ;j++){
        row = row + (i+1)
    }
    console.log(row);
}
