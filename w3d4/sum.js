const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
   });

let sum = 0;
const getNumber = function(){
    readline.question('Enter a number: (\'s\' to stop) :', number=>{
        if(number === 's'){
            console.log(`SUM: ${sum}`);
            readline.close();
        }else{
            sum += parseInt(number);
            getNumber();
        }
    })
}

getNumber();