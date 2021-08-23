//1// Creating an array
    let frutas = ["Manzana", "Banana"]

    console.log(frutas.length) // 2

    //Acceder a un elemento de Array mediante su índice
        let primero = frutas[0] // Manzana

        let ultimo = frutas[frutas.length - 1] // Banana

//2// Creating an object
    //You define (and create) a JavaScript object with an object literal:
    var person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};

//3// Array methods
    
    Array.isArray()
        //El método Array.isArray() determina si el valor pasado es un Array.
            Array.isArray([1, 2, 3]);  // true
            Array.isArray({foo: 123}); // false
            Array.isArray('foobar');   // false
            Array.isArray(undefined);  // false

    Array.prototype.concat()
        //El método concat() se usa para unir dos o más arrays. Este método no cambia los arrays existentes, sino que devuelve un nuevo array.
            const array1 = ['a', 'b', 'c'];
            const array2 = ['d', 'e', 'f'];
            const array3 = array1.concat(array2);

            console.log(array3);    // expected output: Array ["a", "b", "c", "d", "e", "f"]
    //----------------------------------------------------------------------------------------------

    Array.prototype.copyWithin()
        //Copia una secuencia de elementos de un array dentro del propio array.
            const array1 = ['a', 'b', 'c', 'd', 'e'];

            // copy to index 0 the element at index 3
            console.log(array1.copyWithin(0, 3, 4));    // expected output: Array ["d", "b", "c", "d", "e"]

            // copy to index 1 all elements from index 3 to the end
            console.log(array1.copyWithin(1, 3));   // expected output: Array ["d", "d", "e", "d", "e"]
    //----------------------------------------------------------------------------------------------

    Array.prototype.entries()
        //El método entries() retorna un nuevo objeto Array Iterator que contiene los pares clave/valor para cada índice de la matriz.
            const array1 = [{key:'a'}, {key:'b'}, {key:'c'}];

            const iterator1 = array1.entries();

            console.log(iterator1.next().value);    // expected output: Array [ 0, { key: 'a' } ]

            console.log(iterator1.next().value);    // expected output: Array [ 1, { key: 'b' } ]

    //----------------------------------------------------------------------------------------------
    
    Array.prototype.every()
        //Determina si todos los elementos en el array satisfacen una condición.
            const isBelowThreshold = (currentValue => currentValue < 40);

            const array1 = [1, 30, 39, 29, 10, 13];
            
            console.log(array1.every(isBelowThreshold));    // expected output: true
            
    //----------------------------------------------------------------------------------------------
    
    Array.prototype.fill()
        //Asigna un valor estático a todos los elementos del array entre las posiciones inicio y fin.
            const array1 = [1, 2, 3, 4];

            // fill with 0 from position 2 until position 4
            console.log(array1.fill(0, 2, 4));     // expected output: [1, 2, 0, 0]

            // fill with 5 from position 1
            console.log(array1.fill(5, 1));     // expected output: [1, 5, 5, 5]

            console.log(array1.fill(6));    // expected output: [6, 6, 6, 6]

    //----------------------------------------------------------------------------------------------
    
    Array.prototype.filter()
        //El método filter() crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada.
            const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

            const result = words.filter(word => word.length > 6);
            
            console.log(result);    // expected output: Array ["exuberant", "destruction", "present"]

    //----------------------------------------------------------------------------------------------
    
    Array.prototype.find()
        //El método find() devuelve el valor del primer elemento del array que cumple la función de prueba proporcionada.
            const array1 = [5, 12, 8, 130, 44];

            const found = array1.find(element => element > 10);

            console.log(found);     // expected output: 12

    //----------------------------------------------------------------------------------------------
    
    Array.prototype.findIndex()
        //El método findIndex() devuelve el índice del primer elemento de un array que cumpla con la función de prueba proporcionada. En caso contrario devuelve -1.
            const array1 = [5, 12, 8, 130, 44];

            const isLargeNumber = (element => element > 13);

            console.log(array1.findIndex(isLargeNumber));    // expected output: 3
    //----------------------------------------------------------------------------------------------
    
    Array.prototype.forEach()
        //El método forEach() ejecuta la función indicada una vez por cada elemento del array.
            const array1 = ['a', 'b', 'c'];

            array1.forEach(element => console.log(element));

            // expected output: "a"
            // expected output: "b"
            // expected output: "c"
        
    //----------------------------------------------------------------------------------------------
    
    Array.prototype.includes()
        //Determina si el array contiene el valorBuscado y devuelve true o false según sea el caso.
            const array1 = [1, 2, 3];

            console.log(array1.includes(2));        // expected output: true

            const pets = ['cat', 'dog', 'bat'];

            console.log(pets.includes('cat'));      // expected output: true

            console.log(pets.includes('at'));       // expected output: false

    //----------------------------------------------------------------------------------------------
    
    Array.prototype.indexOf()
        //Devuelve el índice del primer elemento del array que sea igual a elementoBuscado, o -1 si no existe.
            const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

            console.log(beasts.indexOf('bison'));   // expected output: 1

            // start from index 2
            console.log(beasts.indexOf('bison', 2));    // expected output: 4

            console.log(beasts.indexOf('giraffe'));     // expected output: -1

    //----------------------------------------------------------------------------------------------
    
    Array.prototype.join()
        //Concatena en un string todos los elementos de un array.
            const elements = ['Fire', 'Air', 'Water'];

            console.log(elements.join());       // expected output: "Fire,Air,Water"

            console.log(elements.join(''));     // expected output: "FireAirWater"

            console.log(elements.join('-'));    // expected output: "Fire-Air-Water"

    //----------------------------------------------------------------------------------------------
    
    Array.prototype.keys()
        //Devuelve un nuevo Array Iterator que contiene las claves de cada índice del array.
            const array1 = ['a', 'b', 'c'];
            const iterator = array1.keys();

            for (const key of iterator) {
            console.log(key);
            }

            // expected output: 0
            // expected output: 1
            // expected output: 2

    //----------------------------------------------------------------------------------------------
    
    Array.prototype.lastIndexOf()
        //Devuelve el índice del último elemento del array que sea igual a elementoBuscado, o -1 si no existe.
            const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];

            console.log(animals.lastIndexOf('Dodo'));    // expected output: 3

            console.log(animals.lastIndexOf('Tiger'));   // expected output: 1

    //----------------------------------------------------------------------------------------------
    
    Array.prototype.map()
        //El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
            var numbers = [1, 5, 10, 15];
            var doubles = numbers.map(function(x) {
            return x * 2;
            });
            // doubles is now [2, 10, 20, 30]
            // numbers is still [1, 5, 10, 15]

            var numbers = [1, 4, 9];
            var roots = numbers.map(function(num) {
                return Math.sqrt(num);
            });
            // roots is now [1, 2, 3]
            // numbers is still [1, 4, 9]

    //----------------------------------------------------------------------------------------------
    
    Array.prototype.pop()
        //Elimina el último elemento de un array, y devuelve dicho elemento.
            const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

            console.log(plants.pop());      // expected output: "tomato"

            console.log(plants);    // expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

            plants.pop();

            console.log(plants);    // expected output: Array ["broccoli", "cauliflower", "cabbage"]

    //----------------------------------------------------------------------------------------------
    
    Array.prototype.push()
        //Añade uno o más elementos al final de un array y devuelve el nuevo valor de su propiedad length.
            const animals = ['pigs', 'goats', 'sheep'];

            const count = animals.push('cows');
            console.log(count);     // expected output: 4
            console.log(animals);   // expected output: Array ["pigs", "goats", "sheep", "cows"]

            animals.push('chickens', 'cats', 'dogs');
            console.log(animals);   // expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

    //----------------------------------------------------------------------------------------------
    
    Array.prototype.reduce()
        //Aplica la función pasada como parámetro a un acumulador y a cada valor del array, que se recorre de izquierda a derecha, para reducirlo a un único valor.
            const array1 = [1, 2, 3, 4];
            const reducer = (accumulator, currentValue) => accumulator + currentValue;

            // 1 + 2 + 3 + 4
            console.log(array1.reduce(reducer));    // expected output: 10

            // 5 + 1 + 2 + 3 + 4
            console.log(array1.reduce(reducer, 5));     // expected output: 15

    //----------------------------------------------------------------------------------------------
    
    Array.prototype.reduceRight()
        //Aplica la función pasada como parámetro a un acumulador y a cada valor del array, que se recorre de derecha a izquierda, para reducirlo a un único valor.
            const array1 = [[0, 1], [2, 3], [4, 5]].reduceRight(
                (accumulator, currentValue) => accumulator.concat(currentValue)
            );
            
            console.log(array1);      // expected output: Array [4, 5, 2, 3, 0, 1]
          
    //----------------------------------------------------------------------------------------------
    
    Array.prototype.reverse()
        //Invierte el orden de los elementos de un array (el primero pasa a ser el último y el último a ser el primero) en el propio array. Este método modifica el array.
            const array1 = ['one', 'two', 'three'];
            console.log('array1:', array1);     // expected output: "array1:" Array ["one", "two", "three"]

            const reversed = array1.reverse();
            console.log('reversed:', reversed);     // expected output: "reversed:" Array ["three", "two", "one"]

            // Careful: reverse is destructive -- it changes the original array.
            console.log('array1:', array1);     // expected output: "array1:" Array ["three", "two", "one"]
            
    //----------------------------------------------------------------------------------------------
    
    Array.prototype.shift()
        //Elimina el primer elemento de un array, y devuelve dicho elemento.
            const array1 = [1, 2, 3];

            const firstElement = array1.shift();

            console.log(array1);        // expected output: Array [2, 3]

            console.log(firstElement);      // expected output: 1

    //----------------------------------------------------------------------------------------------
    
    Array.prototype.unshift()
        //El método unshift() agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.
            const array1 = [1, 2, 3];

            console.log(array1.unshift(4, 5));      // expected output: 5
            
            console.log(array1);    // expected output: Array [4, 5, 1, 2, 3]
        
    //----------------------------------------------------------------------------------------------
    
    Array.prototype.slice()
        //Extrae una porción del array sobre el que se llama y devuelve un nuevo array.
            const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

            console.log(animals.slice(2));            // expected output: Array ["camel", "duck", "elephant"]

            console.log(animals.slice(2, 4));         // expected output: Array ["camel", "duck"]

            console.log(animals.slice(1, 5));         // expected output: Array ["bison", "camel", "duck", "elephant"]

            console.log(animals.slice(-2));           // expected output: Array ["duck", "elephant"]

            console.log(animals.slice(2, -1));        // expected output: Array ["camel", "duck"]

    //----------------------------------------------------------------------------------------------
    
    Array.prototype.some()
        //El método some() comprueba si al menos un elemento del array cumple con la condición implementada por la función proporcionada.
            const array = [1, 2, 3, 4, 5];

            // checks whether an element is even
            const even = (element) => element % 2 === 0;

            console.log(array.some(even));      // expected output: true

    //----------------------------------------------------------------------------------------------
    
    Array.prototype.sort()
        //Ordena los elementos de un array, modificando éste, y devuelve el array ordenado. 
        //El orden de clasificación predeterminado es ascendente, que se basa en convertir los elementos en cadenas y luego comparar sus secuencias de valores de unidades de código UTF-16.
            const months = ['March', 'Jan', 'Feb', 'Dec'];
            months.sort();
            console.log(months);
            // expected output: Array ["Dec", "Feb", "Jan", "March"]

            const array1 = [1, 30, 4, 21, 100000];
            array1.sort();
            console.log(array1);
            // expected output: Array [1, 100000, 21, 30, 4]

    //----------------------------------------------------------------------------------------------
    
    Array.prototype.splice()
        //Añade, borra o modifica elementos de un array.
            const months = ['Jan', 'March', 'April', 'June'];
            months.splice(1, 0, 'Feb');
            // inserts at index 1
            console.log(months);    // expected output: Array ["Jan", "Feb", "March", "April", "June"]

            months.splice(4, 1, 'May');
            // replaces 1 element at index 4
            console.log(months);    // expected output: Array ["Jan", "Feb", "March", "April", "May"]
        
    //---------------------------------------------------------------------------------------------- 
   
    Array.prototype.toString()
        //Devuelve un string que representa el array y sus elementos. Redefine el método Object.prototype.toString().
            const array1 = [1, 2, 'a', '1a'];

            console.log(array1.toString());     // expected output: "1,2,a,1a"
         
    //----------------------------------------------------------------------------------------------
    
    Array.prototype.values()
        //El método values() devuelve un nuevo objeto Array Iterator que contiene los valores para cada índice del array.
            var a = ['w', 'y', 'k', 'o', 'p'];
            var iterator = a.values();
            
            console.log(iterator.next().value); // w 
            console.log(iterator.next().value); // y 
            console.log(iterator.next().value); // k 
            console.log(iterator.next().value); // o 
            console.log(iterator.next().value); // p
            

