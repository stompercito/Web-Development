//1// Creating a TypeScript project
    /*
    The easiest way to install TypeScript is through npm, the Node.js Package Manager. If you have npm installed, you can install TypeScript globally (-g) on your computer by:
        npm install -g typescript

    You can test your install by checking the version.
        tsc --version

    To compile your TypeScript code, you can open the Integrated Terminal and type tsc helloworld.ts. This will compile and create a new helloworld.js JavaScript file.   
    And then run node helloworld.js.
    */
    
//3// Specifying Typescript types
    //Boolean
    let isDone: boolean = false;

    //Number
    let decimal: number = 6;
    let hex: number = 0xf00d;
    let binary: number = 0b1010;
    let octal: number = 0o744;
    let big: bigint = 100n;

    //String
    let color: string = "blue";
    color = 'red';
    
    //Array
    let list: number[] = [1, 2, 3];
    let list2: Array<number> = [1, 2, 3];

    //Tuple
    // Declare a tuple type
        let x: [string, number];
    // Initialize it
        x = ["hello", 10]; // OK
    // Initialize it incorrectly
        //x = [10, "hello"]; // Error

    //Any
    let looselyTyped: any = 4; //Can be any value

    
//4// Defining custom and anonymous types
    //By default, enums begin numbering their members starting at 0.
        enum Color {
            Red,
            Green,
            Blue,
        }
        let c: Color = Color.Green;

    //Or, even manually set all the values in the enum:
        enum Color2 {
            Red = 1,
            Green = 2,
            Blue = 4,
        }
        let c2: Color = Color.Green;

    //----------------------------------------------------------------

    //Union Type
        function printId(id: number | string) {
            if (typeof id === "string") {
            // In this branch, id is of type 'string'
            console.log(id.toUpperCase());
            } else {
            // Here, id is of type 'number'
            console.log(id);
            }
        }
        
    //----------------------------------------------------------------

    //Type Aliases
        type Point = {
            x: number;
            y: String;
        };
        
        // Exactly the same as the earlier example
        function printCoord(pt: Point) {
            console.log("The coordinate's x value is " + pt.x);
            console.log("The coordinate's y value is " + pt.y);
        }

        printCoord({ x: 100, y: '100' });

    //The new tyoe can be both, a number and a string.   
    type ID = number | string;
    
    //----------------------------------------------------------------

    //Interfaces
        interface Point2 {
            x: number;
            y: number;
        }
        
        function printCoord2(pt: Point2) {
            console.log("The coordinate's x value is " + pt.x);
            console.log("The coordinate's y value is " + pt.y);
        }
        
        printCoord2({ x: 100, y: 100 });

    /*
        Differences Between Type Aliases and Interfaces
        Type aliases and interfaces are very similar, and in many cases you can choose between them freely. Almost all features of an interface are available in type, the key distinction 
        is that a type cannot be re-opened to add new properties vs an interface which is always extendable.
    */

//5// Defining and implementing TypeScript classes
    class PointClass {
        x: number;
        y: number;
    }
    
    const pt = new PointClass();
    pt.x = 0;
    pt.y = 0;

    //-------------------------

    class GoodGreeter {
        name: string;
       
        constructor() {
          this.name = "hello";
        }
    }

    //-------------------------
    //Fields may be prefixed with the readonly modifier. This prevents assignments to the field outside of the constructor.

    //-------------------------
    //Methods
    class PointScale {
        x = 10;
        y = 10;
       
        scale(n: number): void {
          this.x *= n;
          this.y *= n;
        }
    }    

    //-------------------------
    //Meber Visibility
        /*public
        The default visibility of class members is public. A public member can be accessed anywhere:*/
            class Greeter {
                public greet() {
                console.log("hi!");
                }
            }
            const g = new Greeter();
            g.greet();

        /*protected
        protected members are only visible to subclasses of the class they’re declared in.*/
            class Greeter2 {
                public greet() {
                console.log("Hello, " + this.getName());
                }
                protected getName() {
                return "hi";
                }
            }
            
            class SpecialGreeter extends Greeter2 {
                public howdy() {
                // OK to access protected member here
                console.log("Howdy, " + this.getName());
                }
            }
            const g2 = new SpecialGreeter();
            g.greet(); // OK
            //g.getName(); //Property 'getName' is protected and only accessible within class 'Greeter' and its subclasses.

        /*Exposure of protected members
        Derived classes need to follow their base class contracts, but may choose to expose a subtype of base class with more capabilities. 
        This includes making protected members public:*/
            class Base {
                protected m = 10;
            }
            class Derived extends Base {
                // No modifier, so default is 'public'
                m = 15;
            }
            const d = new Derived();
            console.log(d.m); // OK

//6// Working with generics
    function identity<Type>(arg: Type): Type {
        return arg;
    }
    
    let output = identity<string>("myString");
    
//7// Organizing code with namespaces
    
//8// Switching modules
    
//9// Importing modules
    
//10// Debugging TypeScript
    
//11// Implementing decorators