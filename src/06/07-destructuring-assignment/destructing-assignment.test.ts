type LessonsType = {
    title: string
}

export type ManType = {
    name: string
    age: number
    lessons: Array<LessonsType>
}

let man: ManType;
beforeEach(() => {
    man = {
        name: 'beka',
        age: 21,
        lessons: [{title: '1'}, {title: '2'}]
    }
})

test('', () => {
    const {age, lessons} = man

    expect(age).toBe(21)
    expect(lessons.length).toBe(2)
})

test('', () => {
    const l1 = man.lessons[0]
    const l2 = man.lessons[1]

    const [ls1, ls2] = man.lessons

    expect(l1.title).toBe('1')
    expect(l2.title).toBe('2')

    expect(ls1.title).toBe('1')
    expect(ls2.title).toBe('2')

})


