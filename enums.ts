// // Enums
// // Numeric enums
// enum Direction {
// 	Up = 1,
// 	Down,
// 	Left,
// 	Right
// }

// // we could leave off the initializers entirely
// enum Direction {
// 	Up,
// 	Down,
// 	Left,
// 	Right
// }

// enum MyResponse {
// 	No = 0,
// 	Yes = 1
// }

// function respond ( recipient: string, message: MyResponse ): void {
// 	// ...
// }

// respond( 'Princess Caroline', MyResponse.Yes );

// function getSomeValue () { return 4 };

// enum E {
// 	A = getSomeValue(),
// 	B // error! 'A' is not constant-initialized, so 'B' needs an initializer
// }

// // String enums
// enum Direction {
// 	Up = 'UP',
// 	Down = 'Down',
// 	Left = 'LEFT',
// 	Right = 'RIGHT'
// }

// // Heterogeneous enums
// enum BooleanLikeHeterogeneousEnum {
// 	No = 0,
// 	Yes = 'YES'
// }

// //	Computed and constant members
// // the value associated with an enum member can be either constant or computed
// // an enum member is considered constant if:
// // it is the first member in the enum and has no initializer, in which case it's
// // assigned the value 0.
// // E.X is constant
// enum E { X }
// // it does not have initializer and the preceding enum member was a numeric constant.
// // In this case, the value of the current enum member will be the value of the
// // preceding enum member plus one.
// // all enum member in 'E1' and 'E2' are constant
// enum E1 { X, Y, Z }
// enum E2 {
// 	A = 1, B, C
// }
// // the enum member is initialized with a constant enum expression.

// // all other cases enum member is considered computed

// enum FileAccess {
// 	// constant members
// 	None,
// 	Read = 1 << 1,
// 	Write = 1 << 2,
// 	ReadWrite = Read | Write,
// 	// computed member
// 	G = '123'.length
// }

// //	Union enums and enum member types
// // when all members in an enum have literal enum values, some special semantics
// // come to play
// // the first is that enum members also become types as well. For example, we can say
// // that certain members can only have the value of an enum member:
// enum ShapeKind {
// 	Circle,
// 	Square
// }

// interface Circle {
// 	kind: ShapeKind.Circle;
// }
// interface Square {
// 	kind: ShapeKind.Square;
// 	sideLength: number;
// }

// let c: Circle = {
// 	kind: ShapeKind.Square,
// 	// ~~~~~~~~~~~~~~~~~~~~~~~ Error!
// 	radius: 100
// };

// // the other change is that enum types themselves effectively become union
// // of each enum member.
// enum E {
// 	Foo,
// 	Bar
// }

// function f ( x: E ) {
// 	if ( x !== E.Foo || x !== E.Bar ) {
// 		//
// 		// Error! Operator '!==' cannot be applied to types 'E.Foo' and 'E.Bar'
// 	}
// }

// //	Enums at runtime
// // enums are real objects that exist at runtime.
// enum E {
// 	X, Y, Z
// }

// // it can be actually passed around to functions
// function f ( obj: { X: number } ) {
// 	return obj.X;
// }

// // works, since 'E' has a property named 'X' which is a number
// f( E );

// // Reverse mappings
// enum Enum {
// 	A
// }

// let a = Enum.A;
// let nameOfA = Enum[ a ]; // "A"

// // typescript will compile this down to something like the following JavaScript
// var Enum;

// ( function ( Enum ) {
// 	Enum[ Enum[ 'A' ] = 0 ] = 'A';
// } )( Enum || ( Enum = {} ) );

// var a = Enum.A;
// var nameOfA = Enum[ a ]; // "A"

// //	const enums
// // const enums can only use constant enum expressions
// const enum Enum {
// 	A = 1,
// 	B = A * 2
// }

// // const enum members are inlined at use sites
// const enum Directions {
// 	Up,
// 	Down,
// 	Left,
// 	Right
// }

// let directions =
// 	[ Directions.Up, Directions.Down, Directions.Left, Directions.Right ];

// // in generated code will become
// var directions = [ 0 /* Up */, 1 /* Down */, 2 /* Left */, 3 /* Right */ ];

// //	Ambient enums
// // they are used to describe the shape of already existing enum types
// declare enum Enum {
// 	A = 1,
// 	B,
// 	C = 2
// }