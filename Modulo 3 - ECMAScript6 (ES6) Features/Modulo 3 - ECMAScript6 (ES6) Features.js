//1// Block-scopes
    /*
    var is function scope.
    let and const are block scope.
    
    Function scope is within the function.
    Block scope is within curly brackets.
    */

    //If var is defined inside a function and I subsequently try to call it outside the function, it won’t work.
        function setWidth(){
            var width = 100;
            console.log(width);
        }

        console.log(width);     // Returns: Uncaught ReferenceError: width is not defined

    // var is not limited to the curly brackets. It is the function which defines the scope.
        var age = 100;
        if (age > 12){
            var dogYears = age * 7;
            console.log(`You are ${dogYears} dog years old!`);
        }

        console.log(dogYears);    //700

    //In this case whit let or even const are scoped to the block. A block is a set of opening and closing curly brackets.
        var age = 100;
        if (age > 12){
            let dogYears = age * 7;
            console.log(`You are ${dogYears} dog years old!`);
        }

        console.log(dogYears);    //ReferenceError: dogYears is not defined

//2// Function default parameters
    //Default function parameters allow named parameters to be initialized with default values if no value or undefined is passed.
        function multiply(a, b = 1) {
            return a * b;
          }
          
          console.log(multiply(5, 2));      // expected output: 10
          
          console.log(multiply(5));     // expected output: 5
          

//3// Function rest parameter
    //Rest parameter is an improved way to handle function parameter, 
    //allowing us to more easily handle various input as parameters in a function.

    function functionname(...parameters) {  //... is the rest parameter
        statement;
    }

    // es6 rest parameter
    function fun(...input){
        let sum = 0;
        for(let i of input){
            sum+=i;
        }
        return sum;
    }
    console.log(fun(1,2)); //3
    console.log(fun(1,2,3)); //6
    console.log(fun(1,2,3,4,5)); //15     

//4// Spread operator
    //Este operador permite que los elementos de un array se expandan y, de esta manera, 
    //podemos añadir un array dentro de otro sin que el resultado sean arrays anidados, 
    //si no un único array al que se han añadido nuevos valores.

        var midArray = [3, 4];
        var arr = [1, 2, ...midArray, 5, 6];     //arr → [1, 2, 3, 4, 5, 6]

    //Con el spread operator, podemos sumar arrays, hacer copias, añadir nuevos elementos…

        //Añadir nuevos elementos
        const numbers = [ 1 , 2 , 3]
        const newNumbers = [ ...numbers, 4]    // newNumbers → [1, 2, 3, 4]

        //Sumar arrays
        const sumOfArrays = [ ...numbers, ...newNumbers]   // sumofArrays → [1, 2, 3, 1, 2, 3, 4]

        //Clonar arrays
        var originalArr = [22, 3, 68, 0];
        var newArray = [...originalArr];  // newArray → [22, 3, 68, 0]

//5// String interpolation
    /*
    String interpolation is replacing placeholders with values in a string literal.
    The string interpolation in JavaScript is performed by template literals (strings wrapped in backticks `) and ${expression} as a placeholder. 
    For example:
    */
        const number = 42;
        const message = `The number is ${number}`;

        console.log(message); // => 'The number is 42'

    //In JavaScript, there are 3 ways to create string literals.

    //First, which I prefer for plain strings, is to wrap the string into a pair of single quotes ':

        const message = 'Hello, World!';

    //The second, which I use rarely, is to wrap the string into a pair of double quotes ":

        const message = "Hello, World";

    //The third, which permits string interpolation, is to wrap the string into a pair of backticks `:

        const message = `Hello, World!`;

    //The string literal wrapped in backticks ` is also named template string. This is the literal that supports the string interpolation.

//6// Property shorthand
    //New in JavaScript with ES6/ES2015, if you want to define an object who's keys have the same name as the variables passed-in as properties, you can use the shorthand and simply pass the key name.
    //Here’s how you can declare an object with the new ES6 / ES2015 syntax:
        let cat = 'Miaow';
        let dog = 'Woof';
        let bird = 'Peet peet';

        let someObject = {
        cat,
        dog,
        bird
        }

        console.log(someObject);

        //{
        //  cat: "Miaow",
        //  dog: "Woof",
        //  bird: "Peet peet"
        //}


//7// Computed property names
    //Computed Property Names is an ES6 feature which allows the names of object properties in JavaScript object literal notation to be determined dynamically, i.e. computed.
    //However, ES6 Computed Property Names allow us to use dynamically generated names within object literals. Example:
        const myPropertyName = 'c'

        const myObject = {
        a: 5,
        b: 10,
        [myPropertyName]: 15
        } 

        console.log(myObject.c) // prints 15

    //To stress that expressions can be used directly as computed property names, another example:
        const fieldNumber = 3

        const myObject = {
        field1: 5,
        field2: 10,
        ['field' + fieldNumber]: 15
        }

        console.log(myObject.field3) // prints 15

    //In case you have a function that change a value of a given attribute. Before this a switch case was needed. Now it as simple as:

    this[attrName] = newValue;

//8// Method properties


