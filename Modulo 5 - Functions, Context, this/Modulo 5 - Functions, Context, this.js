//1// Creating functions
    /*
    function definition (also called a function declaration, or function statement) consists of the function keyword, followed by:

    The name of the function.
    A list of parameters to the function, enclosed in parentheses and separated by commas.
    The JavaScript statements that define the function, enclosed in curly brackets, {...}.

    For example, the following code defines a simple function named square:
    */

    function square(number) {
        return number * number;
    }      

//2// Arrow functions

    // Traditional Function
    function sum(a){
        return a + 100;
    }
    
    // Arrow Function Break Down
    
    // 1. Remove the word "function" and place arrow between the argument and opening body bracket
    (a) => {
        return a + 100;
    }
    
    // 2. Remove the body braces and word "return" -- the return is implied.
    (a) => a + 100;
    
    // 3. Remove the argument parentheses
    a => a + 100;

//3// Self-invoked functions
    /*
    The primary benefit of self-invoking functions is that they execute only once and won’t fill 
    the global namespace with all sorts of crud that lasts for the lifetime of the page.
    */

        (function(){
            console.log("This function is called immediately");
        })();

//4// Callbacks
    /*
    A callback function is a function passed into another function as an argument, 
    which is then invoked inside the outer function to complete some kind of routine or action.
    */

        function greeting(name) {
            alert('Hello ' + name);
        }
        
        function processUserInput(callback) {
            var name = prompt('Please enter your name.');
            callback(name);
        }
        
        processUserInput(greeting);

    //Otro ejemplo seria forEach, el cual recibe una función como parametro callback;

        let list = [1,3,4,5];
        list.forEach(function(e,i) {
            console.log("i=", i, "list=", e);
        });
    /*
    Lo importante de este ejemplo es que se vea que la función callback que le hemos pasando a forEach() 
    se va a ejecutar por cada uno de los elementos del array, y en cada iteración de dicha función callback, 
    los parámetros e, i van a tener un valor especial:

    - e es el elemento del array
    - i es el índice (posición) del array
    */

//5// Recursion
    //The act of a function calling itself, recursion is used to solve problems that contain smaller sub-problems. 
    //A recursive function can receive two inputs: a base case (ends recursion) or a recursive case (resumes recursion).

        function recurse(x){
            if(x > 0){
                console.log(x);
                recurse(x-1);
            }
        }

        recurse(10); //10, 9, 8, 7, 6, 5, 4, 3, 2, 1

//6// Anonymous functions
    /*
    An anonymous function is a function without a name. 
    An anonymous function is often not accessible after its initial creation.

    The following shows an anonymous function that displays a message:
    */
        let show = function () {
            console.log('Anonymous function');
        };
        
        show();

    //Using anonymous functions as arguments of other functions
        setTimeout(function () {
            console.log('Execute later after 1 second')
        }, 1000);

    //ES6 introduced arrow function expression that provides a shorthand for declaring anonymous functions:
    //For example, this function:

    let show = function () {
        console.log('Anonymous function');
    };
    
    //… can be shortened using the following arrow function:
    let show = () => console.log('Anonymous function');
    
    //Similarly, the following anonymous function:
    let add = function (a, b) {
        return a + b;
    };
    
    //… is equivalent to the following arrow function:
    
    let add = (a, b)  => a + b;   


//7// Currying, Higher order functions
    /*
    Higher Order Functions
    Son funciones que operan dentro de otras funciones, ya sea tomándolas como parámetros o incluso haciendo return de ellas.

    For a function to qualify as a higher-order function it either needs to take a function as one of its parameters, 
    or return a function. As long as one of those conditions is fulfilled, we are creating a higher-order function.
    */

    /*
    Currying
    Currying is a transformation of functions that translates a function from callable as f(a, b, c) into callable as f(a)(b)(c).

    Curry es poder llamar una función con menos parámetros de los que espera, esta devuelve una función que espera los parámetros restantes y retorna el resultado.
    De esta manera podríamos reescribir la función del comienzo como
    */
        //arrow functions
        const divisible = mod => num => num % mod;
        //funtion
        var divisible = function (mod) {
            return function (num) {
                return num % mod;
            }
        }

        divisible(10)(2) 
        //OR
        const divisibleEn3 = divisible(3);
        divisibleEn3(10)

//8// Pure functions
    /*
    Pure Function is a function (a block of code ) that always returns the same result if the same arguments are passed. 
    It does not depend on any state, or data change during a program’s execution rather it only depends on its input arguments.
    Also a pure function does not produce any observable side effects such as network requests or data mutation etc.
    */

        function calculateGST( productPrice ) {
            return productPrice * 0.05;
        }

    //The above function will always return the same result, if we pass the same productPrice. In other words, 
    //it’s output doesn’t get effected by any other values / state changes. So we can call “calculateGST” function as a Pure function.

        var tax = 20;
        function calculateGST( productPrice ) {
            return productPrice * (tax / 100) + productPrice;
        }

    /*
    It is not a pure function as the output is dependent on an external variable “tax”. So if tax value is updated somehow, 
    then we will get a different output though we pass the same productPrice as a parameter to the function.
    
    Note: If a pure function calls a pure function, this isn’t a side effect, and the calling function is still considered as pure. 
    (Example: using Math.max() inside a function)
    
    Below are some side effects (but not limited to) which a function should not produce in order to be considered as a pure function –
    •	Making a HTTP request
    •	Mutating data
    •	Printing to a screen or console
        •	Estas afectando algo fuera de ti, console es un método window
    •	DOM Query/Manipulation
    •	Math.random()
    •	Getting the current time
    */

