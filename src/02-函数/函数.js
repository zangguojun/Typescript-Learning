"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 函数定义
 * 预编译阶段,既申明又赋值
 */
function hello(name) {
    console.log('hello', name);
}
hello('buchiyu');
let getUserName = function (firstName, lastName) {
    return firstName + lastName;
};
let name = getUserName('l', 't');
console.log(name);
/**
 * 可选参数
 * 必须是最后一个
 */
function print(name, age) {
    console.log(name, age);
}
print('buchiyu');
print('buchiyu', 21);
/**
 * 默认参数
 */
function ajax(url, method = 'GET') {
    console.log(url, method);
}
ajax('www.baidu.com');
ajax('www.baidu.com', 'POST');
/**
 * 剩余参数
 */
function sum(prefix, ...numbers) {
    return prefix + numbers.reduce((pre, cur) => pre + cur, 0);
}
console.log(sum('$', 2, 3));
/**
 * 函数的重载/签名
 * 函数的重载之间不能杂糅其他代码
 */
let obj = {};
function attr(val) {
    if (typeof val === 'string') {
        obj.name = val;
    }
    else if (typeof val === 'number') {
        obj.age = val;
    }
}
attr('buchiyu');
attr(20);
console.log(obj);
function sum2(a, b) { }
sum2(1, 2);
sum2('1', '2');
// 找不到匹配的重载
//sum2(1,'2')
/**
 * 箭头的使用场景
 * 1,定义箭头函数
 * 2,定义函数类型
 */
