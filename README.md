# TypeScript - Following a TS Tutorial

https://www.youtube.com/watch?v=d56mG7DezGs
https://www.youtube.com/watch?v=BCg4U1FzODs

# Environemnt Setup
* Node
* npm 

`npm i -g typescript`

`tsc -v` (TS compiler)

# Compiling TS
`tsc file.ts` transpiles to a `file.js` file.

## Compiler Configuration file
`tsc --init` created config file `tsconfig.json`.
* `target`: Specifies version of JS compiler will generate. Default `es2016` is implemented in most browsers. Newer versions provide shorter code.
* `module`: Default `commonjs`.
* `rootDir`: Set to `./src`.
* `outDir`: Set to `./dist`.
* `removeComments`: From source to compiled code. Set to `true`.
* `noEmitOnError`: No output files produced on comilation error. Set to `true`. 
* `sourceMap`: How each line of generated code maps to source code. Set to `true`. Produces `file.js.map`
* `strict`: Strict type checking

Use `tsc` to compile all TS files in project.

# Fundamentals

## Built-in Types
JS built in types: number, string, boolean, null, undefined, object.

TS extends JS with: any, unknown, never, emum, tuple.

Variables can be declared `let n: number = 123_456_789;`.
`_` can be used to visually separate digits. 
The type `number` can also be inferred since `n` is intiialised as a `number`.
If not initialised then inferered be type `any`. 

## any Type
A variable with `any` type can be assigned values of different types, but is not type safe (the point of TS, so avoid as much as possible).

## Arrays
In JS: `let numbers = [1, 2, '3'];` - mixed type elements.

In TS: `let numbers: number[] = [1, 2, 3];`. 

`let numbers = [];` is inferred to `any[]`.
So empty arrays should have explicit type annotations.

## Tuples
Fixed length array where each element has a specific type. 

`let user: [number, string] = [1, "Name"];`

Access with `user[0]`.

Internally represented with plain JS arrays. So it is possible to `user.push(x)` an object to the array. A gap in TS implementation.

Best practice: restrict tuple usage to 2 values to keep code easy to understand. Best for key-value pairs.

## Enums
List of related constants. 

In JS:
```js
const small = 1;
const medium = 2;
const large = 3;
```

In TS:
```ts
enum Size {Small, Medium, Large};
```
By defult, values of enums are assigned 0, 1, 2,...
Or explicitly set values for all members: `... {Small = 1 ...}`.

Use:
```ts
let mySize: Size = Size.Medium;
console.log(mySize)   ---> Prints the numeric value
```

Using `const enum...` declaration generated more optimised code, so:
```ts
const enum Size = {Small, Medium, Large};
```

## Functions
Return types can be inferred, but should be annotated.

`void` for no return.

```ts
function calculateTax(income: number): number {
    ...
}
```

tsconfig for `noUnusedParameters`.

JS always returns `undefined` from functions by defult.

tsconfig for `noImplicitReturns` - detects if code paths don't return a value.

tsconfig for `noUnusedLocals` for local variables.

Note JS allows more arguments than necessary to be passed in a call than in the function signature, TS limits it.
Make parameter optional:
```ts
function calculateTax(income: number, taxYear?: number): number {
    // check optional with classic JS OR style
    if ((taxYear || 2024) < 2024) {
        ...
    }
    ...
}
```
Or give optional parameter a default value: 
```ts
function calculateTax(income: number, taxYear = 2024: number): number {
    ...
}
```

## Objects
In JS:
```js
let employee = { id: 1 };
employee.name = "Name";
```

Objects in JS are dynamic and shape can change in lifetime of program, but not in TS. 

In TS:
```ts
let employee: {
    id: number,
    name?: string,
} = {id: 1};
```
Name is optional, so is not provided when initialised.

Properties can be made read only:
```ts
let employee: {
    readonly id: number,
    ...
}
```

Objects can define method signatures:
```ts
let employee: {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
} = {
    id: 1,
    name: "Name", 
    retire: (date: Date) => {
        console.log(date);
    }
}
```

# Advanced Types

## Type Aliases
Take the above `employee` object. There are some problems: 
* Creating a new `employee` means repeating the structure definition. Code duplication. 
* A new `employee` object may have different properties. Inconsistency. 
* Code structures make code hard to read.

Using a Type alias:
```ts
type Employee = {
    readonly id: number,
    name: string,
    retire: (date: Date) => void
};

let employee: Employee = {...};
```

## Union Type
Union types allow variable or parameters to have more than one type. 

