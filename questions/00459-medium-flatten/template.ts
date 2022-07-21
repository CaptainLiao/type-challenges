// type Flatten<T extends unknown[], Res extends unknown[] = []> = T extends [infer Head, ...infer Rest]
//   ? Head extends unknown[]
//     ? Flatten<[...Head, ...Rest], Res>
//     : Flatten<Rest, [...Res, Head]>
//   : Res

type Flatten<T> = T extends []
  ? []
  : T extends [infer F, ...infer Rest]
    ? [...Flatten<F>, ...Flatten<Rest>]
    : [T]