//9// Functional programming
    /*
    Functional programming (often abbreviated FP) is the process of building software by composing pure functions, avoiding shared state, mutable data, and side-effects. 
    Functional programming is declarative rather than imperative, and application state flows through pure functions.

    -Pure functions
    -Immutability
    -Function composition
    -Recursion
    -Higher-order functions
    -Currying
    
    */
//10// Context, global context
    /*
    The global context is the fallback context in JavaScript. If you run a function and no context is set (usually by an object, which we'll cover in upcoming videos) then the fallback is the global context. In Node.js, that means an object with information related to Node. In the browser, the global context is the Window object.
    If you run a file in strict mode, then JavaScript leaves this undefined if it's not actually set. It means there is no fallback object, and if you're using this you'll get undefined. If you try to access this.someAttribute, you'll get an uncaught type error for trying to access an attribute of undefined.

    Context is simply the value of “this”, the property of execution context which will be explained later in this article. It also refers to the object that a function/method belongs to.
    Value of this differs by how the function is called. In the global scope, value of this is always the window object.
    */
        console.log(this); // window

    //Contexto global
        //En el contexto de ejecución global (fuera de cualquier función), this se refiere al objeto global, ya sea en modo estricto o no.
        
        console.log(this.document === document); // true
        
        // En los navegadores web, el objeto window también es un objeto global:
        console.log(this === window); // true
        
        this.a = 37;
        console.log(window.a); // 37
        
//11// this
    /*
    What is this?
    The JavaScript this keyword refers to the object it belongs to.

    It has different values depending on where it is used:

        -In a method, this refers to the owner object.
        -Alone, this refers to the global object.
        -In a function, this refers to the global object.
        -In a function, in strict mode, this is undefined.
        -In an event, this refers to the element that received the event.
        -Methods like call(), and apply() can refer this to any object.
    */

        function sayHello() {
            console.log(this);
            console.log(`Hello, ${this.name}!`);
          }
          
          const person = {
            name: 'Preston',
            sayHello,
          };
          
          sayHello(); // Window {}; Hello, !
          person.sayHello(); // { name: "Preston", sayHello: function }; Hello, Preston!         

//12// call/apply/bind
    //.bind()
            const person = {
                name: 'Bruce',
                lastname: 'Wayne',
                fullname: function() {
                return this.name + ' ' + this.lastname;
                }
            }
            
            const print = function(greet, adj) {
                console.log(greet, this.fullname(), 'you are', adj);
            }
            
            print('hello', 'special'); //Data error pues esa función no tiene acceso al contexto del objeto.

        //Se utiliza Bind para darle la referencia al objeto.
        const printBinded = print.bind(person);

            printBinded('hello', 'special'); 
                //Dicho método crea una copia de la función, el parámetro que le estamos pasando en .bind(person), 
                //es la referencia del objeto person, con esto literalmente estoy enlazando la referencia de this, dentro de print al this de person.  
            
        //Se puede hacer sobre la declaración de la función
            const print = function(greet, adj) {
                console.log(greet, this.fullname(), 'you are', adj);
            }.bind(person);
            
            print('hello', 'special');
    
    //.call()
        //A diferencia de .bind(), este método si ejecuta la función, tal y como lo hacen nuestros ()
        //Recibe como primer parámetro la referencia a la cual debería de enlazar o apuntar this, dentro de la función que se ejecuta, en este caso print().
        
            const print = function(greet, adj) {
                console.log(greet, this.fullname(), 'you are', adj);
            }
            
            print.call(person, 'hello', 'special'); 
        //Obtuvimos el mismo resultado de bind()solo con la diferencia que aquí no se crea una copia, sino se ejecuta la función a través de call().
    
    //.apply()
        //La unica diferencia entre call() y apply(), es la manera en requerir los argumentos de la funcion, por ejemplo, vimos que en call, 
        //se mandaban los argumentos asi call(person, 'hello', 'special'), separados por comas, apply() recibe los paramnetros mediante una lista.
        
            print.apply(person, ['hello', 'special']);
        
//13// Immutable
    /*
    Immutable data cannot change its structure or the data in it. It’s setting a value on a variable that cannot change, making that value a fact, 
    or sort of like a source of truth — the same way a princess kisses a frog hoping it will turn into a handsome prince. 
    Immutability says that frog will always be a frog.
    */