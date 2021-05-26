// 泛型
namespace a {
  /**
   * 泛型
   * 在定义函数、接口和类的时候，不预先指定具体的类型，而是在指定具体的类型
   */
  function createArray<T> (length: number, value: T): T[] {
    let result: any[] = []
    for (let i = 0; i < length; i ++) {
      result[i] = value
    }
    return result
  }
  let result1 = createArray<string>(3, 'x')
  console.log(result1);
  let result2 = createArray<number>(3, NaN)
  console.log(result2);
}

// 类数组
namespace b {
  /**
   * 类数组
   * 1、arguments
   * 2、DOM
   * 3、
   */
  function sum (...args: number[]) {
    let arg2: IArguments = arguments
  }
  sum(1,2,3)

  // let root = document.getElementById('root')
  // let children: HTMLCollection | undefined = root?.children
}

// 泛型类
namespace c {
  class MyArray<T> {
    private list: T[] = []
    add(value: T) {
      this.list.push(value)
    }
  }
  let arr = new MyArray<number>()
  arr.add(1)
  // 类型“string”的参数不能赋给类型“number”的参数。
  // arr.add('1')
}

// 泛型接口
namespace d {
  /**
   * 泛型接口
   * A在定义函数的时候确定
   * B在调用函数的时候确定
   */
  interface Cal<A> {
    <B>(a: A, b:B): A
  }
  let add:Cal<number> = <B>(a: number, b: B): number => {
    return a
  }
  console.log(add<string>(1, 'a'));
}

// 默认泛型
namespace e {
  class MyArray<T = number> {
    private list: T[] = []
    add(value: T) {
      this.list.push(value)
    }
  }
  let arr = new MyArray()
  arr.add(1)
}

// 推断泛型类型
namespace f {
  function createArray<T = number> (length: number, value: T): T[] {
    let result: any[] = []
    for (let i = 0; i < length; i ++) {
      result[i] = value
    }
    return result
  }
  let result1 = createArray<string>(3, 'x')
  console.log(result1);
}

// 接口约束泛型
namespace g {
  interface HaveLength {
    length: number
  }
  function logger<T extends HaveLength> (val: T) {
    console.log(val.length);
  }
  logger<string>('aaaa')
  // 类型“number”不满足约束“HaveLength”。
  // logger<number>(111)
}

// 泛型类型别名
namespace h {
  type Cart<T> = {list: T[]} | T[]
  let c1: Cart<string> = {list:['1','2','3']}
  let c2: Cart<number> = [1, 2, 3]
}

// 泛型接口和泛型类型别名的区别
namespace i {
  /**
   * 接口创建了一个新的名字，它在任何地方都能被调用。而类型别名并不出案件新的名字，例如报错信息就不会使用别名
   * extends和implements使用接口
   * 联合类型和元组类型使用别名
   */
}

// 继承和实现的区别
namespace j {
  /**
   * 只有类才成实现接口
   * 类能继承类
   * 接口能继承接口
   */
}
