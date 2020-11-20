'use strict';

function declarevar() {
    console.log('scope in non-arrow', this)
    const c = 3;

    if(true){
        var a = 1;
        // let b = 2;
    }
    // console.log('a', a);
    // console.log('b', b);
    // console.log('c', c);
}

declarevar();

let d = 5;
let e = 'DevSchool';
let f = ['mere', 'pere'];
let g = {
    key:'value',
};
let h = Symbol('foo');
console.log('d', typeof d);

const expr = function () {
    console.log('expresion');
}

// arrow functions () => {}
const arrow = () => {
    console.log('arrow function', this);
}

arrow();

(function iie() {
    console.log('iie')
})();

function varidic(...foo) {
    console.log(foo);
}

varidic(1,3,5,2,2);

function sum(by) {
    let sum = 0;
    return function() {
        sum += by;
        return sum;
    }
}

const sumby5 = sum(5);
console.log(sumby5());
console.log(sumby5());

class Rectangle {

    constructor(height, width) {
        this.width = width;
        this.height = height;
    }

    getMeThis() {
        console.log(this)
    }
}

const p = new Rectangle(12,24);
p.getMeThis();

const rectangle = class {
    constructor(height, width) {
        this.width = width;
        this.height = height;
    }
}

let users = [
    {
        name: 'Ion',
        age: 25,
    },
    {
        name: 'Maria',
        age: 26,
    },
    {
        name: 'Vasile',
        age: 80,
    }
]

// add item
// push
// users.push()

// concat
// users = users.concat(A);

// remove
// users.pop
