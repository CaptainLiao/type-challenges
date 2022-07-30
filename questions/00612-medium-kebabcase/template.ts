type KebabCase<S> = S extends `${infer F}${infer R}`
  ? `${Lowercase<F>}${R extends Capitalize<R> ? '-' : ''}${KebabCase<R>}`
  : S
