// = keyof T：K 的默认值
// 使用交叉类型
// 首先让 T 的所有 key 都 readonly；
// 然后使用 Omit 去掉非 K 中的 readonly
type MyReadonly2<T, K extends keyof T = keyof T> = {
  readonly [Key in keyof T]: T[Key]
} & Omit<T, K>
