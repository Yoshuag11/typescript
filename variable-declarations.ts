// // var declarations
// var a = 10;
// // declare variable inside function
// function f () {
// 	var message = 'Hello, world!';
// 	return message;
// }
// accessing those variables within other functions
// function f () {
// 	var a = 10;
// 	return function g () {
// 		var b = a + 1;
// 		return b;
// 	}
// }

// var g = f();
// console.log( g ); // returns 11

// function f () {
// 	var a = 1;

// 	a = 2;

// 	var b = g();

// 	a = 3;
// 	return b;

// 	function g () {
// 		return a;
// 	}
// }

// console.log( f() ); // 2

// // Scoping rules
// function f ( shouldInitialize: boolean ) {
// 	if ( shouldInitialize ) {
// 		var x = 10;
// 	}
// 	return x;
// }

// f( true ); // returns 10
// f( false ); // returns 'undefined'

// // not a problem to declare the same function several times
// function sumMatrix ( matrix: number[][] ) {
// 	var sum = 0;

// 	for ( var i = 0; i < matrix.length; i += 1 ) {
// 		var currentRow = matrix[ i ];

// 		for ( var i = 0; i < currentRow.length; i += 1 ) {
// 			sum += currentRow[ i ];
// 		}
// 	}
// 	return sum;
// }

// variable capturing quirks
// for ( var i = 0; i < 10; i += 1 ) {
// 	setTimeout( function () { console.log( i ) }, 100 * i );
// }

// for ( var i = 0; i < 10; i += 1 ) {
// 	setTimeout( function ( i ) { console.log( i ) }, 100 * i, i );
// }

// // let declarations
// let hello = 'hello!';

// Block-scoping
// function f ( input: boolean ) {
// 	let a = 100;

// 	if ( input ) {
// 		// Still ok to reference 'a'
// 		let b = a + 1;
// 		return b;
// 	}
// 	return b; // error: 'b' does not exist here
// }

// // variables declared in a catch clause also have similar scoping rules
// try {
// 	throw 'oh no!';
// } catch ( e ) {
// 	console.log( 'Oh well.' );
// }

// console.log( e );

// can not read or write to them before they are actually created
// a++; // illegal to use 'a' before it's declared
// let a;

// though it is possible to capture a block-scoped variable before
// it is declared
// function foo() {
// 	// okay to capture 'a'
// 	// console.log( a );
// 	return a;
// }

// // illegal call to 'foo' before 'a' is declared
// // runtime should return an error here
// foo();

// let a;

// // Re-declaration and Shadowing
// let x = 10;
// let x = 20; // error: can't re-declare 'x' in the same scope

// function f ( x ) {
// 	let x = 100; // error: interferes with parameter declaration
// }
// function g () {
// 	let x = 100;
// 	var x = 100; // error: can't have both declarations
// }
// // the action of introducing a new name in a more nested scope
// // is called shadowing.
// function f ( condition, x ) {
// 	if ( condition ) {
// 		let x = 100;
// 		return x;
// 	}
// 	return x;
// }

// console.log( f( false, 0 ) );
// console.log( f( true, 0 ) );
// function sumMatrix ( matrix: number[][] ) {
// 	let sum = 0;

// 	for ( let i = 0; i < matrix.length; i += 1 ) {
// 		var currentRow = matrix[ i ];

// 		for ( let i = 0; i < currentRow.length; i += 1 ) {
// 			sum += currentRow[ i ];
// 		}
// 	}
// 	return sum;
// }

// // Block-scoped variable capturing
// function theCityThatAlwaysSleeps () {
// 	let getCity;

// 	if ( true ) {
// 		let city = 'Seattle';

// 		getCity = function () {
// 			return city;
// 		};
// 	}
// 	return getCity();
// }

// console.log( theCityThatAlwaysSleeps() );

// for ( let i = 0; i < 10; i += 1 ) {
// 	setTimeout( function () { console.log( i ) }, i * 100 );
// }

