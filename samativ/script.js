// let a = 2
// let object = {
//     'name': 'name','age': '12'
// }
let lis = [1, 2, 5, 7, 9, 11, 12, 15, 16, 17, 18, 19, 25, 100]
// console.log (object)

//
// prompt('hello')
// confirm('hello')
// console.log(typeof(a))

// let a = +prompt("1-sonni kiriting");
//
// let b = prompt("Amal kiriting");
//
// let c = +prompt("2-sonni kiriting");

// if (b === '+') {
//     natija = a + c;
// } else if (b === '-') {
//     natija = a - c;
// } else if (b === '*') {
//     natija = a * c;
// } else if (b === '/') {
//     natija = a / c;
// } else {
//     alert('Amal kiritishda xato ketdi');
// }
//
// if (natija) {
//     alert('Natija ' + a + b + c + '=' + natija);
// }
// let text = "x * y";
// let result = eval(text);
// alert(result)

// let a = +prompt("1-sonni kiriting:");
// let b = prompt("Amal kiriting (+, -, *, /):");
// let c = +prompt("2-sonni kiriting:");
// let shart = a + " " + b + " " + c;
// let natija;
// natija = eval(shart);
// alert(`Natija: ` + a + b + c + '=' + natija);


///////////////////////////////////////////////////////////////////////////////////////

// let numbers = [12, 15, 11, 17, 16, 9, 5, 18, 100, 25, 2, 7, 19, 1];
// let juftsonlar = [];
// let toqsonlar = [];
// for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//         if (numbers[i] > numbers[j]) {
//             let temp = numbers[i];
//             numbers[i] = numbers[j];
//             numbers[j] = temp;
//         }
//     }
//     if (numbers[i] % 2 === 0) {
//         juftsonlar.push(numbers[i]);
//     } else {
//         toqsonlar.push(numbers[i]);
//     }
// }
// console.log("Juft sonlar: ", juftsonlar);
// console.log("Toq sonlar: ", toqsonlar);
// console.log("tartiblangan sonlar: ", numbers)


// _________________________________lesson2____________________________________


// let list = [1, 2, 20, 50, 3, 4, -5, 600, 7, 8, 9];

// for (let number = 0; number < list.length; number++) {
//     console.log(list[number])
// }
// list.push(10)
// list.pop()
// list.unshift(0)

// const fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.splice(1, 0, "Lemon", "Kiwi");

// fruits.splice(2, 2)

// console.log(fruits.slice(0,2))
// console.log(fruits.length)

// console.log(fruits.indexOf("Mango"))

// console.log(fruits.includes('Orange'))

// console.log(fruits.sort())

// console.log(fruits.reverse())

// console.log(fruits)


// let numbers = [12, 15, 11, 17, 16, 9, 5, 18, 100, 25, 2, 7, 19, 1];
// for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//         if (numbers[i] > numbers[j]) {
//             let temp = numbers[i];
//             numbers[i] = numbers[j];
//             numbers[j] = temp;
//         }
//     }
//     console.log(numbers[i]);
// }

// let numbers = [12, 15, 11, 17, 16, 9, 5, 18, 100, 25, 2, 7, 19, 1];
// console.log('Avvalgi sonlar  ' + numbers)
// for (let i = 0; i < numbers.length; i++) {
//     for (let j = i + 1; j < numbers.length; j++) {
//         if (numbers[i] < numbers[j]) {
//             let temp = numbers[i];
//             numbers[i] = numbers[j];
//             numbers[j] = temp;
//         }
//     }
//     console.log(`Taxlangan son ${numbers[i]}`)
// }


//________________________________Samativ_______________________________________\\

//
// let numbers = [12, 15, 11, 17, 16, 9, 5, 18, 100, 25, 2, 7, 19, 1];
// let juftsonlar = [];
// let toqsonlar = [];
//
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//         juftsonlar.push(numbers[i]);
//         numbers.splice(0, 14, "O'chirildi")
//     } else {
//         toqsonlar.push(numbers[i]);
//     }
// }
// console.log("sonlar: ", numbers);
// console.log("Juft sonlar: ", juftsonlar);
// console.log("Toq sonlar: ", toqsonlar);
//


let numbers = [12, 15, 11, 17, 16, 9, 5, 18, 100, 25, 2, 7, 19, 1];
let juftsonlar = [];
let toqsonlar = [];
console.log('Hozir shu sonlar bor', numbers)
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        juftsonlar.push(numbers[i]);
        console.log(numbers[i], "Juft sonlarga qo'shildi va sonlardan olib tashlandi");
        numbers.splice(i, 1);
        console.log(numbers)
        i--;
    }else{
        toqsonlar.push(numbers[i]);
        console.log(numbers[i], "Toq sonlarga qo'shildi va sonlardan olib tashlandi");
        numbers.splice(i, 1);
        i--;
    }
}
if (numbers.length === 0){
    console.log("Qolgan son: 0 ga teng")
}

console.log('Toq sonlar: ', toqsonlar);
console.log('Juft sonlar: ', juftsonlar);

