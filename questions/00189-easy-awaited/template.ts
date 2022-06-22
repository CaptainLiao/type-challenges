type MyAwaited<T> = T extends Promise<infer U>
  ? U extends Promise<infer M> ? MyAwaited<M> : U
  : T
