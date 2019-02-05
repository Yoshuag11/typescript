// // First interface
// function printLabel ( labelledObj: { label: string } ) {
// 	console.log( labelledObj.label );
// }
function getCounter() {
    let counter = function (start) {
        return start.toString();
    };
    counter.interval = 123;
    counter.reset = function () {
        console.log('inside counter.reset methods');
        return 5;
    };
    return counter;
}
let myCounter = getCounter();
console.log(myCounter(5));
console.log(myCounter.interval);
console.log(myCounter.reset());
