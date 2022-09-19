
/**
 * index signature 允许创建的对象不包含任何 key，eg:
 * type A = {
 *  [index: string]: string
 * }
 * 
 * const obj:A = {}
 * 
 * 所以，可以利用这个特性识别出哪些key是 index signature，即
 * {} extends {string: ''} => {} extends Recode<K, ''>
 */

type RemoveIndexSignature<T> = {
  [K in keyof T as {} extends Record<K, ''> ? never : K]: T[K]
};