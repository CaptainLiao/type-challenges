type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer X}`
  ? X
  : `${T}`
