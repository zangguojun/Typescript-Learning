type describableFunction = {
  name1: string
  (arg: number): boolean
}

function useFn(fn: describableFunction): void {
  console.log(`${fn.name1} ${fn(6)}`)
}

function fn1(arg: number) {
  console.log(arg)
  return true
}
fn1.name1 = "111"

useFn(fn1)
