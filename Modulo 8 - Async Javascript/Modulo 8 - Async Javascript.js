//1// Async Javascript
    /*
    Javascript utiliza un modelo asíncrono y no bloqueante, 
    con un loop de eventos implementado con un único thread para sus interfaces de entrada/salida.

    Asíncronas y No-Bloqueantes:

    La petición devuelve inmediatamente para evitar el bloqueo.
    Se envía una notificación una vez que la operación se ha completado. 
    entonces cuando la función que procesará la respuesta (callback) se encola para ser ejecutada en algún momento en nuestra aplicación.

    Gracias a esta solución, Javascript es áltamente concurrente a pesar de emplear un único thread.
    */
    
          
//2// Callback hell
    /*
    Consiste en múltiples Callbacks anidados que provocan que el código se vuelva difícil de leer y ‘debuggear’; 
    ésta es la principal razón por la cual se debe evitar.
    
    ¿Como puedo evitar el Callback Hell?
        Muchos programadores quedan atrapados en el callback hell debido a malas prácticas de programación, 
        realmente no planean la estructura de su código y no se dan cuenta de lo mal que que está estructurado hasta que es demasiado tarde. 
        Al igual que con cualquier código que escribes, deberías detenerte y pensar que se puede hacer para que sea más simple y más legible antes, 
        durante, y después de escribirlo.
        •	Diseño Modular
        •	Nombra tus funciones
        •	Declara tus funciones al principio
        •	Promises
    */
        setTimeout(function(){
            console.log("Etapa 1 completada");
            setTimeout(function(){
              console.log("Etapa 2 completada");
              setTimeout(function(){
                console.log("Etapa 3 completada");
                setTimeout(function(){
                  console.log("Etapa 4 completada");
                  // Podríamos continuar hasta el infinito...
                }, 4000);
              }, 3000);
            }, 2000);
          }, 1000);
        
    //Promise:
        // Callback approach
        async1(function(){
            async2(function(){
                async3(function(){
                    codigo;
                });
            });
        });

        // Promise approach with chaining
        async1(function(){codigo})
            .then(async2)
            .then(async3)
            .catch(function(){
            // Solve your thrown errors here
        });

        /*
        Para que Promise pueda hacer que (2) y (3) funcionen, la función asíncrona debe retornar un Object Promise. Este Object Promise 
        tiene 2 métodos, then y catch. Los métodos serán llamados dependiendo del estado (fulfilled || rejected) del Object Promise.
        */

//3// Promises
    /*
    Una promesa es un objeto que representa el resultado de una operación asíncrona. Este resultado podría estar disponible ahora o en el futuro. 
    Las promesas se basan en callbacks pero añaden azúcar para un mejor manejo y sintaxis. Las promesas son especiales en términos de asincronía 
    ya que añaden un nuevo nivel de prioridad.

    Consumiendo Promesas
        Cuando llamamos a una función asíncrona implementada con este patrón, nos devolverá inmediatamente una promesa como garantía de que 
        la operación asíncrona finalizará en algún momento, ya sea con éxito o con fallo. Una vez que tengamos el objeto promesa en 
        nuestro poder, registramos un par de callbacks: uno para indicarle a la promesa 'que debe hacer en caso de que todo vaya bien' 
        (resolución de la promesa o resolve) y otro para determinar 'que hacer en caso de fallo' (rechazo de la promesa o reject).

        A resumidas cuentas, una promesa es un objeto al que le adjuntamos callbacks, en lugar de pasarlos directamente a la función asíncrona. 
        La forma en que registramos esos dos callbacks es mediante el método .then(resolveCallback, rejectCallback). 
        En terminología de promesas, decimos que una promesa se resuelve con éxito (resolved) o se rechaza con fallo (rejected). 
        Echa un vistazo al siguiente ejemplo:
    */
        const promise = fetch(currentURL);
        promise.then(result => console.log(result),
            e => console.log(`Error capturado:  ${e}`));
        
    //Creando Promesas
        const myAsyncFunction = () => {
            return new Promise((resolve, reject) => {
        
            // Carga de la promesa (normalmente tareas asíncronas).
        
            if ( /* evalúa condición */ a ) {
                resolve(`Éxito!`);
            } else {
                reject(`Fallo!`);
            }
            });
        }

    /*Asincronía en Promesas
        La idea detrás de una segunda cola de alta prioridad es que los callbacks de cada promesa se almacenen aquí, de modo que cuando un 
        nuevo tick del bucle de eventos tenga lugar, esta cola prioritaria será atendida primero. Asi pues, nos aseguramos que los callbacks 
        de las promesas se ejecutarán en un futuro, si, pero lo antes posible.
    */  
        // LLamada asíncrona con callback puro.
        setTimeout(() => console.log("1"), 0); 

        // LLamada asíncrona con promesa.
        Promise.resolve().then(() => console.log("2"));

        // 2
        // 1

    /*
    A JavaScript Promise object can be:
        •	Pending
        •	Fulfilled
        •	Rejected
        The Promise object supports two properties: state and result.
        While a Promise object is "pending" (working), the result is undefined.
        When a Promise object is "fulfilled", the result is a value.
        When a Promise object is "rejected", the result is an error object.
    */

