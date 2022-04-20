class Ctor {
  s: string
  constructor(s: string) {
    this.s = s
  }
}

type someConstructor = {
  new (s: string): Ctor
}

function fn2(ctor: someConstructor) {
  return new ctor("hello")
}

const a = fn2(Ctor)
console.log(a.s)

// 调用签名&构造签名
interface functionOrClass {
  new (s: string): Date
  (n: number): Date
}

function fn22(fn: functionOrClass) {
  fn(1000)
  new fn("2022-10-21")
}
