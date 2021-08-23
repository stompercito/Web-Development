//1// AJAX, XMLHTTPRequest
    /*
    AJAX = Asynchronous JavaScript And XML.

    AJAX is not a programming language.

    AJAX just uses a combination of:

        A browser built-in XMLHttpRequest object (to request data from a web server)
        JavaScript and HTML DOM (to display or use the data)

    AJAX allows web pages to be updated asynchronously by exchanging data with a web server behind the scenes. 
    This means that it is possible to update parts of a web page, without reloading the whole page.

    XMLHttpRequest
    XMLHttpRequest (XHR) objects are used to interact with servers. You can retrieve data from a URL without 
    having to do a full page refresh. This enables a Web page to update just part of a page without disrupting 
    what the user is doing. XMLHttpRequest is used heavily in AJAX programming.
    */

//2// fetch
    /*
    La API Fetch proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, tales como 
    peticiones y respuestas. También provee un método global fetch() que proporciona una forma fácil y lógica de 
    obtener recursos de forma asíncrona por la red.

        The Promise returned from fetch() won’t reject on HTTP error status even if the response is an HTTP 404 or 500. 
        Instead, as soon as the server responds with headers, the Promise will resolve normally (with the ok property of 
        the response set to false if the response isn’t in the range 200–299), and it will only reject on network 
        failure or if anything prevented the request from completing.

        fetch() won’t send cross-origin cookies unless you set the credentials init option.

    A basic fetch request is really simple to set up. Have a look at the following code:
    */
        fetch('http://example.com/movies.json')
            .then(response => response.json())
            .then(data => console.log(data));

    //The fetch() method can optionally accept a second parameter, an init object that allows you to control a 
    //number of different settings:

        // Example POST method implementation:
        async function postData(url = '', data = {}) {
            // Default options are marked with *
            const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, 
                                            //same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(data) // body data type must match "Content-Type" header
            });
            return response.json(); // parses JSON response into native JavaScript objects
        }
        
        postData('https://example.com/answer', { answer: 42 })
            .then(data => {
            console.log(data); // JSON data parsed by `data.json()` call
            });
        

//3// Request Headers
    /*
    HTTP headers let the client and the server pass additional information with an HTTP request or response. 
    An HTTP header consists of its case-insensitive name followed by a colon (:), then by its value. Whitespace before the value 
    is ignored.

    Headers can be grouped according to their contexts:

    - Request headers contain more information about the resource to be fetched, or about the client requesting the resource.

    - Response headers hold additional information about the response, like its location or about the server providing it.

    - Representation headers contain information about the body of the resource, like its MIME type, or encoding/compression applied.

    - Payload headers contain representation-independent information about payload data, including content length and the encoding 
      used for transport.

        A request header is an HTTP header that can be used in an HTTP request to provide information about the request context, 
        so that the server can tailor the response. For example, the Accept-* headers indicate the allowed and preferred formats 
        of the response. Other headers can be used to supply authentication credentials (e.g.  Authorization), to control caching, 
        or to get information about the user agent or referrer, etc.
    */
    
//4// JSONP
    /*
    JSONP is really a simple trick to overcome the XMLHttpRequest same domain policy. (As you know one cannot send AJAX (XMLHttpRequest) 
    request to a different domain.)

    So - instead of using XMLHttpRequest we have to use script HTML tags, the ones you usually use to load js files, in order for js 
    to get data from another domain. 
    
    JSONP is a method for sending JSON data without worrying about cross-domain issues.
    JSONP does not use the XMLHttpRequest object.
    JSONP uses the <script> tag instead.

    JSONP Intro
        JSONP stands for JSON with Padding.
        Requesting a file from another domain can cause problems, due to cross-domain policy.
        Requesting an external script from another domain does not have this problem.
        JSONP uses this advantage, and request files using the script tag instead of the XMLHttpRequest object.
    */
    
