type Merge<F extends object, S extends object> = {
  [Key in keyof F | keyof S]: Key extends keyof S 
    ? S[Key] 
    : Key extends keyof F ? F[Key] : never
}
