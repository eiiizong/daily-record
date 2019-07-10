// const sayName = (str: string) => {
//   return `hello ${str}`;
// }
function geeter(person) {
    return "Hello " + person.firstName + " " + person.lastName;
}
var user = {
    firstName: 'Zeng',
    lastName: 'Xiaoming'
};
geeter(user);
