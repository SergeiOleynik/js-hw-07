
alert(`  Завдання 5:
    Створіть функцію personInfo, яка приймає об'єкт в якості параметра та виконує деструктуризацію цього об'єкта, 
    витягуючи з нього наступні поля: "name", "age", "email", "city". 
    Потім використайте деструктуризовані значення для створення нового об'єкта з наступними полями: 
    "fullName" (значення поля "name" додане до значення поля "age" через пробіл), 
    "contact" (значення поля "email" додане до значення поля "city" через кому). Функція має повертати цей новий об'єкт.

    Маєте отримати результат:
    contact: "john.doe@example.com, New York"
    fullName: "John Doe, 30
`);

alert(`code:
    const person = {
        name: "John Doe",
        age: 30,
        email: "john.doe@example.com" ,
        city: "New York",
    };
    const newPersone={ contact:[], fullName:[], };

    function newObj(obj,callback){
        const {email,city,name,age} = obj;
        callback(email,city,name,age);
    }; 
    const callback=(email,city,name,age)=>{
        newPersone.contact.push(email,city);
        newPersone.fullName.push(name,age);
    }

    newObj(person,callback);
    const contact = newPersone.contact,
          fullName = newPersone.fullName;
`);

const person = {
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com" ,
    city: "New York",
}; 
const newPersone = { contact:[], fullName:[], };

function newObj(obj,callback){
   const {email,city,name,age} = obj;
   callback(email,city,name,age);
}; 

const callback = (email,city,name,age) => {
    newPersone.contact.push(email,city);
    newPersone.fullName.push(name,age);
}

newObj(person,callback);

const contact = newPersone.contact,
      fullName = newPersone.fullName;

alert(`
 contact:  ${contact}
 fullName: ${fullName}
`);
       






