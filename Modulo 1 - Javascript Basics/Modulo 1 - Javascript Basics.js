//1// Basic WebPage Structure
    /*
    html>
        <head>
            <title>Welcome to my website</title>
        </head>
        <body>
            <p></p>
        </body>
    </html>
    */

//2// How to run JS
    //Including your JavaScript inside your HTML document
        //<script>
        var x = 3;
        console.log('hello there, this is x value: ' + x); 
        //</script>
    //Linking to an external JavaScript file
        <script type="text/javascript" src="myscript.js"></script>
        
//3// JS syntax
    //JavaScript syntax is the set of rules, how JavaScript programs are constructed:
        var x, y, z;       // Declare Variables
        x = 5; y = 6;      // Assign Values
        z = x + y;         // Compute Values
    /*
    The JavaScript syntax defines two types of values:
        •	Fixed values
        •	Variable values
    Fixed values are called Literals.
        •	Numbers are written with or without decimals
        •	Strings are text, written within double or single quotes
    Variable values are called Variables.
        •	variables are used to store data values.
    */

//4// Loops, switch case
    /*
    JavaScript supports different kinds of loops:
        •	for - loops through a block of code a number of times
        •	for/in - loops through the properties of an object
        •	for/of - loops through the values of an iterable object
        •	while - loops through a block of code while a specified condition is true
        •	do/while - also loops through a block of code while a specified condition is true
        •	forEach() - El método forEach() ejecuta la función indicada una vez por cada elemento del array.
    */
    //For
        for (let i = 0; i <= numArr; i++) { //Valor de inicio; condición; iteración
            // code block to be executed
        }

        let numArr = [1, 4, 6, 9];

        for (let i = 0; i < numArrlength; i++) {
            console.log(numArr[i]);
        }

        //1, 4, 6, 9

    //For In
        for (key in object) {
        // code block to be executed
        }

        let numArr = [1, 4, 6, 9];

        for(key in numArr) {
            console.log(key);
        }

        //0, 1, 2, 3

    //For Of
        for (key of object) {
            // code block to be executed
        }
        
        let numArr = [1, 4, 6, 9];
        
        for(key of numArr) {
            console.log(key);
        }
        
        //1, 4, 6, 9

    //While
        while(condición) {
            // code block to be executed
        }

    //Do While
        do {
            // code block to be executed
        } while(condición)

    //ForEach
        const array1 = ['a', 'b', 'c'];

        array1.forEach(element => console.log(element));

        // expected output: "a"
        // expected output: "b"
        // expected output: "c"
    
    //Switch Case
    //The switch statement is used to perform different actions based on different conditions. 
    //Use the switch statement to select one of many code blocks to be executed.
        switch(expression) {
            case x:
                // code block
                break;
            case y:
                // code block
                break;
            default:
                // code block
        }

//5// Alert, console
    //Alert
    //The alert() method displays an alert box with a specified message and an OK button. 
        alert(message);
 
    //Console
    //The Console object provides access to the browser's debugging console.
        clear();    //Clears the console
        error();    //Outputs an error message to the console
        info();     //Outputs an informational message to the console
        log();      //Outputs a message to the console
        time();     //Starts a timer (can track how long an operation takes)

//6// Variables

/* 
Before 2015, using the var keyword was the only way to declare a JavaScript variable.
The 2015 version of JavaScript (ES6) allows the use of the const keyword to define a variable that cannot be reassigned, 
and the let keyword to define a variable with restricted scope.
All JavaScript variables must be identified with unique names.
*/
var pi = 3.14;
const person = "John Doe";
let answer = 'Yes I am!'; 


//7// Data types, typeof
/*
    There are eight basic data types in JavaScript. They are:
    Data Types	               Description	                                            Example
    String	            represents textual data     	                        hello', "hello world!" etc
    Number	            an integer or a floating-point number	                3, 3.234, 3e-2 etc.
    BigInt	            an integer with arbitrary precision	                    900719925124740999n , 1n etc.
    Boolean	            Any of two values: true or false	                    true and false
    undefined	        a data type whose variable is not initialized	        let a;
    null	            denotes a null value	                                let a = null;
    Symbol	            data type whose instances are unique and immutable	    let value = Symbol('hello');
    Object      	    key-value pairs of collection of data	                let student = { };

    Here, all data types except Object are primitive data types, whereas Object is non-primitive.
    Note: The Object data type (non-primitive type) can store collections of data, whereas primitive data type can only store a single data
*/

