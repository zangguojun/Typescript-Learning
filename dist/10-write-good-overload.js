"use strict";
// function fn8(s: string): number
// function fn8(s: any[]): number
// function fn8(s: string | any[]) {
//   return s.length
// }
function fn8(s) {
    return s.length;
}
fn8("111");
fn8([1, 2, 3]);
fn8(Math.random() > 0.5 ? "hello" : [1, 2, 3]);
