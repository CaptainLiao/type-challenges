type AppendArgument<Fn, A> = Fn extends (...args: infer P) => infer Y
  ? (...args: [...P, A]) => Y
  : never
