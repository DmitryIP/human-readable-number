module.exports =
    function toReadable(number) {
        if (number > 999999) {
            console.log('number should be less then 999,999');
            return
        };

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

        const ones = number % 10;
        const tens = number % 100;
        const hundreds = ((number - tens) / 100) % 10;
        const thousands = Math.floor(number / 1000) % 1000;

        if (number === 0) return 'zero';

        function getTensAndOnes(tens) {
            if (tens === 0) return '';
            if (tens > 0 && tens < 20) return map[tens] + ' ';
            if (!ones) {
                return map[tens] + ' ';
            } else {
                return `${map[tens - ones]} ${map[ones]} `;
            }
        }

        function getHundreds(hundreds) {
            return hundreds ? getTensAndOnes(hundreds) + 'hundred ' : '';
        }

        function getThousands(thousands) {
            return thousands ? toReadable(thousands) + ' thousands ' : '';
        }

        return (getThousands(thousands) + getHundreds(hundreds) + getTensAndOnes(tens)).trim();

    }


// let r = toReadable(9);
// console.log(r);

