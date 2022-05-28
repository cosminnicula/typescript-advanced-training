(() => {
  class Stack<T> {
    private data: Array<T> = [];
    push(item: T) { this.data.push(item); }
    pop(): T | undefined { return this.data.pop(); }
  }

  let queue: Stack<number> = new Stack();
  queue.push(1); // accepts number
  queue.pop(); // returns null or undefined
})();