"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function hello(name) {
    console.log('hello', name);
}
hello('buchiyu');
var getUserName = function (firstName, lastName) {
    return firstName + lastName;
};
var name = getUserName('l', 't');
console.log(name);
function print(name, age) {
    console.log(name, age);
}
print('buchiyu');
print('buchiyu', 21);
function ajax(url, method) {
    if (method === void 0) { method = 'GET'; }
    console.log(url, method);
}
ajax('www.baidu.com');
ajax('www.baidu.com', 'POST');
function sum(prefix) {
    var numbers = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        numbers[_i - 1] = arguments[_i];
    }
    return prefix + numbers.reduce(function (pre, cur) { return pre + cur; }, 0);
}
console.log(sum('$', 2, 3));
var obj = {};
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
