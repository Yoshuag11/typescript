// Union Types
// function padLeft ( value: string, padding: any ) {
// 	if ( typeof padding === 'number' ) {
// 		return Array( padding + 1 ).join( " " ) + value;
// 	}
// 	if ( typeof padding === 'string' ) {
// 		return padding + value;
// 	}
// 	throw new Error( `Expected string or number, got '${ padding }'. ` )
// }

// console.log( padLeft( 'Hello world', 4 ) );

// padLeft( 'Hello world', true );

// function padLeft ( value: string, padding: string | number ) {
// 	if ( typeof padding === 'number' ) {
// 		return Array( padding + 1 ).join( " " ) + value;
// 	}
// 	if ( typeof padding === 'string' ) {
// 		return padding + value;
// 	}
// 	throw new Error( `Expected string or number, got '${ padding }'. ` )
// }

// console.log( padLeft( 'Hello world', 4 ) );

// padLeft( 'Hello world', true ); // error during compilation

// interface Bird {
// 	fly();
// 	layEggs();
// }
// interface Fish {
// 	swim();
// 	layEggs();
// }

// function getSmallPet(): Fish | Bird {
// 	// ...
// 	return {
// 		fly: () => {
// 			console.log( `My bird pet is flying` );
// 		},
// 		swim: () => {
// 			console.log( `My fish pet is swimming` );
// 		},
// 		layEggs: () => {}
// 	};
// }

// let pet = getSmallPet();
// pet.layEggs();
// pet.fly(); // error

// Type Guards and Differentiating Types
// // in JavaScript
// if ( pet.swim ) {
// 	pet.swim();
// } else if ( pet.fly ) {
// 	pet.fly();
// }
// in TypeScript, that's accomplished with type assertions
// let pet = getSmallPet();

// if ( ( <Fish>pet ).swim ) {
// 	( <Fish>pet ).swim();
// } else {
// 	( <Bird>pet ).fly();
// }

// User-Defined Type Guards
// function isFish ( pet: Fish | Bird ): pet is Fish {
// 	return ( <Fish>pet ).swim !== undefined;
// }

// let pet = getSmallPet();

// if ( isFish( pet ) ) {
// 	pet.swim();
// } else {
// 	pet.fly();
// }

// typeof type guards
// function isNumber ( x: any ): x is number {
// 	return typeof x === 'number';
// }
// function isString ( x: any ): x is string {
// 	return typeof x === 'string';
// }
// function padLeft ( value: string, padding: string | number ) {
// 	if ( isNumber( padding ) ) {
// 		return Array( padding + 1 ).join( ' ' ) + value;
// 	} else if ( isString( padding ) ) {
// 		return padding + value;
// 	}
// 	// } else {
// 	// 	return padding + value;
// 	// }
// 	throw new Error( `Expected string or number, got '${ padding }'` );
// }
// function padLeft ( value: string, padding: string | number ) {
// 	if ( typeof padding === 'number' ) {
// 		return Array( padding + 1 ).join( " " ) + value;
// 	}
// 	if ( typeof padding === 'string' ) {
// 		return padding + value;
// 	}
// 	throw new Error( `Expected string or number, got '${ padding }'. ` )
// }

// console.log( padLeft( 'Hello world', 5 ) );
// console.log( padLeft( 'Hello world', true ) );

// instanceof type guards
// interface Padder {
// 	getPaddingString(): string;
// }

// class SpaceRepeatingPadder implements Padder {
// 	constructor ( private numSpaces: number ) {}
// 	getPaddingString () {
// 		return Array( this.numSpaces + 1 ).join( '' );
// 	}
// 	spaceRepeatingPadder () {
// 		console.log( `I'm a 'spaceRepeatingPadder' object.` );
// 	}
// }
// class StringPadder implements Padder {
// 	constructor ( private value: string ) {}
// 	getPaddingString () {
// 		return this.value;
// 	}
// 	stringPadder () {
// 		console.log( `I'm a 'stringPadder object'.` );
// 	}
// }

// function getRandomPadder () {
// 	return Math.random() < 0.5 ?
// 		new SpaceRepeatingPadder( 4 ) :
// 		new StringPadder( '  ' );
// }

