interface User {
  admin: boolean
}

function fn7(arr: User[], filterAdmin: (this: User) => boolean): boolean[] {
  return arr.map(filterAdmin)
}

const user1 = {
  admin: true,
}
const user2 = {
  admin: false,
}
const users = [user1, user2]

const res3 = fn7(users, function fn77(this: User): boolean {
  return this.admin
})
console.log(res2)
