//Crea una función para que con estos datos de entrada se produzca los siguientes resultados

const fileName = (list) => {
    //Obtener el ultimo elemento que será la extensión mp4
    const extension = list[list.length - 1];

    let newList = []

    for (let i = 0; i < list.length - 1; i++) {
        newList.push(list[i]);
    }
    return `${newList.join('/')}.${extension}`;
}

const input1 = [
    'Downloads',
    'Videos',
    'capture',
    'mp4',
]

const input2 = [
    'CodinGame',
    'python',
    'py',
];

const input3 = [
    'programming',
    'languages',
    'easy',
    'beginner',
    'useful',
    'pythonstuff',
    'py',
]

//(input1); 'Downloads/Videos/capture.mp4'
//(input2); 'CodinGame/python.py'
//(input3); 'Programming/languages/easy/beginner/useful/pythonstuff.py'

console.log(fileName(input1))
console.log(fileName(input2))
console.log(fileName(input3))