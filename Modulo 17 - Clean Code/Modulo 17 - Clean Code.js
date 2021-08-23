//1// What are Technical Debts?
    /*
    Technical debt (also known as tech debt or code debt) describes what results when development teams take actions to expedite the delivery of a 
    piece of functionality or a project which later needs to be refactored. In other words, it’s the result of prioritizing speedy delivery over 
    perfect code.
    */

//2// Meaningful variable names
    //-// Avoid disinformation
    //-// Make Meaningful distinctions
    //-// Pronunceable and searchable

//3// "Boy Scout" rule
    //“Always leave the campground cleaner than you found it”

//4// Javascript naming conventions
    /*
    Variables
        Names are case-sensitive, lowercase and uppercase are different.
        Start variable names with a letter, use camelCase for names.
        Variable names should be self-descriptive, describing the stored value.
        Boolean variables are usually prefixed with is or has.

    Functions
        Names are case-sensitive, lowercase and uppercase are different.
        Start function names with a letter, use camelCase for names.
        Use descriptive names, usually verbs in the imperative form.
        Common prefixes are get, make, apply etc.
        Class methods follow the same rules.

    Constant
        Names are case-sensitive, lowercase and uppercase are different.
        Define constants at the top of your file, function or class.
        Sometimes UPPER_SNAKE_CASE is used, while other times plain camelCase.

    Classes
        Names are case-sensitive, lowercase and uppercase are different.
        Start class names with a capital letter, use PascalCase for names.
        Use descriptive names, explaining the functionality of the class.
        Components, which are used in frontend frameworks follow the same rules.

    Private
        Prefix any variable or function with _ to show intention for it to be private.
        As a convention, this will not prevent other parts of the code from accessing it.
    */

//5// SOLID
    /*
    Los cinco principios de SOLID para el diseño de aplicaciones de software son: 

    S – Single Responsability Principle (SRP) 

    O – Open/Closed Principle (OCP) 

    L – Liskov Substitution Principle (LSP) 

    I – Interface Segretation Principle (ISP) 

    D – Dependency Inversion Principle (DIP) 

    -------------------------------------------
    S – Single Responsability Principle (SRP) (Principio de responsabilidad única) 
    Este principio establece que un componente o clase debe tener una responsabilidad única, sencilla y concreta. Esto simplifica el código al evitar que existan clases que cumplan con múltiples funciones, las cuales son difíciles de memorizar y muchas veces significan una pérdida de tiempo buscando qué parte del código hace qué función. 
    
    O – Open/Closed Principle (OCP) (Principio abierto / cerrado) 
    Este principio establece que los componentes del software deben estar abiertos para extender a partir de ellos, pero cerrados para evitar que se modifiquen. 
    
    L – Liskov Substitution Principle (LSP) (Principio de substitución de Liskov) 
    Este principio establece que una subclase puede ser sustituida por su superclase. Es decir, podemos crear una subclase llamada Auto, la cual deriva de la superclase Vehículo.  Si al usar la superclase el programa falla, este principio no se cumple. 
    
    I – Interface Segretation Principle (ISP) (Principio de segregación de interfaz) 
    Este principio establece que los clientes no deben ser forzados a depender de interfaces que no utilizan. Es importante que cada clase implemente las interfaces que va a utilizar. De este modo, agregar nuevas funcionalidades o modificar las existentes será más fácil. 
    
    D – Dependency Inversion Principle (DIP) (Principio de inversión de dependencias) 
    Este principio establece que los módulos de alto nivel no deben de depender de los de bajo nivel. En ambos casos deben depender de las abstracciones. Alto nivel se refiere a operaciones cuya naturaleza es más amplia o abarca un contexto más general y bajo nivel son componentes individuales más específicos. 
    */
//6// DRY: Don't Repeat Yourself

//7// KISS: Keep It Simple, Stupid

//8// Flexibility and maintainability

//9// General rules
    //-// Avoid magic numbers
    //-// Avoid global variables
    //-// Legible code vs. explanations in comments
    //-// Modularize: Each task requires one function
    //-// Use Ternary conditionals for logical assignment
    //-// Loop optimization (avoid declaring variables inside loops, cache values, etc.
    //-// Never use errors to handle your code flow

//10//Establishing team rules