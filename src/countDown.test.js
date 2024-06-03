import makeCountdownArray from "./countDown";


test("COunting down from input number", () => {
  
    expect(makeCountdownArray(3, "🚀")).toEqual([3,2,1,"🚀"]);
  });

  test("COunting down from input number", () => {
  
    expect(makeCountdownArray(5, "💥")).toEqual([5, 4, 3,2,1,"💥"]);
  });

  test("COunting down from input number", () => {
  
    expect(makeCountdownArray(0, "💥")).toEqual(["💥"]);
  });