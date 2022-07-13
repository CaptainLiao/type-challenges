
type ReplaceAll<S extends string, From extends string, To extends string> = From extends ''
  ? S
  : S extends `${infer Start}${From}${infer End}`
    ? `${Start}${To}${ReplaceAll<End, From, To>}`
    : S

