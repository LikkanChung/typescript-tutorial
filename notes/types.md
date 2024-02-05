# 2. Working with Types

TS provides many types to JS. 

## JS Types

### number
There is only one number type in JS and TS. There is no differentiation between intergers and floats

### string
Defined in 3 ways: 
* `'text'`
* `"text"`
* `\`text\`` - Allows template literals (provided by modern JS and in TS)

Template literals allow data to be injected into the string.

### boolean
`true` or `false`

JS truthy and falsy value (e.g. `0` is false) is behind the scenes boolean processing. Boolean type only has two values. 

## JS Types vs TS Types

A non TS way of checking types: 

```js
function add(n1, n2) {
    if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw new Error('Incorrect input');
    }
    return n1 + n2;
}
```

It fails at runtime, but can be avoided in development with TS.

## Working with Numbers, Strings, and Booleans
N.B. The primitive types are `string`, `number`, etc. and not `String` or `Number`

### Type Inference

`const n1 = 5;` has the type `5` since it is a constant.

`let n1 = 5;` has the type `number` since it is a variable.

`let n1: number = 5;` is bad pratice since TS can infer the type. 

`let n1: number;` is acceptable because it is not initialised. It would othwerise be inferred as `any`.

## Object Types

`{key: value}`

Any JS object supported and is a type `object`, but TS has more specific types of objects based on specific constructors.

## Arrays

`[x, y, z]`

Any JS array is supported and is a type `type[]`, where the `type` of elements can be flexible or strict.

### For Loop

In JS:
```js
for 
```

## Tuples

A new type not in JS.

`[1, 2]` 

Fixed length and type of `[type1, type2]`. Where there are 2 elements, the first being of  `type1` and second is `type2`.