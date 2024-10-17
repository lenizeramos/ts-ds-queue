class BinaryQueue {
  private items: string[];
  constructor() {
    this.items = [];
  }
  enqueue(item: string) {
    this.items.push(item);
  }
  dequeue(): string | undefined {
    if (this.isEmpty()) {
      return `Queue is empty`;
    }
    return this.items.shift();
  }

  isEmpty(): boolean {
    return this.items.length === 0;
  }

  peek(): string {
    if (this.isEmpty()) {
      return "Nothing in the queue";
    }
    return this.items[0];
  }
  print(): string {
    return this.items.join(",");
  }
  get length(): number {
    return this.items.length;
  }

  getItem(index: number): string {
    return this.items[index];
  }
}

function decimalToBinary(num: number) {
  let reversedBinary: string = "";
  while (num > 0) {
    reversedBinary += num % 2;
    num = Math.floor(num / 2);
  }
  return reversedBinary.split("").reverse().join("");
}

function printBinaryNumbers(limit: number) {
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
