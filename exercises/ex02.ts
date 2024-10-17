class Queue2<T> {
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
  get length(): number {
    return this.arr.length;
  }
  getItem(index: number): T {
    return this.arr[index];
  }
}

function compareQueues<T extends string | number>(
  q1: Queue2<T>,
  q2: Queue2<T>
): boolean {
  if (q1.length !== q2.length) {
    return false;
  }

  for (let i = 0; i < q1.length; i++) {
    if (q1.getItem(i) !== q2.getItem(i)) {
      return false;
    }
  }

  return true;
}

const q1 = new Queue2<number>();
q1.enqueue(1);
q1.enqueue(2);
q1.enqueue(3);
q1.enqueue(4);
q1.enqueue(5);
const q2 = new Queue2<number>();
q2.enqueue(5);
q2.enqueue(4);
q2.enqueue(3);
q2.enqueue(2);
q2.enqueue(1);
const q3 = new Queue2<number>();
q3.enqueue(1);
q3.enqueue(2);
q3.enqueue(3);
q3.enqueue(4);
q3.enqueue(5);

console.log(compareQueues(q1, q2));
console.log(compareQueues(q1, q3));
