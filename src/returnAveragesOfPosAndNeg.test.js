import returnAveragesOfPosAndNeg from "./returnAveragesOfPosAndNeg";

test("return averages of positive and negative numbers in an array", () => {
    expect(returnAveragesOfPosAndNeg([])).toEqual([null, null]);
});

test("return averages of positive and negative numbers in an array", () => {
    expect(returnAveragesOfPosAndNeg([6, 0, 12, -2, 4, -2, 0, 10])).toEqual([-2, 8]);
});

test("return averages of positive and negative numbers in an array", () => {
    expect(returnAveragesOfPosAndNeg([-2.5, 5.5])).toEqual([-2.5, 5.5]);
});