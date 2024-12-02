// function prise(price) {
//     let foizl = price.price * 0.15;
//     price.price += foizl;
//     return price;
// }
//
// console.log(prise({
//     'name': 'Kola', 'price': 5000
// })


// const worker = {
//     name: prompt('ismingni kirit'),
//     monthlySalary: 1000000,
// };
// function oylikhisob() {
//     const monthsWorked = +prompt("Nechta oy ishladingiz?");
//     let totalSalary = 0;
//     for (let i = 1; i <= monthsWorked; i++) {
//         totalSalary += worker.monthlySalary;
//     }
//     alert(`${worker.name} ${monthsWorked} oy ishlaganida jami ${totalSalary} so'm ish haqi oladi.`);
// }
// oylikhisob();


//
// let list = [{
//     'name': 'Name 1', 'month': 3, 'price': 1500000
// }, {
//     'name': 'Name 2', 'month': 2, 'price': 2500000
// }, {
//     'name': 'Name 3', 'month': 6, 'price': 2000000
// }, {
//     'name': 'Name 4', 'month': 2, 'price': 3000000
// }, {
//     'name': 'Name 5', 'month': 5, 'price': 10000000
// },];
// let list2 = [];
//
// function call(object) {
//     let name = object.name, month = object.month, price = object.price;
//     let worker = {
//         'name': name, 'salary': month * price
//     }
//     list2.push(worker)
// }
//
// list.forEach(item => {
//     call(item)
// })
// console.log(list)
// console.log(list2)


class NewClass {
    constructor(name) {
        this.name = name;
    }

    year(age) {
        return 2024 - age
    }

    age(year) {
        return 2024 - year
    }
}

const age = new NewClass('budsfi')

console.log(age.year(18))
console.log(age.age(2006))
