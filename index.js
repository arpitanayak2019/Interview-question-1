//Question 1 - Difference between "==" and "===" operators.
//Ans)"==" this operator equals two values without checking data types.
//    for Ex - let a = "10";
              // let b = 10;
           //   console.log(a==b);  output= true 
              
//     "===" this operator equals value only when data types are same.
 
//    for ex- let x ="5";
//            let y = 5 ;
//     console.log(x===y);    output =false


//Question 2- what are the difference between var, let ,const?
//Ans ) Var = it is Global scope variable .it can be redeclared and can be updated.
//   for Ex - Var a = 12;
 //           Var a -= 15;

 //      let = its a block scope variable .It can't be redeclared but can be updated.
 //   for Ex - let a = 7;
            // let b = 6;
            
 //     const = its a block scope variable.It can  neither be redeclared nor updated.
 //    for Ex - const result = "true";
 
 //Question 3- what is Execution conetxt?
 //    Ans) In Execution context code runs line by line.

 //Question 4 - what is creation phase and Execution phase ?
 // Ans ) creation phas=e is defined as context set-up where environment is created for running code by creating objects and giving information about functions and events.
 // In Execution context code runs when events and function are called line by line.
 
 //Question 5 - what is hoisting ?
 // Ans) 
 
 //Question 6 - Differenece between undefined vs not defined vs NaN?
 //   not defined = this results  in a referenceError when trying to access a variable that hasn't been declared at all.
 //    for example = console.log(b); where 'b' is not declared will throw an error stating that 'b is not defined'. 
  
 //   undefined   = This occurs when a variable has been declared but not assigned a value.
//    for example - var a;
//                 console.log(a);    output = undefined

//     NaN   = NaN is stands for Not-a-Number 
//      it is a special value used to represent the result of operations that dont yield a valid number
//  for example - 1- Divide 0/0 gives NaN(NOT A NUMBER) output
//                2- performing mathematical function on invalid input i.e square root of a negative number.

//Question 7 -How many operators do we have in js?
// Ans)- we have 20 distinct operators in js across the categories.
//    * Arithmetic operators: '+', '-', '*', '/', '%' ,'++' ,'--'
//    * Assignment operators : '=' ,'+=' ,'-=', '*=',' %=' ,'**='
//    * Comparison operators : '==' ,'===' ,'!=' ,'!=='
//    * Logical operator  : '&&' ,'||','!'
//    * Ternary oprator   : A conditional operator that requires three operands.
//    * Type Operators    :includes 'typeof' 

//Question 8 - Explain local scope, block scope ,functional scope and scope chain in javascript.
//    Ans)- LOCAL SCOPE  - local scope refers to variables that are defined within a specific function.
//     for example - function myFunction() {
                     //  let localVariable = 'I am programmer';
                     //  console.log(localVariable); // Accessible here


                     //   myFunction();
                     // console.log(localVariable); // ReferenceError: localVariable is not defined
//            BLOCK SCOPE  - block scope variables are only visible inside block i.e enclosed in curly braces and these are 'let' , 'const'
//       for example - {
                  //      let blockVariable = 'I am block scoped';
                  //       console.log(blockVariable); // Accessible here
                  //   // }

                  //         console.log(blockVariable); // ReferenceError: blockVariable is not defined

 //          FUNCTIONAL SCOPE - functional scope is a type of local scope that refers variables defined within a fumction.
 //       for example - function anotherFunction() {
                        //  var functionalVariable = 'I am function scoped';
                        //   console.log(functionalVariable); // Accessible here
//                       }

                        // anotherFunction();
                        // console.log(functionalVariable); // ReferenceError: functionalVariable is not defined
                        
              
 


                   
