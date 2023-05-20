// Прошу не придераться к именам компьютеров, ламп и их свойств, они весьма абстрактны и указаны лишь для демонстрации
// усвоенных умений и навыков :)

class Electronics {
    constructor(name, energy) {
        this.name = name;
        this.energy = energy;
        this.turn = false;
    }
    static sumCurrentEnergy(array) {
        let sumCurrentEnergy = 0;
        let arrayTurnElectronics = [];
        for (let item of array) {
            if (item.turn) {
                sumCurrentEnergy += item.energy;
                arrayTurnElectronics.push(item.name);
            }
        }
        if (!sumCurrentEnergy) console.log("Включенных приборов нет!");
        else {
            console.log(`\nСуммарная мощность включенных в розетку приборов - ${sumCurrentEnergy} вт/ч.\nВключенные приборы:`);
            for (let itemName of arrayTurnElectronics) {
                console.log(itemName);
            }
        }
        console.log('\n')
    }
    turnSwitch() {
        if (this.turn) {
            this.turn = false;
            console.log(`${this.name} выключен из розетки!`)
        } else {
            this.turn = true;
            console.log(`${this.name} включен в розетку!`)
        }
    }
}

class Computer extends Electronics {
    constructor(name, energy, os, performance) {
        super(name, energy);
        this.os = os;
        this.perfomance = performance;
    }
    turnSwitch() {
        super.turnSwitch();
    }

    getInfo() {
        console.log(`Это ${this.name}. Он ест ${this.energy} Вт/ч. Установленная ОС - ${this.os}. Его производительность от 0 до 1 - ${this.perfomance}.`);
    }
}

class Lamp extends Electronics {
    constructor(name, energy, size, brightness) {
        super(name, energy);
        this.size = size;
        this.brightness = brightness;
    }
    turnSwitch() {
        super.turnSwitch();
    }
    getInfo() {
        console.log(`Это ${this.name}. Он ест ${this.energy} Вт/ч. . Его размер - ${this.size}. Уровень яркости от 0 до 1 - ${this.brightness}.`);
    }
}

const badComputer = new Computer("Andrew", 300, "Win XP", 0.3);
const bestComputer = new Computer("Simon", 700, "Win 11", 0.8);

const badLamp = new Lamp("Lux", 30, "big", "0.2");
const bestLamp = new Lamp("Exclusive", 20, "small", "0.9");

// массив, где хранятся созданные объекты
let arrayOfElectronics = [];

arrayOfElectronics.push(badComputer);
arrayOfElectronics.push(bestComputer);
arrayOfElectronics.push(badLamp);
arrayOfElectronics.push(bestLamp);

// Пример функционала
Electronics.sumCurrentEnergy(arrayOfElectronics);

bestLamp.turnSwitch();
badComputer.turnSwitch();

Electronics.sumCurrentEnergy(arrayOfElectronics);

bestLamp.turnSwitch();

Electronics.sumCurrentEnergy(arrayOfElectronics);

bestComputer.getInfo();
badLamp.getInfo();