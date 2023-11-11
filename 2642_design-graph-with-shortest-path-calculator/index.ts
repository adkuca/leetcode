class MinPriorityQueueMock<T> {
  private data: { value: T; priority: number }[] = [];

  enqueue(value: T, priority: number): void {
    this.data.push({ value, priority });
    this.data.sort((a, b) => a.priority - b.priority);
  }

  dequeue(): T | undefined {
    return this.data.shift()?.value;
  }

  isEmpty(): boolean {
    return this.data.length === 0;
  }
}

type Edge = [number, number, number];

class Graph {
  private n: number;
  private graph: Map<number, [number, number][]> = new Map();

  constructor(n: number, edges: Edge[]) {
    this.n = n;
    edges.forEach((edge) => this.addEdge(edge));
  }

  addEdge([from, to, weight]: Edge): void {
    if (this.graph.has(from)) this.graph.get(from)!.push([to, weight]);
    else this.graph.set(from, [[to, weight]]);
  }

  shortestPath(node1: number, node2: number): number {
    if (node1 === node2) return 0;
    if (!this.graph.has(node1)) return -1;

    const dist: number[] = new Array(this.n).fill(Number.POSITIVE_INFINITY);
    dist[node1] = 0;

    const minPriorityQueue = new MinPriorityQueueMock<number>();
    minPriorityQueue.enqueue(node1, 0);

    while (!minPriorityQueue.isEmpty()) {
      const from = minPriorityQueue.dequeue()!;

      if (from === node2) break;

      this.graph.get(from)!.forEach(([to, weight]) => {
        const alt = dist[from]! + weight;
        if (alt < dist[to]!) {
          dist[to] = alt;
          if (this.graph.has(to)) minPriorityQueue.enqueue(to, alt);
        }
      });
    }

    return dist[node2] === Number.POSITIVE_INFINITY ? -1 : dist[node2]!;
  }
}

/**
 * Your Graph object will be instantiated and called as such:
 * var obj = new Graph(n, edges)
 * obj.addEdge(edge)
 * var param_2 = obj.shortestPath(node1,node2)
 */
