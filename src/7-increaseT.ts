function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2)
}

// function combine2<A, B>(arr1: A[], arr2: B[]): any[] {
//   return [].concat(arr2, arr1)
// }

const res1 = combine([1, 2, 3], [2, 3, 4])
const res2 = combine<number | string>(["1", "2", "3"], [2, 3, 4])
