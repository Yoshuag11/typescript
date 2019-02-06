// // Basics
// let x = 3;
// // x variable is inferred to be number.

// // Best common type
// let x = [ 0, 1, null ];

// let zoo: Animal[] = [ new Rhino(), new Elephant(), new Snake() ];

// when no best common type is found, the resulting inference reference is the
// union array type, ( Rhino | Elephant | Snake ) []

// // Contextual Type
// // contextual typing occurs when the type of an expression is implied by
// // its location
// window.onmousedown = function ( mouseEvent ) {
// 	console.log( mouseEvent.clickTime ); // <- Error
// };

// // if the contextually typed expression contains explicit type information, the
// // contextual type is ignored.
// window.onmousedown = function ( mouseEvent: any ) {
// 	console.log( mouseEvent.clickTime ); // <- Now, no error is given
// };

// // the contextual type also acts as a candidate type in best common type
// function createZoo (): Animal[] {
// 	return [ new Rhino(), new Elephant(), new Snake() ];
// }

// // in this example, best common type has a set of four candidates: Animal,
// // Rhino, Elephant, and Snake. Of these, Animal can be chosen by the best
// // common type algorithm.