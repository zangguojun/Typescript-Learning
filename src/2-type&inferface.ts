interface MyName {
  name: string
}

// interface MyName {
//   name: number
// }
// error: 后续属性声明必须属于同一类型。属性“name”的类型必须为“string”，但此处却为类型“number”。ts(2717)
class A {}
class B extends A {}
export = A