//4// Async await
    /*An async function is a function declared with the async keyword, and the await keyword is permitted within them. 
    The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style,
     avoiding the need to explicitly configure promise chains.

        "async and await make promises easier to write"
        async makes a function return a Promise
        await makes a function wait for a Promise
    */

        function resolveAfter2Seconds() {
            return new Promise(resolve => {
              setTimeout(() => {
                resolve('resolved');
              }, 2000);
            });
        }
          
        async function asyncCall() {
            console.log('calling');
            const result = await resolveAfter2Seconds();
            console.log(result);
            // expected output: "resolved"
        }
          
        asyncCall();

//5// Promise static methods
    Promise.all(iterable)
        /*
        Promise.all() acepta un array de promesas y devuelve una nueva promesa cuya resolución se completará con éxito una vez que todas 
        las promesas originales se hayan resuelto satisfactoriamente, o en caso de fallo, será rechazada en cuanto una de las promesas 
        originales sea rechazada. Esta promesa compuesta, además, nos devolverá un array con los resultados de cada una de las promesas 
        originales. Veamos un sencillo ejemplo:
        */  
            const p1 = fetch("URL1_Aqui");
            const p2 = fetch("URL2_Aqui");
            const p3 = fetch("URL3_Aqui");

            Promise.all([p1, p2, p3])
            .then(resultArray => console.log(resultArray))
            .catch(e => console.log(`Error capturado:  ${e}`));

    Promise.allSettled(iterable)
        /*
        The Promise.allSettled() method returns a promise that resolves after all of the given promises have either fulfilled or rejected, 
        with an array of objects that each describes the outcome of each promise.

        It is typically used when you have multiple asynchronous tasks that are not dependent on one another to complete successfully, 
        or you'd always like to know the result of each promise.

        In comparison, the Promise returned by Promise.all() may be more appropriate if the tasks are dependent on each other / if you'd like 
        to immediately reject upon any of them rejecting.
        */
            const promise1 = Promise.resolve(3);
            const promise2 = new Promise((resolve, reject) => setTimeout(reject, 100, 'foo'));
            const promises = [promise1, promise2];
            
            Promise.allSettled(promises).
            then((results) => results.forEach((result) => console.log(result.status)));
            
            // expected output:
            // "fulfilled"
            // "rejected"
            
    Promise.any(iterable)
        /*
        Promise.any() takes an iterable of Promise objects and, as soon as one of the promises in the iterable fulfills, returns a single promise 
        that resolves with the value from that promise. If no promises in the iterable fulfill (if all of the given promises are rejected), 
        then the returned promise is rejected with an AggregateError, a new subclass of Error that groups together individual errors. 
        Essentially, this method is the opposite of Promise.all().
        */

    Promise.race(iterable)
        /*
        El mecanismo de Promise.race() es similar a Promise.all() con la diferencia de un pequeño matiz. La promesa compuesta que devuelve .race() 
        será resuelta tan pronto como se resuelva alguna de las promesas originales, ya sea con éxito o fallo. De ahí el nombre del método, es 
        una competición, la primera en terminar gana. Puedes comprobar tu mismo con el ejemplo anterior cual de las 3 URLs tarda menos en cargar:
        */  

            Promise.race([p1, p2, p3])
            .then(winnerResult => console.log(winnerResult))
            .catch(e => console.log(`Error capturado:  ${e}`));

    Promise.reject(reason) 
        //The Promise.reject() method returns a Promise object that is rejected with a given reason.
            function resolved(result) {
                console.log('Resolved');
            }
            
            function rejected(result) {
                console.error(result);
            }
            
            Promise.reject(new Error('fail')).then(resolved, rejected);
            // expected output: Error: fail

    Promise.resolve(value)
        /*
        The Promise.resolve() method returns a Promise object that is resolved with a given value. If the value is a promise, that promise is returned; 
        if the value is a thenable (i.e. has a "then" method), the returned promise will "follow" that thenable, adopting its eventual state; 
        otherwise the returned promise will be fulfilled with the value.
        */
            Promise.resolve(value);
            
