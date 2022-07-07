// return Chainable<T> 实现 return this 的效果
// get(): T, 此时的 T 是多次 Chainable 后的结果

type Chainable<T = {}> = {
  option<K extends string, V>(key: K extends keyof T ? never : K, value: V): Chainable<T & Record<K, V>>
  get(): T
}