//9// Array matching
        const intersection = array1.filter(element => array2.includes(element));

        let firstArr = [1, 2, 3, 4, 5];
        let secondArr = [1, 2, 3, 4, 5];
        let isEqual = firstArr.toString() === secondArr.toString();
        console.log(isEqual);

        let firstArr = [1, 2, [3, 4, 5]];
        let secondArr = [1, 2, [3, 4, 5]];
        let isEqual = JSON.stringify(firstArr) === JSON.stringify(secondArr);
        console.log(isEqual);
        
//10// Destructuring
    //The destructuring assignment syntax is a JavaScript expression that makes it possible to unpack values from arrays, 
    //or properties from objects, into distinct variables.

        let a, b, rest;
        [a, b] = [10, 20];
        console.log(a); // 10
        console.log(b); // 20
        
        [a, b, ...rest] = [10, 20, 30, 40, 50];
        console.log(a); // 10
        console.log(b); // 20
        console.log(rest); // [30, 40, 50]
        
        ({ a, b } = { a: 10, b: 20 });
        console.log(a); // 10
        console.log(b); // 20
        
        // Stage 4(finished) proposal
        ({a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40});
        console.log(a); // 10
        console.log(b); // 20
        console.log(rest); // {c: 30, d: 40}
    
//11// Symbol
    //Symbol es un tipo de datos cuyos valores son únicos e immutables. Dichos valores pueden ser utilizados como identificadores (claves) de las propiedades de los objetos.  Cada valor del tipo Symbol tiene asociado un valor del tipo String o Undefined que sirve únicamente como descripción del símbolo.
    //La función Symbol primitive data type es el constructor de valores del tipo Symbol. Cuando Symbol es llamado como función nos devuelve una nuevo valor del tipo Symbol. El constructor Symbol no debe ser usado con el operador new. Tampoco debe ser extendido mediante clases.

    //Para crear un nuevo símbolo, simplemente escribimos  Symbol(), opcionalmente  con un argumento de tipo String que constituiría la descripción del símbolo:
        var sym1 = Symbol();
        var sym2 = Symbol("foo");
        var sym3 = Symbol("foo");
    //El código anterior crea tres símbolos nuevos. Hay que destacar que  Symbol("foo") no convierte la cadena "foo" en un símbolo, sino que crea un símbolo nuevo que tiene la misma descripción.

        Symbol("foo") === Symbol("foo"); // false

//12// Map/Set
    //Map
        //Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.
        //Methods and properties are:
            new Map() // creates the map.
            map.set(key, value) // stores the value by the key.
            map.get(key) // returns the value by the key, undefined if key doesn’t exist in map.
            map.has(key) // returns true if the key exists, false otherwise.
            map.delete(key) // removes the value by the key.
            map.clear() // removes everything from the map.
            map.size // returns the current element count.

            let map = new Map();

            map.set('1', 'str1');   // a string key
            map.set(1, 'num1');     // a numeric key
            map.set(true, 'bool1'); // a boolean key

        // remember the regular Object? it would convert keys to string
        // Map keeps the type, so these two are different:
            alert( map.get(1)   ); // 'num1'
            alert( map.get('1') ); // 'str1'

            alert( map.size ); // 3

    //Set
        //A Set is a special type collection – “set of values” (without keys), where each value may occur only once.
        //Its main methods are:
            new Set(iterable) // creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
            set.add(value) // adds a value, returns the set itself.
            set.delete(value) // removes the value, returns true if value existed at the moment of the call, otherwise false.
            set.has(value) // returns true if the value exists in the set, otherwise false.
            set.clear() // removes everything from the set.
            set.size // is the elements count.

        //The main feature is that repeated calls of set.add(value) with the same value don’t do anything. That’s the reason why each value appears in a Set only once.
        //For example, we have visitors coming, and we’d like to remember everyone. But repeated visits should not lead to duplicates. A visitor must be “counted” only once.
        //Set is just the right thing for that:

            let set = new Set();

            let john = { name: "John" };
            let pete = { name: "Pete" };
            let mary = { name: "Mary" };

            // visits, some users come multiple times
            set.add(john);
            set.add(pete);
            set.add(mary);
            set.add(john);
            set.add(mary);

            // set keeps only unique values
            alert( set.size ); // 3

            for (let user of set) {
            alert(user.name); // John (then Pete and Mary)
            }

            //We can loop over a set either with for..of or using forEach:
            let set = new Set(["oranges", "apples", "bananas"]);

            for (let value of set) alert(value);

            // the same with forEach:
            set.forEach((value, valueAgain, set) => {
            alert(value);
            });


//13// Intl object

    //The Intl object provides access to several constructors as well as functionality common to the internationalization constructors and other language sensitive functions.

        Intl.Collator (en-US)
        //Constructor para collators, objetos que permiten la comparación de cadenas con sensibilidad al lenguaje.
        Intl.DateTimeFormat (en-US)
        //Constructor para objetos que permiten el formato de fecha y tiempos con sensibilidad al lenguaje.
        Intl.NumberFormat (en-US)
        //Constructor para objetos que permiten el formato de números con sensibilidad al lenguaje.

        let now = new Date(2020, 02, 25, 20, 30, 00);
        let nowEnUs = new Intl.DateTimeFormat('en-US');
        let noeEs = new Intl.DateTimeFormat('es-ES');

        console.log(nowEnUs.format(now));   //3/25/2020
        console.log(noeEs.format(now));     //25/3/2020

