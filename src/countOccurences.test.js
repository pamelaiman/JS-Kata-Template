import countOccurences from "./countOccurences";

test("counts the occurences of letters in a string", () => {
    expect(countOccurences("hello")).toEqual({"h": 1, "e": 1, "l": 2, "o": 1});
});

test("counts the occurences of letters in a string", () => {
    expect(countOccurences(2)).toEqual("this is not a string");
});


test("counts the occurences of letters in a string", () => {
    expect(countOccurences("Hello$#@123World")).toEqual({"h": 1, "e": 1, "l": 3, "o": 2, "w": 1, "r": 1, "d": 1});
});