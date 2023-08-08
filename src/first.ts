let id: number = 5;
let company: string = "Yus";
let isPublished: boolean = true;
let x: any = "hey";

//array
let ids: number[] = [1, 2, 4, 5, 6];
let arr: any[] = [1, "fa", true];

//tuple
let person: [number, string, boolean] = [1, "brad", true];

//tuple array
let employee: [number, string][];

employee = [
  [1, "bread"],
  [2, "nge"],
  [3, "yas"],
];

//union

let pid: string | number;

pid = "32";

//ENum
enum direction1 {
  up = 1,
  down,
  left,
  right,
}
enum direction2 {
  up = "Up",
  down = "Down",
  left = "left",
  right = "Right",
}

type User = {
  id: number;
  name: string;
};
const user: User = {
  id: 1,
  name: "john",
};
console.log(direction1.left);

//type assertion

let cid: any = 1;
let customerId = <number>cid; //or
// let customerId = cid as number

function addNum(x: number, y: number): number {
  return x + y;
}

console.log(addNum(1, 2));

function log(message: string | number): void {
  console.log(message);
}

//interfaces

interface UserInterface {
  id: number;
  name: string;
}
const user1: UserInterface = {
  id: 1,
  name: "john",
};
user.id = 5;

interface Mathfunc {
  (x: number, y: number): number;
}

const add: Mathfunc = (x: number, y: number): number => x + y;
const sub: Mathfunc = (x: number, y: number): number => x - y;

interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}
//classes
class Person implements PersonInterface {
  id: number;
  name: string;

  constructor(id: number, name: string) {
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
//subclass
class Employee extends Person {
  position: string;
  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}
const emp = new Employee(3, "Shawn", "developer");
console.log(emp.name);
console.log(emp.register());

//generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArray = getArray<number>([1, 2, 3, 4]);
let strArray = getArray<string>(["yus", "veng", "ance"]);
