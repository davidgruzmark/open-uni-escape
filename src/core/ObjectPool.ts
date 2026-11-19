export class ObjectPool<T> {
  private readonly factory: () => T;
  private readonly resetFn: (item: T) => void;
  private readonly free: T[] = [];
  private readonly activeSet = new Set<T>();

  constructor(factory: () => T, resetFn: (item: T) => void, initialCount = 0) {
    this.factory = factory;
    this.resetFn = resetFn;
    for (let i = 0; i < initialCount; i++) {
      const item = this.factory();
      this.resetFn(item);
      this.free.push(item);
    }
  }

  acquire(): T {
    const item = this.free.length > 0 ? (this.free.pop() as T) : this.factory();
    this.activeSet.add(item);
    return item;
  }

  release(item: T): void {
    if (!this.activeSet.has(item)) return;
    this.activeSet.delete(item);
    this.resetFn(item);
    this.free.push(item);
  }

  releaseAll(): void {
    for (const item of this.activeSet) {
      this.resetFn(item);
      this.free.push(item);
    }
    this.activeSet.clear();
  }

  getActive(): ReadonlySet<T> {
    return this.activeSet;
  }

  get activeCount(): number {
    return this.activeSet.size;
  }

  get freeCount(): number {
    return this.free.length;
  }

  get totalCount(): number {
    return this.activeSet.size + this.free.length;
  }
}
