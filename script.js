'use strict';

//==============С использованием функции конструктора=================//
function User(name, age) {
    this.name = name;
    let userAge = age;

    this.say = function() {
        console.log(`Имя пользователя: ${this.name}, возраст ${userAge}`);
    };

    this.getAge = function() {
        return userAge;
    };
    //доступ к изменению свойства только через проверку
    this.setAge = function(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            userAge = age;
        } else {
            console.log('Недопустимое значение!');
        }
    };
}

const ivan = new User('Ivan', 27);
console.log(ivan.name);
console.log(ivan.getAge());

ivan.setAge(30);
ivan.setAge(300);
console.log(ivan.getAge());

ivan.say();



//==============С использованием класса=================//
class User {
    constructor(name, age) {
        this.name = name;
        this._age = age; // lowdash(нижнее подчеркивание) для обозначения свойства которое нельзя изменять
    }
    
    #surname = 'Nossov'; // приватное свойство которое нельзя изменить извне 

    say() {
        console.log(`Имя пользователя: ${this.name} ${this.#surname}, возраст ${this._age}`);
    }

    //получение свойства через геттер
    get age() {
        return this._age;
    }
    //установка свойства через сеттер
    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('Недопустимое значение!');
        }
    }
}

const ivan = new User('Ivan', 27);
console.log(ivan.age);
ivan.age = 99;
console.log(ivan.age);
ivan.say();



