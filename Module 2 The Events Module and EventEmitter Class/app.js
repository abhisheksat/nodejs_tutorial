const EventEmitter = require('events');
const eventEmitter = new EventEmitter();

//  Creating a first event using eventEmitter
eventEmitter.on('tutorial', () => {
    console.log('tutorial event has occurred');
});

//  Calling the event using emit function
eventEmitter.emit('tutorial');

//  Creating a second event with parameters using eventEmitter
eventEmitter.on('tutorial', (num1, num2) => {
    console.log('Sum is : ' + (num1 + num2));
});

//  Calling the event using emit function
eventEmitter.emit('tutorial', 10, 20);

//  Creating a custom class with event
class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
    }

    get name() {
        return this._name;
    }
}

let pedro = new Person('Pedro');
let christina = new Person('Christina');

pedro.on('name', () => {
    console.log('my name is ' + pedro.name);
});

christina.on('name', () => {
    console.log('my name is ' + christina.name);
});

//  The events that are emitted first are executed first
//  They execute in the order of emission
//  These are synchronous
pedro.emit('name');
christina.emit('name');