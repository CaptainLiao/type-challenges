type NoneUnion<T, F = T> = (
  T extends F
    ? F extends T ? true : false
    : never
  )

type IsUnion<T> = NoneUnion<T> extends true ? false : true

// IsUnion<string|number>
// type t = (string extends string|number
//   ? (string extends string ? true : false) | (string extends number ? true : false)
//   : false
// ) | (number extends string|number
//   ? (number extends string ? true : false) | (number extends number ? true : false)
//   :false)
// >> type t = (true | false) | (false | true)
// >> type t = boolean | boolean
// >> type t = boolean

type t2 = NoneUnion<string|number>
type t3 = NoneUnion<string>
type t4 = NoneUnion<'a'|'b'|'c'|'d'>
type t5 = NoneUnion<never>
