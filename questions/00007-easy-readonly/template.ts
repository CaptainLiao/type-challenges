type MyReadonly<T extends Object> = {
  readonly [k in keyof T]: T[k]
}
