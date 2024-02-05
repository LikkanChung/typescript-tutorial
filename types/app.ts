function add(n1: number, n2: number): number {
    return n1 + n2
}

const n1 = 5;  // equal to 5.0, also types inferred here - assigned as the type number and since it's a constant is 5
const n2 = 2.8;

const result = add(n1, n2);
console.log(result);

/// Extending the add with strings, and booleans

const printResult = true;
const resultPhrase = 'Result is: ';

function addPrint(n1: number, n2: number, printResult: boolean, phrase: string) {
    const result = n1 + n2;
    if (printResult) {  // same as printResult === true
        console.log(phrase + result);  // string + <T> --> concatenation
    } else {
        return result;
    }
    
}

addPrint(n1, n2, printResult, resultPhrase);

/// Objects

const person = {
    name: 'Name', 
    age: 0
};  // inferred with concrete object of type {name: string; age: number;}
console.log(person);

type Person = {
    name: string,
    age: number
};
const person1: Person = {
    name: 'Name1',
    age: 1
};
console.log(person1);

/// Arrays

const person2 = {
    name: 'Name2',
    age: 2,
    hobbies: ['hobby1', 'hobby2']  // inferred string[]
};

for (const hobby of person2.hobbies) {
    // hobby is inferred to a string, so IDE autocompletion provided for hobby
    console.log(hobby.toLocaleUpperCase());
}

/// Tuples

const person3 = {
    name: 'Name3',
    age: 3,
    hobbies: ['hobby1', 'hobby2'],
    role: [2, 'role']  // inferred (string|number)[]
};

// These are valid, where the inferred type isn't what is wanted
person3.role.push('value');  // length not able to be caught by TS via push
person3.role[1] = 3;  // is blocked by TS

// So specify the tuple as [number, string]