import {FCmessages, manType} from "./05";

let people: Array<manType> = [
    {name: 'Beka Softwere', age: 21},
    {name: 'Lolo Softwere', age: 23},
    {name: 'Sakira Softwere', age: 25},
]

beforeEach( () => {
    people = [
        {name: 'Beka Softwere', age: 21},
        {name: 'Lolo Softwere', age: 23},
        {name: 'Sakira Softwere', age: 25},
    ]
})

test('result', () => {

    const messages = FCmessages(people)

    expect(messages.length).toBe(3)
    expect(messages[0]).toBe('Hello Beka. Welcome to KZ')
    expect(messages[1]).toBe('Hello Lolo. Welcome to KZ')
    expect(messages[2]).toBe('Hello Sakira. Welcome to KZ')
})