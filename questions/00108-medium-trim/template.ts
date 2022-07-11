type TrimExp = ' ' | '\n' | '\t'

type Trim<S extends string> = S extends `${TrimExp}${infer X}` | `${infer X}${TrimExp}`
  ? Trim<X>
  : S
