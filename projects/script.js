// class NewClass {
//     constructor(name) {
//         this.name = name;
//     }
//
//     year(age) {
//         return 2024 - age
//     }
//
//     age(year) {
//         return 2024 - year
//     }
// }
//
// const age = new NewClass('budsfi')
//
// console.log(age.year(18))
// console.log(age.age(2006))


// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     sayHello() {
//         return `Salom, mening ismim ${this.name}!`;
//     }
// }
// const person1 = new Person("Ali");
// const person2 = new Person("Zara");
// console.log(person1.sayHello());
// console.log(person2.sayHello());
//
//
// class Person {
//     constructor(name, age) {
//         this.name  = name;
//         this.age = age;
//     }
//     sayHello() {
//         return `Salom, mening ismim ${this.name} va mening yoshim ${this.age}!`;
//     }
// }
// const person1 = new Person("name", 18);
//
// const age = ('15');
// console.log(person1.sayHello());
//


// class Animal {
//     constructor(name, year, food) {
//         this.name = name;
//         this.year = year;
//         this.food = food;
//     }
//
//     hisoblash(currentYear = 2024) {
//         return currentYear - this.year;
//     }
//
//     ovqat(foodItem) {
//         if (this.food.includes(foodItem)) {
//             return `${this.name} to'g'ri ovqatlanyapti.`;
//         } else {
//             return `${this.name} noto'g'ri ovqatlanyapti!`;
//         }
//     }
// }
//
// const cow = new Animal("Sigir", 2018, ["ot", "somon"]);
// const cat = new Animal("Mushuk", 2020, ["sut", "gosht"]);
// const dog = new Animal("It", 2016, ["gosht", "suyak", "ovqat"]);
// const animals = [cow, cat, dog];
// animals.forEach((animal) => {
//     console.log(`${animal.name}ning yoshi: ${animal.hisoblash()} yil`);
//     const userFood = prompt(`${animal.name} uchun ovqat kiriting:`);
//     console.log(animal.ovqat(userFood));
// });

// class Calc {
//     constructor() {
//         this.result = 0;
//     }
//
//     calculate(ifoda, son) {
//         if (ifoda === "+") this.result += son; else if (ifoda === "-") this.result -= son; else if (ifoda === "*") this.result *= son; else if (ifoda === "/") {
//             if (son === 0) return "0 ga bo'lish mumkin emas!";
//             this.result /= son;
//         } else {
//             return "Noto'g'ri operatsiya!";
//         }
//         return this.result;
//     }
// }
//
// const calc = new Calc();
// console.log(calc.calculate("+", 10));
// console.log(calc.calculate("-", 3));
// console.log(calc.calculate("*", 2));
// console.log(calc.calculate("/", 4));


//
// // calc.js
//
// let screen = document.getElementById('calc-screen');
// function appendValue(value) {
//     screen.value += value;
// }
// function clearScreen() {
//     screen.value = '';
// }
// function calculate() {
//     try {
//         screen.value = eval(screen.value);
//     } catch (error) {
//         screen.value = 'Xato!';
//     }
// }
//

//
// class Calc {
//     constructor(num1, num2) {
//         this.num1 = num1;
//         this.num2 = num2;
//     }
//
//     plus() {
//         console.log(this.num1 + this.num2)
//     }
//     minus() {
//         console.log(this.num1 - this.num2)
//     }
//
//     multiply() {
//         console.log(this.num1 *  this.num2)
//     }
//
//     bol() {
//         console.log(this.num1 / this.num2)
//     }
//
// }
//
// const calc = new Calc(12, 32);
//
// calc.plus()
// calc.minus()
// calc.multiply()
// calc.bol()


// let h1 = document.getElementsByTagName('h1');
// let h1 = document.getElementById('id');
// let h1 = document.getElementsByClassName('h1');

// let h2 = document.querySelectorAll('#id');

//
// button.addEventListener('click', (e) => {
//     if (e.key === 'w') {
//         div.classList.toggle('red')
//         div.style.display = 'flex'
//     }
//     console.log(e.key)
// })
// button.addEventListener('click', (e) => {
//     console.log(e)
//     div.classList.toggle('red')
//
// })
// let div = document.querySelector('.div1');
// let button = document.querySelector('button');
// const button = document.getElementById('button');
// const div = document.getElementById('div');
//
// button.addEventListener('click', () => {
//     div.classList.toggle('red');
//     if (div.style.display === 'none' || div.style.display === '') {
//         div.style.display = 'block';
//     } else {
//         div.style.display = 'none';
//     }
// });

//
const button = document.getElementById('button');
const bgdiv = document.querySelector('.bgdiv');

button.addEventListener('click', () => {
    bgdiv.style.display = 'flex';
});

function closeBox() {
    document.getElementById('bgdiv').style.display = 'none';
}

bgdiv.addEventListener('click', (event) => {
    if (event.target === bgdiv) {
        closeBox();
    }
});



