import { convertPersianDigit2English } from "./digit-utils";

export const normalizeAccountNumber = (account:string): number => {
    // convert digits
    const onlyEnglishNumber = convertPersianDigit2English(account);

    // remove other character
    const numberNumber = onlyEnglishNumber.replace(/\D/g,"")

    return Number(numberNumber);
}