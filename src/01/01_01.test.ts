import {twoFactor} from './01_01';

test('twoFactor using for sum two value', () => {
    const date = {
        a: 1,
        b: 2
    }
    const result = twoFactor(date.a, date.b)
    expect(result).toBe(2)
})