"use strict";
class BinaryQueue {
    constructor() {
        this.items = [];
    }
    enqueue(item) {
        this.items.push(item);
    }
    dequeue() {
        if (this.isEmpty()) {
            return `Queue is empty`;
        }
        return this.items.shift();
    }
    isEmpty() {
        return this.items.length === 0;
    }
    peek() {
        if (this.isEmpty()) {
            return "Nothing in the queue";
        }
        return this.items[0];
    }
    print() {
        return this.items.join(",");
    }
    get length() {
        return this.items.length;
    }
    getItem(index) {
        return this.items[index];
    }
}
function decimalToBinary(num) {
    let reversedBinary = "";
    while (num > 0) {
        reversedBinary += num % 2;
        num = Math.floor(num / 2);
    }
    return reversedBinary.split("").reverse().join("");
}
function printBinaryNumbers(limit) {
    let queue = new BinaryQueue();
    for (let index = 1; index <= limit; index++) {
        queue.enqueue(decimalToBinary(index));
    }
    console.log(queue);
    console.log(queue.dequeue());
    queue.enqueue(queue.dequeue() + "0");
    queue.enqueue(queue.dequeue() + "1");
    console.log(queue);
}
printBinaryNumbers(35);
