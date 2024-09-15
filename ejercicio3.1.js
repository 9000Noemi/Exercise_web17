//Crea una función para que con estos datos de entrada se produzca los siguientes resultados
//yourFunction(input1); // 'Downloads/Videos/capture.mp4':

const input1 = [
    'Downloads',
    'Videos',
    'capture',
    'mp4',
    ]

const fileName = (list) => {
    //Obtener el ultimo elemento que será la extensión mp4
    const extension = list[list.length-1];
    
    let newList = []
    
    for (let i=0; i < list.length -1; i++){
        newList.push(list[i]);
    }
    return `${newList.join('/')}.${extension}`;
}

console.log (fileName(input1))

'-----------------------------------------------------------------------------------------'

const input2 = [
'CodinGame',
'python',
'py',
];

//(input2); // 'CodinGame/python.py'

const fileExtension = (list) => {
    
    const extension = list[list.length-1]

    let newList = []
   
    for (let i=0; i < list.length -1; i++){
        newList.push(list[i]);
    }

    return `${newList.join('/')}.${extension}`;
}

console.log (fileExtension(input2))

'------------------------------------------------------------------------------------------------'
const input3 = [
'programming',
'languages',
'easy',
'beginner',
'useful',
'pythonstuff',
'py',
]

// 'programming/languages/easy/beginner/useful/pythonstuff.py'

const fileExtension2 = (list) => {
    
    const extension = list[list.length-1]

    let newList = []
   
    for (let i=0; i < list.length -1; i++){
        newList.push(list[i]);
    }

    return `${newList.join('/')}.${extension}`;
}

console.log (fileExtension2(input3))

console.log('--------------------');

console.log (fileName(input1))
console.log (fileName(input2))
console.log (fileName(input3))