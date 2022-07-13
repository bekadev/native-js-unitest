export type manType = {
    name: string
    age: number
}

const people: Array<manType> = [
    {name: 'Beka Softwere', age: 21},
    {name: 'Lolo Softwere', age: 23},
    {name: 'Sakira Softwere', age: 25},
]

const transformator = (man: manType) => ({
    stack: ['css', 'html', 'react', 'mui'],
    name: man.name.split(' ')[0],
    devop: man.name.split(' ')[1]
})


let d1 = transformator(people[0])

const dev2 = people.map(man => ({
    stack: ['css', 'html', 'react', 'mui'],
    name: man.name.split(' ')[0],
    devop: man.name.split(' ')[1]
}))


const messages = people.map(el => `Hello ${el.name.split(' ')[0]}. Welcome to KZ`)


export const FCmessages = (people: Array<manType>) => {
    return people.map(el => `Hello ${el.name.split(' ')[0]}. Welcome to KZ`)
}