```ts
function kgToLbs(weight: number | string): number {
    // here can only use properties and methods of `weight` which are common to both numbers and strings    
    // e.g. can only use toLocaleString, toString, valueOf 

    // Narrowing Union type to more specific type
    if (typeod weight === 'number') {
        // Can use methods of weight available to numbers
        return weight * 2.2;
    } else {
        // weight is a String
        return parseInt(weight) * 2.2;
    }
}

// So can be used like this
kgToLbs(10);
kgToLbs("10kg");
```

## Intersection Type
Represents an object which is multiple types at the same time.

```ts
type Draggable = {
    drag: () => void
};

type Resizable = {
    resize: () => void
};

type UIWidget = Draggable & Resizable;

type textBox: UIWidget = {
    // Must implement all elements of Draggable and Resizable interfaces
    drag: () => {},
    resize: () => {},    
};
```

## Literal Types
Limits the possible values. Where the type is a literal value.

```ts
let quantity: 50 = 50;
let quantityA: 50 | 100 = 100;  // can be assigned values of 50 or 100 only

type Quantity = 50 | 100;
let quantityB: Quantity = 100;
```

## Nullable Type
```ts
function greet(name: string) {
    console.log(name.toUpperCase());
}
```

In JS, can provide null or undefined values. 
```js
greet(null);
greet(undefined);
```
But will cause an error because cannot call `toUpperCase()` on `null` and `undefined`.

TS compiler prevents using this: Argument of type 'null' is not assignable to type 'string'.
tsconfig for `strictNullChecks` is enabled by defualt.

So handle it:
```ts
function greet(name: string | null | undefined) {
    if (name) {  // if has a value
        ...
    } 
}
```

## Unknown Type
```ts
type Customer = {
    birthday: Date
};

function getCustomer(id: number): Customer | null { 
    // e.g. a database call
    return if === 0 ? null : {birthday: new Date()};
}

let customer = getCustomer(0); // null
console.log(customer.birthday); // would cause an error because customer could be null

// So handle the case
if (customer !== null) {
    ...
}

// But ifs could expand to be hard to maintain if getCustomer also could return undefined.

// So chain Optional property access modifier
console.log(customer?.birthday);
// since customer is null, the result of `customer?.birthday` is undefined

customer = getCustomer(1);
console.log(customer?.birthday); // gives the expected Date log
```

So use the optional proeprty access modifier (`?`) if it is possible the value could be undefined.
The result would be undefined if the access fails.


Optional element access operator is used for arrays.
```js
customers?.[0]
```

Optional call:
```js
// log may or may not be referncing a function. 
// It could equal `(message: string) => console.log(message)`
// In this case it isn't.
let log: any = null;
log?.('abc');  // Only executes if log is referencing a function.
```

## Type Assertion
Casting types.

```ts
let a: any = 1;
let b = <number>a;
// b is implicitly defined as number
```

or 
```ts
let b = a as number;
```

# Interface
Similar to type definition. 
```ts
interface PersonInterface {
    id: number,
    name: string,
    register(): string
}

let person1: PersonInterface = {
    id: 1,
    name: "Name"
    ...
}
```

Personal preference to use interfaces over types. 
Types can be used with primitives and unions. 

Interfaces can have `?` optionals, `readonly` and functions.

```ts
interface MathFunc {
    (x: number, y: number): number
}

const add: MathFunc (x: number, y: number): number => x + y
const sub: MathFunc (x: number, y: number): number => x = y
```

# Classes
Used to create objects. Needs constructors.

```ts
class Person {
    id: number
    name: string

    constructor(id: number, name: name) {
        this.id = id
        this.name = name
    }

    register() {
        return `${this.name} is now registered.`
    }
}

const p = new Person(1, "name")
console.log(p)  // name is now registered
```

Access modifiers: public by default. Can use `private` or `protected` as well.
Protected for extended classes.

## Advanced Classes
```ts
class Person implements PersonInterface {
    ...
}
```

```ts
class Employee extends Person {
    position: string

    constuctor(id: number, name: string, position: string) {
        super(id, name)
        this.position = position
    }
}

const emp = new Employee(2, "Name", "Developer)
```

# Generics
```ts
function getArray(items: any[]): any[] {
    return new Array().concat(items)
}

let numArray = getArray([1, 2, 3])
let strArray = getArray(['a', 'b', 'c'])

numArray.push('hello') // valid since items is any[]
```

So with generics:
```js
function getArray<T>(items): T[]): T[] {
    return new Array().concat(items)
} 

let numArray = getArray<number>([1, 2, 3])
let strArray = getArray(['a', 'b', 'c'])

numArray.push('hello')  // is not valid
```