import {makeHairStyle, moveUser, update, UserType, UserWithLapTopType} from './10'



test('', () =>{
    let user: UserType = {
        name: 'Beka',
        hair: 20,
        address: {
            city: 'Almaty',
            house: 63
        }
    }

    const awesomeUser = makeHairStyle(user, 2)

    expect(user.hair).toBe(20)
    expect(awesomeUser.hair).toBe(10)
})


test('', () =>{
    let user: UserWithLapTopType = {
        name: 'Beka',
        hair: 20,
        address: {
            city: 'Almaty',
            house: 63
        },
        laptop: {
            title: 'MacBook'
        }
    }

    const awesomeUser = moveUser(user, 'Astana')

    expect(user).not.toBe(awesomeUser)
    expect(user.address).not.toBe(awesomeUser.address)
    expect(user.laptop).toBe(awesomeUser.laptop)
    expect(awesomeUser.address.city).toBe('Astana')
})

test('', () =>{
    let user: UserWithLapTopType = {
        name: 'Beka',
        hair: 20,
        address: {
            city: 'Almaty',
            house: 63
        },
        laptop: {
            title: 'MacBook'
        }
    }

    const userCopy = update(user, 'Lenova')

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).not.toBe(userCopy.laptop)
    expect(userCopy.laptop.title).toBe('Lenova')
    expect(user.laptop.title).toBe('MacBook')
})

