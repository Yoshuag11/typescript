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
	x: number;
	y: number;
}
interface KeyEvent extends Event {
	keyCode: number;
}

function listenEvent ( eventType: EventType, handler: ( n: Event ) => void ) {
	/*  */
}

// unsound, but useful and common
listenEvent(
	EventType.Mouse,
	( e: MouseEvent ) => console.log( e.x + ',' + e.y ) );