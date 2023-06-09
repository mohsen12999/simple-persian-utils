import { convertPersianDigit2English } from "./digit-utils";

export const normalizeAccountNumber = (account:string): number => {
    // convert digits
    const onlyEnglishNumberInString = convertPersianDigit2English(account);

    // remove other character
    const onlyNumbersString = onlyEnglishNumberInString.replace(/\D/g,"")

    return Number(onlyNumbersString);
}
