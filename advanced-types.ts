// // Intersection Types
// // example of a mixin
// function extend<T, U> ( first: T, second: U ): T & U {
// 	let result = <T & U>{};

// 	for ( let id in first ) {
// 		( <any>result )[ id ] = ( <any>first )[ id ];
// 	}
// 	for ( let id in second ) {
// 		if ( !result.hasOwnProperty( id ) ) {
// 			( <any>result )[ id ] = ( <any>second )[ id ];
// 		}
// 	}
// 	return result;
// }

// class Person {
// 	constructor ( public name: string ) {}
// }

// interface Loggable {
// 	log (): void;
// }

// class ConsoleLogger implements Loggable {
// 	log () {}
// }

// var jim = extend( new Person( 'Jim' ), new ConsoleLogger() );
// var n = jim.name;

// jim.log();

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

// // Interfaces vs Type Aliases
// type Alias = { num: number }
// interface Interface {
// 	num: number;
// }
// declare function aliased ( arg: Alias ): Alias;
// declare function interfaced ( arg: Interface ): Interface;

// // String Literal Types
// type Easing = 'ease-in' | 'ease-out' | 'ease-in-out';

// class UIElement {
// 	animate ( dx: number, dy: number, easing: Easing ) {
// 		if ( easing === 'ease-in' ) {
// 			// ...
// 		} else if ( easing === 'ease-out' ) {
// 		} else if ( easing === 'ease-in-out' ) {
// 		} else {
// 			// error! should not pass null or undefined.
// 		}
// 	}
// }

// let button = new UIElement();

// button.animate( 0, 0, 'ease-in' );
// button.animate( 0, 0, 'uneasy' ); // error: "uneasy" is not allowed here

// // string literal types can be used in the same way to distinguish overloads
// function createElement ( tagName: 'img' ): HTMLImageElement;
// function createElement ( tagName: 'input' ): HTMLInputElement;
// // ... more overloads ...
// function createElement ( tagName: string ): Element {
// 	// ... code goes here ...
// }

// // Numeric Literal Types
// function rollDie (): 1 | 2 | 3 | 4 | 5 | 6 {
// 	// ...
// }

// // these are seldom written explicitly, they can be useful when narrowing
// // can catch bugs
// function foo ( x: number ) {
// 	if ( x !== 1 || x !== 2 ) {
// 		//
// 		// Operator '!==' cannot be applied to types '1' and '2'.
// 	}
// }

// // Discriminated Unions
// // 1. types that have a common. singleton type property - the discriminant
// // 2. a type alias that takes the union of those types - the union.
// // 3. type guards on the common property
// interface Square {
// 	kind: 'square';
// 	size: number;
// }
// interface Rectangle {
// 	kind: 'rectangle';
// 	width: number;
// 	height: number;
// }
// interface Circle {
// 	kind: 'circle';
// 	radius: number;
// }

// type Shape = Square | Rectangle | Circle;

// // using the discrimination union
// function area ( s: Shape ) {
// 	switch ( s.kind ) {
// 		case 'square': return s.size * s.size;
// 		case 'rectangle': return s.height * s.width;
// 		case 'circle': return Math.PI * s.radius ** 2;
// 	}
// }

// //	Exhaustiveness checking
// interface Triangle {
// 	kind: 'triangle';
// 	base: number;
// }

// type Shape = Square | Rectangle | Circle | Triangle;

// function area ( s: Shape ): number {
// 	switch ( s.kind ) {
// 		case 'square': return s.size * s.size;
// 		case 'rectangle': return s.height * s.width;
// 		case 'circle': return Math.PI * s.radius ** 2;
// 		case 'triangle': return s.base;
// 	}
// }

// // second method for exhaustiveness uses never
// function assertNever ( x: never ): never {
// 	throw new Error( 'Unexpected object: ' + x );
// }
// function area ( s: Shape ) {
// 	switch ( s.kind ) {
// 		case 'square': return s.size * s.size;
// 		case 'rectangle': return s.height * s.width;
// 		case 'circle': return Math.PI * s.radius ** 2;
// 		case 'triangle': return s.base;
// 		default: return assertNever( s ); // error here if there are missing cases
// 	}
// }

// Polymorphic this types
class BasicCalculator {
	public constructor ( protected value = 0 ) {}
	public currentValue (): number {
		return this.value;
	}
	public add ( operand: number ): this {
		this.value += operand;
		return this;
	}
	public multiply ( operand: number ): this {
		this.value *= operand;
		return this;
	}
	// ... other operations go here ...
}

// let v = new BasicCalculator( 2 ).
// 	multiply( 5 ).
// 	add( 1 ).
// 	currentValue();

// // since the class uses 'this' types, you can extend it and the new class can
// // use the old methods with no changes
// class ScientificCalculator extends BasicCalculator {
// 	public constructor ( value = 0 ) {
// 		super( value );
// 	}
// 	public sin () {
// 		this.value = Math.sin( this.value );
// 		return this;
// 	}
// 	// ... other operations go here ...
// }

// let v = new ScientificCalculator( 2 ).
// 	multiply( 5 ).
// 	sin().
// 	add( 1 ).
// 	currentValue();

// // Index types
// // with index types, you can get the compiler to check code that uses dynamic
// // property names.
// function pluck ( o, names ) {
// 	return names.map( n => o[ n ] );
// }

// // here is how you would write and use this function in TypeScript, using the
// // 'index type query' and 'indexed access' operators
// function pluck <T, K extends keyof T>( o: T, names: K[] ): T[ K ][] {
// 	return names.map( n => o[ n ] );
// }

// interface Person {
// 	name: string;
// 	age: number;
// }

// let person: Person = {
// 	name: 'Jarid',
// 	age: 35
// };
// // let string: string[] = pluck( person, [ 'name' ] ); // ok, string[]

// // another example
// function getProperty <T, K extends keyof T>( o: T, name: K ): T[ K ] {
// 	return o[ name ]; // o[ name ] is of type T[ K ]
// }
// // once you return the T[ K ] result, the compiler will instantiate the
// // actual type of the key, so the return type of getProperty will vary
// // according to which property you request.
// let myName: string = getProperty( person, 'name' );
// let age: number = getProperty( person, 'age' );
// let unknown = getProperty( person, 'unknown' ); // error, 'unknown' is not in
// 												// 'name' | 'age'

//	Index types and string index signature