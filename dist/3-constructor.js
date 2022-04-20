"use strict";
class Ctor {
    constructor(s) {
        this.s = s;
    }
}
function fn2(ctor) {
    return new ctor("hello");
}
const a = fn2(Ctor);
console.log(a.s);
function fn22(fn) {
    fn(1000);
    new fn("2022-10-21");
}
