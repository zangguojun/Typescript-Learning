function fn5<T>(arr: T[], fn: (a: T, i?: number) => string): void {
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i])
    // fn(arr[i], i)
  }
}

fn5([1, 2, 3], (a, i) => {
  return `${a}-${i!.toFixed}`
})
