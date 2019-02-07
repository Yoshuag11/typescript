// interface Named {
// 	name: string;
// }

// class Person {
// 	name: string;
// }

// let p: Named;
// // OK, because of structural typing
// p = new Person();

// // Starting out
// // the basic rule for TypeScript's structural type system is that x is compatible
// // with 'y' if 'y' has at least the same members as 'X'.
// interface Named {
// 	name: string;
// }

// let x: Named;
// // y's inferred type is { name: string; location: string; }
// let y = { name: 'Alice', location: 'seattle' };
// x = y;

// // the same rule for assignment is used when checking function call arguments
// function greet ( n: Named ) {
// 	console.log( 'Hello, ' + n.name );
// }

// greet( y );

// // Comparing two function
// let x = ( a: number ) => 0;
// let y = ( b: number, s: string ) => 0;

// y = x; // OK
// x = y; // Error

// // looking at how return types are treated, suing two functions that differ 
// // only by their return type
// let x = () => ( { name: 'Alice' } );
// let y = () => ( { name: 'Alice', location: 'Seattle' } );

// // x = y; // OK
// y = x; // Error, because x() lacks a location property

// // the type system enforces that the source function's return type be a subtype 
// // of the target type's return type.

//	Function Parameter Bivariance
enum EventType {
	Mouse,
	Keyboard
}

interface Event {
	timestamp: number;
}
interface MouseEvent extends Event {
	X: number;
	Y: number;
}
interface KeyEvent extends Event {
	keyCode: number;
}

function listenEvent ( eventType: EventType, handler: ( n: Event ) => void ) {
	/*  */
}

// // unsound, but useful and common
// listenEvent(
// 	EventType.Mouse,
// 	( e: MouseEvent ) => console.log( e.X + ',' + e.Y ) );
// // Undesirable alternatives in presence of soundness
// listenEvent(
// 	EventType.Mouse,
// 	( e: Event ) => console.log(
// 		( <MouseEvent>e ).X + ',' + ( <MouseEvent>e ).Y ) );
// listenEvent(
// 	EventType.Mouse,
// 	<( e: Event ) => void>(
// 		( e: MouseEvent ) => console.log( e.X + ',' + e.Y )
// 	) );
// // still disallowed (clear error). Type safety enforced for wholly
// // incompatible types
// listenEvent( EventType.Mouse, ( e: number ) => console.log( e ) );

// //	Optional Parameters and Rest Parameters
// function invokeLater ( args: any[], callback: ( ...args: any[] ) => void ) {
// 	/* ... Invoke callback with 'args' ... */
// }

// // unsound - invokeLater "might" provide any number of arguments
// invokeLater( [ 1, 2 ], ( x, y ) => console.log( x + ', ' + y ) );
// // confusing (x and y are actually required) and undiscoverable
// invokeLater( [ 1, 2 ], ( x?, y? ) => console.log( x + ', ' + y ) );

// // Enums
// // enum values from different enum types are considered incompatible
// enum Status {
// 	Ready,
// 	Waiting
// };
// enum Color {
// 	Red,
// 	Blue,
// 	Green
// };

// let myStatus = Status.Ready;

// status = Color.Green; // Error

// // Classes
// // when comparing two objects of a class type, only members of the instance are
// // compared. Static members and constructors do not affect compatibility.
// class Animal {
// 	feet: number;
// 	constructor ( name: string, numFeet: number ) {}
// }
// class Size {
// 	feet: number;
// 	constructor ( numFeet: number ) {}
// }
// let a: Animal;
// let s: Size;

// a = s; // OK
// s = a; // OK

// // Generics
// interface Empty<T> {};

// let x: Empty<number>;
// let y: Empty<string>;

// y = x; // OK, because y matches structure of x

// // in the above, 'x' and 'y' are compatible because their structures do not
// // use the type argument in a differentiating way.
// interface NotEmpty<T> {
// 	data: T;
// }

// let x: NotEmpty<number>;
// let y: NotEmpty<string>;

// x = y; // Error, because x and y are not compatible

// // generic types that do not have their type arguments specified, compatibility
// // is checked by specifying 'any' in place of all unspecified type arguments.
// let identity = function <T>( x: T ): T {
// 	// ...
// 	return x;
// };
// let reverse = function <U>( y: U ): U {
// 	// ...
// 	return y;
// };

// identity = reverse; // OK, because ( x: any ) => any matches ( y: any ) => any