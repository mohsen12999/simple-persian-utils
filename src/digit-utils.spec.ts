import {convertPersianDigit2English} from "./digit-utils"

test("one digit test" , () => {
    expect( convertPersianDigit2English("۶")).toBe("6")
})

test("another digit test" , () => {
    expect( convertPersianDigit2English("۹")).toBe("9")
})

test("a number test" , () => {
    expect( convertPersianDigit2English("۶۱۰۴")).toBe("6104")
})

test("another number test" , () => {
    expect( convertPersianDigit2English("۱۲۳۴")).toBe("1234")
})

test("another a complex english and persian number test" , () => {
    expect( convertPersianDigit2English("۱۲۳۴۶۶۶345۷۷۷۷۷۷۷۷۷")).toBe("1234666345777777777")
})

test("test all numbers" , () => {
    expect( convertPersianDigit2English("۱۲۳۴۵۶۷۸۹۰")).toBe("1234567890")
})

test("a number in string test" , () => {
    expect( convertPersianDigit2English("n۶۱۰۴")).toBe("n6104")
})

test("a number in persian string test" , () => {
    expect( convertPersianDigit2English("خیابان ۶۱۰۴")).toBe("خیابان 6104")
})