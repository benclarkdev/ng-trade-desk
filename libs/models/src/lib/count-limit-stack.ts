export class CountLimitStack<T> {
  private stack: T[] = [];
  private limit: number;

  constructor(limit: number, initialItems: T[] = []) {
    this.limit = limit;

    this.stack = initialItems.slice(0, limit); // Initialize with the first 'limit' items
  }

  add(item: T): void {
    if (this.stack.length >= this.limit) {
      this.stack.shift(); // Remove the oldest item
    }
    this.stack.push(item);
  }

  getLast(): T | undefined {
    return this.stack[this.stack.length - 1];
  }

  getStack(): T[] {
    return this.stack;
  }
}