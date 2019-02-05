// Array
// let list: number[] = [ 1, 2, 3 ];
// let list: Array<number> = [ 1, 2, 3 ];
// // Tuple
// let x: [ string, number ];
// x = [ 'hello', 10 ];
// x = [ 10, 'hello', 4, 4, 4 ];
// 
// x[ 3 ] = 'world'; does not work, even though the documentation says so
// // Enum
// enum Color { Red, Green, Blue }
// let c: Color = Color.Green;
// console.log( c );
// // change numbering start
// enum Color { Red = 1, Green, Blue }
// let c: Color = Color.Green;
// console.log( c );
// // set manually the values in the enum
// enum Color { Red = 1, Green = 2, Blue = 4 }
// let c: Color = Color.Blue;
// console.log( c );
// // from numeric to the value
// enum Color { Red = 1, Green, Blue }
// let colorName: string = Color[ 2 ];
// console.log( colorName );
// // Any
// let notSure: any = 4;
// notSure = 'maybe a string instead';
// notSure = false; // ok, definitely a boolean
// // any vs object
// let notSure: any = 4;
// notSure.ifItExists(); // okay, ifItExists might exist at runtime
// notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)
// let prettySure: Object = 4;
// prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'
// // array with a mix of different types
// let list: any[] = [ 1, true, 'free' ];
// list[ 1 ] = 100;
// // Void
// // it is a little like the opposite of any, it represents
// // the absence of a type
// function warnUser (): void {
// 	console.log( 'This is my warning message' );
// }
// // you can only assign null or undefined to void types
// let usable: void = undefined;
// // Null and Undefined
// let u: undefined = undefined;
// let n: null = null;
// let test2: void = undefined;
// let test: void = null; // does not work with --strictNullChecks
// // Never
// // functions returning never
// // function returning never must have unreachable end point
// function error ( message: string ): never {
// 	throw new Error( message );
// }
// // inferred return type is never
// function fail () {
// 	return error( 'Something failed' );
// }
// // function returning never must have unreachable end point
// function infiniteLoop (): never {
// 	while ( true ) {
// 	}
// }
// // Object
// declare function create ( o: object | null ): void;
// create( { prop: 0 } ); //OK
// create( null ); // OK
// create( undefined ); // error only with --strictNullChecks
// create( 42 ); // error
// create( 'string' ); // error
// create( false ); // error
// Type assertions
// type assertions have two forms. "angle-bracket" syntax:
var someValue = 4;
// let strLength: number = (<string>someValue).length;
var strLength = someValue.length;
