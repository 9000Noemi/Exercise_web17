/*Ejercicio4Transformacionesconmapyfilter
 Nuestroclientetieneunarraydedatosynoshapedidoquesaquemoslasiguiente
 información.El listadodelosdesarrolladoresquetengancomohabilidad“JavaScript”yel
 listadodelosproyectosenelquesusdesarrolladorestrabajan.
 Estossonlosdatos*/

 const datos = [
    {
    id: 1,
    nombre: 'Juan',
    habilidades: ['JavaScript', 'HTML', 'CSS'],
    proyectos: [
    { id: 1, nombre: 'Proyecto 1' },
    { id: 2, nombre: 'Proyecto 2' }
    ]
    },
    {
    id: 2,
    nombre: 'María',
    habilidades: ['Python', 'SQL', 'Django'],
    proyectos: [
    { id: 3, nombre: 'Proyecto 3' },
    { id: 4, nombre: 'Proyecto 4' }
    ]
    },
    {
    id: 3,
    nombre: 'Pedro',
    habilidades: ['Java', 'Spring', 'Hibernate'],
    proyectos: [
    { id: 5, nombre: 'Proyecto 5' },
    { id: 6, nombre: 'Proyecto 6' }
    ]
    }
    ];


 /* desarrolladoresJavascript */
 [
    {
    "id": 1,
    "nombre": "Juan",
    "habilidades": ["JavaScript", "HTML", "CSS"],
    "proyectos": [
    { "id": 1, "nombre": "Proyecto 1"},
    { "id": 2, "nombre": "Proyecto 2" }
    ]
    }
    ]
   


let jsSkills = datos.filter(developer => developer.habilidades.includes('JavaScript')).map(developer => developer)

console.log(jsSkills)


 /* nombresProyectos */
 //['Proyecto 1', 'Proyecto 2', 'Proyecto 3', 'Proyecto 4', 'Proyecto 5','Proyecto 6']

let projects = datos.map(developer => developer.proyectos)

console.log(projects)