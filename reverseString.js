/* To reverse the string */

function reverseString(value){
    // const arrStr = value.split('');
    // arrStr.reverse();
    // return arrStr.join('');

            // (or)

    // return value.split('').reverse().join('');

            // (or)

    // let arrStr = '';
    // for(let i = value.length-1; i >= 0; i--){
    //     arrStr += value[i];
    // }
    /* To remove the word or character from the string using replace() */
    // dupStr = arrStr.replace('undefined', ''); 
    // return arrStr;

            // (or)

    // let arrStr = '';
    // for(let i = 0; i < value.length; i++){
    //     arrStr = value[i] + arrStr;
    // }
    // return arrStr;

            // (or)

    // let arrStr = '';
    // for( let char of value){
    //     arrStr = char + arrStr;
    // }
    // return arrStr;

            // (or)

    // let arrStr = '';
    // value.split('').forEach((item) => {
    //     arrStr = item + arrStr;
    // })
    // return arrStr;

            // (or)

    return value.split('').reduce((arrStr, char) => {
        return char + arrStr;
    }, '');
}

const result = reverseString('hello LHD');
console.log(result);