//4// Sorting arrays

    let numbers = [0, 1, 2, 3, 10, 20, 30];
    numbers.sort();
    console.log(numbers);   //[0, 1, 10, 2, 20, 3, 30]

    //Se utiliza un comparación para el sort
        numbers.sort((x, y) => x-y);
        console.log(numbers);   //[0, 1, 2, 3, 10, 20, 30]
    //Lo contrario (Decendente)
        numbers.sort((x, y) => y-x);
        console.log(numbers);   //[30, 20, 10, 3, 2, 1, 0]
    
    //To sort the elements of the animals array in ascending order alphabetically
        let animals = ['cat', 'dog', 'elephant', 'bee', 'ant'];
        animals.sort();
        console.log(animals);   //['ant', 'bee', 'cat', 'dog', 'elephant']

        animals.sort((a, b) => {
            let x = a.toUpperCase(),
                y = b.toUpperCase();
                return x == y ? 0 : x > y ? -1 : 1;
        });
        console.log(animals);   //['elephant', 'dog', 'cat', 'bee', 'ant']

    //Sorting an array of objects by a specified property
        let employees = [
            {name: 'John', salary: 90000, hireDate: "July 1, 2010"},
            {name: 'David', salary: 75000, hireDate: "August 15, 2009"},
            {name: 'Ana', salary: 80000, hireDate: "December 12, 2011"}
        ];

        // sort by salary
            employees.sort(function (x, y) {
                return x.salary - y.salary;
            });

            console.table(employees);

        // sort by name
            employees.sort(function (x, y) {
                let a = x.name.toUpperCase(),
                    b = y.name.toUpperCase();
                return a == b ? 0 : a > b ? 1 : -1;
            });
            
            console.table(employees);
        
        // sort by Date
            employees.sort(function (x, y) {
                let a = new Date(x.hireDate),
                    b = new Date(y.hireDate);
                return a - b;
            });
            
        console.table(employees);

//5// Object methods
    const person = {
        firstName: "John",
        lastName: "Doe",
        id: 5566,
        fullName: function() {
        return this.firstName + " " + this.lastName;
        }
    };

    //This example accesses the fullName() method of a person object:
    objectName.methodName()

    //If you access the fullName property, without (), it will return the function definition:
    let name = person.fullName;
    
//6// Object to primitive conversion
    /*
    Conversion rules     
        1 - All objects are true in a boolean context. There are only numeric and string conversions.
        2 - The numeric conversion happens when we subtract objects or apply mathematical functions. 
            For instance, Date objects (to be covered in the chapter Date and time) can be subtracted, and the result of date1 - date2 is the time difference between two dates.
        3 - As for the string conversion – it usually happens when we output an object like alert(obj) and in similar contexts.
        
        To do the conversion, JavaScript tries to find and call three object methods:

        1 - Call obj[Symbol.toPrimitive](hint) – the method with the symbolic key 
            Symbol.toPrimitive (system symbol), if such method exists,
        2 - Otherwise if hint is "string"
            try obj.toString() and obj.valueOf(), whatever exists.
        3 - Otherwise if hint is "number" or "default"
            try obj.valueOf() and obj.toString(), whatever exists.
    */

//7// Object property flags and descriptors
    /* 
    Writable
        The writable flag tells if you can change a specific object property. 
        If this flag is set to true anyone can change that property and its value. 
        If it is false the property will become read-only and nobody can change it.
    */

        // Create new object.
        let myObj = {
            name: 'Jack',
            age: 31
        }
            
        // Set "name" property to non-writable.
        Object.defineProperty(myObj, 'name', {
            writable: false
        })
            
        // Set "age" property to writable.
        Object.defineProperty(myObj, 'age', {
            writable: true
        })
            
        // Try to change the value of "name" property.
        myObj.name = 'Tony'
            
        // Try to change the value of "age" property.
        myObj.age = '44'
            
        // Log the value of "name" property.
        console.log(myObj.name)
        // Output:
        // 'Jack'
            
        // Log the value of "age" property.
        console.log(myObj.age)
        // Output:
        // '44'

    //----------------------------------------------------------------------------------------------

    /* 
    Enumerable
        The second property flag is enumerable. When you want to know what are all properties that exist in an object you can iterate over it. 
        For example, you can use for…in loop to get each property, one by one. Or, you can use Object.keys() to get all properties. 
        The enumerable flag helps you prevent this from happening.

        When you set this flag to false for a specific property that property will no longer iterable. 
        It will no longer be listed if you iterate over an object with loop. It will also be invisible for console.log(). 
        Setting this flag to true will do the opposite. The property will show up when you iterate over the object in a loop.

        The enumerable flag has one exception. Even if you set it to false the Reflect.ownKeys() method will still be able to reveal it.
    */
        // Create an object.
        let myObj = {
            name: 'Victra',
            age: 28
        }
        
        // Set "name" property to non-enumerable.
        Object.defineProperty(myObj, 'name', {
            enumerable: false
        })
        
        // Set "age" property to enumerable.
        Object.defineProperty(myObj, 'age', {
            enumerable: true
        })
        
        // Try to get all properties from myObj
        // using Object.keys() method.
        console.log(Object.keys(myObj))
        // Output:
        // [ 'age' ]
        
        // Try to get all properties from myObj
        // using Reflect.ownKeys() method.
        console.log(Reflect.ownKeys(myObj))
        // Output:
        // [ 'name', 'age' ]        

    //----------------------------------------------------------------------------------------------

    /* 
    Configurable
        The last flag, configurable specifies if you can delete concrete property or not. 
        It also says if you can change any of its attributes, any of its property flags. 
        Setting this flag to false will prevent anyone from deleting and modifying the property. Setting it to true will allow both.
    */
        // Create an object.
        let myObj = {
            name: 'Peter',
            age: 44
        }
        
        // Set "name" property to non-configurable.
        Object.defineProperty(myObj, 'name', {
            configurable: false
        })
        
        // Set "age" property to configurable.
        Object.defineProperty(myObj, 'age', {
            configurable: true
        })
        
        // Try to remove property "name" from myObj.
        delete myObj.name
        
        // Try to remove property "age" from myObj.
        delete myObj.age
        
        // Log the value of myObj.
        console.log(myObj)
        // Output:
        // { name: 'Peter' }
            
    //----------------------------------------------------------------------------------------------

    /*
    Property descriptor
        Property descriptor is that object with Object property flags and value. 
        In some way, you can think of the descriptor as the sum of all flags of a property.
    */
        console.log(Object.getOwnPropertyDescriptors(myObj));
   
//8// Object static methods
    Object.assign()
        //Copia los valores de todas sus propiedades enumerables desde uno o más objetos fuente a un objeto destino.
            const target = { a: 1, b: 2 };
            const source = { b: 4, c: 5 };

            const returnedTarget = Object.assign(target, source);

            console.log(target);    // expected output: Object { a: 1, b: 4, c: 5 }

            console.log(returnedTarget);    // expected output: Object { a: 1, b: 4, c: 5 }

    //----------------------------------------------------------------------------------------------

    Object.create()
        //Crea un nuevo objeto con el prototipo objeto y propiedades específicadas.
            const person = {
                isHuman: false,
                printIntroduction: function() {
                console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
                }
            };
            
            const me = Object.create(person);
            
            me.name = 'Matthew';    // "name" is a property set on "me", but not on "person"
            me.isHuman = true;      // inherited properties can be overwritten
            
            me.printIntroduction(); // expected output: "My name is Matthew. Am I human? true"

    //----------------------------------------------------------------------------------------------

    Object.defineProperties()
        //Agrega las propiedades nombradas descritas por los descriptores dados a un objeto.
            const object1 = {};

            Object.defineProperties(object1, {
            property1: {
                value: 42,
                writable: true
            },
            property2: {}
            });

            console.log(object1.property1); // expected output: 42

    //----------------------------------------------------------------------------------------------

    Object.entries()
        //Returns an array containing all of the [key, value] pairs of a given object's own enumerable string properties.
            const obj = { foo: 'bar', baz: 42 };
            console.log(Object.entries(obj));   // [ ['foo', 'bar'], ['baz', 42] ]

            // array like object
            const obj = { 0: 'a', 1: 'b', 2: 'c' };
            console.log(Object.entries(obj));   // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

            // array like object with random key ordering
            const anObj = { 100: 'a', 2: 'b', 7: 'c' };
            console.log(Object.entries(anObj));     // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

    //----------------------------------------------------------------------------------------------

    Object.fromEntries()
        //Returns a new object from an iterable of key-value pairs (reverses Object.entries).
            const entries = new Map([
                ['foo', 'bar'],
                ['baz', 42]
            ]);
            
            const obj = Object.fromEntries(entries);
            
            console.log(obj);   // expected output: Object { foo: "bar", baz: 42 }
          
    //----------------------------------------------------------------------------------------------

    Object.freeze()
        //Freezes an object: other code can't delete or change any properties.
            const obj = {
                prop: 42
            };
            
            Object.freeze(obj);
            
            obj.prop = 33;  // Throws an error in strict mode
            
            console.log(obj.prop);  // expected output: 42

            delete obj.prop; // cannot delete when freze
            console.log(obj.prop); // expected output: 33
            
    //----------------------------------------------------------------------------------------------

    Object.seal()
        //Prevents other code from deleting properties of an object.
            const object1 = {
                property1: 42
            };
            
            Object.seal(object1);
            object1.property1 = 33;
            console.log(object1.property1); // expected output: 33
            
            delete object1.property1; // cannot delete when sealed
            console.log(object1.property1); // expected output: 33
          
    //----------------------------------------------------------------------------------------------

    Object.isFrozen()
        //Determines if an object was frozen.
            const object1 = {
                property1: 42
            };
            
            console.log(Object.isFrozen(object1));  // expected output: false
            
            Object.freeze(object1);
            
            console.log(Object.isFrozen(object1));  // expected output: true
          
    //----------------------------------------------------------------------------------------------

    Object.isSealed()
        //Determines if an object is sealed.
            const object1 = {
                property1: 42
            };
            
            console.log(Object.isSealed(object1));  // expected output: false
            
            Object.seal(object1);
            
            console.log(Object.isSealed(object1));  // expected output: true
          
    //----------------------------------------------------------------------------------------------

    Object.getOwnPropertyDescriptors()
        //Returns an object containing all own property descriptors for an object.
            const object1 = {
                property1: 42
            };
            
            const descriptors1 = Object.getOwnPropertyDescriptors(object1);
            
            console.log(descriptors1.property1.writable);   // expected output: true
            
            console.log(descriptors1.property1.value);  // expected output: 42
          
    //----------------------------------------------------------------------------------------------

    Object.is()
        //Compares if two values are the same value. Equates all NaN values (which differs from both Abstract Equality Comparison and Strict Equality Comparison).
            Object.is(25, 25);                // true
            Object.is('foo', 'foo');          // true
            Object.is('foo', 'bar');          // false
            Object.is(null, null);            // true

    //----------------------------------------------------------------------------------------------
    
    Object.preventExtensions()
        //The Object.preventExtensions() method prevents new properties from ever being added to an object (i.e. prevents future extensions to the object).
            const object1 = {};

            Object.preventExtensions(object1);

            try {
                Object.defineProperty(object1, 'property1', {
                    value: 42
                });
            } catch (e) {
                console.log(e); // expected output: TypeError: Cannot define property property1, object is not extensible
            }

    //----------------------------------------------------------------------------------------------

    Object.isExtensible()
        //Determines if extending of an object is allowed.
            const object1 = {}; 

            console.log(Object.isExtensible(object1));      // expected output: true

            Object.preventExtensions(object1);

            console.log(Object.isExtensible(object1));      // expected output: false

    //----------------------------------------------------------------------------------------------

    Object.keys()
        //Returns an array containing the names of all of the given object's own enumerable string properties.
            const object1 = {
                a: 'somestring',
                b: 42,
                c: false
            };
            
            console.log(Object.keys(object1));      // expected output: Array ["a", "b", "c"]
          
    //----------------------------------------------------------------------------------------------

    Object.values()
        //Returns an array containing the values that correspond to all of a given object's own enumerable string properties. 
            const object1 = {
                a: 'somestring',
                b: 42,
                c: false
            };
            
            console.log(Object.values(object1));    // expected output: Array ["somestring", 42, false]
          

//9// Looping through object values
    Object.keys() 
    /*
    It takes the object that you want to loop over as an argument and returns an array containing all properties names (or keys).
    After which you can use any of the array looping methods, such as forEach(), 
    to iterate through the array and retrieve the value of each property.
    */
        const courses = {
            java: 10,
            javascript: 55,
            nodejs: 5,
            php: 15
        };
 
        // convert object to key's array
        const keys = Object.keys(courses);
        
        // print all keys
        console.log(keys);    // [ 'java', 'javascript', 'nodejs', 'php' ]
        
        // iterate over object
        keys.forEach((key, index) => {
            console.log(`${key}: ${courses[key]}`);
        });
        
        // java: 10
        // javascript: 55
        // nodejs: 5
        // php: 15

    //----------------------------------------------------------------------------------------------

    Object.values()
    /*
    The Object.values() method was introduced in ES8 and it works opposite to that of Object.key(). 
    It returns the values of all properties in the object as an array. 
    You can then loop through the values array by using any of the array looping methods.
    */
    const animals = {
        tiger: 1,
        cat: 2,
        monkey: 3,
        elephant: 4
    };

    // iterate over object values
    Object.values(animals).forEach(val => console.log(val));

    // 1
    // 2
    // 3
    // 4

//10// Getters and Setters
    //Get
        //Enlaza la propiedad de un objeto con una función que será llamada cuando la propiedad es buscada
            var o = {
                get latest () {
                if (this.log.length > 0) {
                    return this.log[this.log.length - 1];
                }
                else {
                    return null;
                }
                },
                log: []
            }
            
    //Set
        //La sintaxis  set  asocia la propiedad de un objeto a una función que será llamada cuando haya un intento de asignar valor a esa propiedad.
            var lenguaje = {
                set actual(mensaje) {
                this.log.push(mensaje);
                },
                log: []
            }
            lenguaje.actual='ES';
            console.log(lenguaje.log); // ['ES']
            
            lenguaje.actual='FR';
            console.log(lenguaje.log); // ['ES', 'FR']

    //Delete of setters and getters
        delete objName.setterOrGetterName;

    //Example
        var persona = {
            nombre: 'Yeison',
            apellido: 'Daza',
            get nombreCompleto() {
            return `${this.nombre} ${this.apellido}`
            },
            set nombreCompleto(nom) {
            const palabras = nom.split(' ');
            this.nombre = palabras[0] || '';
            this.apellido = palabras[1] || '';
            }
        }
        
        persona.nombreCompleto = 'Camilo Sanchez'
        
        console.log(persona.nombre); //camilo
        console.log(persona.apellido); //sanchez

        console.log(persona.nombreCompleto); //
    
//11// Deleting object properties
    //The delete operator is employed to delete a property of an object. After deleting the actual property, 
    //that property won’t be accessible and returns undefined.
    var user = {
        firstName: "John",
        lastName: "Smith",
        fullName() {
            return `${this.firstName} ${this.lastName}`
        }
    }

    console.log(delete user.firstName);     //true
    console.log(user);   //{ lastName: 'Smith', fullName: [Function: fullName] }

//12// Comparing objects
    /*
    JavaScript provides 3 ways to compare values:
    •	The strict equality operator ===
    •	The loose equality operator ==
    •	Object.is() function
    
    When comparing objects using any of the above, the comparison evaluates to true only if the compared values reference the same object instance. 
    This is the referential equality. Let’s define the objects hero1 and hero2, and see the referential equality in practice:
    */

        const hero1 = {
        name: 'Batman'
        };
        const hero2 = {
        name: 'Batman'
        };

        hero1 === hero1; // => true
        hero1 === hero2; // => false

        hero1 == hero1; // => true
        hero1 == hero2; // => false

        Object.is(hero1, hero1); // => true
        Object.is(hero1, hero2); // => false

    //The obvious way to compare objects by content is to read the properties and compare them manually. 
    //For example, let’s write a special function isHeroEqual() that compares 2 hero objects:
        function isHeroEqual(object1, object2) {
            return object1.name === object2.name;
        }

        const hero1 = {
        name: 'Batman'
        };
        const hero2 = {
        name: 'Batman'
        };
        const hero3 = {
        name: 'Joker'
        };

        isHeroEqual(hero1, hero2); // => true
        isHeroEqual(hero1, hero3); // => false

    /*
    isHeroEqual() accesses the property name of both objects and compares their values.
    
    If the compared objects have a few properties, I prefer to write the comparison functions like isHeroEqual(). 
    Such functions have good performance — only a few property accessors and equality operators are involved in the comparison.
    
    Manual comparison requires manual extraction of properties — for simple objects, that’s not a problem. 
    But to compare bigger objects (or objects of unknown structure), the manual comparison isn’t convenient because it requires a lot of boilerplate code.
    */