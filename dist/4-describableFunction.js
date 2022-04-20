"use strict";
function useFn(fn) {
    console.log(`${fn.name1} ${fn(6)}`);
}
function fn1(arg) {
    console.log(arg);
    return true;
}
fn1.name1 = "111";
useFn(fn1);