//6// Handling errors in Promises, async await
    /*
    Manejo de Errores
        Si una promesa gestionada por await es rechazada o un error se dispara dentro de la función declarada como async, 
        la promesa que automáticamente devuelve la función async también será rechazada. En este caso, podemos encadenar un .catch() 
        para notificar el error:
    */
        checkServerWithSugar(document.URL.toString())
        .then(result => console.log(result))
        .catch(e => console.log(`Error Capturado Fuera de la función async: ${e}`));

    //si necesitáramos gestionar estos erroes internamente, en la propia función async, deberemos envolver nuestro código con un try / catch 
    //del siguiente modo:
        const checkServerWithSugar = async (url) => {
            try {
            const response = await fetch(url);
            return `Estado del servidor: ${response.status === 200 ? "OK" : "NOT OK"}`;
            } catch (e) {
            throw `Manejo intero del error. Error original: ${e}`;
            }
        }
        
        checkServerWithSugar(document.URL.toString())
            .then(result => console.log(result))
            .catch(e => console.log(`Error Capturado Fuera de la función async: ${e}`));

//7// Event Loop
    /*
       Cuando la pila de llamadas (call stack) se vacía, es decir, no hay nada más que ejecutar, se procesan los mensajes de la cola. 
       Con cada 'tick' del bucle de eventos, se procesa un nuevo mensaje. Este procesamiento consiste en llamar al callback asociado 
       a cada mensaje lo que dará lugar a un nuevo frame en la pila de llamadas. Este frame inicial puede derivar en muchos más, 
       todo depende del contenido del callback. Un mensaje se termina de procesar cuando la pila vuleve a estar vacía de nuevo. 
       A este comportamiento se le conoce como 'run-to-completion'.
     */

//8// Stack, Heap, Queue
    /*
    Call Stack
        Traducido, pila de llamadas, se encarga de albergar las instrucciones que deben ejecutarse. Nos indica en que punto del programa estamos, 
        por donde vamos. Cada llamada a función de nuestra aplicación, entra a la pila generando un nuevo frame (bloque de memoria reservada 
        para los argumentos y variables locales de dicha función). Por tanto, cuando se llama a una función, su frame es insertado arriba 
        en la pila, cuando una función se ha completado y devuelve, su frame se saca de la pila también por arriba. 
        El funcionamiento es LIFO: last in, first out. De este modo, las llamadas a función que están dentro de otra función 
        contenedora son apiladas encima y serán atendidas primero.

    Heap
        Región de memoria libre, normalmente de gran tamaño, dedicada al alojamiento dinámico de objetos. Es compartida por todo el programa y 
        controlada por un recolector de basura que se encarga de liberar aquello que no se necesita.

    Cola o Queue
        Cada vez que nuestro programa recibe una notificación del exterior o de otro contexto distinto al de la aplicación 
        (como es el caso de operaciones asíncronas), el mensaje se inserta en una cola de mensajes pendientes y se registra su callback 
        correspondiente. Recordemos que un callback era la función que se ejecutará como respuesta.
    */