//TypeOf
    //You can use the JavaScript typeof operator to find the type of a JavaScript variable. 
    //The typeof operator returns the type of a variable or an expression:
    // Numbers
    typeof 37 === 'number';
    typeof 3.14 === 'number';
    typeof(42) === 'number';
    typeof Math.LN2 === 'number';
    typeof Infinity === 'number';
    typeof NaN === 'number'; // Despite being "Not-A-Number"
    typeof Number('1') === 'number';      // Number tries to parse things into numbers
    typeof Number('shoe') === 'number';   // including values that cannot be type coerced to a number

    typeof 42n === 'bigint';

    // Strings
    typeof '' === 'string';
    typeof 'bla' === 'string';
    typeof `template literal` === 'string';
    typeof '1' === 'string'; // note that a number within a string is still typeof string
    typeof (typeof 1) === 'string'; // typeof always returns a string
    typeof String(1) === 'string'; // String converts anything into a string, safer than toString

    // Booleans
    typeof true === 'boolean';
    typeof false === 'boolean';
    typeof Boolean(1) === 'boolean'; // Boolean() will convert values based on if they're truthy or falsy
    typeof !!(1) === 'boolean'; // two calls of the ! (logical NOT) operator are equivalent to Boolean()

    // Symbols
    typeof Symbol() === 'symbol'
    typeof Symbol('foo') === 'symbol'
    typeof Symbol.iterator === 'symbol'

    // Undefined
    typeof undefined === 'undefined';
    typeof declaredButUndefinedVariable === 'undefined';
    typeof undeclaredVariable === 'undefined';

    // Objects
    typeof {a: 1} === 'object';

    // use Array.isArray or Object.prototype.toString.call
    // to differentiate regular objects from arrays
    typeof [1, 2, 4] === 'object';

    typeof new Date() === 'object';
    typeof /regex/ === 'object'; // See Regular expressions section for historical results

    // The following are confusing, dangerous, and wasteful. Avoid them.
    typeof new Boolean(true) === 'object';
    typeof new Number(1) === 'object';
    typeof new String('abc') === 'object';

    // Functions
    typeof function() {} === 'function';
    typeof class C {} === 'function';
    typeof Math.sin === 'function';

    // This stands since the beginning of JavaScript
    typeof null === 'object';

    // Parentheses can be used for determining the data type of expressions.
    let iData = 99;

    typeof iData + ' Wisen'; // 'number Wisen'
    typeof (iData + ' Wisen'); // 'string'


//8// Functions: basics
    function square(number) {
        return number * number;
    }
  
    const square = function(number) { return number * number }
    var x = square(4) // x obtiene el valor 16

    const factorial = function fac(n) { return n < 2 ? 1 : n * fac(n - 1) } // It is given a name for refere to itself
    console.log(factorial(3));

    (param1, paramN) => expression; //arrow function


//9// Returning value from a function
    //To return a value from a custom function, you need to use ... wait for it ... the return keyword.
    function randomNumber(number) {
        return Math.floor(Math.random()*number);
    }

    function randomNumber(number) {
        var result = Math.floor(Math.random()*number);
        return result;
    }

    var x = myFunction(4, 3);   // Function is called, return value will end up in x

//10// Types convertions
    //Converting Strings to Numbers

        //Number() 	    Returns a number, converted from its argument
        //parseFloat() 	Parses a string and returns a floating point number
        //parseInt() 	Parses a string and returns an integer
            Number("3.14")    // returns 3.14
            Number(" ")       // returns 0
            Number("")        // returns 0
            Number("99 88")   // returns NaN 

        //The unary + operator can be used to convert a variable to a number:
            let y = "5";      // y is a string
            let x = +y;       // x is a number 

            let y = "John";   // y is a string
            let x = +y;       // x is a number (NaN) 

    //Converting Numbers to Strings
        let x = 123;
        String(x)         // returns a string from a number variable x //123
        String(123)       // returns a string from a number literal //123
        String(100 + 23)  // returns a string from a number from an expression //123

    //The Number method toString() does the same.
        x.toString()
        (123).toString()
        (100 + 23).toString() 

    //Automatic Type Conversion
        5 + null    // returns 5         because null is converted to 0
        "5" + null  // returns "5null"   because null is converted to "null"
        "5" + 2     // returns "52"      because 2 is converted to "2"
        "5" - 2     // returns 3         because "5" is converted to 5
        "5" * "2"   // returns 10        because "5" and "2" are converted to 5 and 2 

