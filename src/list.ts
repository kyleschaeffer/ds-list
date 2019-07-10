/**
 * List data structure (array-like)
 *  - Optimized for read operations
 *  - Poor performance when removing or inserting into middle of list
 */
export class List<T> {
  /**
   * A list of items
   */
  private list: IList<T>;

  /**
   * Instantiate a new list
   */
  constructor(...items: T[]) {
    // New empty list
    this.list = {};

    // Push items to list
    this.push(...items);
  }

  /**
   * Get list size/length
   */
  public get length(): number {
    return Object.keys(this.list).length;
  }

  /**
   * Get items in the list
   */
  public get items(): T[] {
    return Object.values(this.list);
  }

  /**
   * Get an item in the list via zero-based index
   */
  public get(index: number): T {
    return this.items[index];
  }

  /**
   * Add new item(s) to the end of the list
   */
  public push(...items: T[]): void {
    // Add items to the list
    items.forEach(item => {
      // Create new item using zero-based index
      this.list[this.length] = item;
    });
  }

  /**
   * Add new item(s) to the beginning of the list
   */
  public unshift(...items: T[]): void {
    // Create a new list
    const updatedList: IList<T> = {};

    // Add items to new list in order
    for (let i = 0; i < this.length + items.length; i++) {
      if (i < items.length) {
        updatedList[i] = items[i];
      } else {
        updatedList[i] = this.items[i - items.length];
      }
    }

    // Update list
    this.list = updatedList;
  }

  /**
   * Remove the last item from the list and return it
   */
  public pop(): T {
    return this.splice(this.length - 1, 1).get(0);
  }

  /**
   * Remove the first item from the list and return it
   */
  public shift(): T {
    return this.splice(0, 1).get(0);
  }

  /**
   * Splice item(s) from list, returning new spliced list
   */
  public splice(index: number, count: number): List<T> {
    // Create new lists
    const updatedList: IList<T> = {};
    const splicedList: List<T> = new List<T>();

    // Splice into two new lists
    for (let i = 0; i < this.length; i++) {
      if (i >= index && i < index + count) {
        splicedList.push(this.items[i]);
      } else {
        updatedList[i >= index ? i - index : i] = this.items[i];
      }
    }

    // Update list
    this.list = updatedList;

    // Return spliced list
    return splicedList;
  }
}

export interface IList<T> {
  [index: number]: T;
}
