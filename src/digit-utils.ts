export const convertPersianDigit2English = (inputString: string):string => 
    inputString
        .replace(/۰/g,"0")
        .replace(/۱/g,"1")
        .replace(/۲/g,"2")
        .replace(/۳/g,"3")
        .replace(/۴/g,"4")
        .replace(/۵/g,"5")
        .replace(/۶/g,"6")
        .replace(/۷/g,"7")
        .replace(/۸/g,"8")
        .replace(/۹/g,"9");

export const convertEnglishDigit2Persian = (inputString: string) =>
    inputString
        .replace(/0/g, "۰")
        .replace(/1/g, "۱")
        .replace(/2/g, "۲")
        .replace(/3/g, "۳")
        .replace(/4/g, "۴")
        .replace(/5/g, "۵")
        .replace(/6/g, "۶")
        .replace(/7/g, "۷")
        .replace(/8/g, "۸")
        .replace(/9/g, "۹");