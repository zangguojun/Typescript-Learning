export { }
/**
 * 申明类 Class
 * TS申明一个类的时候，其实得到了两个类型
 * 1、实例的类型
 * 2、类本身构造函数的类型
 */
class Person {
  name: string = 'buchiyu'
  getName(): void {
    console.log(this.name)
  }
}
let p1 = new Person()
console.log(p1.name)
p1.getName()


/**
 * strictPropertyInitialization:true
 * 不允许 属性不初始化
 */
class Person2 {
  name: string = ''
}


/**
 * 存取器
 */
class User {
  myName: string = ''
  constructor(myName: string) {
    this.myName = myName
  }
  get name() {
    return this.myName
  }
  set name(value) {
    this.myName = value
  }
}
let user = new User('lalala')
console.log(user.myName)
user.myName = 'buchiyu'
console.log(user.myName)


/**
 * 简单写法
 * 可以在constructor的参数列表中，给想要的参数直接加上修饰符，比如private、protected、public
 * 用来少些类属性申明（如myName: string = ''），以及类赋值（如this.myName = myName）
 */
class User2 {
  constructor(public myName: string) { }
  get name() {
    return this.myName
  }
  set name(value) {
    this.myName = value
  }
}
let user2 = new User2('lalala')
console.log(user2.myName)
user2.myName = 'buchiyu'
console.log(user2.myName)


/**
 * 修饰符 public、protected、private
 * 与Java一样
 * 修饰符不能修饰class
 */


/**
 * readonly，不能修改
 */
class User3 {
  public readonly PI = 3.14
}
let user3 = new User3()
console.log(user3.PI)
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
function enhancer(target: any) {
  target.prototype.name = 'buchiyu'
  target.prototype.getName = function () {
    console.log('this.name:', this.name)
  }
}
@enhancer
class Person3 { }
let p: any = new Person3()
console.log(p.name)
p.getName()


/**
 * 装饰器工厂Ⅰ
 */
function enhancer4(name: string) {
  return function (target: any) {
    target.prototype.name = name
    target.prototype.getName = function () {
      console.log('this.name:', this.name)
    }
  }
}
@enhancer4('buchiyu')
class Person4 { }
var p4: any = new Person4()
console.log(p4.name)
p4.getName()


/**
 * 装饰器工厂Ⅱ
 * 此时返回的类的签名必须和修饰类的签名一致
 */
 function enhancer5(target: any) {
  return class {
    name: string = 'buchiyu'
    getName() {
      console.log(this.name);
    }
  }
}
@enhancer5
class Person5 { }
var p5: any = new Person4()
console.log(p5.name)
p5.getName()


/**
 * 同名接口的属性会合并到类之上
 */
interface Person6 {
  name: string
  getName: () => void
}
class Person6 {}
let p6 = new Person6()
console.log(p6.name);
p6.getName()


/**
 * 
 */