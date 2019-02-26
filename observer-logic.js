// > Задача — реализовать паттерн observer
//   Класс реализован посредством псевдоклассов

class Observable {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        const removeIndex = this.observers.findIndex(obs => {
            return observer === obs;
        });

        if (removeIndex !== -1) {
            this.observers = this.observers.slice(removeIndex, 1);
        }
    }

    notify() {
        if (this.observers.length > 0) {
            this.observers.forEach(observer => observer.reaction());
        }
    }

    makeMove() {
        console.log("i'm moving forward")
        this.notify()
    }
}

class Observer {
    constructor(arg, id) {
        this.messageReaction = arg
        this.id = id
    }

    reaction() {
        console.log(`reaction ${this.id} observer: ${this.messageReaction} `);
    }
}

let observable1 = new Observable

let observer1 = new Observer("wow!", 1)
let observer2 = new Observer("not bad", 2)

observable1.addObserver(observer1)
observable1.addObserver(observer2)

observable1.makeMove()