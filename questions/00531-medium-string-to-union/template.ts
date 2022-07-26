type StringToUnion<T extends string> = T extends `${infer F}${infer E}`
  ? F | StringToUnion<E>
  : never
