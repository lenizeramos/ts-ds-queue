"use strict";
function palindrome(array) {
    if (array.length % 2 == 0) {
        return false;
    }
    const midIndex = Math.floor(array.length / 2);
    for (let i = 0; i < midIndex; i++) {
        if (array[i] != array[array.length - 1 - i]) {
            return false;
        }
    }
    return true;
}
const starbucks3 = ["R", "O", "T", "A", "T", "O", "R"];
console.log(palindrome(starbucks3));
console.log(palindrome([]));
console.log(palindrome([1]));
