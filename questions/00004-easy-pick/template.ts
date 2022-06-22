type MyPick<T extends Object, K extends keyof T> = {
  [key in K]: T[key]
}
