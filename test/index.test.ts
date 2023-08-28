import applyPatterns, {
  JUST_NUMBERS,
  NO_NUMBERS,
  NO_SPACE,
  NO_SPECIAL,
} from "../src/index";
describe("applyPatterns", () => {
  it("should remove numbers", () => {
    const initValue = "Test4Test";
    const result = applyPatterns(initValue, NO_NUMBERS);
    const expected = "TestTest";
    expect(result).toBe(expected)
  });

  it("should remove special", () => {
    const initValue = "Text! *4";
    const expected = "Text 4";
    const result = applyPatterns(initValue, NO_SPECIAL);
    expect(result).toBe(expected)
  });

  it("should remove special numbers and space", () => {
    const initValue = "Text! *4";
    const expected = "Text";
    const result = applyPatterns(initValue, [NO_SPECIAL, NO_NUMBERS, NO_SPACE]);
    expect(result).toBe(expected)
  });

  it("should remove every thing unless numbers", () => {
    const initValue = "Text! *4";
    const expected = "4";
    const result = applyPatterns(initValue, JUST_NUMBERS);
    expect(result).toBe(expected)
  });
});
