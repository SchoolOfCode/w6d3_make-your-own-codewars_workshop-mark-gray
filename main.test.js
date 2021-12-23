import sailedTheSeas from "./main.js"

let array = [1, 5, 14, 43, 75, 90] // 58 - WL 60
let array2 = [5, 5, 6, 23, 78] // 39 - WL 50
let array3 = [3, 5, 26] // 29 - WL 30

describe(`arrays to test sailedTheSeas func`, () => {

    test(`sailedTheSeas func test 1`, () => {
        const actual = sailedTheSeas(array);
        const expected = [1, 14, 43];
        expect(actual).toEqual(expected);
    });

    test(`sailedTheSeas func test 2`, () => {
        const actual = sailedTheSeas(array2);
        const expected = [5, 5, 6, 23];
        expect(actual).toEqual(expected);
    });

    test(`sailedTheSeas func test 3`, () => {
        const actual = sailedTheSeas(array3);
        const expected = [3, 5];
        expect(actual).toEqual(expected);
    });
});
