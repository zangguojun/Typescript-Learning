// 接口1
namespace a {
  /**
   * 接口
   * 1、行为的抽象：将共有类抽出
   */
   interface Speakable {
    speak(): void
  }
  interface Eatable {
    eat(): void
  }
  class Person implements Speakable, Eatable {
    eat(): void {
      throw new Error("Method not implemented.");
    }
    speak(): void {
      throw new Error("Method not implemented.");
    }
  }
}

// 接口2
namespace b {
  /**
   * 接口
   * 2、对象的形状：对象拥有哪些属性和方法
   */
     interface Speakable {
      name: string
      speak(): void
    }
    let person: Speakable = {
      name: "bu",
      speak() { }
    }
}

// 任意属性
namespace c {
  /**
   * 任意属性
   */

  // 方法1
  // interface Person extends Record<string,any> {
  //   name: string
  //   age: number
  //   readonly PI:number
  // }

  // 方法2
  interface Person {
    name: string
    age: number
    readonly PI:number
    [propName: string]:any
  }
  let p: Person = {
    name:'bu',
    age:22,
    PI:3.14,
    home:'henan',
  }
  // readonly 是在编译阶段进行的检查
  // const    是在运行阶段的检查
  // p.PI = 3.1415
}

// 函数接口类型的实现方式
namespace d {
  /**
   * 函数接口类型的实现方式
   */
  // 方法1：type定义
  // type Cost = (price: number) => number

  // 方法2：接口定义
  interface Cost {
    (price: number): number
  }
  let cost:Cost = function (price: number):number {
    return price * .8
  }
  interface Person {
    // 方法1：接口/type定义
    // cost: Cost
    // 方法2：type定义
    cost: (price: number) => number
  }
  let p: Person = {
    cost: cost
  }
}

// 重载
namespace e {
  /**
   * 重载
   * 同名方法，但是参数个数相同、类型不同，但是返回值类型必须相同
   */
   function add(a: number):number
   function add(a: string):string
   function add(a: number | string):any {
   }
}

// 可索引接口
namespace f {
  /**
   * 可索引接口
   * 对数组和对象进行约束的
   */
  interface UserInterface {
    [index:number]:string
  }
  let arr: UserInterface = ['1','2']
  let objArr: UserInterface = {
    0:'1',
    // 隐式类型转换成功
    '1':'2',
    // 隐式类型转换失败
    // 'a':'3'
  }
}

// 类接口1
namespace g {
  /**
   * 类接口
   * 用接口来约束类
   */
  interface Speakable {
    name: string
    speak(words: string): void
  }
  class Dog implements Speakable {
    name: string;
    speak(words: string): void {
      console.log(words);
    }
  }
  let dog = new Dog()
  dog.speak('汪汪汪')
}

// 类接口2
namespace h {
  /**
   * 类接口
   * new来约束构造函数
   * 接口不会约束存在于类中，但不存在于接口中的属性
   */
  interface WithNameClazz {
    new(name: string):Animal
  }
  
  class Animal {
    public age: number
    constructor(public name: string) {
    }
  }
  function create(clazz: WithNameClazz, name: string) {
    return new clazz(name)
  }
  let a = create(Animal, 'buchi')
  console.log(a);
}

/**
 * 1、type和interface的区别
 * type只是定义一个类型别名     小名
 * interface才是一个真正的类型  大名
 * 2、接口和类的区别
 * 接口只是一个类型，去修饰对象或者被类去实现，经过TS编译就会消失
 * 类即是类型（限制类的实例），也是值（构造函数new出来），编译之后还在
 * 3、接口和抽象类的区别
 * 他们都能被类实现
 * 抽象类就是不能被实例化的类，即不能new的类
 */