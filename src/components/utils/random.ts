export function randint(a: number, b: number): number {
  let delta = b + 1 - a;
  let rng = Math.floor(Math.random() * delta);

  return a + rng;
}

export function choice(list: Array<any>): any {
  let rng = randint(0, list.length - 1);

  return list[rng];
}

export function sample(list: Array<any>, k: number): Array<any> {
  if (list.length >= k && k > 0) {
    let array = list.slice();
    let samples = [];

    for (let i = 0; i < k; i++) {
      let rng = randint(0, array.length - 1);
      let aux = array[rng];

      samples.push(aux);
      array.splice(rng, 1);
    }

    return samples;
  }

  throw Error("Sample larger than population or is negative");
}

export function shuffle(list: Array<any>): Array<any> {
  return sample(list, list.length);
}
