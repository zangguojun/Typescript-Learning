"use strict";
function combine(arr1, arr2) {
    return arr1.concat(arr2);
}
// function combine2<A, B>(arr1: A[], arr2: B[]): any[] {
//   return [].concat(arr2, arr1)
// }
const res1 = combine([1, 2, 3], [2, 3, 4]);
const res2 = combine(["1", "2", "3"], [2, 3, 4]);
