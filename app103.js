//3.Generator Function
function* gen() {
    yield 1;
    yield 2;
    yield 500;
    yield;
}
//Callinf function gen()
const myGen = gen()
console.log(myGen.next().value)
console.log(myGen.next().value);
console.log(myGen.next().value);
console.log(myGen.next().value);