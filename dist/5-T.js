"use strict";
function fn3(arr, fn) {
    return arr.map(fn);
}
const res = fn3(["1", "2", "3"], (s) => parseInt(s));
