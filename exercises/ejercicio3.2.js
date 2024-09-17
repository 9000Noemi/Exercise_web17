
const input = 10;
//yourFunction(input); // '1-0'

const firstFunction = number => {
    let numberStr = number.toString().split('').join('-');
    return numberStr;
}
    
console.log(firstFunction(input))

'-----------------------------------------------------------------------------------------------'
const secondInput = 1;
 //yourFunction(input); // '1'

 const secondFunction = number => number.toString()

 console.log(secondFunction(secondInput))

 '----------------------------------------------------------------------------------------------'

 const thirdInput = 11234;
 //yourFunction(input); // '1-1-2-3-4'

 console.log(firstFunction(thirdInput))