//11// Comparisons
    /* 
    Given that x = 5, the table below explains the comparison operators:
    Operator	    Description	                        Comparing	        Returns
        ==	        equal to	                        x == 8	            false
                                                        x == 5	            true
                                                        x == "5"	        true
    --------------------------------------------------------------------------------                                                
        ===	        equal value and equal type	        x === 5	            true
                                                        x === "5"	        false
    --------------------------------------------------------------------------------                                               
        !=	        not equal	                        x != 8	            true
    --------------------------------------------------------------------------------  
        !==	        not equal value or not equal type	x !== 5	            false
                                                        x !== "5"	        true
                                                        x !== 8	            true
    --------------------------------------------------------------------------------                                                  
        >	        greater than	                    x > 8	            false
    --------------------------------------------------------------------------------         
        <	        less than	                        x < 8	            true
    --------------------------------------------------------------------------------  
        >=	        greater than or equal to	        x >= 8	            false
    --------------------------------------------------------------------------------  
        <=	        less than or equal to	            x <= 8	            true
    */

//12// Operators: Logical, Conditional
    /*
        Operator	Description                                                                                                 Example
        &&	        Logical AND: true if both the operands/boolean values are true, else evaluates to false	                    true && false; // false
        ||	        Logical OR: true if either of the operands/boolean values is true. evaluates to false if both are false	    true || false; // true
        !	        Logical NOT: true if the operand is false and vice-versa.	                                                !true; // false
    */

    //Condicional operator;
        condición ? expr1 : expr2 //If true the first if false de second

//13// Objects: basics
    var nombreObjeto = {
        miembro1Nombre: miembro1Valor,
        miembro2Nombre: miembro2Valor,
        miembro3Nombre: miembro3Valor
    }

    //You can access object properties in two ways:
        objectName.propertyName
    //or
        objectName["propertyName"]

//14// Array: basics
    //JavaScript arrays are used to store multiple values in a single variable.
        var cars = ["Saab", "Volvo", "BMW"];
    /*Array Elements Can Be Objects
    JavaScript variables can be objects. Arrays are special kinds of objects. 
    Because of this, you can have variables of different types in the same Array. 
    You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:
    */
        myArray[0] = Date.now;
        myArray[1] = myFunction;
        myArray[2] = myCars;


//15// setTimeout, setInterval
    /*
    We may decide to execute a function not right now, but at a certain time later. 
    That’s called “scheduling a call”.

    There are two methods for it:
    •	setTimeout allows us to run a function once after the interval of time.
    •	setInterval allows us to run a function repeatedly, starting after the interval of time, 
        then repeating continuously at that interval.
    */
    
    //setTimeout

        let timerId = setTimeout(func|code, [delay], [arg1], [arg2]);

        //Strings is not recommended, use arrow functions instead of them, like this:
        setTimeout(() => alert('Hello'), 1000);

        //A call to setTimeout returns a “timer identifier” timerId that we can use to cancel the execution.
        //The syntax to cancel:
        let timerId = setTimeout();
        clearTimeout(timerId);

        //In the code below, we schedule the function and then cancel it (changed our mind). As a result, nothing happens:
        let timerId = setTimeout(() => alert("never happens"), 1000);
        alert(timerId); // timer identifier

        clearTimeout(timerId);
        alert(timerId); // same identifier (doesn't become null after canceling)

    //setInterval
        //The setInterval method has the same syntax as setTimeout:
        let timerId = setInterval(func|code, [delay], [arg1], [arg2])

        /*All arguments have the same meaning. But unlike setTimeout it runs the function not only once, 
        but regularly after the given interval of time. To stop further calls, we should call clearInterval(timerId).
        */
        let timerId = setInterval(() => alert('tick'), 2000); //repeat with the interval of 2 seconds
        setTimeout(() => { clearInterval(timerId); alert('stop'); }, 5000); // after 5 seconds stop

