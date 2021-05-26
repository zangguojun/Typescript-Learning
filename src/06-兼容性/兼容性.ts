// 接口的兼容性
namespace a {
  /**
   * 接口的兼容性
   * 如果传入的变量和声明的类型不完全匹配，TS会进行兼容性检查
   * 鸭子类型检测Duck-Check：源类型是目标类型的子集，就会兼容
   */
  interface Animal {
    name: string
    age: number
  }
  interface Person {
    name: string
    age: number
    action: boolean
  }
  function getName (animal: Animal):string {
    return animal.name
  }
  let p: Person = { name: 'buchiyu', age:10, action: true}
  getName(p)
}

// 基本类型的兼容性
namespace b {
  let num: string | number
  let str: string = 'buchiyu'
  num = str

  let num2: {toString(): string}
  let str2: string = 'buaichiyu'
  num2 = str2
}

// 类的兼容性
namespace c {
  /**
   * 类的兼容性
   * TS式结构类型系统，只会比较结构而不会在意类型
   * 类的参数只能多不能少
   */
  class Animal {
    name: string
  }
  class Bird extends Animal {
    swing: number
  }
  let a: Animal = new Bird()
  // 类型 "Animal" 中缺少属性 "swing"，但类型 "Bird" 中需要该属性
  // let b: Bird = new Animal()
}

// 函数的兼容性
namespace d {
  /**
   * 函数参数只能少不能多
   * 函数返回这只能多不能少
   */
  type sumFunc = (a: number, b: number) => number
  let sum1:sumFunc = (a: number, b:number):number => {return 1}
  let sum2:sumFunc = (a: number):number => {return 2}
  let sum3:sumFunc = ():number => {return 3}
  // 不能将类型“(a: number, b: number, c: number) => number”分配给类型“sumFunc”。
  // let sum4:sumFunc = (a: number, b:number, c: number):number => {return 4}

  type GetPerson = () => {name: string, age: number}
  let getPerson: GetPerson = () => ({name: 'buchiyu', age: 10})
  let getPerson1: GetPerson = () => ({name: 'buchiyu', age: 10, home:'henan'})
  // 类型 "{ name: string; }" 中缺少属性 "age"，但类型 "{ name: string; age: number; }" 中需要该属性
  // let getPerson2: GetPerson = () => ({name: 'buchiyu'})
}

// 函数参数的双向协变
namespace e {
  /**
   * 函数参数的双向协变
   * 当比较函数参数的时候，只有当源函数的参数能够赋值给目标函数
   * 可以更强大（参数更多），但是不能更弱（参数更少）
   */
  let sourceFunc = (arg: number | string) => {}
  let targetFunc = (arg: number | string) => {}
  sourceFunc = targetFunc
  let targetFunc1 = (arg: number | string | boolean) => {}
  sourceFunc = targetFunc1
  // 参数“arg”和“arg” 的类型不兼容。不能将类型“string | number”分配给类型“number”。
  // let targetFunc2 = (arg: number) => {}
  // sourceFunc = targetFunc2

  interface Event {
    timestamp: number
  }
  interface MouseEvent extends Event {
    eventX: number
    eventY: number
  }
  interface KeyEvent extends Event {
    keyCode: string
  }
  function addEventListener(eventType: string, handle:(event: Event) => void){}
  addEventListener('click', (event: Event) => {})
  // 类型“Event”缺少类型“MouseEvent”中的以下属性: eventX, eventY
  // addEventListener('click', (event: MouseEvent) => {})
  // 类型 "Event" 中缺少属性 "keyCode"
  // addEventListener('click', (event: KeyEvent) => {})

  function addEventListener1(eventType: string, handle:(event: MouseEvent) => void){}
  addEventListener1('click', (event: Event) => {})
  addEventListener1('click', (event: MouseEvent) => {})
  // 类型 "MouseEvent" 中缺少属性 "keyCode"
  // addEventListener1('click', (event: KeyEvent) => {})

}

// 枚举类型和数字类型的兼容性
namespace f {
  /**
   * 枚举类型和数字类型的兼容性
   */
  enum Colors {
    Red,
    Yellow
  }
  let c: Colors = Colors.Red
  let c1: number = Colors.Yellow
}

// 泛型的兼容性
namespace g {
  interface Empty<T> {}
  let x!: Empty<string>
  let y!: Empty<number>
  x = y

  interface NotEmpty<T> {data:T}
  let x1!: NotEmpty<string> // type x2 = {data:string}
  let y1!: NotEmpty<number> // type x2 = {data:number}
  // 不能将类型“NotEmpty<number>”分配给类型“NotEmpty<string>”
  // x1 = y1
}