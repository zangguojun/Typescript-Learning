function fn3<I, O>(arr: I[], fn: (arr: I) => O): O[] {
  return arr.map(fn)
}

const res = fn3(["1", "2", "3"], (s) => parseInt(s))
