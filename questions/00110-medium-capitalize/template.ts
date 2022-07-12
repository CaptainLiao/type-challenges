// type MyCapitalize<S extends string> =  S extends `${infer F}${infer X}` ? `${Uppercase<F>}${X}` : S

type CharMap = { 'a': 'A'; 'b': 'B'; 'c': 'C'; 'd': 'D'; 'e': 'E'; 'f': 'F'; 'g': 'G'; 'h': 'H'; 'i': 'I'; 'j': 'J'; 'k': 'K'; 'l': 'L'; 'm': 'M'; 'n': 'N'; 'o': 'O'; 'p': 'P'; 'q': 'Q'; 'r': 'R'; 's': 'S'; 't': 'T'; 'u': 'U'; 'v': 'V'; 'w': 'W'; 'x': 'X'; 'y': 'Y'; 'z': 'Z' }
type MyCapitalize<S extends string> =
    S extends `${infer First}${infer U}`
      ? First extends keyof CharMap
        ? `${CharMap[First]}${U}`
        : S
      : S
