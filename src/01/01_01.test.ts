import {twoFactor} from './01_01';

test('twoFactor using for sum two value', () => {
    //dates
    const date = {
        a: 1,
        b: 2
    }
    //actions
    const result = twoFactor(date.a, date.b)
    //expect
    expect(result).toBe(2)
})