import { ObjectFlags } from "typescript";

export{}
/**
 * 函数定义
 * 预编译阶段,既申明又赋值
 */
function hello (name: string): void {
  console.log('hello', name);
}
hello('buchiyu')

/**
 * 函数表达式
 * 预编译阶段,只是申明并不赋值
 */
type UserFunction = (a:string, b: string) => string
let getUserName: UserFunction = function (firstName: string, lastName: string): string {
  return firstName + lastName
}
let name = getUserName('l','t')
console.log(name);

/**
 * 可选参数
 * 必须是最后一个
 */
function print(name: string, age?:number): void {
  console.log(name,age);
}
print('buchiyu')
print('buchiyu',21)

/**
 * 默认参数
 */
function ajax(url: string, method: string = 'GET') {
  console.log(url, method);
}
ajax('www.baidu.com')
ajax('www.baidu.com','POST')

/**
 * 剩余参数
 */
function sum (prefix: string, ...numbers: number[]):string {
  return prefix + numbers.reduce((pre, cur) => pre + cur,0)
}
console.log(sum('$', 2, 3));

/**
 * 函数的重载/签名
 * 函数的重载之间不能杂糅其他代码
 */
let obj: any = {
}
function attr(val: number): void
function attr(val: string): void
function attr(val: number | string): void {
  if (typeof val === 'string') {
    obj.name = val
  } else if(typeof val === 'number') {
    obj.age = val
  }
}
attr('buchiyu')
attr(20)
console.log(obj);
/*小需求: sum2两个参数,要么都是string类型,要么都是number类型*/
function sum2(a: string, b: string):void
function sum2(a: number, b: number):void
function sum2(a: string | number, b: string | number):void {}
sum2(1, 2)
sum2('1', '2')
// 找不到匹配的重载
//sum2(1,'2')

/**
 * 箭头的使用场景
 * 1,定义箭头函数
 * 2,定义函数类型
 */



