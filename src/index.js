module.exports = function check(str, bracketsConfig) {
    let brackets = bracketsConfig.map((item) => item.join(""));
    let count = -1;

    for (let i = 0; i < brackets.length; i += 1) {
        if (str.indexOf(brackets[i]) !== -1) {
            str = str.replace(brackets[i], "");
            i = count;
        }
    }

    return str === '' ? true : false;
}
