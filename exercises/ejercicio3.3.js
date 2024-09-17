const input1 = 'string';
 // create your function here
 //yourFunction(input); // '6 gnirts'

const reverse = str => {
    let reversedStr = str.split('').reverse().join('');
    let strLength = str.length;
    return `${strLength} ${reversedStr}`
}

console.log(reverse(input1))

'--------------------------------------------------------------------------------------------------------------'
 const input2 = 'variable';
 //yourFunction(input); // '8 elbairav'

console.log(reverse(input2))

'--------------------------------------------------------------------------------------------------------------'

 const input3 = 'pointer';
 //yourFunction(input); // '7 retniop'

 console.log(reverse(input3))
