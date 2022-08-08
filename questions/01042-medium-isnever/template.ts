// never is a union type, so `T extends never ...` is not applied when T is never.
// since there are no members in this union and thus the result is never.
// see: https://github.com/microsoft/TypeScript/issues/31751

type IsNever<T> = [T] extends [never] ? true : false
