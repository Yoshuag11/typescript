// // Classes
// class Greeter {
// 	greeting: string;
// 	constructor ( message: string ) {
// 		this.greeting = message;
// 	}
// 	greet() {
// 		return 'Hello, ' + this.greeting;
// 	}
// }

// let greeter = new Greeter( 'world' );

// // Inheritance
// class Animal {
// 	move ( distanceInMeters: number = 0 ) {
// 		console.log( `Animal moved ${ distanceInMeters }m.` );
// 	}
// }
// class Dog extends Animal {
// 	bark () {
// 		console.log( 'Woof! Woof!' );
// 	}
// }

// const dog = new Dog();

// dog.bark();
// dog.move( 10 );
// dog.bark();

// // more complex example
// class Animal {
// 	name: string;
// 	constructor ( theName: string ) {
// 		this.name = theName;
// 	}
// 	move ( distanceInMeters: number = 0 ) {
// 		console.log( `${ this.name } moved ${ distanceInMeters }m.` );
// 	}
// }
// class Snake extends Animal {
// 	constructor ( name: string ) {
// 		super( name );
// 	}
// 	move( distanceInMeters: number = 0 ) {
// 		console.log( 'Slithering...' );
// 		super.move( distanceInMeters );
// 	}
// }
// class Horse extends Animal {
// 	constructor ( name: string ) {
// 		super( name );
// 	}
// 	move ( distanceInMeters: number ) {
// 		console.log( 'Galloping...' );
// 		super.move( distanceInMeters );
// 	}
// }

// let sam = new Snake( 'Sammy the Python' );
// let tom: Animal = new Horse( 'Tommy the Palomino' );

// sam.move();
// tom.move( 34 );

// // Public, private and protected modifiers
// // Public by default
// class Animal {
// 	public name: string;
// 	public constructor ( theName: string ) {
// 		this.name = theName;
// 	}
// 	public move ( distanceInMeters: number ) {
// 		console.log( `${ this.name } moved ${ distanceInMeters }m.` );
// 	}
// }

// // Understanding private
// // when a member is private, it can not be accessed from outside of its containing class
// class Animal {
// 	private name: string;
// 	constructor ( theName: string ) {
// 		this.name = theName;
// 	}
// }

// new Animal( 'Cat' ).name; // error: 'name' is private;

// // when comparing types that have private (and protected as well) members, they are
// // only considered compatibles when they originated in the same declaration.
// class Animal {
// 	private name: string;
// 	constructor ( theName: string ) {
// 		this.name = theName;
// 	}
// }

// class Rhino extends Animal {
// 	constructor () {
// 		super( 'Rhino' );
// 	}
// }
// class Employee {
// 	private name: string;
// 	constructor ( theName: string ) {
// 		this.name = theName;
// 	}
// }

// let animal = new Animal( 'Goat' );
// let rhino = new Rhino();
// let employee = new Employee( 'Bob' );

// animal = rhino;
// animal = employee; // error: 'Animal' and 'Employee' are not compatible

// // Understanding protected
// // protected modifier acts much like the private modifier with the exception that
// // members declared protected can also be accessed within deriving classes.
// class Person {
// 	protected name: string;
// 	constructor ( name: string ) {
// 		this.name = name;
// 	}
// }
// class Employee extends Person {
// 	private department: string;
// 	constructor ( name: string, department: string ) {
// 		super( name );
// 		this.department = department;
// 	}
// 	public getElevatorPitch() {
// 		return `Hello, my name os ${ this.name } and I work in ${ this.department }.`;
// 	}
// }

// let howard = new Employee( 'Howard', 'Sales' );

// console.log( howard.getElevatorPitch() );
// console.log( howard.name ); // error

// // a constructor may also be marked as protected. which means that the
// // class cannot be instantiated outside of its containing class.
// class Person {
// 	protected name: string;
// 	protected constructor  ( theName: string ) {
// 		this.name = theName;
// 	}
// }

// // employee can extend person
// class Employee extends Person {
// 	private department: string;
// 	constructor ( name: string, department: string ) {
// 		super( name );

// 		this.department = department;
// 	}
// 	public getElevatorPitch () {
// 		return `Hello, my name is ${ this.name } and I work in ${ this.department }.`;
// 	}
// }

// let howard = new Employee( 'Howard', 'Sales' );
// let john = new Person( 'John' ); // Error: The 'Person' constructor is protected

// // Readonly modifier
// class Octopus {
// 	readonly name: string;
// 	readonly numberOfLegs: number = 8;
// 	constructor ( theName: string ) {
// 		this.name = theName;
// 	}
// }

// let dad = new Octopus( 'Man with the 8 strong legs' );

// dad.name = 'Man with the 3-piece suit'; // error! name is readonly

