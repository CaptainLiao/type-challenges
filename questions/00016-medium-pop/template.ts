type Pop<T extends any[]> = T extends [...infer M, infer N] ? M : never
