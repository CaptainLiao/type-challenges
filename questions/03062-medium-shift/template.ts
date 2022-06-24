type Shift<T extends any[]> = T extends [infer U, ...infer R] ? R : never
