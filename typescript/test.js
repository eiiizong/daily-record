// const sayName = (str: string) => {
//   return `hello ${str}`;
// }
// function geeter(person) {
//     return "Hello " + person.firstName + " " + person.lastName;
// }
// var user = {
//     firstName: 'Zeng',
//     lastName: 'Xiaoming'
// };
// geeter(user);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const add = (arr) => {
    let resultArr = []
    arr.forEach(item => {
        let newArr = new Array(item)
        resultArr = [...resultArr, ...newArr]
    });
    return resultArr.length
}
let result = add(arr)