import { returnSmaller } from "./returnSmaller";

test("compare a and b, and return smaller", () => {
    expect(returnSmaller(1, 2)).toEqual(1);
});

test("compare a and b, and return smaller", () => {
    expect(returnSmaller(100, 200)).toEqual(100);
});

test("compare a and b, and return smaller", () => {
    expect(returnSmaller(50, -50)).toEqual(-50);
});