// // Parameter properties
// // this is a further revision of the previous Octopus class using a parameter property
// class Octopus {
// 	readonly numberOfLegs: number = 8;
// 	constructor ( readonly name: string ) {}
// }

// // Accessors
// // convert a class to use get and set
// class Employee {
// 	fullName: string;
// }

// let employee = new Employee();

// employee.fullName = 'Bob Smith';

// if ( employee.fullName ) {
// 	console.log( employee.fullName );
// }

// let passcode = 'secret passcode';

// class Employee {
// 	private _fullName: string;

// 	get fullName (): string {
// 		return this._fullName;
// 	}

// 	set fullName ( newName: string ) {
// 		if ( passcode && passcode === 'secret passcode' ) {
// 			this._fullName = newName;
// 		} else {
// 			console.log( 'Error: Unauthorized update of employee!' );
// 		}
// 	}
// }

// let employee = new Employee();

// employee.fullName = 'Bob Smith';

// if ( employee.fullName ) {
// 	console.log( employee.fullName );
// }

// // Static Properties
// class Grid {
// 	static origin = { x: 0, y: 0 };
// 	calculateDistanceFromOrigin ( point: { x: number; y: number; } ) {
// 		let xDist = point.x - Grid.origin.x;
// 		let yDist = point.y - Grid.origin.y;
// 		return Math.sqrt( xDist * xDist + yDist * yDist ) / this.scale;
// 	}
// 	constructor ( public scale: number ) {};
// }

// let grid1 = new Grid( 1.0 );
// let grid2 = new Grid( 5.0 );

// console.log( grid1.calculateDistanceFromOrigin( { x: 10, y: 10 } ) );
// console.log( grid2.calculateDistanceFromOrigin( { x: 10, y: 10 } ) );

// // Abstract Classes
// abstract class Animal {
// 	abstract makeSound (): void;
// 	move (): void {
// 		console.log( 'roaming the earth...' )
// 	}
// }

// // abstract methods must include the abstract keyword and may optionally include
// // access modifiers
// abstract class Department {
// 	constructor ( public name: string ) {}

// 	printName (): void {
// 		console.log( 'Department name: ' + this.name );
// 	}

// 	abstract printMeeting (): void; // must be implemented in derived classes
// }

// class AccountingDepartment extends Department {
// 	constructor () {
// 		super( 'Accounting and Auditing' ); // constructor in derived classes must call
// 											// super()
// 	}

// 	printMeeting (): void {
// 		console.log( 'The Accounting Department meets each Monday at 10am.' );
// 	}
// 	generateReports (): void {
// 		console.log( 'Generating accounting reports...' );
// 	}
// }

// let department: Department; // ok to create a reference to an abstract type

// department = new Department(); // error: cannot create an instance of an abstract class
// department = new AccountingDepartment(); // ok to create and assign a non-abstract subclass
// department.printName();
// department.printMeeting();
// department.generateReports(); // error: method doesn't exist on declared abstract type

// // Advanced Techniques
// //	Constructor functions
// // when you declare a class in TypeScript, you are actually creating multiple declarations
// // at the same time. The first is the type of the instance of the class.
// class Greeter {
// 	greeting: string;
// 	constructor ( message: string ) {
// 		this.greeting = message;
// 	}
// 	greet () {
// 		return 'Hello, ' + this.greeting;
// 	}
// }

// let greeter: Greeter;

// greeter = new Greeter( 'world' );

// console.log( greeter.greet() );

// // we are creating another value that we call the constructor function. This is the
// // function that is called when we "new" up instances of the class. The following is
// // the JavaScript created created by the above example
// let Greeter = ( function () {
// 	function Greeter ( message ) {
// 		this.greeting = message;
// 	}
// 	Greeter.prototype.greet = function () {
// 		return 'Hello, ' + this.greeting;
// 	};
// 	return Greeter;
// } )();

// let greeter;

// greeter = new Greeter( 'world' );

// console.log( greeter.greet() );

// // another way to think of each class is that there is an instance side and a static side
// class Greeter {
// 	static standardGreeting = 'Hello, there';
// 	greeting: string;
// 	greet () {
// 		if ( this.greeting ) {
// 			return 'Hello, ' + this.greeting;
// 		} else {
// 			return Greeter.standardGreeting;
// 		}
// 	}
// }

// let greeter1: Greeter;

// greeter1 = new Greeter();

// console.log( greeter1.greet() );

// let greeterMaker: typeof Greeter = Greeter;

// greeterMaker.standardGreeting = 'Hey there!';

// let greeter2: Greeter = new greeterMaker();

// console.log( greeter2.greet() );

// //	Using a class as an interface
// // because classes create types, you can use them in the same places you would be able
// // to use interfaces.
// class Point {
// 	x: number;
// 	y: number;
// }

// interface Point3d extends Point {
// 	z: number;
// }

// let point3d: Point3d = { x: 1, y: 2, z: 3 };