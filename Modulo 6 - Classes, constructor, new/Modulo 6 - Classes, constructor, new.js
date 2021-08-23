//1// ES6 vs ES5 classes
    //No class keyword in ES5
        //Para intentar implementar clases se utilizaron funciones y prototype.

        const user = {
            id: 1,
            name: 'John Doe',
            email: 'john.doe@example.com',
            isActive: true
        }

        Object.prototype.keys = function () {
            return Object.keys(this);
        }

        console.log(user.keys()); 

        //Ahora todos los objetos tienen el metodo para retornar las keys.
        //For example, if you want to add some feature and want to use with your string you can add that using 
        String.prototype.someFeature = 'Your Logic'

    //Classes in ES6
        'use strict';

        /**
         * Person class.
         *
         * @constructor
         * @param {String} name - name of a person.
         * @param {Number} age  - age of a person.
         * @param {String} gender  - gender of a person.
         */
        
        class Person {
        constructor(name, age, gender) {
            this.name = name;
            this.age = age;
            this.gender = gender;
        }
        
            getName() {
                return this.name;
            }
            
            getAge() {
                return this.age;
            }
            
            getGender() {
                return this.gender;
        }
        }
        
        /**
         * Teacher class.
         *
         * @constructor
         * @param {String} name - name of a teacher.
         * @param {Number} age  - age of a teacher.
         * @param {String} gender  - gender of a teacher.
         * @param {String} subject - subject of a teacher.
         */
        
        class Teacher extends Person {
        constructor(name, age, gender, subject) {
            super(name, age, gender);
        
            this.subject = subject;
        }
        
            getSubject() {
                return this.subject;
            }
        }
        
        /**
         * Student class.
         *
         * @constructor
         * @param {String} name - name of a student.
         * @param {Number} age  - age of a student.
         * @param {String} gender  - gender of a student.
         * @param {Number} marks - marks of a student.
         */
        
        class Student extends Person {
        constructor(name, age, gender, marks) {
            super(name, age, gender);
            this.marks = marks;
        }
        
            getMarks() {
                return this.marks;
            }
        }
        
        const teacher = new Teacher('John Doe', 30, 'male', 'Maths');
        const student = new Student('Jane Miles', 12, 'female', 88);
        
        console.log(
        'Teacher:',
        teacher.getName(),
        teacher.getAge(),
        teacher.getGender(),
        teacher.getSubject(),
        );
        console.log(
        'Student:',
        student.getName(),
        student.getAge(),
        student.getGender(),
        student.getMarks(),
        );
    
    //------------------------------------------------------------------------------------------------------

    //The same but with ES5
        'use strict';

        /**
         * Person class.
         *
         * @constructor
         * @param {String} name - name of a person.
         * @param {Number} age  - age of a person.
         * @param {String} gender  - gender of a person.
         */
        
        function Person(name, age, gender) {
          this.name = name;
          this.age = age;
          this.gender = gender;
        }
        
        Person.prototype.getName = function() {
          return this.name;
        };
        
        Person.prototype.getAge = function() {
          return this.age;
        };
        
        Person.prototype.getGender = function() {
          return this.gender;
        };
        
        /**
         * Teacher class.
         *
         * @constructor
         * @param {String} name - name of a teacher.
         * @param {Number} age  - age of a teacher.
         * @param {String} gender  - gender of a teacher.
         * @param {String} subject - subject of a teacher.
         */
        
        function Teacher(name, age, gender, subject) {
          Person.call(this, name, age, gender);
          this.subject = subject;
        }
        
        Teacher.prototype = Object.create(Person.prototype);
        
        Teacher.prototype.getSubject = function() {
          return this.subject;
        };
        
        /**
         * Student class.
         *
         * @constructor
         * @param {String} name - name of a student.
         * @param {Number} age  - age of a student.
         * @param {String} gender  - gender of a student.
         * @param {Number} marks - marks of a student.
         */
        
        function Student(name, age, gender, marks) {
          Person.call(this, name, age, gender);
          this.marks = marks;
        }
        
        Student.prototype = Object.create(Person.prototype);
        
        Student.prototype.getMarks = function() {
          return this.marks;
        };
        
        const teacher = new Teacher('John Doe', 30, 'male', 'Maths');
        const student = new Student('Jane Miles', 12, 'female', 88);
        
        console.log(
          'Teacher:',
          teacher.getName(),
          teacher.getAge(),
          teacher.getGender(),
          teacher.getSubject(),
        );
        console.log(
          'Student:',
          student.getName(),
          student.getAge(),
          student.getGender(),
          student.getMarks(),
        );

