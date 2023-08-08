"use strict";
let id = 5;
let company = "Yus";
let isPublished = true;
let x = "hey";
//array
let ids = [1, 2, 4, 5, 6];
let arr = [1, "fa", true];
//tuple
let person = [1, "brad", true];
//tuple array
let employee;
employee = [
    [1, "bread"],
    [2, "nge"],
    [3, "yas"],
];
//union
let pid;
pid = "32";
//ENum
var direction1;
(function (direction1) {
    direction1[direction1["up"] = 1] = "up";
    direction1[direction1["down"] = 2] = "down";
    direction1[direction1["left"] = 3] = "left";
    direction1[direction1["right"] = 4] = "right";
})(direction1 || (direction1 = {}));
var direction2;
(function (direction2) {
    direction2["up"] = "Up";
    direction2["down"] = "Down";
    direction2["left"] = "left";
    direction2["right"] = "Right";
})(direction2 || (direction2 = {}));
const user = {
    id: 1,
    name: "john",
};
console.log(direction1.left);
//type assertion
let cid = 1;
let customerId = cid; //or
// let customerId = cid as number
function addNum(x, y) {
    return x + y;
}
console.log(addNum(1, 2));
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: "john",
};
user.id = 5;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
//classes
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        console.log(123);
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const yus = new Person(1, "Ayush");
const mike = new Person(2, "mike");
console.log(yus, mike);
console.log(yus.register());
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "Shawn", "developer");
console.log(emp.name);
console.log(emp.register());
