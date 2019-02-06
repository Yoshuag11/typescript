// // Functions
// // named function
// function add ( x, y ) {
// 	return x + y;
// }

// // anonymous function
// let myAdd = function ( x, y ) {
// 	return x + y;
// };

// // functions can refer to variables outside of the function body. When they do, they're
// // said to "capture" these variables.
// let z = 100;

// function addToZ ( x, y ) {
// 	return x + y + z;
// }

// // Function types
// //	Typing the function
// // typeScript can figure out the return type by looking at the return statements, so we
// // can also optionally leave this off in many cases
// function add ( x: number, y: number ): number {
// 	return x + y;
// }

// let myAdd = function ( x: number, y: number ): number {
// 	return x + y;
// };

// //	Writing the function type
// let myAdd: ( x: number, y: number ) => number =
// 		  function ( x: number, y: number ): number {
// 		return x + y;
// 	};

// // the name of the parameters in the function's type is just to help readability.
// // We could have instead written:
// let myAdd: ( baseValue: number, increment: number ) => number =
// 	  function ( x: number, y: number ): number {
// 		return x + y;
// 	};

// //	Inferring the types
// // myAdd has the full function type
// let myAdd = function  ( x: number, y: number ): number {
// 	return x + y;
// }
// // the parameters 'x' and 'y' have the type number
// // this is called contextual typing
// let myAdd: ( baseValue: number, increment: number ) => number = function ( x, y ) {
// 	return x + y;
// };

// // Optional and Default Parameters
// function buildName ( firstName: string, lastName: string ) {
// 	return firstName + ' ' + lastName;
// }

// let result1 = buildName( 'Bob' ); // error, too few parameters
// let result2 = buildName( 'Bob', 'Adams', 'Sr.' ); // error, too many parameters
// let result3 = buildName( 'Bob', 'Adams' ); // ah, just right

// // we can have optional parameters by adding a "?" to the end of the parameter
// // we want to be optional
// function buildName ( firstName: string, lastName?: string ) {
// 	if ( lastName ) {
// 		return firstName + ' ' + lastName;
// 	} else {
// 		return firstName;
// 	}
// }

// let result1 = buildName( 'Bob' ); // works correctly now
// let result2 = buildName( 'Bob', 'Adams', 'Sr.' ); // error, too  many parameters
// let result3 = buildName( 'Bob', 'Adams' ); // ah, just right

// // default-initialized parameters
// // default-initialized parameters that come after all required parameters are
// // treated as optional, and just like optional parameters, can be omitted
// // when calling their respective function
// function buildName (
// 	  firstName: string,
// 	  lastName = 'Smith' /* lastName: string = 'Smith' */ ) {
// 	return firstName + ' ' + lastName;
// }

// let result1 = buildName( 'Bob' ); // works correctly now, returns 'Bob Smith'
// let result2 = buildName( 'Bob', undefined ); // still works, also returns "Bob Smith"
// let result3 = buildName( 'Bob', 'Adams', 'Sr.' ); // error, too many arguments
// let result4 = buildName( 'Bob', 'Adams' ); // ah, just right

// // unlike plain optional parameters, default-initialized parameters don't need
// // to occur after required parameters. If a default-initialized parameter comes
// // before a required parameter, users need to explicitly pass undefined to get
// // the default initialized value.
// function buildName ( firstName = 'Will', lastName: string ) {
// 	return firstName + ' ' + lastName;
// }

// let result1 = buildName( 'Bob' ); // error, too few arguments
// let result2 = buildName( 'Bob', 'Adams'. 'Sr.' ); // error, too many arguments
// let result3 = buildName( 'Bob', 'Adams' ); // ok and returns "Bob Adams"
// let result1 = buildName( undefined, 'Adams' ); // ok and returns "Will Adams"

// // Rest Parameters
// function buildName ( firstName: string, ...restOfName: string[] ) {
// 	return firstName + ' ' + restOfName.join( ' ' );
// }

// let employeeName = buildName( 'Joseph', 'Samuel', 'Lucas', 'MacKinzie' );

// // the ellipsis is also used in the type of the function with rest parameters
// function buildName ( firstName: string, ...restOfName: string[] ) {
// 	return firstName + ' ' + restOfName.join( ' ' );
// }

// let buildNameFn: ( fName: string, ...rest: string[] ) => string = buildName;

// // this
// // this and arrow functions
// let deck = {
// 	suits: [ 'hearts', 'spades', 'clubs', 'diamonds' ],
// 	cards: Array( 52 ),
// 	createCardPicker: function () {
// 		return function () {
// 			let pickedCard = Math.floor( Math.random() * 52 );
// 			let pickedSuit = Math.floor( pickedCard / 13 );
// 			return { suit: this.suits[ pickedSuit ], card: pickedCard % 13 };
// 		};
// 	}
// };
// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();

// alert( 'card: ' + pickedCard.card + ' of ' + pickedCard.suit );

// // to fix the "this" value, we can use an arrow function. Arrow function capture
// // the "this" where the function is created rather than where it is invoked.
// let deck = {
// 	suits: [ 'hearts', 'spades', 'clubs', 'diamonds' ],
// 	cards: Array( 52 ),
// 	createCardPicker: function () {
// 		return () => {
// 			let pickedCard = Math.floor( Math.random() * 52 );
// 			let pickedSuit = Math.floor( pickedCard / 13 );
// 			return { suit: this.suits[ pickedSuit ], card: pickedCard % 13 };
// 		};
// 	}
// };
// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();