//5// REST
    /*
    La transferencia de estado representacional (o REST por sus siglas en inglés) es un estilo de arquitectura de software que maneja la 
    relación cliente-servidor con el propósito de aumentar la velocidad y el rendimiento usando componentes reutilizables.

    Podemos utilizarlo para recuperar o enviar información a través de un servicio web, lo cual se hace mediante peticiones HTTP a la API REST.

    Una API REST es un modo sencillo de acceder a servicios web sin excesivo procesado. Cuando se llama a una API RESTful, el servidor transferirá 
    al cliente una representación del estado de recurso solicitado.

    ¿Cuales son las características básicas de REST?

        - Sin estado (stateless): Significa que los datos del cliente no se almacenan en el servidor, la sesión se guarda del lado del cliente 
          (normalmente, almacenamiento de sesión).
        - Cliente <-> Servidor: Existe una separación de responsabilidades entre el front-end (cliente) y el back-end (servidor). 
          Operan de forma independiente y ambos son reemplazables.
        - Caché: Los datos del servidor pueden ser cacheados en el cliente, mejorando su rendimiento.
        - Composición de la URL: Se usa un enfoque estandarizado para componer la URL base. Por ejemplo, una petición get a /ciudades debería 
          devolver todas las ciudades de la base de datos, mientras que una petición get a /ciudades/detroit devolvería la ciudad con identificador 
          ‘detroit’. De forma similar, REST utiliza métodos estándar como get, put, delete y post para realizar acciones, lo veremos en la 
          siguiente sección.
    */

//6// URL, Encoding strings
    /*
    URL encoding converts characters into a format that can be transmitted over the Internet.
    The encodeURIComponent() function encodes a URI by replacing each instance of certain characters by one, two, three, or four escape 
    sequences representing the UTF-8 encoding of the character (will only be four escape sequences for characters composed of two 
    "surrogate" characters). 
    */
        // encodes characters such as ?,=,/,&,:
        console.log(`?x=${encodeURIComponent('test?')}`);
        // expected output: "?x=test%3F"

        console.log(`?x=${encodeURIComponent('шеллы')}`);
        // expected output: "?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"

//7// Cross-Origin Requests
    /*
    If we send a fetch request to another web-site, it will probably fail.

    For instance, let’s try fetching http://example.com:
    */
    try {
        await fetch('http://example.com');
      } catch(err) {
        alert(err); // Failed to fetch
    }
    /*
    Fetch fails, as expected.
    The core concept here is origin – a domain/port/protocol triplet.
    Cross-origin requests – those sent to another domain (even a subdomain) or protocol or port – require special headers from the remote side.
    That policy is called “CORS”: Cross-Origin Resource Sharing.

    CORS exists to protect the internet from evil hackers.
    For many years a script from one site could not access the content of another site.
    */

//8// Long polling
    /*
    Long polling is the simplest way of having persistent connection with server, that doesn’t use any specific protocol like WebSocket or 
    Server Side Events.

    Being very easy to implement, it’s also good enough in a lot of cases.
    So-called “long polling” is a much better way to poll the server.
    It’s also very easy to implement, and delivers messages without delays.

    The flow:
        A request is sent to the server.
        The server doesn’t close the connection until it has a message to send.
        When a message appears – the server responds to the request with it.
        The browser makes a new request immediately.

    The situation when the browser sent a request and has a pending connection with the server, is standard for this method. 
    Only when a message is delivered, the connection is reestablished.
    */
        async function subscribe() {
            let response = await fetch("/subscribe");
        
            if (response.status == 502) {
            // Status 502 is a connection timeout error,
            // may happen when the connection was pending for too long,
            // and the remote server or a proxy closed it
            // let's reconnect
            await subscribe();
            } else if (response.status != 200) {
            // An error - let's show it
            showMessage(response.statusText);
            // Reconnect in one second
            await new Promise(resolve => setTimeout(resolve, 1000));
            await subscribe();
            } else {
            // Get and show the message
            let message = await response.text();
            showMessage(message);
            // Call subscribe() again to get the next message
            await subscribe();
            }
        }
        
        subscribe();    

    //As you can see, subscribe function makes a fetch, then waits for the response, handles it and calls itself again.
    
//9// WebSockets overview
    /*
    A WebSocket is a persistent connection between a client and server. WebSockets provide a bidirectional, full-duplex communications 
    channel that operates over HTTP through a single TCP/IP socket connection. At its core, the WebSocket protocol facilitates message 
    passing between a client and server.
    */
        // Create WebSocket connection.
        const socket = new WebSocket('ws://localhost:8080');

        // Connection opened
        socket.addEventListener('open', function (event) {
            socket.send('Hello Server!');
        });

        // Listen for messages
        socket.addEventListener('message', function (event) {
            console.log('Message from server ', event.data);
        });

