// https://www.typescriptlang.org/docs/handbook/2/conditional-types.html#distributive-conditional-types

// distributive-conditional-types
// 当 T 是联合类型 A|B|C，T extends U ? X : Y 会被展开成新的联合类型：
// A extends U ? X : Y | B extends U ? X : Y | C extends U ? X : Y

type Permutation<T, U = T> = [T] extends [never] 
  ? [] 
  : T extends U
    ? [T, ...Permutation<Exclude<U, T>>] 
    : []
