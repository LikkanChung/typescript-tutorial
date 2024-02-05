function add(n1, n2) {
    return n1 + n2;
}
var n1 = 5; // equal to 5.0, also types inferred here - assigned as the type number and since it's a constant is 5
var n2 = 2.8;
var result = add(n1, n2);
console.log(result);
/// Extending the add with strings, and booleans
var printResult = true;
var resultPhrase = 'Result is: ';
function addPrint(n1, n2, printResult, phrase) {
    var result = n1 + n2;
    if (printResult) { // same as printResult === true
        console.log(phrase + result); // string + <T> --> concatenation
    }
    else {
        return result;
    }
}
addPrint(n1, n2, printResult, resultPhrase);
/// Objects
var person = {
    name: 'Name',
    age: 1
}; // inferred with concrete object of type {name: string; age: number;}
console.log(person);
var person1 = {
    name: 'Name2',
    age: 2
};
console.log(person1);
/// Arrays
var person2 = {
    name: 'Name3',
    age: 3,
    hobbies: ['hobby1', 'hobby2'] // inferred string[]
};
// in JS
for (var _i = 0, _a = person2.hobbies; _i < _a.length; _i++) {
    var hobby = _a[_i];
    console.log(hobby);
}
