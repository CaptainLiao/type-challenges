type DeepReadonly<T> = {
  readonly [k in keyof T]: T[k] extends object 
    ? T[k] extends Function ? T[k] : DeepReadonly<T[k]> 
    : T[k]
}
