interface Callback {
  (item: any): Promise<any>;
}

export class ArrayHandler {
  private array: Array<any>;
  private queue: Promise<any>;

  constructor(array: Array<any>) {
    this.array = array;
    this.queue = Promise.resolve(this.array);
  }

  async asyncFilter(acall: Callback, array: Array<any>) {
    let aux = [];

    for (let item of array) (await acall(item)) && aux.push(item);

    return aux;
  }

  filter(acall: Callback) {
    this.queue = this.queue.then((array) => this.asyncFilter(acall, array));

    return this;
  }

  async resolve() {
    let aux = await this.queue;
    this.queue = Promise.resolve(this.array);

    return aux;
  }
}