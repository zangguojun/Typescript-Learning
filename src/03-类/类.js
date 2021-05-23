"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * 申明类 Class
 * TS申明一个类的时候，其实得到了两个类型
 * 1、实例的类型
 * 2、类本身构造函数的类型
 */
var Person = /** @class */ (function () {
    function Person() {
        this.name = 'buchiyu';
    }
    Person.prototype.getName = function () {
        console.log(this.name);
    };
    return Person;
}());
var p1 = new Person();
console.log(p1.name);
p1.getName();
/**
 * strictPropertyInitialization:true
 * 不允许 属性不初始化
 */
var Person2 = /** @class */ (function () {
    function Person2() {
        this.name = '';
    }
    return Person2;
}());
/**
 * 存取器
 */
var User = /** @class */ (function () {
    function User(myName) {
        this.myName = '';
        this.myName = myName;
    }
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this.myName;
        },
        set: function (value) {
            this.myName = value;
        },
        enumerable: false,
        configurable: true
    });
    return User;
}());
var user = new User('lalala');
console.log(user.myName);
user.myName = 'buchiyu';
console.log(user.myName);
/**
 * 简单写法
 * 可以在constructor的参数列表中，给想要的参数直接加上修饰符，比如private、protected、public
 * 用来少些类属性申明（如myName: string = ''），以及类赋值（如this.myName = myName）
 */
var User2 = /** @class */ (function () {
    function User2(myName) {
        this.myName = myName;
    }
    Object.defineProperty(User2.prototype, "name", {
        get: function () {
            return this.myName;
        },
        set: function (value) {
            this.myName = value;
        },
        enumerable: false,
        configurable: true
    });
    return User2;
}());
var user2 = new User2('lalala');
console.log(user2.myName);
user2.myName = 'buchiyu';
console.log(user2.myName);
/**
 * 修饰符 public、protected、private
 * 与Java一样
 * 修饰符不能修饰class
 */
/**
 * readonly，不能修改
 */
var User3 = /** @class */ (function () {
    function User3() {
        this.PI = 3.14;
    }
    return User3;
}());
var user3 = new User3();
console.log(user3.PI);
// 无法分配到 "PI" ，因为它是只读属性。
// user3.PI = 3.1415
/**
 * readonly与const的区别
 * readonly 是在编译阶段进行的检查
 * const    是在运行阶段的检查
 */
/**
 * noImplicitAny:true
 * 不允许*隐式*的any类型，类型推论不包含在内
 */
// 参数“a”隐式具有“any”类型。
// function sum(a) {
//   console.log(a)
// }
/**
 * 装饰器
 * react @connect
 * nest.js 大量使用
 *
 * 类装饰器 用在类申明之前，用来监视、修改和替换类的定义
 * enhancer 其实是一个函数
 */
// target的类型为 any 或者 typeof Person2 或者 Function 或者 new () => Person2 --> 如果Person2有参数a，这里需要传参数，如 new (a: string) => Person2
function enhancer(target) {
    target.prototype.name = 'buchiyu';
    target.prototype.getName = function () {
        console.log('this.name:', this.name);
    };
}
var Person3 = /** @class */ (function () {
    function Person3() {
    }
    Person3 = __decorate([
        enhancer
    ], Person3);
    return Person3;
}());
var p = new Person3();
console.log(p.name);
p.getName();
/**
 * 装饰器工厂Ⅰ
 */
function enhancer4(name) {
    return function (target) {
        target.prototype.name = name;
        target.prototype.getName = function () {
            console.log('this.name:', this.name);
        };
    };
}
var Person4 = /** @class */ (function () {
    function Person4() {
    }
    Person4 = __decorate([
        enhancer4('buchiyu')
    ], Person4);
    return Person4;
}());
var p4 = new Person4();
console.log(p4.name);
p4.getName();
/**
 * 装饰器工厂Ⅱ
 */
function enhancer5(target) {
    return /** @class */ (function () {
        function class_1() {
            this.name = 'buchiyu';
        }
        class_1.prototype.getName = function () {
            console.log(this.name);
        };
        return class_1;
    }());
}
var Person5 = /** @class */ (function () {
    function Person5() {
    }
    Person5 = __decorate([
        enhancer5
    ], Person5);
    return Person5;
}());
var p5 = new Person4();
console.log(p5.name);
p5.getName();
