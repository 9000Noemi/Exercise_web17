
 const user = {
    name: 'Han',
    surname: 'Solo',
    subjects:[
        {
        name: 'Node.js',
        date: '2024-12-01'
        },
        {
        name: 'Git',
        date: '2025-01-15'   
        },
        {
        name: 'React',
        date: '2025-03-03'
        }
    ],
    active_search: false
    }


for (let i=0; i < user.subjects.length; i++){
    if (user.subjects[i].name === 'React'){
        console.log(user.subjects[i].date)
        break;
    }
}