// // const declarations
// const numLivesForCat = 9;
// const kitty = {
// 	name: 'Aurora',
// 	numLives: numLivesForCat
// };
// // error
// kitty = {
// 	name: 'Danielle',
// 	numLives: numLivesForCat
// };
// // all "okay"
// kitty.name = 'Rory';
// kitty.name = 'Kitty';
// kitty.name = 'Cat';
// kitty.numLives--;

// // Destructuring
// // Array destructuring
// let input = [ 1, 2 ];
// let [ first, second, three ] = input;

// console.log( first ); // outputs 1
// console.log( second ); // outputs 2
// console.log( three ); // outputs undefined
// // destructuring works with already-declared variables as well
// // swap variables
// [ first, second ] = [ second, first ];

// and with parameters to functions
// function f ( [ first, second ]: [ number, number ] ) {
// 	console.log( first );
// 	console.log( second );
// }

// f( [ 1, 2 ] );

// // you can create a variable with the remaining items in a list
// // using the syntax "...":
// let [ first, ...rest ] = [ 1, 2, 3, 4 ];

// console.log( first ); // outputs 1
// console.log( rest ); // outputs [ 2, 3, 4 ]

// // or you can just ignore trailing elements
// let [ first ] = [ 1, 2, 3, 4 ];
// console.log( first );

// // or other elements
// let [ , second, , fourth ] = [ 1, 2, 3, 4 ];
// console.log( second );
// console.log( fourth );

// // Object destructuring
// let o = {
// 	a: 'foo',
// 	b: 12,
// 	c: 'bar'
// };
// let { a, b } = o;

// console.log( a );
// console.log( b );

// Like array destructuring, you can have assignment without declaration
// ( { a, b }  = { a: 'baz', b: 101 } );

// console.log( a );
// console.log( b );

// // you can create a variable for the remaining items in an object
// // using the syntax "...":
// let { a, ...passthrough } = o;
// let total = passthrough.b + passthrough.c.length;

// console.log( passthrough );
// console.log( total );

// // Property renaming
// let { a: newName1, b: newName2 } = o;

// console.log( newName1 );
// console.log( newName2 );

// // it is the same a if you have written:
// let newName1 = o.a;
// let newName2 = o.b;

// console.log( newName1 );
// console.log( newName2 );

// // confusingly here, the colon doe not specify the type. The type,
// // if you specify it, still needs to be written after the entire
// // destructuring.
// let { a: newName1, b }: { a: string, b: number } = o;

// // Default values
// function keepWholeObject ( wholeObject: { a: string, b?: number } ) {
// 	let { a, b = 1001 } = wholeObject;
// 	console.log( a );
// 	console.log( b );
// }
// keepWholeObject( { a: 'Hello World!', b: 4 } );
// keepWholeObject( { a: 'Hello World!' } );
// keepWholeObject( o );

// // Function declarations
// type C = { a: string, b?: number }

// function f ( { a, b }: C ): void {
// 	// ...
// }

// specifying defaults for parameters. You need to put the pattern before
// the default value.
// the following example is an example of type inference
// function f ( { a = 'default', b = 0 } = {} ): void {
// function f ( { a = 'default', b = 0 } ): void {
// function f ( { a = 'default', b = 0 } = {} ): void {
// 	// ...
// 	console.log( a );
// 	console.log( b );
// }

// f();

// function f ( { a, b = 0 } = { a: '' } ): void {
// 	console.log( a );
// 	console.log( b );
// }

// f( { a: 'yes' } ); // ok, default b = 0
// f(); // ok, default to { a: "" }, which then defaults b = 0
// f( {} ); // error, 'a' is required if you supply an argument

// // Spread
// // it is the opposite of destructuring
// let first = [ 1, 2 ];
// let second = [ 3, 4 ];
// let bothPlus = [ 0, ...first, ...second, 5 ];

// let defaults = { food: 'spicy', price: '$$', ambiance: 'noisy' };
// let search = { ...defaults, food: 'rich' };

// let defaults = { food: 'spicy', price: '$$', ambiance: 'noisy' };
// let search = { food: 'rich', ...defaults };

// // object spread only includes object´s own enumerable properties
// class C {
// 	p = 12;
// 	m () {}
// }

// let c = new C();
// let clone = { ...c };
// clone.p; // ok
// clone.m(); // error!