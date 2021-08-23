//1// Static type checking
    //If you don’t know, static typing is when the compiler enforces that values use the same type. Here’s an example. 
    //This is valid in JavaScript:
        let value = 5;
        //value = "hello";
    //Here, the type of value changes from a number to a string. In TypeScript, this is forbidden.
        let value2: number = 5;
        //value2 = "hello"; // error: Type '"hello"' is not assignable to type

//2// Special types in Typescript: any, void, enum
    //Any
        //TypeScript also has a special type, any, that you can use whenever you don’t want a particular value to cause typechecking errors.
            let obj: any = { x: 0 };
            // None of the following lines of code will throw compiler errors.
            // Using `any` disables all further type checking, and it is assumed 
            // you know the environment better than TypeScript.
            obj.foo();
            obj();
            obj.bar = 100;
            obj = "hello";
            const n: number = obj;
        
        //When you don’t specify a type, and TypeScript can’t infer it from context, the compiler will typically default to any.

    //Void
        //void is a little like the opposite of any: the absence of having any type at all. You may commonly see this as the return 
        //type of functions that do not return a value:
            function warnUser(): void {
                console.log("This is my warning message");
            }
        //Declaring variables of type void is not useful because you can only assign null (only if --strictNullChecks is not specified, 
        //see next section) or undefined to them:
            let unusable: void = undefined;
            // OK if `--strictNullChecks` is not given
            unusable = null;

    //Enum
        //A helpful addition to the standard set of datatypes from JavaScript is the enum. As in languages like C#, an enum is a way of 
        //giving more friendly names to sets of numeric values.
            enum Color {
                Red,
                Green,
                Blue,
            }
            let c: Color = Color.Green; //By default, enums begin numbering their members starting at 0.

        //You could manually set all values in the enum:
            enum Color2 {
                Red = 1,
                Green = 2,
                Blue = 4,
              }
              let c2: Color = Color.Green;


//3// Transpile - TS Compiler (TSC)
    //It takes typescript code and transpile it to normal javascript code.

//4// Explicit types
    /*
    - string represents string values like "Hello, world"
    - number is for numbers like 42. JavaScript does not have a special runtime value for integers, so there’s no equivalent 
      to int or float - everything is simply number
    - boolean is for the two values true and false
    */
        let color: string = "blue";
        color = 'red';

        let decimal: number = 6;
        let hex: number = 0xf00d;
        let binary: number = 0b1010;
        let octal: number = 0o744;
        let big: bigint = 100n;

        let isDone: boolean = false;

//5// Non-null assertion
    /*
    The non-null assertion operator takes a typed variable and removes the undefined and null types from it.
    This operator will only take effect when the strictNullChecks flag is on. When the flag is off, the compiler does not check for
    undefined and null types assignments.
    */
        function myFunc(maybeString: string | undefined | null) {
            const onlyString: string = maybeString; //compilation error: string | undefined | null is not assignable to string
            const ignoreUndefinedAndNull: string = maybeString!; //no problem
        }
//6// Optional chaining
    /*
    The optional chaining operator (?.) enables you to read the value of a property located deep within a chain of connected objects without 
    having to check that each reference in the chain is valid. 
    */
        const adventurer = {
            name: 'Alice',
            cat: {
            name: 'Dinah'
            }
        };
        
        //const dogName = adventurer.dog?.name;
        //console.log(dogName);
        // expected output: undefined
        
        //console.log(adventurer.someNonExistentMethod?.());
        // expected output: undefined

//7// Namespaces
    /*
    The namespace is a way which is used for logical grouping of functionalities. It encapsulates the features and objects that share common 
    relationships. It allows us to organize our code in a much cleaner way. 
    */
        namespace namespace_name {  
            export interface I1 { }  
            export class c1{ }  
        }  
        //To access the interfaces, classes, functions, and variables in another namespace, we can use the following syntax.
            //namespace_name.className;  
            //namespace_name.functionName;  
        //If the namespace is in separate TypeScript file, then it must be referenced by using triple-slash (///) reference syntax.
        /// < reference path = "Namespace_FileName.ts" />  

//8// Inheritance
    class Car {   
        Color:string     
        constructor(color:string) {   
        this.Color = color  
        }   
    }   
    class Audi extends Car {   
        Price: number  
        constructor(color: string, price: number) {  
            super(color);  
            this.Price = price;  
        }  
        display():void {  
            console.log("Color of Audi car: " + this.Color);  
            console.log("Price of Audi car: " + this.Price);  
        }  
    }  
    let obj2 = new Audi(" Black", 8500000 );  
    obj.display();  