//2// Operator "new"
    /*
    New keyword in JavaScript is used to create an instance of an object that has a constructor function. 
    On calling the constructor function with ‘new’ operator, the following actions are taken:

    - A new empty object is created.
    - The new object’s internal ‘Prototype’ property (__proto__) is set the same as the prototype of the constructing function.
    - The ‘this’ variable is made to point to the newly created object. It binds the property which is declared with ‘this’ keyword to the new object.
    - A newly created object is returned when the constructor function returns a non-primitive value (custom JavaScript object). 
      If the constructor function returns a primitive value, it will be ignored. At the end of the function, 
      ‘this’ is returned if there is no return statement in the function body.
    */
    //Syntax:
        new constructorFunction(arguments)
    //Parameters:
        // - ConstructorFunction: A class or function that specifies the type of the object instance.
        // - Arguments: A list of values that the constructor will be called with.

        function Fruit(color, taste, seeds) {
            this.color = color;
            this.taste = taste;
            this.seeds = seeds;
        }
          
        // Create an object
        const fruit1 = new Fruit('Yellow', 'Sweet', 1);
          
        // Display the result
        document.write(fruit1.color); //Yellow

//3// Operator "super"
        //When used in a constructor, the super keyword appears alone and must be used before the this keyword is used. 
        //The super keyword can also be used to call functions on a parent object.
            class Rectangle {
                constructor(height, width) {
                this.name = 'Rectangle';
                this.height = height;
                this.width = width;
                }
                sayName() {
                console.log('Hi, I am a ', this.name + '.');
                }
                get area() {
                return this.height * this.width;
                }
                set area(value) {
                this._area = value;
                }
            }
            
            class Square extends Rectangle {
                constructor(length) {
                this.height; // ReferenceError, super needs to be called first!
            
                // Here, it calls the parent class's constructor with lengths
                // provided for the Rectangle's width and height
                super(length, length);
            
                // Note: In derived classes, super() must be called before you
                // can use 'this'. Leaving this out will cause a reference error.
                this.name = 'Square';
                }
            }

//4// Return from constructor
    /*
    Typically, when your constructor is invoked with new, an object is created, 
    its constructor is assigned to the invoked constructor and the object is then assigned to this 
    before executing any operations specified in your constructor method.
    Once the code is executed, the constructor will return:

    - Any valid return value, valid being only object values.
    - The this object if there is no return statement executed with a valid value.
    */

        class SimpleClass {
            constructor() {
            this.val = 0;
            }
        }
        new SimpleClass(); // { val: 0 }
        
        class MyClass {
            constructor() {
            this.val = 0;
            return { a: 1, b: 2 };
            }
        }
        new MyClass(); // { a: 1, b : 2 }

        //Not optimal
        class PrimClass {
            constructor() {
              this.val = 0;
              return 20; //20 it is not an object so it will return this insted.
            }
          }
          new PrimitiveClass();  // { val: 0 }

//5// Operator "instanceof"
    //El operador instanceof verifica si un objeto en su cadena de prototipos contiene la propiedad prototype de un constructor.
    color1=new String("verde")
    color1 instanceof String // devuelve verdadero (true)
    color2="coral"
    color2 instanceof String // devuelve falso (color2 no es un objeto String)

//6// Static properties
  /*
  Static methods are used for the functionality that belongs to the class “as a whole”. It doesn’t relate to a concrete class instance.
  For example, a method for comparison Article.compare(article1, article2) or a factory method Article.createTodays().
  They are labeled by the word static in class declaration.
  Static properties are used when we’d like to store class-level data, also not bound to an instance.
  
  The syntax is:
  */

    class MyClass {
      static property = instructions;
    
      static method() {
        instructions
      }
    }
  
  //Technically, static declaration is the same as assigning to the class itself:
  
    MyClass.property = instructions;
    MyClass.method = instructions;
  
  //Static properties and methods are inherited.
  
  //For class B extends A the prototype of the class B itself points to A: B.[[Prototype]] = A. So if a field is not found in B, the search continues in A.

//7// Private properties
  //Class fields are public by default, but private class members can be created by using a hash # prefix. 
  //The privacy encapsulation of these class features is enforced by JavaScript itself.

    class ClassWithPrivateField {
      #privateField;
    }
    
    class ClassWithPrivateMethod {
      #privateMethod() {
        return 'hello world';
      }
    }
    
    class ClassWithPrivateStaticField {
      static #PRIVATE_STATIC_FIELD;
    }
    
    class ClassWithPrivateStaticMethod {
      static #privateStaticMethod() {
        return 'hello world';
      }
    }
    
    