// Type is 'SpaceRepeatingPAdder | StringPadder'
// let padder: Padder = getRandomPadder();

// if ( padder instanceof SpaceRepeatingPadder ) {
// 	padder; // type narrowed to 'SpaceRepeatingPadder'
// 	padder.spaceRepeatingPadder();
// }
// // using 'else' statement does not work to determine that returned object is
// // an instance of StringPadder, since the type of the variable was just defined
// // as 'Padder'.
// if ( padder instanceof StringPadder ) {
// 	padder; // type narrowed to 'StringPadder'
// 	padder.stringPadder();
// }

// let padder: SpaceRepeatingPadder | StringPadder = getRandomPadder();

// if ( padder instanceof SpaceRepeatingPadder ) {
// 	padder; // type narrowed to 'SpaceRepeatingPadder'
// 	padder.spaceRepeatingPadder();
// } else {
// 	padder; // type narrowed to 'StringPadder'
// 	padder.stringPadder();
// }

// Nullable types
// let s = 'foo';
// s = null;

// using --strictNullChecks
// let sn: string | null = 'bar';
// sn = null;
// sn = undefined; // error, 'undefined' is not assignable to 'string | null'

// Optional parameters and properties
// // with --strictNullChecks
// // optional parameters
// function f ( x: number, y?: number ) {
// 	return x + ( y || 0 );
// }

// f( 1, 2 );
// f( 1, 2 );
// f( 1 );
// f( 1, undefined );
// f( 1, null ); // error, 'null' is not assignable to 'number | undefined'

// // optional properties
// class C {
// 	a: number;
// 	b?: number;
// }

// let c = new C();
// c.a = 12;
// c.a = undefined; // error, 'undefined' is not assignable to 'number'
// c.b = 13;
// c.b = undefined; // ok
// c.b = null; // error, 'null' is not assignable to 'number | undefined'

// Type guards and type assertions
// eliminating null values
// function f ( sn: string | null ): string {
// 	return sn;
// }

// function f ( sn: string | null ): string {
// 	if ( sn === null ) {
// 		return 'default';
// 	} else {
// 		return sn;
// 	}
// }

// function f( sn: string | null ): string {
// 	return sn || 'default';
// }

// using type assertion
// function broken ( name: string | null ): string {
// 	function postfix ( epithet: string ) {
// 		return name.charAt( 0 ) +
// 			'. the ' + epithet; // error, 'name' is possibly null
// 	}

// 	name = name || 'Bob';
// 	return postfix( 'great' );
// }

// function fixedFunction ( name: string | null ): string {
// 	function postfix ( epithet: string ) {
// 		return name!.charAt( 0 ) + '. the ' + epithet; // ok
// 	}

// 	name = name || 'Bob';
// 	return postfix( 'great' );
// }

// function intentOfFixedFunction ( name: string | null ): string {
// 	name = name || 'default';
// 	return name;
// }

// console.log( fixedFunction( 'Daniel' ) );
// console.log( fixedFunction( null ) );
// console.log( fixedFunction( 4 ) );
// console.log( fixedFunction( undefined ) );

// // Type Aliases
// type Name = string;
// type NameResolver = () => string;
// type NameOrResolver = Name | NameResolver;

// function getName ( n: NameOrResolver ): Name {
// 	if ( typeof n === 'string' ) {
// 		return n;
// 	} else {
// 		return n();
// 	}
// }

// // generic aliases
// type Container<T> = { value: T };

// // alias refer to itself
// type Tree<T> = {
// 	value: T;
// 	left: Tree<T>;
// 	right: Tree<T>;
// }

// // using it along intersection
// type LinkedList<T> = T & { next: LinkedList<T> };

// interface Person {
// 	name: string;
// }

// let people: LinkedList<Person>;
// var s = people.name;
// var s = people.next.name;
// var s = people.next.next.name;
// var s = people.next.next.next.name;

// // type alias can not appear on the ride side of a declaration
// type Yikes = Array<Yikes>;

// Interfaces vs Type Aliases