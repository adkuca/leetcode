/* eslint-disable @typescript-eslint/no-non-null-assertion */
class MinHeapPriorityQueue {
  private heap: number[] = [];

  enqueue(num: number): void {
    this.heap.push(num);
    this.siftUp();
  }

  dequeue(): number | null {
    if (this.size === 0) return null;
    if (this.size === 1) return this.heap.pop()!;

    const top = this.heap[0]!;
    this.heap[0] = this.heap.pop()!;
    this.siftDown();

    return top;
  }

  get size(): number {
    return this.heap.length;
  }

  private swap(i: number, j: number): void {
    [this.heap[i], this.heap[j]] = [this.heap[j]!, this.heap[i]!];
  }

  private siftUp(): void {
    let index = this.size - 1;

    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.heap[index]! >= this.heap[parentIndex]!) break;
      this.swap(index, parentIndex);
      index = parentIndex;
    }
  }

  private siftDown(): void {
    let index = 0;
    let leftChildIndex = 2 * index + 1;

    while (leftChildIndex < this.size) {
      const rightChildIndex = leftChildIndex + 1;
      const smallerChildIndex =
        rightChildIndex < this.size &&
        this.heap[rightChildIndex]! < this.heap[leftChildIndex]!
          ? rightChildIndex
          : leftChildIndex;

      if (this.heap[smallerChildIndex]! >= this.heap[index]!) break;

      this.swap(index, smallerChildIndex);
      index = smallerChildIndex;
      leftChildIndex = 2 * index + 1;
    }
  }
}

class SeatManager {
  private nextAvailableSeat: number = 1;
  private readySeatsQueue = new MinHeapPriorityQueue();

  reserve(): number {
    if (this.readySeatsQueue.size > 0) return this.readySeatsQueue.dequeue()!;
    return this.nextAvailableSeat++;
  }

  unreserve(seatNumber: number): void {
    if (seatNumber < this.nextAvailableSeat - 1)
      this.readySeatsQueue.enqueue(seatNumber);
    else if (seatNumber === this.nextAvailableSeat - 1) this.nextAvailableSeat -= 1;
  }
}

/**
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */
