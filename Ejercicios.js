/*
- Read article http://callbackhell.com/
- Deeply learn closures in javascript https://javascript.info/closure
- Repeat https://javascript.info/type-conversions and https://javascript.info/comparison
- Difference between Promise.all and Promise.allSettled()
- Type Conversions: https://javascript.info/type-conversions
- How to add scripts to a web page - modern ways: https://javascript.info/script-async-defer
- Arrow https://javascript.info/arrow-functions
*/


//---------------------------------------------------------
let A = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5];

const sVal = new Set(A);

let a;

sVal.forEach((val) => {
    if (A.filter(valA => valA == val).length % 2 == 1) a = val
});

//---------------------------------------------------------
// This keyword
// What would be the output and why
'use strict'
var myObject = {
    foo: "bar",
    func: function () {
        let self = this;
        console.log("outer func:  this.foo = " + this.foo); //bar
        console.log("outer func:  self.foo = " + self.foo); //bar 
        (function () {
            console.log("inner func:  self.foo = " + self.foo); //bar
            console.log("inner func:  this.foo = " + this.foo); //undefined
        }());
    }
};
myObject.func();

let v = myObject.func;

v();

//---------------------------------------

function saludar() {
    var saludo = 'quiuvole'; {
        saludo = 'Hola'; //ReferenceError: Cannot access 'saludo' before initialization
        let saludo = 'que onda';
        console.log(saludo);
    }
}
saludar();


function fun() {
    var saludo = "Hola"; {
        let saludo = "Quiubo!"
        console.log(saludo); //Quiubo
    }
}
fun();

//----------------------------------------------------------
//
for (var i = 0; i < 10; i++) {
    setTimeout(((i) => console.log(i)), 10);
}

//
for (let i = 0; i < 10; i++) {
    setTimeout(((i) => console.log(i)), 10);
}

//
for (var i = 0; i < 10; i++) {
    setTimeout(print(i), 10);
}

function print(i) {
    console.log(i);
}

//----------------------------------------------------------

//'use strict'
var foo = 1;

(function () {
    console.log(foo); //undefined
    var foo = 2;
    var baz = 3;
    bar = 4; //reference error if 'use strict'
})();

console.log(foo); //1
console.log(bar); //  4
console.log(baz); //reference error

//----------------------------------------------------------

console.log(typeof typeof 1); //string

//----------------------------------------------------------

function foo() {
    let a = (b = 0);
    a++
    return a;
}

foo()
console.log(foo()); //1
console.log(typeof a); //undefined
console.log(typeof b); //'number'

//----------------------------------------------------------

var b = 1;

function outer() {
    var b = 2

    function inner() {
        b++;
        console.log(b);
        var b = 3;
        console.log(b) //3
    }
    inner();
}
outer();

//----------------------------------------------------------

console.log(1 < 2 < 3); //true

console.log(3 > 2 > 1); //false

console.log(true + 1 > 1); //true

//----------------------------------------------------------

var i = 0;
while (i < 10) {
    print(i++);
}

function print(i) {
    console.log(i);
}

//----------------------------------------------------------
function avg(...nums) {
    console.log(nums.reduce((a, b) => a + b) / nums.length);
}

avg(1, 4, 3, 2);

//----------------------------------------------------------

//Primera - recursive n^2

function nestedArraySum(arr) {
    let arrFinal = [];
    arr.forEach(val => {
        if (Array.isArray(val)) arrFinal.push(...val)
        else arrFinal.push(val);
    });

    if (arrFinal.some(val => Array.isArray(val))) {
        return nestedArraySum(arrFinal);
    } else {
        return arrFinal.reduce((a, b) => a + b);
    }
}

console.log(nestedArraySum([4, 5, [6, 7], 8, [
    [9, 10, ], 14
]]));
//console.log(nestedArraySum([4, 5, [6,7], 8, [[9, 10, [10, 10]], 14]]));   //83

///segunda - ?  nested lopps n^2

function nestedArraySum(arr) {

    let i = 0;
    let arrFinal = [];

    while (arr.some(val => Array.isArray(val))) {
        if (i >= arr.length) {
            arr = arrFinal;
            i = 0;
            arrFinal = [];
        }

        if (Array.isArray(arr[i])) arrFinal.push(...arr[i])
        else arrFinal.push(arr[i]);

        i++;
    }
    return arr.reduce((a, b) => a + b);
}

console.log(nestedArraySum([4, 5, [6, 7], 8, [
    [9, 10], 14
]]));

///tercera - O(n)

function nestedArraySum(arr) {
    let sum = 0;
    while (true) {
        let temp = arr.pop();
        if (Array.isArray(temp)) {
            arr.push(...temp);
            continue;
        } else
            sum += temp;
        if (arr.length == 0) break;
    }
    return sum;
}

console.log(nestedArraySum([4, 5, [6, 7], 8, [
    [9, 10], 14
]]));

//----------------------------------------------------------
console.log(1);

setTimeout(function () {
    console.log(2);
}, 0);

