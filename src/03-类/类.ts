import { addSyntheticLeadingComment, BuilderProgram } from "typescript"

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
 * 类装饰器
 * react @connect
 * nest.js 大量使用
 *
 * 类装饰器 用在类申明之前，用来监视、修改和替换类的定义
 * enhancer 其实是一个函数
 */
// target的类型为 any 或者 typeof Person2 或者 Function 或者 new () => Person2 --> 如果Person2有参数a，这里需要传参数，如 new (a: string) => Person2
function enhancer3(target: any) {
  target.prototype.name = 'buchiyu'
  target.prototype.getName = function () {
    console.log('this.name:', this.name)
  }
}
@enhancer3
class Person3 { }
let p: any = new Person3()
console.log(p.name)
p.getName()


/**
 * 类装饰器工厂Ⅰ
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
 * 类装饰器工厂Ⅱ
 * 此时返回的类的签名必须和修饰类的签名一致
 */
function enhancer5(target: any) {
  return class {
    name: string = 'buchiyu'
    getName() {
      console.log(this.name)
    }
  }
}
@enhancer5
class Person5 { }
var p5: any = new Person5()
console.log(p5.name)
p5.getName()


/**
 * 同名接口的属性会合并到类之上
 */
interface Person6 {
  name: string
  getName: () => void
}
class Person6 { }
let p6 = new Person6()
console.log(p6.name)
// p6.getName()


/**
 * 属性装饰器
 * @param target 如果是静态成员target就是类的构造函数，如果是实例成员就是类的原型对象
 * @param property 属性的名称
 */
function upperCase(target: any, property: string) {
  console.log('a', target, target[property])
  let value = target[property]
  console.log(value)

  const getter = () => value
  const setter = (newVal: string) => {
    value = newVal.toUpperCase()
  }
  if (delete target[property]) {
    Object.defineProperty(target, property, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    })
  }
  console.log('a', target[property])
}

/**
 * @param target 如果是静态成员target就是类的构造函数，如果是实例成员就是类的原型对象
 * @param property 方法的名称
 * @param descriptor 方法的描述器
 */
function noEnumerable(target: any, property: string, descriptor: PropertyDescriptor) {
  descriptor.enumerable = false
}

class Person7 {
  @upperCase
  name: string = 'buaichiyu'
  @noEnumerable
  getName() {
    console.log(this.name)
  }
}
let p7 = new Person7()
console.log(p7.name)
p7.name = 'buchiyu'
console.log(p7.name)


/**
 * 参数装饰器
 * nest.js用到
 * @param target 如果是静态成员target就是类的构造函数，如果是实例成员就是类的原型对象
 * @param methodName 方法名 
 * @param paramsIndex 参数的索引
 */
function addAge(target: any, methodName: string, paramsIndex: number) {
  target.age = 10
}
class Person8 {
  login(username: string, @addAge password: string) {
    // console.log(username, password, this.age)
  }
}
let p8 = new Person8()
p8.login('buchiyu', '123456')


/**
 * 装饰器的执行顺序:
 * 
 * 方法和方法参数中的参数装饰器先执行
 * 类装饰器总是最后执行，并且从下往上依次执行
 * 方法和属性装饰器，谁在前面谁先执行
 * 因为参数属于方法的一部分，所以参数装饰器总是紧贴这方法装饰器执行
 * 
 * 一句话：从内往外；不同类别，从上往下；不同类别，从下往上；
 */
function classDecorator1() {
  return (target: any) => {
    console.log(target)
    console.log('类装饰器1')
  }
}
function classDecorator2() {
  return (target: any) => {
    console.log(target)
    console.log('类装饰器2')
  }
}
function propertyDecorator(name: string) {
  return (target: any, property: string) => {
    console.log('属性装饰器')
    console.log(name)
    console.log(target, property)
  }
}
function parameterDecorator1(name: string) {
  return (target: any, property: string, paramIndex: number) => {
    console.log('参数装饰器1')
    console.log(name)
    console.log(target, property, paramIndex)
  }
}

function parameterDecorator2(name: string) {
  return (target: any, property: string, paramIndex: number) => {
    console.log('参数装饰器2')
    console.log(name)
    console.log(target, property, paramIndex)
  }
}
function methodDecorator(name: string) {
  return (target: any, property: string, decorator: PropertyDescriptor) => {
    console.log('方法修饰器')
    console.log(name)
    console.log(target, property, decorator)
  }
}

@classDecorator1()
@classDecorator2()
class Person9 {
  static className: string = 'Person9'
  @propertyDecorator('name')
  name: string = 'buchiyu'

  @propertyDecorator('age')
  age: number = 10

  @methodDecorator('greet')
  greet(@parameterDecorator1('p1') p1: string, @parameterDecorator2('p2') p2: string) {
  }
}


/**
 * 抽象类
 * 抽象描述一种抽象的状态，无法被实例化，只能被继承
 * 抽象方法不能再抽象类中实现，但必须在具体子类中实现
 */
abstract class Animal {
  name: string
  abstract speak(): void
}
class Cat extends Animal {
  speak(): void {
    console.log('喵喵喵')
  }
}
let cat = new Cat()
cat.speak()


/**
 * 重载和重写
 * 重载是为一个函数提供多个类型定义/函数申明
 * 重写是不同的子类以不同的方式实现父类的方法
 */

/**
 * 继承和多态
 * *&多态最常见的两个实现：覆盖和重载
 * 1. 重写：指子类重新定义父类方法，这正好就是基于prototype继承
 * 2. 重载：指多个同名但参数不同的方法，这个JavaScript确实没有，
 *    可以通过拿到`args`，`判断参数数量`来进行模拟，Typescript有
 * *&继承是多态的基础
 */