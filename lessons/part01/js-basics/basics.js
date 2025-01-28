// arrays
console.log('--- arrays ---')
const t = [1, -1, 3]

t.push(5)

console.log(t.length) // 4 is printed
console.log(t[1])     // -1 is printed

t.forEach(value => {
  console.log(value)  // numbers 1, -1, 3, 5 are printed, each on its own line
})

const t2 = [1, 2, 3]

const m1 = t2.map(value => value * 2)
console.log(m1)   // [2, 4, 6] is printed
console.log(t2)   // [1, 2, 3] is printed

const m2 = t.map(value => '<li>' + value + '</li>')
console.log(m2)   // ["<li>1</li>", "<li>-1</li>", "<li>3</li>", "<li>5</li>"] is printed


// objects
console.log('\n--- objects ---')

const object1 = {
    name: 'Full Stack web application development',
    level: 'intermediate studies',
    size: 5,
}
console.log(object1.name)         // Arto Hellas is printed
const fieldName = 'level'
console.log(object1[fieldName])    // 35 is printed

// Functions
console.log('\n--- functions ---')
const sum = (p1, p2) => {
    console.log(p1)
    console.log(p2)
    return p1 + p2
}

console.log("sum = ", sum(1, 3))

// If there is just a single parameter, we can 
// exclude the parentheses from the definition:
const square = p => {
    console.log(p)
    return p * p
}

console.log("square = ", square(2))

// If the function only contains a single expression then the 
// braces are not needed
const square2 = p => p * p
const tt = [1, 2, 3]
const ttSquared = tt.map(square2)
console.log(ttSquared)

function product(a, b) {
    return a * b
}

const result = product(2, 6)
console.log(result)


// Object methods and "this"
console.log('\n--- Object methods and "this" ---')
// Arrow functions and functions defined using the function keyword 
// vary substantially when it comes to how they behave with respect 
// to the keyword this, which refers to the object itself.
const arto = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
    greet: function() { console.log('hello, my name is ' + this.name) },
    doAddition: function(a, b) { console.log(a + b) },
}

arto.greet()  // "hello, my name is Arto Hellas" gets printed

// Methods can be assigned to objects even after the creation of the object:
console.log('Assigning a method to a created object')
arto.growOlder = function() { this.age += 1}
console.log(arto.age)   // 35 is printed
arto.growOlder()
console.log(arto.age)   // 36 is printed

console.log('Static method')
arto.doAddition(1, 4)        // 5 is printed
const referenceToAddition = arto.doAddition
referenceToAddition(10, 15)   // 25 is printed


// in JavaScript the value of `this` is defined 
// based on how the method is called
const referenceToGreet = arto.greet
referenceToGreet() // prints "hello, my name is undefined"
// When calling the method through a reference, 
// the value of this becomes the so-called global 
// object and the end result is often not what the 
// software developer had originally intended.
console.log('We will avoid `this` problems by not using it at all')


// Classes
console.log('\n--- Classes ---')
// class simulates the concept of object-oriented classes
class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greet() {
        console.log("hello, my name is " + this.name + 
                    ", I am " + this.age + " years old");
    }
}

const hatDe = new Person('Hat De', 2)
hatDe.greet()
const cuPho = new Person('Cu Pho', 5)
cuPho.greet()