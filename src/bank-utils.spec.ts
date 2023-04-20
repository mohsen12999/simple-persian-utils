import {normalizeAccountNumber} from "./bank-utils";


test("change only number" , () => {
    expect( normalizeAccountNumber("۶۱۰۴۱۱۱۱۲۲۲۲۳۳۳۳")).toBe(6104111122223333)
})

test("change number and remove other character" , () => {
    expect( normalizeAccountNumber("۶۱۰۴-۱۱۱۱-۲۲۲۲-۳۳۳۳")).toBe(6104111122223333)
})