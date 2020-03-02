module.exports = function toReadable(number) {
    const map = {
        0: "zero",
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety",
    }
    let string = '';
    if (number === 0) return "zero";

    function hundreds(number) {
        let hund = Math.floor(number / 100);
        switch (hund) {
            case 0:
                return dozens(number);
                break;
            default:
                string = string + map[hund] + ' hundred ';
                return dozens(number % 100);
        }
    }

    function dozens(num) {
        let dec = Math.floor(num / 10);
        let uni = num % 10;
        if (num < 20 && num != 0) {
            return string += map[num];
        }
        if (num >= 20) {
            let dec = Math.floor(num / 10);
            let uni = num % 10;
            if (uni != 0) {
                string += map[dec * 10] + ' ' + map[uni];
            } else {
                string += map[dec * 10]
            }

        }
        return string;
    }
    return hundreds(number).trim();

}
