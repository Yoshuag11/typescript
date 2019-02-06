// // Functions
// // named function
// function add ( x, y ) {
// 	return x + y;
// }

// // anonymous function
// let myAdd = function ( x, y ) {
// 	return x + y;
// };

// // functions can refer to variables outside of the function body. When they do, they're
// // said to "capture" these variables.
// let z = 100;

// function addToZ ( x, y ) {
// 	return x + y + z;
}

// // Function types
// //	Typing the function
// // typeScript can figure out the return type by looking at the return statements, so we
// // can also optionally leave this off in many cases
// function add ( x: number, y: number ): number {
// 	return x + y;
// }

// let myAdd = function ( x: number, y: number ): number {
// 	return x + y;
// };

// //	Writing the function type
// let myAdd: ( x: number, y: number ) => number =
// 		  function ( x: number, y: number ): number {
// 		return x + y;
// 	};

// // the name of the parameters in the function's type is just to help readability.
// // We could have instead written:
// let myAdd: ( baseValue: number, increment: number ) => number =
// 	  function ( x: number, y: number ): number {
// 		return x + y;
// 	};

// //	Inferring the types
// // myAdd has the full function type
// let myAdd = function  ( x: number, y: number ): number {
// 	return x + y;
// }
// // the parameters 'x' and 'y' have the type number
// // this is called contextual typing
// let myAdd: ( baseValue: number, increment: number ) => number = function ( x, y ) {
// 	return x + y;
// };

// Optional and Default Parameters