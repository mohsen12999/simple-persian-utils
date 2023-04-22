import { convertPersianDigit2English, convertEnglishDigit2Persian } from "./digit-utils";

describe("convertPersianDigit2English", () => {
  test("one digit test", () => {
    expect(convertPersianDigit2English("۶")).toBe("6");
  });

  test("another digit test", () => {
    expect(convertPersianDigit2English("۹")).toBe("9");
  });

  test("a number test", () => {
    expect(convertPersianDigit2English("۶۱۰۴")).toBe("6104");
  });

  test("another number test", () => {
    expect(convertPersianDigit2English("۱۲۳۴")).toBe("1234");
  });

  test("another a complex english and persian number test", () => {
    expect(convertPersianDigit2English("۱۲۳۴۶۶۶345۷۷۷۷۷۷۷۷۷")).toBe(
      "1234666345777777777"
    );
  });

  test("test all numbers", () => {
    expect(convertPersianDigit2English("۱۲۳۴۵۶۷۸۹۰")).toBe("1234567890");
  });

  test("a number in string test", () => {
    expect(convertPersianDigit2English("n۶۱۰۴")).toBe("n6104");
  });

  test("a number in persian string test", () => {
    expect(convertPersianDigit2English("خیابان ۶۱۰۴")).toBe("خیابان 6104");
  });
});


describe("convertEnglishDigit2Persian", () => {
  test("one digit test", () => {
    expect(convertEnglishDigit2Persian("6")).toBe("۶");
  });

  test("another digit test", () => {
    expect(convertEnglishDigit2Persian("9")).toBe("۹");
  });

  test("a number test", () => {
    expect(convertEnglishDigit2Persian("6104")).toBe("۶۱۰۴");
  });

  test("another number test", () => {
    expect(convertEnglishDigit2Persian("1234")).toBe("۱۲۳۴");
  });

  test("a complex English and Persian number test", () => {
    expect(convertEnglishDigit2Persian("1234666345777777777")).toBe(
      "۱۲۳۴۶۶۶۳۴۵۷۷۷۷۷۷۷۷۷"
    );
  });

  test("test all numbers", () => {
    expect(convertEnglishDigit2Persian("1234567890")).toBe("۱۲۳۴۵۶۷۸۹۰");
  });

  test("a number in string test", () => {
    expect(convertEnglishDigit2Persian("n6104")).toBe("n۶۱۰۴");
  });

  test("a number in English string test", () => {
    expect(convertEnglishDigit2Persian("خیابان 6104")).toBe("خیابان ۶۱۰۴");
  });
});
