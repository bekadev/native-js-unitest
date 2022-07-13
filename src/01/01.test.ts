import {sum} from "./01";

test('sum should be currect ', () => {
    //date
    let a = 1;
    let b = 2;
    let c = 3;
    //action
    const result = sum(a, b)
    //expect resukt
    expect(result).toBe(3)
})