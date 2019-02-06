// // Generics
// // Hello World of Generics
// // without generics
// function identity ( arg: number ): number {
// 	return arg;
// }
// // using any
// function identity ( arg: any ): any {
// 	return arg;
// }
// // using "type variable", a special kind of variable that works on types
// // rather tan values
// function identity<T> ( arg: T ): T {
// 	return arg;
// }

// // once we've written the generic identity function, we can call it in one of
// // two ways. The first way is to pass all of the arguments, including the type
// // argument, to the function:
// let output = identity<string>( 'myString' ); // type of output will be 'string

// // second way is using type argument inference - that is, we want the compiler
// // to set the value of T for us automatically based on the type of the argument
// // we pass in:
// let output = identity( 'myString' );

// // Working with Generic Type Variables
// function identity<T> ( arg: T ): T {
// 	return arg;
// }

// // what if we want to log the length of the argument arg to the console
// function loggingIdentity<T> ( arg: T ): T {
// 	console.log( arg.length ); // Error: T doesn't have .length
// 	return arg;
// }

// // let's say that we've actually intended this function to work on arrays of
// //  T rather than T directly.
// function loggingIdentity<T> ( arg: T[] ): T[] {
// 	console.log( arg.length ); // Array has a .length, so no more error
// 	return arg;
// }

// // Generic Types
// function identity <T>( arg: T ): T {
// 	return arg;
// }

// let myIdentity: <T>( arg: T ) => T = identity;

// // we can also use a different name for the generic type parameter in the type
// function identity <T>( arg: T ): T {
// 	return arg;
// }

// let myIdentity: <U>( arg: U ) => U = identity;

// // we can also write the generic type as a call signature of an object
// // literal type
// function identity <T>( arg: T ): T {
// 	return arg;
// }

// let myIdentity: { <T>( arg: T ): T; } = identity;

// // which leads us to writing a generic interface
// interface GenericIdentityFn {
// 	<T>( arg: T ): T;
// }

// function identity <T>( arg: T ): T {
// 	return arg;
// }

// let myIdentity: GenericIdentityFn = identity;

// // we can move the generic parameter to be a parameter of the whole interface
// interface GenericIdentityFn <T> {
// 	( arg: T ): T;
// }

// function identity <T>( arg: T ): T {
// 	return arg;
// }

// let myIdentity: GenericIdentityFn<number> = identity;

// // Generic Classes
// class GenericNumber<T> {
// 	zeroValue: T;
// 	add: ( x: T, y: T ) => T;
// }

// let myGenericNumber = new GenericNumber<number>();

// myGenericNumber.zeroValue = 0;
// myGenericNumber.add = function ( x, y ) {
// 	return x + y;
// };

// // other example using other type
// let stringNumeric = new GenericNumber<string>();

// stringNumeric.zeroValue = '';
// stringNumeric.add = function ( x, y ) {
// 	return x + y;
// };

// console.log( stringNumeric.add( stringNumeric.zeroValue, 'test' ) );

// // Generic Constraints
// function loggingIdentity <T>( arg: T ): T {
// 	console.log( arg.length ); // Error: T doesn't have .length
// 	return arg;
// }

// interface Lengthwise {
// 	length: number;
// }

// function loggingIdentity <T extends Lengthwise>( arg: T ) {
// 	console.log( arg.length ); // Now we know it has a .length property, so 
// 							// no more error
// 	return arg;
// }

// // because the generic function is now constrained, it will no longer work
// // over any and all types
// loggingIdentity( 4 ); // Error, number doesn't have a .length property

// // instead, we need to pass in values whose type has all the required properties
// loggingIdentity( { length: 10, value: 3 } );

// //	Using Type Parameters in Generic Constraints
// // you can declare a type parameter that is constrained by another type parameter
// function getProperty <T, K extends keyof T>( obj: T, key: K ) {
// 	return obj[ key ];
// }

// let x = { a: 1, b: 2, c: 3, d: 4 };

// getProperty( x, 'a' ); // ok
// getProperty( x, 'm' ); // error: argument of type 'm' isn't assignable to
// 					  // 'a' | 'b' | 'c' | 'd'

//	Using Class Types in Generics
function create <T>( c: { new (): T; } ): T {
	return new c();
}

class BeeKeeper {
	hasMask: boolean;
}
class ZooKeeper {
	nametag: string;
}
class Animal {
	numLegs: number;
}
class Bee extends Animal {
	keeper: BeeKeeper;
}
class Lion extends Animal {
	keeper: ZooKeeper;
}

function createInstance <A extends Animal>( c: new () => A ): A {
	return new c();
}

createInstance( Lion ).keeper.nametag; // typechecks!
createInstance( Bee ).keeper.hasMask; // typechecks!