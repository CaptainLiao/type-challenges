type Replace<S extends string, From extends string, To extends string> = From extends ''
  ? S
  : S extends `${infer F}${From}${infer R}`
    ? `${F}${To}${R}`
    : S
