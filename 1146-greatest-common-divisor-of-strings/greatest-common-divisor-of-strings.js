let str1 = "";
let str2 = "";
let result = "";

function gcdOfStrings(str1, str2) {
    if (str1 + str2 !== str2 + str1) {
        return "";
    } 

    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    let len = gcd(str1.length, str2.length);

    return str1.substring(0, len);
}