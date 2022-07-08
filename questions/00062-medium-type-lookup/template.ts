type LookUp<U, T extends string> =  U extends {
  type: T
} & infer M ? M : never
