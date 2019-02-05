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

// // Function Types
// interface SearchFunc {
// 	( source: string, subString: string ): boolean;
// }

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

// // typescript's contextual typing can infer the argument types since the
// // function value is assigned directly to a variable of type SearchFunc.
// let mySearch: SearchFunc;

// mySearch = function ( src, sub ) {
// 	let result = src.search( sub );
// 	return result > -1;
// };

// // Indexable Types
// // the following interface has an index signature that states that when it is index
// // with a number, it will return a string.
// interface StringArray {
// 	[ index: number ]: string;
// }

// let myArray: StringArray;

// myArray = [ 'Bob', 'Fred' ];

// let myStr: string = myArray[ 0 ];

// // there are two types fo supported index signatures: string and number. It is possible
// // to support both types of indexers, but the type returned from a numeric indexer must
// // be a subtype of the type returned from the string indexer. This is because when
// // indexing with a number, JavaScript will actually convert that to a string before
// // indexing into an object.
// class Animal {
// 	name: string;
// }
// class Dog extends Animal {
// 	breed: string;
// }

// // Error: indexing with a numeric string might get you a completely separate type of
// // Animal!
// interface NotOkay {
// 	[ x: number ]: Animal;
// 	[ x: string ]: Dog;
// }

// interface NumberDictionary {
// 	[ index: string ]: number;
// 	length: number; // ok, length is a number
// 	name: string; // error, the type of 'name' is not a subtype of the indexer
// }

// // you can also make readonly signatures in order to prevent assignment to their indices
// interface ReadonlyStringArray {
// 	readonly [ index: number ]: string;
// }

// let myArray: ReadonlyStringArray = [ 'Alice', 'Bob' ];

// myArray[ 2 ] = 'Mallory'; // error!

// // Class Types
// // Implementing an interface
// interface ClockInterface {
// 	currentTime: Date;
// }

// class Clock implements ClockInterface {
// 	currentTime: Date;
// 	constructor ( h: number, m: number ) {}
// }

// // specifying methods as well
// // interfaces describe the public side of the class
// interface ClockInterface {
// 	currentTime: Date;
// 	setTime ( d: Date );
// }

// class Clock implements ClockInterface {
// 	currentTime: Date;
// 	setTime ( d: Date ) {
// 		this.currentTime = d;
// 	}
// 	constructor ( h: number, m: number ) {}
// }

// // Difference between the static and instance sides of classes
// // it is an error to create an interface with a construct signature and try to create
// // a class that implements this interface
// interface ClockConstructor {
// 	new ( hour: number, minute: number );
// }

// class Clock implements ClockConstructor {
// 	currentTime: Date;
// 	constructor ( h: number, m: number ) {}
// }

// // this is because when a class implements an interface, only the instance side of
// // the class is checked. Since the constructor sits in the static side, it is not
// // included in this check.

// interface ClockConstructor {
// 	new ( hour: number, minute: number ): ClockInterface;
// }
// interface ClockInterface {
// 	tick();
// }

// function createClock (
// 	  ctor: ClockConstructor, hour: number, minute: number ): ClockInterface {
// 	return new ctor( hour, minute );
// }

// class DigitalClock implements ClockInterface {
// 	constructor( h: number, m: number ) {}
// 	tick () {
// 		console.log( 'beep beep' );
// 	}
// }
// class AnalogClock implements ClockInterface {
// 	constructor ( h: number, m: number ) {}
// 	tick () {
// 		console.log( 'tick tock' );
// 	}
// }

// let digital = createClock( DigitalClock, 12, 17 );
// let analog = createClock( AnalogClock, 7, 32 );

// // Extending Interfaces
// interface Shape {
// 	color: string;
// }
// interface Square extends Shape {
// 	sideLength: number;
// }

// let square = <Square>{};

// square.color = 'blue';
// square.sideLength = 10;

// // an interface can extend multiple interfaces, creating a combination of all
// // if the interfaces
// interface Shape {
// 	color: string;
// }
// interface PenStroke {
// 	penWidth: number;
// }
// interface Square extends Shape, PenStroke {
// 	sideLength: number;
// }

// let square = <Square>{};

// square.color = 'blue';
// square.sideLength = 10;
// square.penWidth = 5.0;

// // Hybrid Types
// interface Counter {
// 	( start: number ): string;
// 	interval: number;
// 	reset(): void;
// }

// function getCounter(): Counter {
// 	let counter = <Counter>function ( start: number ) {};

// 	counter.interval = 123;
// 	counter.reset = function () {};
// 	return counter;
// }

// let c = getCounter();

// c( 10 );
// c.reset();
// c.interval = 5.0;

// // Interfaces Extending Classes
// class Control {
// 	private state: any;
// }

// interface SelectableControl extends Control {
// 	select(): void;
// }

// class Button extends Control implements SelectableControl {
// 	select() {}
// }
// class TextBox extends Control {
// 	select() {}
// }
// // error: property 'state' is missing in type 'Image'
// class Image implements SelectableControl {
// 	select() {}
// }
// class Location {}