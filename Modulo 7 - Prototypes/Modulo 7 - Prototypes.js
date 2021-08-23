//1// Prototype, prototype chaining
    //Prototypes are the mechanism by which JavaScript objects inherit features from one another.
    //In this example, we have defined a constructor function, like so:
        function Person(first, last, age, gender, interests) {

            // property and method definitions
            this.name = {
            'first': first,
            'last' : last
            };
            this.age = age;
            this.gender = gender;
            //...see link in summary above for full definition
        }
    //We have then created an object instance like this:
        let person1 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);
    /*
    If you type "person1." into your JavaScript console, you should see the browser try to auto-complete 
    this with the member names available on this object:

        person1. -> valueOf, toString, name, isPrototypeOf, hassOwnProperty, constructor, gender, age, etc.

    In this list, you will see the members defined on person1's constructor — Person() — name, age, gender, 
    interests, bio, and greeting. You will however also see some other members — toString, valueOf, 
    etc — these are defined on person1's prototype object's prototype object, which is Object.prototype

        person1 --Inherits from prototype--> Person --Inherits from prototype--> Object

        By specification, all built-in Objects in JavaScript has prototype Object associated with it and it points 
        to the Object.prototype object. That is why many people say “Everything in JavaScrtipt is inheriting from Object.”
    
    
    When a property or method is called on an object, the browser first checks to see if the actual object has the method on it, 
    if not it checks if the method is available to it through its prototype object. If the method’s not defined on the 
    object’s personal constructor (where its prototype object comes from), the browser checks up another level to see if 
    the constructor’s prototype object has the method available to it. The browser will do this all the way up until it reaches 
    the object at the top with null as its prototype.
    */


//2// __proto__
    /*
    The __proto__ property of Object.prototype is an accessor property (a getter function and a setter function) 
    that exposes the internal [[Prototype]] (either an object or null) of the object through which it is accessed.
    The __proto__ getter function exposes the value of the internal [[Prototype]] of an object.

    Actualmente está obsoleta  en favor de Object.getPrototypeOf/Reflect.getPrototypeOf (en-US) y 
    Object.setPrototypeOf/Reflect.setPrototypeOf (en-US)
    */

//3// ES6 inheritance
    //We get the inheritance in action using prototype chaining, but with a syntactical sugar.
    //Classes support prototype-based inheritance, super calls, instance and static methods and constructors.
        class Vehicle {
    
            constructor (name, type) {
            this.name = name;
            this.type = type;
            }
        
            getName () {
            return this.name;
            }
        
            getType () {
            return this.type;
            }
        
        }

        //inheritance
        
        class Car extends Vehicle {
        
            constructor (name) {
            super(name, 'car');
            }
        
            getName () {
            return 'It is a car: ' + super.getName();
            }
        
        }let car = new Car('Tesla');
        console.log(car.getName()); // It is a car: Tesla
        console.log(car.getType()); // car
    //super — previously to achieve such functionality in Javascript required the use of call or apply

//4// Prototypal inheritance
    /*
    Prototypical inheritance refers to the ability to access object properties from another object. 

    In JavaScript, objects have a special hidden property [[Prototype]] (as named in the specification), 
    that is either null or references another object. That object is called “a prototype”:

    In prototypal inheritance, objects are created using the new keyword, and inheritance 
    is achieved by linking the object’s prototype to another object’s prototype. Example:
    */

        // Function wiring prototypes to achieve inheritance
        function inherits(Parent, Child) {
            function F() {}
            F.prototype = Parent;
            Child.prototype = new F();
        }

        // Base class
        function Base(spec) {
            this.name = spec.name; // Define the "name" property
        }

        // Child class
        function Child(spec) {
            Base.call(this, spec); // Call the base class constructor
        }
        inherits(Base, Child); // Wire prototypes
        Child.prototype.sayHello = function () { // Define the "sayHello" method
            return 'Hello, I\'m ' + this.name;
        };

        // Usage
        var object = new Child({ name: 'a prototypal object' });
        result.textContent = object.sayHello();

    /*
    I see the following advantages of the use of the prototypal inheritance pattern:

    - Performance: prototypal object creation involves less steps than functional objects creation, 
    thus prototypal object creation is faster than functional object creation (by several orders of magnitude, as you’ll see below).
    - Dynamsim: one can add methods to a prototype at any time and these methods will automatically be available on all objects 
        inheriting this prototype.
    - Reflection: though this is not very important, you can test if an object is of some type by using the instanceof operator, 
        which is not feasible with functional inheritance.
    */

//5// Functional inheritance
    /*
    The functional inheritance pattern is an object constructor function creates an empty object and adds it some methods before returning it. 
    Inheritance is achieved in this object constructor function by getting the object through another object constructor function 
    instead of creating an empty one. Example:
    */

        // Base object constructor function
        function base(spec) {
            var that = {}; // Create an empty object
            that.name = spec.name; // Add it a "name" property
            return that; // Return the object
        }

        // Construct a child object, inheriting from "base"
        function child(spec) {
            var that = base(spec); // Create the object through the "base" constructor
            that.sayHello = function() { // Augment that object
                return 'Hello, I\'m ' + that.name;
            };
            return that; // Return it
        }

        // Usage
        var object = child({ name: 'a functional object' });
        result.textContent = object.sayHello();
    /*
    Is see the following advantages of the use of the functional inheritance pattern:

    - Simplicity: a few steps are required to achieve inheritance.
    - “This”-free: you don’t have to care with the context variable “this”, 
        meaning that you can freely pass any method of a functional object as a callback parameter 
        and everything will work as expected.
    - Encapsulation: objects can have private (and even protected) members.
    */
            
    
    
    