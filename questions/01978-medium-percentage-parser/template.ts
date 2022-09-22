
type PercentageParser2<A extends string> = A extends `${infer X}%`
  ? [X, '%']
  : [A, '']

type PercentageParser<A extends string> = A extends `+${infer X}`
    ? ['+', ...PercentageParser2<X>]
    : A extends `-${infer X}`
      ? ['-', ...PercentageParser2<X>]
      : ['', ...PercentageParser2<A>]

