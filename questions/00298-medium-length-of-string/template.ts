// 把字符串转化为数组

type LengthOfString1<S extends string, A extends string[] = []> = S extends `${infer Head}${infer Rest}`
  ? LengthOfString1<Rest, [...A, Head]>
  : A['length']
