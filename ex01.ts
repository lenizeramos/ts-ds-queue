class Queue<T> {
  arr: T[];
  constructor() {
    this.arr = [];
  }
  enqueue(item: T) {
    this.arr.push(item);
  }
  reverse(): T[] {
    return this.arr.reverse();
  }
}

const starbucks = new Queue();
starbucks.enqueue(1);
starbucks.enqueue(2);
starbucks.enqueue(3);
starbucks.enqueue(4);
starbucks.enqueue(5);
console.log(starbucks);
console.log(starbucks.reverse());
