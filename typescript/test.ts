// const sayName = (str: string) => {
//   return `hello ${str}`;
// }

// sayName(23232);

interface Person {
  firstName: string;
  lastName: string;
}

function geeter(person: Person) {
  return `Hello ${person.firstName} ${person.lastName}`
}

const user = {
  firstName: 'Zeng',
  lastName: 'Xiaoming'
};

geeter(user);