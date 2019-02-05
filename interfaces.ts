// // First interface
// function printLabel ( labelledObj: { label: string } ) {
// 	console.log( labelledObj.label );
// }

// let myObj = { size: 10, label: 'Size 10 Object' };

// printLabel( myObj );

// interface LabelledValue {
// 	label: string;
// }

// function printLabel ( labelledObj: LabelledValue ) {
// 	console.log( labelledObj.label );
// }

// let myObj = { size: 10, label: 'Size 10 object' };

// printLabel( myObj );

// // Optional properties
// interface SquareConfig {
// 	color?: string;
// 	width?: number;
// }

// function createSquare ( config: SquareConfig ):
// 	  { color: string; area: number } {
// 	let newSquare = { color: 'white', area: 100 };

// 	if ( config.color ) {
// 		newSquare.color = config.color;
// 	}
// 	if ( config.width ) {
// 		newSquare.area = config.width * config.width;
// 	}
// 	return newSquare;
// }

// let mySquare = createSquare( { color: 'black' } );

// console.log( mySquare );

// // optional properties allow to describe these possibly available properties
// // while still also preventing use of properties that are no part of the
// // interface.
// interface SquareConfig {
// 	color?: string;
// 	width?: number;
// }

// function createSquare ( config: SquareConfig ):
// 	  { color: string; area: number } {
// 	let newSquare = { color: 'white', area: 100 };

// 	if ( config.clor ) { // Error: Property 'clor' does not exist
// 						// on type 'SquareConfig'
// 		newSquare.color = config.color;
// 	}
// 	if ( config.width ) {
// 		newSquare.area = config.width * config.width;
// 	}
// 	return newSquare;
// }

// let mySquare = createSquare( { color: 'black' } );

// // Readonly properties
// interface Point {
// 	readonly x: number;
// 	readonly y: number;
// }

// let p1: Point = { x: 10, y: 20 };

// p1.x = 5; // error!

// // typescript comes with a ReadonlyArray<T> type that is the same as Array<T>,
// // with all mutating methods removed
// let a: number[] = [ 1, 2, 3, 4 ];
// let ro: ReadonlyArray<number> = a;

// ro[ 0 ] = 12; // error!
// ro.push( 5 ); // error!
// ro.length = 100; // error!
// a = ro; // error!

// // You can still override it with a type assertion
// a = ro as number[];

// readonly vs const
// variables use const whereas properties use readonly

// // Excess Property Checks
// interface SquareConfig {
// 	color?: string;
// 	width?: number;
// }

// function createSquare ( config: SquareConfig ):
// 	  { color: string; area: number } {
// 	let newSquare = { color: 'white', area: 100 };

// 	if ( config.color ) {
// 		newSquare.color = config.color;
// 	}
// 	if ( config.width ) {
// 		newSquare.area = config.width * config.width;
// 	}
// 	return newSquare;
// }

// // error: 'colour' not expected in type 'SquareConfig'
// let mySquare = createSquare( { colour: 'red', width: 100 } );

// // getting around these checks is actually really simple. The easiest
// // method is to just use a type assertion
// let mySquare = createSquare( { width: 100, opacity: 0.5 } as SquareConfig );

// // a better approach might be to add a string index signature if you are sure
// // that the object can have some extra properties that are used in
// // some special way.
// interface SquareConfig {
// 	color?: string;
// 	width?: number;
// 	[ propName: string ]: any;
// }

// let mySquare = createSquare( { width: 100, opacity: 0.5 } );

// // one final way to get around these checks, is to assign the object
// // to another variable
// let squareOptions = { width: 100, opacity: 0.5 };
// let mySquare = createSquare( squareOptions );

// Function Types
interface SearchFunc {
	( source: string, subString: string ): boolean;
}

// let mySearch: SearchFunc;

// mySearch = function ( source: string, subString: string ) {
// 	let result = source.search( subString );
// 	return result > -1;
// }

// // for function types to correctly type-check, the names of the parameters
// // do not need to match
// let mySearch: SearchFunc;

// mySearch = function ( src: string, sub: string ) {
// 	let result = src.search( sub );
// 	return result > -1;
// }

// typescript's contextual typing can infer the argument types since the
// function value is assigned directly to a variable of type SearchFunc.
let mySearch: SearchFunc;

mySearch = function ( src, sub ) {
	let result = src.search( sub );
	return result > -1;
};