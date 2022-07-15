function icreaseAge(u: UserType) {
    u.age++
}

type UserType = {
    name: string
    age: number
}

test('', () => {
    const user: UserType = {
        name: 'beka',
        age: 21
    }

    icreaseAge(user)

    expect(user.age).toBe(22)
})

test('', () => {
    const users = [
        {
            name: 'beka',
            age: 21
        },
        {
            name: 'dev',
            age: 23
        }
    ]

    const admins = users

    admins.push({name: 'baby', age: 10})

    expect(users[2]).toEqual({name: 'baby', age: 10})
})

test('', () => {
    let users = 100

    let admins = users

    admins = 101

})