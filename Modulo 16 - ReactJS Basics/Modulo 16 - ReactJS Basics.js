//1// Refactoring elements with JSX

//2// Creating components
    function Welcome(props) {
        return <h1>Hello, {props.name}</h1>;
    }

//3// Adding component properties and methods

//4// Displaying child components

//5// Working with props and state

    //En una clase, inicializamos el estado count a 0 estableciendo this.state a { count: 0 } en el constructor:
    class Example extends React.Component {
        constructor(props) {
        super(props);
        this.state = {      
            count: 0    
        };  
    }

    /*En un componente de función no existe this por lo que no podemos asignar o leer this.state. En su lugar, 
    usamos el Hook useState directamente dentro de nuestro componente:*/

        import React, { useState } from 'react';

        function Example() {
        // Declaración de una variable de estado que llamaremos "count"  
        const [count, setCount] = useState(0);
        }

    //Cuando queremos mostrar el valor actual de count en una clase lo obtenemos de this.state.count:

        //<p>You clicked {this.state.count} times</p>
      
    //En una función podemos usar count directamente:
      
        //<p>You clicked {count} times</p>

    //En una clase, necesitamos llamar a this.setState() para actualizar el estado count:

        //<button onClick={() => this.setState({ count: this.state.count + 1 })}> Click me </button>
      
    //En una función ya tenemos setCount y count como variables, así que no necesitamos this:
      
        //<button onClick={() => setCount(count + 1)}> Click me </button>

    //----------------------------------------------------------------
            
    /*  
    Render Props
        El término “render prop” se refiere a una técnica para compartir código entre componentes en React utilizando una propiedad cuyo valor es una función.
    */
        <DataProvider render={data => (
        <h1>Hello {data.target}</h1>
        )}/>

//6// Conditional rendering

    function UserGreeting(props) {
        return <h1 > Welcome back! </h1>;
    }

    function GuestGreeting(props) {
        return <h1 > Please sign up. </h1>;
    }

    function Greeting(props) {
        const isLoggedIn = props.isLoggedIn;
        if (isLoggedIn) {
            return <UserGreeting /> ;
        }
        return <GuestGreeting /> ;
    }
    ReactDOM.render(
        // Intentar cambiando isLoggedIn={true}:
        <Greeting isLoggedIn = {false} />, 
        document.getElementById('root'));