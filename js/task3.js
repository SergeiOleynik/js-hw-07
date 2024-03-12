

alert(` Завдання 3:
Напишіть функцію, яка приймає об'єкт з іменем та віком користувача і повертає рядок,
що містить ім'я та повідомлення про те, скільки років.
Використайте деструктуризацію, щоб отримати доступ до імені та віку з переданого об'єкту.`);

const user={
  userName: "abb",
  userAge: 23,
}

function users(obj){
  const {userName,userAge} = obj;
  return `user name: ${userName}, user age: ${userAge}`;
}

alert(`
const user={
  userName: "abb",
  userAge: 23,
}

function users(obj){
  const {userName,userAge} = obj;
  return "user name: "$"{userName}, user age: "$"{userAge}";
} `);

alert(users(user));