//10// HTTP 2.0 overview
    /*
    La ventaja que tiene el uso de un protocolo binario es la facilidad para encontrar el comienzo y el final de cada frame, 
    que es algo realmente complicado en cualquier protocolo de texto. Además, los protocolos binarios son mucho más simples y por lo 
    tanto son menos propensos a tener errores que los protocolos de texto utilizados por las versiones anteriores a HTTP 2.0. 

    HTTP/2 es un protocolo binario que conserva la misma semántica que el protocolo HTTP1.X lo que significa que todos los verbos, 
    cabeceras, etc. siguen funcionando sin cambios. De hecho, HTTP/2 busca resolver los defectos que tiene la comunicación a través TCP 
    (la capa de transporte dentro del protocolo HTTP).
    */
    
//11// Window post messages
    /*
    The window.postMessage() method safely enables cross-origin communication between Window objects; e.g., between a page and a pop-up 
    that it spawned, or between a page and an iframe embedded within it. 
    */
        targetWindow.postMessage(message, targetOrigin, [transfer]);

    //La página B (contenido iframe):
        //<script>
            top.postMessage('hello', 'A');
        //</script>


    //La página A:
        //<script>
            window.addEventListener( "message",
            function (e) {
                    if(e.Origin !== 'B'){ return; } 
                    alert(e.data);
            },
            false);
        //</script>

//12// Cookies
    /*
    Una cookie HTTP, cookie web o cookie de navegador es una pequeña pieza de datos que un servidor envía a el navegador web del usuario. 
    El navegador guarda estos datos y los envía de regreso junto con la nueva petición al mismo servidor. 
    Las cookies se usan generalmente para decirle al servidor que dos peticiones tienen su origen en el mismo navegador web lo que permite, 
    por ejemplo, mantener la sesión de un usuario abierta. Las cookies permiten recordar la información de estado en vista a que 
    el protocolo HTTP es un protocolo sin estado.

    JavaScript can create, read, and delete cookies with the document.cookie property.
    With JavaScript, a cookie can be created like this:
    */
    document.cookie = "username=John Doe"; 
    
//13// Network basics
    /*
    NAT
        En primer lugar vamos a hablar de qué es NAT. Podemos decir que son las siglas de Network Address Translator, o en español traductor 
        de direcciones de red. Su función es precisamente esa, traducir las direcciones para que sean posibles las conexiones.
        En resumen, el NAT ayuda a controlar que las direcciones IPv4 se agoten, administrando direcciones IPv4 locales o privadas de 
        todos los equipos conectados a la red. Entonces, si hay tres ordenadores, dos móviles, una impresora y cualquier otro equipo, cada 
        uno tiene una dirección IP privada, lo que haría un total de siete direcciones. NAT los trata individualmente dentro de la red, pero 
        para Internet, es solo una dirección IP, como si fuera un dispositivo único.

    Proxy
        Los servidores proxy generalmente se usan como un puente entre el origen y el destino de una solicitud.
        Un proxy es un equipo informático que hace de intermediario entre las conexiones de un cliente y un servidor 
        de destino, filtrando todos los paquetes entre ambos. 

    Reverse Proxy
        A reverse proxy server is a type of proxy server that typically sits behind the firewall in a private network and directs client 
        requests to the appropriate backend server.

    Parts of a request and response

    HTTP codes
        Los códigos de estado de respuesta HTTP indican si se ha completado satisfactoriamente una solicitud HTTP específica. 
        Las respuestas se agrupan en cinco clases:
            Respuestas informativas (100–199),
            Respuestas satisfactorias (200–299),
            Redirecciones (300–399),
            Errores de los clientes (400–499),
            y errores de los servidores (500–599).

    RTC
        Real-time communications (RTC) is any mode of telecommunications in which all users can exchange information instantly or with 
        negligible latency or transmission delays. In this context, the term real-time is synonymous with live.

    SSL
        EL SSL proporciona un canal seguro entre dos computadoras o dispositivos que operan a través de Internet o de una red interna. 
        Un ejemplo frecuente es el uso de SSL para proteger las comunicaciones entre un navegador web y un servidor web. 
        Este protocolo cambia la dirección del sitio web de HTTP a HTTPS, donde «S» significa «seguridad».

    HTTPS
        HTTPS (HyperText Transfer Protocol Secure, Protocolo de transferencia de hipertexto) es un protocolo de comunicación de Internet 
        que protege la integridad y la confidencialidad de los datos de los usuarios entre sus ordenadores y el sitio web.
    */