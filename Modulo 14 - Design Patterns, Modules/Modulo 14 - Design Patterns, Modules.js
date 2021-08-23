/**
 * Bibliografia: https://refactoring.guru/
 */

//1// Creational patterns
    /*
    Creational patterns provide various object creation mechanisms, which increase flexibility and reuse of existing code.
        -Factory Method
            Factory Method is a creational design pattern that provides an interface for creating objects in a superclass, but allows 
            subclasses to alter the type of objects that will be created.
                The Factory Method pattern suggests that you replace direct object construction calls (using the new operator) with 
                calls to a special factory method. (A father class and subclases that shared the father class)
                We just moved the constructor call from one part of the program to another. However, consider this: now you can override 
                the factory method in a subclass and change the class of products being created by the method. (Abstract methods)

        -Abstract Factory
            Abstract Factory is a creational design pattern that lets you produce families of related objects without specifying their 
            concrete classes.
                The first thing the Abstract Factory pattern suggests is to explicitly declare interfaces for each distinct product 
                of the product family. Then you can make all variants of products follow those interfaces. These methods must return 
                abstract product types represented by the interfacesThe next move is to declare.     
                The Abstract Factory—an interface with a list of creation methods for all products that are part of the product family.
                (All subclases )

        -Builder or Constructor
            Builder is a creational design pattern that lets you construct complex objects step by step. The pattern allows you to 
            produce different types and representations of an object using the same construction code.

        -Prototype or Class 
            Prototype is a creational design pattern that lets you copy existing objects without making your code dependent on their classes.

        -Singleton
            Singleton is a creational design pattern that lets you ensure that a class has only one instance, while providing a global 
            access point to this instance.
            The Singleton pattern solves two problems at the same time, violating the Single Responsibility Principle:
                -Ensure that a class has just a single instance. 
                -Provide a global access point to that instance.

            All implementations of the Singleton have these two steps in common:
                -Make the default constructor private, to prevent other objects from using the new operator with the Singleton class.
                -Create a static creation method that acts as a constructor. Under the hood, this method calls the private constructor 
                 to create an object and saves it in a static field. All following calls to this method return the cached object.
    */

//2// Structural patterns
    /*
    -Adapter
        Adapter is a structural design pattern that allows objects with incompatible interfaces to collaborate.

    -Bridge
        Bridge is a structural design pattern that lets you split a large class or a set of closely related classes into two separate 
        hierarchies—abstraction and implementation—which can be developed independently of each other.

    -Composite
        Composite is a structural design pattern that lets you compose objects into tree structures and then work with these structures 
        as if they were individual objects.

    -Decorator
        Decorator is a structural design pattern that lets you attach new behaviors to objects by placing these objects inside special 
        wrapper objects that contain the behaviors.
    -Facade
        Facade is a structural design pattern that provides a simplified interface to a library, a framework, or any other complex 
        set of classes.
        A facade is a class that provides a simple interface to a complex subsystem which contains lots of moving parts.

    -Flyweight
        Flyweight is a structural design pattern that lets you fit more objects into the available amount of RAM by sharing common parts of 
        state between multiple objects instead of keeping all of the data in each object.
    -Proxy
        Proxy is a structural design pattern that lets you provide a substitute or placeholder for another object. A proxy controls access 
        to the original object, allowing you to perform something either before or after the request gets through to the original object.

    */
//3// Behavioral patterns
    /*
    -Chain of Responsibility
        Chain of Responsibility is a behavioral design pattern that lets you pass requests along a chain of handlers. 
        Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the chain.
    -Command
        Command is a behavioral design pattern that turns a request into a stand-alone object that contains all information about the request. 
        This transformation lets you pass requests as a method arguments, delay or queue a request’s execution, and support 
        undoable operations.
    -Iterator
        Iterator is a behavioral design pattern that lets you traverse elements of a collection without exposing its underlying 
        representation (list, stack, tree, etc.).
    -Mediator
        Mediator is a behavioral design pattern that lets you reduce chaotic dependencies between objects. 
        The pattern restricts direct communications between the objects and forces them to collaborate only via a mediator object.
    -Memento
        Memento is a behavioral design pattern that lets you save and restore the previous state of an object without revealing 
        the details of its implementation.
    -Observer
        Observer is a behavioral design pattern that lets you define a subscription mechanism to notify multiple objects about any 
        events that happen to the object they’re observing.
    -State
        State is a behavioral design pattern that lets an object alter its behavior when its internal state changes. 
        It appears as if the object changed its class.
    -Strategy
        Strategy is a behavioral design pattern that lets you define a family of algorithms, put each of them into a separate class, 
        and make their objects interchangeable.
    -Template Method
        Template Method is a behavioral design pattern that defines the skeleton of an algorithm in the superclass but lets subclasses 
        override specific steps of the algorithm without changing its structure.
    -Visitor
        Visitor is a behavioral design pattern that lets you separate algorithms from the objects on which they operate.
    */

//4// AntiPatterns
    //1 - Polluting the global namespace
    //2 - Polluting the global namespace
    //3 - Passing a string to `setTimeout` or `setInterval`

//5// Modules definitions overview
    /* 
    A JavaScript module may be seen as a lego piece, it has some tubes on the bottom and some studs at the top and this simple contract 
    makes it easy to connect some modules together. Inside the module there may be anything, and the internals of the module don’t affect 
    the internals of other modules.

    This contract that makes modules connectable to others, is called the module definition. Currently we have lots of different module 
    definitions (IIFE, commonJS, ESM, AMD, UMD, esnext…)
    */

//6// UMD, AMD, CommonJS
    /*
    //CommonJS (CJS)
        // utils.js
        // we create a function 
        function add(r){
            return r + r;
        }
        // export (expose) add to other modules
        exports.add = add;


        // index.js
        var utils = require('./utils.js');
        utils.add(4); // = 8
    
    //Asynchronous Module Definition (AMD)
        // add.js
        define(function() {
            return add = function(r) {
            return r + r;
            }
        });


        // index.js
        define(function(require) {
            require('./add');
            add(4); // = 8
        }
    //Universal Module Definition (UMD)
        
        A UMD module is one that can either be used: 
            //after an import (ie with a module loader) as module
                import moment = require("moment");
                console.log(moment.format());
            //without import (without a module loader) as a global (when run in an environment without a module loader - ie browser environment). 
                console.log(moment.format());
    */