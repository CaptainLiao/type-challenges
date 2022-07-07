type Last<T extends any[]> = T extends [...infer M, infer N] ? N : never