//16// Date and time
    //The Date object is used to work with dates and times.
    //Date objects are created with new Date().
    //There are four ways of instantiating a date:
        var d = new Date();
        var d = new Date(milliseconds);
        var d = new Date(dateString);
        var d = new Date(year, month, day, hours, minutes, seconds, milliseconds);

        getDate()       //Returns the day of the month (from 1-31)
        getDay()        //Returns the day of the week (from 0-6)
        getFullYear()   //Returns the year
        getHours()      //Returns the hour (from 0-23)
        getMinutes()    //Returns the minutes (from 0-59)
        getMonth()      //Returns the month (from 0-11)
        getSeconds()    //Returns the seconds (from 0-59)
        getTime()       //Returns the number of milliseconds since midnight Jan 1 1970, and a specified date
        Date.now()      //Returns the number of milliseconds since midnight Jan 1, 1970
        toJSON()        //Returns the date as a string, formatted as a JSON date
        toString()      //Converts a Date object to a string
        toTimeString()  //Converts the time portion of a Date object to a string
        toUTCString()   //Converts a Date object to a string, according to universal time
        valueOf()       //Returns the primitive value of a Date object


//17// Math
    //The JavaScript Math object allows you to perform mathematical tasks on numbers.
        Math.PI;            // returns 3.141592653589793
    //There are 4 common methods to round a number to an integer:

        Math.round(x)	//Returns x rounded to its nearest integer
            
        Math.ceil(x)	//Returns x rounded up to its nearest integer
            
        Math.floor(x)	//Returns x rounded down to its nearest integer
            
        Math.trunc(x)	//Returns the integer part of x (new in ES6)

        //--------------------------------------------------------------------

        Math.pow(x, y)  //returns the value of x to the power of y
        Math.sqrt(x)    //returns the square root of x
        Math.abs(x)     //returns the absolute (positive) value of x
        Math.min()      //and 
        Math.max()      //can be used to find the lowest or highest value in a list of arguments
        Math.random()   //returns a random number between 0 (inclusive), and 1 (exclusive)


//18// Window
    /*
    There are no official standards for the Browser Object Model (BOM).
    Since modern browsers have implemented (almost) the same methods and properties for JavaScript interactivity, 
    it is often referred to, as methods and properties of the BOM.

    The window object is supported by all browsers. It represents the browser's window.
    All global JavaScript objects, functions, and variables automatically become members of the window object.
    Global variables are properties of the window object.
    Global functions are methods of the window object.
    Even the document object (of the HTML DOM) is a property of the window object: 
    */ 
        window.document.getElementById("header"); 
        //is the same as:
        document.getElementById("header"); 

    //Window Size
    //Two properties can be used to determine the size of the browser window.
    //Both properties return the sizes in pixels:
        let w = window.innerWidth;  // the inner height of the browser window (in pixels)
        let h = window.innerHeight; // the inner width of the browser window (in pixels)
    
//Extra// Critical Render Path
    /*
    In order to render content, the browser must go through a series of steps:
        1.	Document Object Model(DOM)
            i.	Convert bytes to characters
            ii.	Identify tokens
            iii.	Convert tokens to nodes
            iv.	Build DOM Tree
        2.	CSS object model(CSSOM):
            i.	Convert bytes to characters
            ii.	Identify tokens
            iii.	Convert tokens to nodes
            iv.	Build CSSOM
        3.	Render Tree  
            This stage is where the browser combines the DOM and CSSOM, this process outputs a final render tree, which contains both the content and the style information of all the visible content on the screen.
        4.	Layout
            This stage is where the browser calculates the size and position of each visible element on the page, every time an update to the render tree is made, or the size of the viewport changes, the browser has to run layout again.
        5.	Paint.
            When we get to the paint stage, the browser has to pick up the layout result, and paint the pixels to the screen, beware in this stage that not all styles have the same paint times, also combinations of styles can have a greater paint time than the sum of their parts. For an instance mixing a border-radius with a box-shadow, can triple the paint time of an element instead of using just one of the latter.
    */    

//Extra// Data Coercion
    var a = "1",
    b = 5;

    console.log( typeof a, typeof b); // string number
    console.log( a + b ); // 15 Convierte el numero a string y lo concatena

    //----------------------------------------------------------------------------
    console.log( "2" - 2 ); // 0
    console.log( '10' * 3 ); // 30
    console.log( '10' / 2 ); // 5
    console.log( true + true ) // 2
    console.log( '1' + true ); // 1true
    console.log( '10' - true ); // 9
    true == 1; //true! (converts true to bit value 1)
    true - false === 1 //true!!!
    "2" + 2; //22!
    "2" - 2; //0
    "2" - - 2; //4
    console.log(NaN == NaN); //false - this one sort of makes sense since NaN is any non-Number cast to a number
    "" == 0 //true
    undefined == null //false!
    "0" == 0 //true!
    "false" == false //false!!!'
    '\t\r\n ' == 0 //true!!! - essentially an empty string which coerces to 0