console.log(3);

//----------------------------------------------------------
console.log(1);

function resolveAfter0Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(2);
        }, 0);
    });
}

async function asyncCall() {
    const result = await resolveAfter0Seconds();
    console.log(result);
}

asyncCall();

console.log(3);

//----------------------------------------------------------
const f1 = (promise, successHandler, errorHandler) => {
    return promise.then(successHandler, errorHandler);
}

const f2 = (promise, successHandler, errorHandler) => {
    return promise.then(successHandler).catch(errorHandler);
}

//----------------------------------------------------------

new Promise(function (resolve, reject) {
    setTimeout(() => {
        throw new Error("Whoops!"); //error
    }, 1000)
}).then()


//----------------------------------------------------------
console.log(1);

setTimeout(function () {
    console.log(2);
}, 0);

Promise.resolve().then(console.log('then3'));

console.log(4);

//----------------------------------------------------------

console.log('12' < '2'); //use unicode

console.log(Boolean(' '));

console.log("😀" < "😃"); //also unicode for the comparison

//----------------------------------------------------------

//This is how you make a object inmutable
const o = {
    name: 'foo'
}

Object.freeze(o);

o['lastname'] = 'bar';

console.log(o);

//----------------------------------------------------------


//a way to copy an array, not using the same reference.
arr = [1, 3, 4];
arr2 = arr.slice();
arr2.pop();
console.log(arr, arr2);

//----------------------------------------------------------

comida = {
    fruta: 'fresa'
}

let fruta = 'papaya';
let funcFrut = comprar.call(comida, 'sandia');

funcFrut();

//funcFrut.call(comida);

//let funcFrutBind = funcFrut.bind(comida);

//funcFrutBind();

function comprar(fruta) {
    console.log(this.fruta); //fresa
    return lavar(fruta);

    function lavar(fruta) { //If the fruta parameter is remove you'll get undefind in the console.log because hoisting
        console.log(fruta); //unde ? sandia
        var fruta = 'melon';
        return function comer() {
            console.log(fruta); //melon 
            console.log(this.fruta); //undefind / This to work you will need to bind this o the context require
        }
    }
}

//--------------------------------
//Parameters are also hoisted

var x = 'global'
    (function (y = 5, z = x, x) {}()) // "Uncaught ReferenceError: Cannot access 'x' before initialization"


(function foo() {
    let y = 5;
    let z = x;
    let x = 'global';
    console.log(z);
})();











let funcFrutBind = funcFrut.bind(comida);

funcFrutBind();

(function printNums(num) {
    var j = 5;
    for (let i = 1; i <= num; i++) {
        var j = i;
        setTimeout(() => {
            console.log(j)
        }, 1000);
    }
})(10);



let arr = [1, 2, 3];

console.log(typeof arr);



const obj = {
    root: 5,
    double: function () {
        return this.root * 2;
    },
    triple: () => {
        2 * Math.PI * this.root
    }
}

obj.double(); //10
obj.triple(); //NaN


//------------------------------
//Singleton
let instance = null;

class Animal {
    constructor(name, color, legs) {
        if (!instance) {
            this.name = name;
            this.color = color;
            this.legs = legs;
            instance = this;
        }
        return instance;
    }
}

let perro = new Animal('perrito', 'cafe', 4);
let gato = new Animal('gatito', 'gris', 4);

console.log(perro);
console.log(gato);

//------------------------------
//Singleton 2
let instance = null;

class Animal {
    constructor(name, color, legs) {
        this.name = name;
        this.color = color;
        this.legs = legs;
        instance = this;
    }

    static createAnimal(name, color, legs) {
        if (!instance) {
            return new Animal(name, color, legs);
        }
        return instance;

    }
}

let perro = Animal.createAnimal('perrito', 'cafe', 4);
let gato = Animal.createAnimal('gatito', 'gris', 4);

console.log(perro);
console.log(gato);

//-----------------------------
//Factory
class AnimalFactory {
    constructor(type, name, color, legs) {
        switch (type) {
            case 'perro':
                return new Perro(name, color, legs);
            case 'gato':
                return new Gato(name, color, legs);
        }
    }
}

class Perro {
    constructor(name, color, legs) {
        this.name = name;
        this.color = color;
        this.legs = legs;
        this.talk = 'gua gua';
    }

}

class Gato {
    constructor(name, color, legs) {
        this.name = name;
        this.color = color;
        this.legs = legs;
        this.talk = 'miau miau';
    }
}

let perro = new AnimalFactory('perro', 'perrito', 'cafe', 4);
let gato = new AnimalFactory('gato', 'gatito', 'gris', 4);

console.log(perro);
console.log(gato);

//------------------------------

'30 pesos' - 27; //3 ??? ==> NaN
"3" + 23; 
console.log(0/0); //NaN
console.log(7/0); //infinite

//------------------------------

//intersection
let arr = [1, 2, 3, 4, 5];
let arr2 = [3, 5, 2, 6, 1];

console.log(arr2.filter((item) => arr.includes(item)));