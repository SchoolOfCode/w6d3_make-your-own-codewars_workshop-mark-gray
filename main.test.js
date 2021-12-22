import sailedTheSeas from "./main.js"

let array = [1, 5, 75, 43, 14, 90] // 58 - 3 items
let array2 = [78, 5, 6, 5, 23] // 39 - 4 items
let array3 = [3, 5, 26] // 29 - 2 items

describe(`arrays to test sailedTheSeas func`, () => {

    test(`sailedTheSeas func test 1`, () => {
        const actual = sailedTheSeas(array);
        const expected = [1, 14, 43];
        expect(actual).toBe(expected);
    });

    test(`sailedTheSeas func test 2`, () => {
        const actual = sailedTheSeas(array2);
        const expected = [5, 5, 6, 23];
        expect(actual).toBe(expected);
    });

    test(`sailedTheSeas func test 3`, () => {
        const actual = sailedTheSeas(array3);
        const expected = [3, 26];
        expect(actual).toBe(expected);
    });
});
