"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let firstName = 'Jack';
let age = 10;
let married = false;
//// 数组 类型唯一，数量不确定
let arr1 = [1, 2, 3];
//// 泛型
//let arr2: Array<number> = [1, 2, 3]
//// 元组 已知数量和类型的数组
let zz = ['zz', 0, 1];
//// 普通枚举
var Gender;
(function (Gender) {
    Gender[Gender["MALE"] = 0] = "MALE";
    Gender[Gender["FEMALE"] = 1] = "FEMALE";
})(Gender || (Gender = {}));
console.log(Gender); // { '0': 'MALE', '1': 'FEMALE', MALE: 0, FEMALE: 1 }
let myColors = [0 /* Red */, 1 /* Yellow */, 2 /* Blue */];
console.log(myColors);
// // 非空断言
// let root: HTMLElement | null  = document.getElementById('root')
// root!.style.color = 'red'
// console.log(root);
//// any
// let test: any = document.getElementById('test')
// test.style.color = 'red'
// console.log(root);
//// undefined null
// undefined和null是其他类型的子类型，可以赋值给他们类型，比如number
let x;
x = 1;
// strictNullChecks必须False
// x = undefined
// x = null
let y;
y = 1;
// strictNullChecks可以为true
y = undefined;
y = null;
//// void 就是返回值为undefined
function greeting(name) {
    // return undefined
    // strictNullChecks必须False
    // return null
}
console.log(greeting('1')); //undefined
//// never 代表永远不会出现的值
// 是undefined和null的子类型
// 1、作为不会返回值的函数的返回类型
// function error(name: string): never {
//   // 抛出错误，永远不会有返回值
//   throw new Error('123')
// }
// let res: never = error('1')
// console.log(res);
// 2、永远到不了终点
// function loop(): never {
//   while(true){}
// }
// let res2:never = loop()
// 3、永远执行不到的地方
function test(x) {
    if (typeof x === 'number') {
        console.log(x);
    }
    else if (typeof x === 'string') {
        console.log(x);
    }
    else {
        // 永远都到不了的地方
    }
}
//// never和void的区别
// 1、void 可以赋值为null和undefined，但never不包含任何值
// 2、定义void返回值类型的函数能正常运行，拥有never返回值的函数永远无法返回
//// 类型推断
let a = 1; // number
let b = ''; // string
let c; // any
//// 包装类型
let d = 'str';
console.log(d.toUpperCase());
//// 联合类型
let e = 'str';
e = 1;
let t1 = 1;
let t2 = 'one';
let t3 = true;
