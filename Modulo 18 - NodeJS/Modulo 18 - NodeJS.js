//1// NodeJS Setup
    /*
    Installation of NodeJS and NPM is straightforward using the installer package available at NodeJS official web site.

        -Download the installer from NodeJS WebSite.
        -Run the installer.
        -Follow the installer steps, agree the license agreement and click the next button.

        > node -v
    */

//3// Global Object
    /*While in browsers the global scope is the window object, in nodeJS the global scope of a module is the module itself, 
    so when you define a variable in the global scope of your nodeJS module, it will be local to this module.*/

    /*
    module
    process
    console
    Event
    EventTarget
    __dirname
    __filename
    exports
    module
    require()

    */
//4// HTTP Module
    /*
    To use the HTTP server and client one must require('http').
    The HTTP interfaces in Node.js are designed to support many features of the protocol which have been traditionally difficult to use. 
    In particular, large, possibly chunk-encoded, messages. The interface is careful to never buffer entire requests or responses, so the user is able to stream data.
    */

//5// File System
    /*
    The fs module enables interacting with the file system in a way modeled on standard POSIX functions.
    To use the promise-based APIs:

        const fs = require('fs/promises');

    To use the callback and sync APIs:

        const fs = require('fs');
    */

//6// Events
    /*
    Much of the Node.js core API is built around an idiomatic asynchronous event-driven architecture in which certain kinds of objects 
    (called "emitters") emit named events that cause Function objects ("listeners") to be called.

    For instance: a net.Server object emits an event each time a peer connects to it; a fs.ReadStream emits an event when the file is opened; 
    a stream emits an event whenever data is available to be read.

    All objects that emit events are instances of the EventEmitter class. These objects expose an eventEmitter.on() function that allows 
    one or more functions to be attached to named events emitted by the object. Typically, event names are camel-cased strings but any 
    valid JavaScript property key can be used.

    When the EventEmitter object emits an event, all of the functions attached to that specific event are called synchronously. 
    Any values returned by the called listeners are ignored and discarded.

    The following example shows a simple EventEmitter instance with a single listener. The eventEmitter.on() method is used to register 
    listeners, while the eventEmitter.emit() method is used to trigger the event.

        const EventEmitter = require('events');

        class MyEmitter extends EventEmitter {}

        const myEmitter = new MyEmitter();
        myEmitter.on('event', () => {
        console.log('an event occurred!');
        });
        myEmitter.emit('event');
    */

//7// NodeJS vs Browser
    /*
    Both the browser and Node.js use JavaScript as their programming language.

    Building apps that run in the browser is a completely different thing than building a Node.js application.

    Despite the fact that it's always JavaScript, there are some key differences that make the experience radically different.

    From the perspective of a frontend developer who extensively uses JavaScript, Node.js apps bring with them a huge advantage: 
    the comfort of programming everything - the frontend and the backend - in a single language.

    You have a huge opportunity because we know how hard it is to fully, deeply learn a programming language, and by using the same 
    language to perform all your work on the web - both on the client and on the server, you're in a unique position of advantage.

    What changes is the ecosystem.

    In the browser, most of the time what you are doing is interacting with the DOM, or other Web Platform APIs like Cookies. 
    Those do not exist in Node.js, of course. You don't have the document, window and all the other objects that are provided by the browser.

    And in the browser, we don't have all the nice APIs that Node.js provides through its modules, like the filesystem access functionality.

    Another big difference is that in Node.js you control the environment. Unless you are building an open source application that 
    anyone can deploy anywhere, you know which version of Node.js you will run the application on. Compared to the browser environment, 
    where you don't get the luxury to choose what browser your visitors will use, this is very convenient.

    This means that you can write all the modern ES6-7-8-9 JavaScript that your Node.js version supports.

    Since JavaScript moves so fast, but browsers can be a bit slow to upgrade, sometimes on the web you are stuck with using older 
    JavaScript / ECMAScript releases.

    You can use Babel to transform your code to be ES5-compatible before shipping it to the browser, but in Node.js, you won't need that.

    Another difference is that Node.js uses the CommonJS module system, while in the browser we are starting to see the ES Modules 
    standard being implemented.

    In practice, this means that for the time being you use require() in Node.js and import in the browser.
    */

//8// Databases overview