"use strict";
function assert(condition, message) {
    if (!condition)
        throw new Error(message);
}
function reverSorted(input) {
    return input.slice().sort().reverse();
}
function move(point, x, y) {
    point[0] += x;
    point[1] += y;
    return point;
}
const point = [0, 0];
const moved = move(point, 10, 10);
console.log(moved);
function createPerson(first, last) {
    return {
        first,
        last,
        fullname: `${first} ${last}`,
    };
}
function logPerson(person) {
    console.log(person.first, person.fullname);
}
const info = {
    x: 'john',
    y: 'gem'
};
