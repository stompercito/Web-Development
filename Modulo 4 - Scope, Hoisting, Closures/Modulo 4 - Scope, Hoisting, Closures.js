//1// Variable scope var, const, let
    /*
    var is function scope.
    let and const are block scope.
    
    Function scope is within the function.
    Block scope is within curly brackets.

        •	var declarations are globally scoped or function scoped while let and const are block scoped.
        •	var variables can be updated and re-declared within its scope; let variables can be updated but not re-declared at least on the same scope; const variables can neither be updated nor re-declared.
        •	They are all hoisted to the top of their scope. But while var variables are initialized with undefined, let and const variables are not initialized.
        •	While var and let can be declared without being initialized, const must be initialized during declaration.
    */

//2// Hoisting
    /*
    During compile phase, just microseconds before your code is executed, it is scanned for function and variable declarations. 
    All these functions and variable declarations are added to the memory inside a JavaScript data structure called Lexical Environment. 
    So that they can be used even before they are actually declared in the source code.
    */

    //Hoisting Function Declaration:
        helloWorld();  // prints 'Hello World!' to the console
        
        function helloWorld() {
            console.log('Hello World!');
        }
    /*
    As we already know that function declarations are added to the memory during the compile stage, so we are able to access it in our code before the actual function declaration.
    
    Only function declarations are hoisted in JavaScript, function expressions are not hoisted. 
    For example: this code won’t work.
    */ 
        helloWorld();  // TypeError: helloWorld is not a function
            
            var helloWorld = function(){
                console.log('Hello World!');
            }
    /*
    As JavaScript only hoist declarations, not initializations (assignments), so the helloWorld will be treated as a variable, 
    not as a function. Because helloWorld is a var variable, so the engine will assign is the undefined value during hoisting.

    When JavaScript engine finds a var variable declaration during the compile phase, 
    it will add that variable to the lexical environment and initialize it with undefined and later during the execution 
    when it reaches the line where the actual assignment is done in the code, it will assign that value to the variable

    All declarations (function, var, let, const and class) are hoisted in JavaScript, 
    while the var declarations are initialized with undefined, but let and const declarations remain uninitialized.
    */

    //--------------------------------------------------------------------------------------------------------------------------

    //Problems with var and hoisting.

        var x = 5;

        (function () {
            console.log("x:", x); // no obtenemos '5' sino 'undefined'
            var x = 10;
            console.log("x:", x); // 10
        }());

    //Lo que ocurre aquí y para que se entienda, es que hipotéticamente la variable se eleva y pasa a declararse al comienzo de su contexto, en este caso la función que la contiene.
    //Asi se tomaria.
        var x = 5;

        (function () {
            var x; // Se elevo la declaración
            console.log("x:", x); // undefined
            x = 10;
            console.log("x:", x); // 10
        }());
        
//3// Closures
    // closure gives you access to an outer function’s scope from an inner function. 
    //In JavaScript, closures are created every time a function is created, at function creation time.
        function makeAdder(x) {
            return function(y) {
            return x + y;
            };
        }
        
        var add5 = makeAdder(5);
        var add10 = makeAdder(10);
        
        console.log(add5(2));  // 7
        console.log(add10(2)); // 12
    /*
    In this example, we have defined a function makeAdder(x), that takes a single argument x, and returns a new function. 
    The function it returns takes a single argument y, and returns the sum of x and y.

    In essence, makeAdder is a function factory. It creates functions that can add a specific value to their argument. 
    In the above example, the function factory creates two new functions—one that adds five to its argument, and one that adds 10.

    add5 and add10 are both closures. They share the same function body definition, but store different lexical environments. 
    In add5's lexical environment, x is 5, while in the lexical environment for add10, x is 10.
    */
      
//4// Hidden variables
    /*
    there’s a stricter definition according to which encapsulation is done to hide data, to make it inaccessible from other code, except through the getters and setters. 
    This way we don’t end up accidentally overwriting important data with some other code in the program.
    */
        var obj = {
            foo:    'this is the value of foo',
            getFoo: function() {
                    return this.foo;
                },
            setFoo: function(val) {
                    this.foo = val;
                }
        }
        
        console.log(obj.getFoo());    // "this is the value of foo"
        
        obj.setFoo('hello');
        
        console.log(obj.getFoo());    // "hello"

//5// Lexical environment
    /*
    A lexical environment is a data structure that holds identifier-variable mapping. 
    (here identifier refers to the name of variables/functions, and the variable is the reference to actual object [including function object] or primitive value).
    This is what a lexical environment conceptually look like:

    LexicalEnvironment = {
      Identifier:  <value>,
      Identifier:  <function object>
    }

    So in short, a lexical environment is a place where variables and functions live during the program execution.
    */

//6// Nested functions
    /*
    You may nest a function within another function. The nested (inner) function is private to its containing (outer) function.

    It also forms a closure. A closure is an expression (most commonly, a function) that can have free variables together with an environment that binds those variables (that "closes" the expression).

    Since a nested function is a closure, this means that a nested function can "inherit" the arguments and variables of its containing function. In other words, the inner function contains the scope of the outer function.

    To summarize:
        The inner function can be accessed only from statements in the outer function.
        The inner function forms a closure: the inner function can use the arguments and variables of the outer function, while the outer function cannot use the arguments and variables of the inner function.
    */
        function outside(x) {
            function inside(y) {
              return x + y;
            }
            return inside;
          }
          fn_inside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give
                                  // it
          result = fn_inside(5); // returns 8
          
          result1 = outside(3)(5); // returns 8          

//7// Code blocks
    //A code block simply consists of grouped statements with curly braces ({ }). For example, statements grouped in a loop is referred to as a code block:
        let counter = 0;
        while (counter < 10) 
        {
            console.log('counter = ' + counter);
            counter++;
        }
    //A code block can also be created with statements grouped in a condition:
        if(counter == 15)
        {
            break;
        }
    //Finally statements grouped in a function also create a code block:
    function Count(counter)
    {
        counter = counter + 1;
        return counter;
    }

//8// Overriding outer variables
    var x = 5;

    (function () {
        console.log("x:", x); // no obtenemos '5' sino 'undefined' Because hoisting
        var x = 10;
        console.log("x:", x); // 10
    }());