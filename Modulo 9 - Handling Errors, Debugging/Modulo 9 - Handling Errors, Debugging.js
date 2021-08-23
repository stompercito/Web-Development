//1// try catch
    //La declaración try...catch señala un bloque de instrucciones a intentar (try), y especifica una respuesta si se produce una excepción (catch).
        try {
            nonExistentFunction();
        } catch (error) {
            console.error(error);
            // expected output: ReferenceError: nonExistentFunction is not defined
            // Note - error messages will vary depending on browser
        }

    //Ejemplo:
        function getMonthName(mo) {
            mo = mo - 1; // Ajusta el número de mes para el índice del arreglo (1 = Ene, 12 = Dic)
            let months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul',
                          'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
            if (months[mo]) {
              return months[mo];
            } else {
              throw 'InvalidMonthNo'; // aquí se usa la palabra clave throw
            }
        }
          
        try { // declaraciones para try
            monthName = getMonthName(myMonth); // la función podría lanzar una excepción
        } catch (e) {
            monthName = 'unknown';
            logMyErrors(e); // pasar el objeto exception al controlador de errores (es decir, su propia función)
        }
          
      
//2// Error handling  //Try catch Finallly
    //- Expresiones condicionales
    //- Declaración switch
    //- Expresiones de manejo de excepciones
        //Puedes lanzar excepciones usando la instrucción throw y manejarlas usando las declaraciones try...catch.
        //Utiliza la expresión throw para lanzar una excepción. Una expresión throw especifica el valor que se lanzará:
            throw expression;

            throw 'Error2';   // tipo String
            throw 42;         // tipo Number
            throw true;       // tipo Boolean
            throw {toString: function() { return "¡Soy un objeto!"; } };
    //- Declaración try...catch...Finallly
        /*
        The try statement lets you test a block of code for errors.

        The catch statement lets you handle the error.

        The throw statement lets you create custom errors.

        The finally statement lets you execute code, after try and catch, regardless of the result.
        */
    //- Utilizar objetos Error
        /*
        Dependiendo del tipo de error, es posible que puedas utilizar las propiedades name y message para obtener un mensaje más refinado.
        La propiedad name proporciona la clase general de Error (tal como DOMException o Error), mientras que message generalmente proporciona 
        un mensaje más conciso que el que se obtendría al convertir el objeto error en una cadena.
        */
            function doSomethingErrorProne() {
                if (ourCodeMakesAMistake()) {
                throw (new Error('El mensaje'));
                } else {
                doSomethingToGetAJavascriptError();
                }
            }
            
            try {
                doSomethingErrorProne();
            } catch (e) {               // AHORA, en realidad usamos `console.error()`
                console.error(e.name);    // registra 'Error'
                console.error(e.message); // registra 'The message' o un mensaje de error de JavaScript
            }
            
//3// Custom errors
    /*
    JavaScript allows to use throw with any argument, so technically our custom error classes don’t need to inherit from Error. 
    But if we inherit, then it becomes possible to use obj instanceof Error to identify error objects. So it’s better to inherit from it.

    As the application grows, our own errors naturally form a hierarchy. For instance, HttpTimeoutError may inherit from HttpError, and so on.
    */

        // The "pseudocode" for the built-in Error class defined by JavaScript itself
        class Error {
            constructor(message) {
            this.message = message;
            this.name = "Error"; // (different names for different built-in error classes)
            this.stack = '<call stack>'; // non-standard, but most environments support it
            }
        }

    //Now let’s inherit ValidationError from it and try it in action:
    //Let’s try to use it in readUser(json):
        class ValidationError extends Error {
            constructor(message) {
            super(message);
            this.name = "ValidationError";
            }
        }
        
        // Usage
        function readUser(json) {
            let user = JSON.parse(json);
        
            if (!user.age) {
            throw new ValidationError("No field: age");
            }
            if (!user.name) {
            throw new ValidationError("No field: name");
            }
        
            return user;
        }
        
        // Working example with try..catch
        
        try {
            let user = readUser('{ "age": 25 }');
        } catch (err) {
            if (err instanceof ValidationError) {
            alert("Invalid data: " + err.message); // Invalid data: No field: name
            } else if (err instanceof SyntaxError) { // (*)
            alert("JSON Syntax Error: " + err.message);
            } else {
            throw err; // unknown error, rethrow it (**)
            }
        }

//4// Debugging tools
    //In Chrome, you can use the devTools that let you use break points to debugg your code without using console.logs in all the code.

//5// Console methods
    //Method 	        Description
    assert() 	        //Writes an error message to the console if the assertion is false
    clear() 	        //Clears the console
    count() 	        //Logs the number of times that this particular call to count() has been called
    error() 	        //Outputs an error message to the console
    group() 	        //Creates a new inline group in the console. This indents following console messages by an additional level, until console.groupEnd() is called
    groupCollapsed() 	//Creates a new inline group in the console. However, the new group is created collapsed. The user will need to use the disclosure button to expand it
    groupEnd() 	        //Exits the current inline group in the console
    info() 	            //Outputs an informational message to the console
    log() 	            //Outputs a message to the console
    table() 	        //Displays tabular data as a table
    time() 	            //Starts a timer (can track how long an operation takes)
    timeEnd() 	        //Stops a timer that was previously started by console.time()
    trace() 	        //Outputs a stack trace to the console
    warn() 	            //Outputs a warning message to the console