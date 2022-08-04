type Truthy<T> = T extends '' | 0 | [] | {} | false 
  ? false 
  : true

type AnyOf<T extends readonly any[]> = T extends [infer F, ...infer R]
  ? F extends Truthy<F> ? true : AnyOf<R>
  : false
