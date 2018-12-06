let smallThenCapPattern = /aA|bB|cC|dD|eE|fF|gG|hH|iI|jJ|kK|lL|mM|nN|oO|pP|qQ|rR|sS|tT|uU|vV|wW|xX|yY|zZ/g;
let capThenSmallPattern = /Aa|Bb|Cc|Dd|Ee|Ff|Gg|Hh|Ii|Jj|Kk|Ll|Mm|Nn|Oo|Pp|Qq|Rr|Ss|Tt|Uu|Vv|Ww|Xx|Yy|Zz/g;

let reductionPatterns = [   /a|A/g, /b|B/g, /c|C/g, /d|D/g, /e|E/g, /f|F/g, /g|G/g, /h|H/g, /i|I/g, /j|J/g, 
    /k|K/g, /l|L/g, /m|M/g, /n|N/g, /o|O/g, /p|P/g, /q|Q/g, /r|R/g, /s|S/g, /t|T/g, /u|U/g, /v|V/g, /w|W/g, 
    /x|X/g, /y|Y/g, /z|Z/g
];

function react(str) {
    let strLength = str.length;
    let oldLength = -1;
    while(oldLength !== strLength) {
        oldLength = strLength;
        str = str.replace(smallThenCapPattern, '');
        str = str.replace(capThenSmallPattern, '');
        strLength = str.length;
    }

    return str;
}

module.exports = {
    solveA: function (input) {
        let str = input.slice(0, -1);
        str = react(str);
        return str.length;
    },

    solveB: function (input) {
        let baseStr = react(input.slice(0, -1));
        let str;

        let lowestLength = baseStr.length;
        reductionPatterns.forEach((p) => {
            str = baseStr;
            str = str.replace(p, '');
            str = react(str);
            lowestLength = Math.min(lowestLength, str.length);
        });

        return lowestLength;
    }
};