// alert( 'card: ' + pickedCard.card + ' of ' + pickedCard.suit );

// // this parameters
// // this parameters are fake parameters that come first in the parameter list
// // of a function
// function f ( this: void ) {
// 	// make sure `this` is usable in this standalone function
// }

// // let's add a couple of interfaces to our examples above, Card and Deck
// // to make the types clearer and easier to reuse
// interface Card {
// 	suit: string;
// 	card: number;
// }
// interface Deck {
// 	suits: string[];
// 	cards: number[];
// 	createCardPicker ( this: Deck ): () => Card;
// }

// let deck: Deck = {
// 	suits: [ 'hearts', 'spades', 'clubs', 'diamonds' ],
// 	cards: Array( 52 ),
// 	// NOTE: The function now explicitly specifies that its callee must be
// 	// of type Deck
// 	createCardPicker: function ( this: Deck ) {
// 		return () => {
// 			let pickedCard = Math.floor( Math.random() * 52 );
// 			let pickedSuit = Math.floor( pickedCard / 13 );
// 			return { suit: this.suits[ pickedSuit ], card: pickedCard % 13 };
// 		};
// 	}
// };
// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();

// alert( 'card: ' + pickedCard.card + ' of ' + pickedCard.suit );

// // this parameters in callbacks
// // in order to make this work, the function/library need to annotate the
// // callback type with "this"
// interface UIElement {
// 	addClickListener ( onclick: ( this: void, e: Event ) => void ): void;
// }

// // "this: void" means that addClickListener expects onclick to be a function
// // that does not require a "this" type.
// // second, annotate your calling code with "this":
// class Handler {
// 	info: string;
// 	onClickBad ( this: Handler, e: Event ) {
// 		// oops, used this here. using this callback would crash at runtime
// 		this.info = e.toString();
// 	}
// }

// let h = new Handler();
// let uiElement: UIElement;
// uiElement.addClickListener( h.onClickBad ); // error!

// // fix
// class Handler {
// 	info: string;
// 	onClickGood ( this: void, e: Event ) {
// 		// can't use this here because it's of type void!
// 		console.log( 'clicked' );
// 	}
// }

// let h = new Handler();
// let uiElement: UIElement;
// uiElement.addClickListener( h.onClickGood );

// // that means that it can't use "this.info". If you want both then you'll
// // have to use an arrow function:
// class Handler {
// 	info: string;
// 	onClickGood = ( e: Event ) => {
// 		this.info = e.toString();
// 	}
// }

// // Overloads
// let suits = [ 'hearts', 'spades', 'clubs', 'diamonds' ];

// function pickCard ( x ): any {
// 	// Check to see it we're working with an object/array
// 	// if so, they gave us the deck and we'll pick the card
// 	if ( typeof x === 'object' ) {
// 		let pickedCard = Math.floor( Math.random() * x.length );
// 		return pickedCard;
// 	// otherwise just let them pick the card
// 	} else if ( typeof x === 'number' ) {
// 		let pickedSuit = Math.floor( x / 13 );
// 		return { suit: suits[ pickedSuit ], card: x % 13 };
// 	}
// }
// let myDeck = [
// 	{ suit: 'diamonds', card: 2 },
// 	{ suit: 'spades', card: 10 },
// 	{ suit: 'hearts', card: 4 }
// ];
// let pickedCard1 = myDeck[ pickCard( myDeck ) ];

// alert( 'card: ' + pickedCard1.card + ' of ' + pickedCard1.suit );

// let pickedCard2 = pickCard( 15 );

// alert( 'card: ' + pickedCard2.card + ' of ' + pickedCard2.suit );

// // The way to describe this is to supply a list of overloads with multiple
// // function types for the same function
// let suits = [ 'hearts', 'spades', 'clubs', 'diamonds' ];

// function pickCard ( x: { suit: string; card: number }[] ): number;
// function pickCard ( x: number ): { suit: string; card: number };
// function pickCard ( x ): any {
// 	// Check to see if we're working with an object/array
// 	// if so, they gave us the deck and we'll pick the card
// 	if ( typeof x === 'object' ) {
// 		let pickedCard = Math.floor( Math.random() * x.length );
// 		return pickedCard;
// 	// otherwise just let them pick the card
// 	} else if ( typeof x === 'number' ) {
// 		let pickedSuit = Math.floor( x / 13 );
// 		return { suit: suits[ pickedSuit ], card: x % 13 };
// 	}
// }

// let myDeck = [
// 	{ suit: 'diamonds', card: 2 },
// 	{ suit: 'spades', card: 10 },
// 	{ suit: 'hearts', card: 4 }
// ];
// let pickedCard1 = myDeck[ pickCard( myDeck ) ];

// alert( 'card: ' + pickedCard1.card + ' of ' + pickedCard1.suit );

// let pickedCard2 = pickCard( 15 );

// alert( 'card: ' + pickedCard2.card + ' of ' + pickedCard2.suit );