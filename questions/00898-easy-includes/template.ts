// https://github.com/microsoft/TypeScript/issues/27024#issuecomment-421529650
type MaybeEquals<X, Y> = (<T>() => T extends X ? 1 : 2) extends (<T>() => T extends Y ? 1 : 2)
  ? true
  : false

type Includes<T extends readonly any[], U> = T extends [infer M, ...infer R]
  ? MaybeEquals<U, M> extends true ? true : Includes<R, U>
  : false
