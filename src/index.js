module.exports = function check(str, bracketsConfig) {
  // your solution

    let stackArray = [];
    let arrayString = str.split('');

    for (let j = 0; j < arrayString.length; j++) {
        for (let i = 0; i < bracketsConfig.length; i++) {
            let item = bracketsConfig[i];

            if (stackArray.length && arrayString[j] === item[1] && stackArray[stackArray.length - 1] === item[0]) {
                stackArray.pop();
                break;
            }
            if (arrayString[j] === item[0]) {
                stackArray.push(arrayString[j]);
                break;
            }
            if (stackArray.length === 0 && arrayString[j] === item[1]) {
                return false;
            }
        }
    }

    if (stackArray.length === 0) {
        return true;
    } else {
        return false;
    };
};


