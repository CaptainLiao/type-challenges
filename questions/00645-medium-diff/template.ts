type Diff<O extends object, O1 extends object> = {
  [K in keyof Omit<Merge<O, O1>, keyof O> | keyof Omit<Merge<O, O1>, keyof O1> ]: K extends keyof O ? O[K] : K extends keyof O1 ? O1[K] : never
}


