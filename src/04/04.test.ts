test('oldmans', () => {
    const age = [10, 20, 22, 32, 65, 76, 99];

    const oldAges = age.filter(age => age > 90)

    expect(oldAges.length).toBe(1)
    expect(oldAges[0]).toBe(99)
})

test('courses', () => {
    const courses = [
        {title: 'css', price: 100},
        {title: 'html', price: 150},
        {title: 'react', price: 100},
    ]

    const chip = courses.filter(course => course.price < 140)

    expect(chip.length).toBe(2)
    expect(chip[0].title).toBe('css')
})

test('tasks', () => {
    const tasks = [
        {id: 1, title: 'me', isDone: true},
        {id: 2, title: 'you', isDone: false},
        {id: 3, title: 'he', isDone: true},
        {id: 4, title: 'old', isDone: false},
    ]

    const complited = tasks.filter(el => el.isDone)

    expect(complited.length).toBe(2)
    expect(complited[0].id).toBe(1)
    expect(complited[1].id).toBe(3)
})