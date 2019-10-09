/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding - when 'this' is the global scope, 'this' refers to the window object.
* 2. Implicit Binding - when 'this' is the function scope, 'this' refers to the object before the dot.
* 3. New Binding - when 'this' is the constructor function, 'this' refers to the specific instance of the object creadted.
* 4. Explicit Binding - when a  call or apply method is used, 'this' is defined. 
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

function greeting(name) {
    console.log (`Hello my name is ${name}`);
    console.log(this);
}

greeting('Jeff');


// Principle 2

// code example for Implicit Binding

const myObj = {
    greeting: 'Hello',
    sayHi: function(name) {
        console.log(`${this.greeting} my name is ${name}`);
        console.log(this);
     }
    };
    
    myObj.sayHi('Jeff');


// Principle 3

// code example for New Binding

function Person(greeter) {
    this.greeting = 'Hello';
    this.greeter = greeter;
    this.speak = function() {
       console.log(this.greeting + this.greeter);
       console.log(this);
      };
   }
   
   const jeff = new Person('Jeff');
   
   jeff.speak();

// Principle 4

// code example for Explicit Binding

const person = {
    name: "Jeff"
  }
  
  function introduction(arg1, arg2, arg3){
    return `Hello my name is ${this.name} and I am studying: ${arg1}, ${arg2} and ${arg3}`;
  }
  
  console.log(introduction.call(person, 'HTML', 'CSS', 'JS'));


  const person = {
    name: "Jeff"
  }

  const skills = ['Jeff', 'HTML', 'CSS', 'JS']
  
  function introduction(arg1, arg2, arg3){
    return `Hello my name is ${this.name} and I am studying: ${arg1}, ${arg2} and ${arg3}`;
  }
  
 console.log(introduction.apply(person, skills));