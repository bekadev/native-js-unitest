export type UserType = {
    name: string
    hair: number
    address: {city: string, house: number}
}

export type LapTopType = {
    title: string
}

export type UserWithLapTopType = UserType & {
    laptop: LapTopType
}

export function makeHairStyle(u: UserType, power: number) {
    const copy = {...u, hair: u.hair / power}

    return copy
}


export function moveUser(u: UserWithLapTopType , city: string) {
    const copy = {...u, address: {...u.address, city: city}}
    return copy
}

export function update(u: UserWithLapTopType , laptop: string) {
    return {...u, laptop: {...u.laptop, title: laptop}}
}

