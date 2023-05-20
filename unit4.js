// Прошу не придераться к именам компьютеров и свойств, они весьма абстрактны и указаны лишь для демонстрации усвоенных
// умений и навыков :)

function Electronics() {
    this.name = "";
    this.energy = 0;
    this.turn = false;
}

Electronics.prototype.turnSwitch = function() {
    if (this.turn) {
        this.turn = false;
        console.log(`${this.name} выключен из розетки!`)
    } else {
        this.turn = true;
        console.log(`${this.name} включен в розетку!`);
    }
}

Electronics.sumCurrentEnergy = function (arguments) {
    let sumCurrentEnergy = 0;
    let arrayTurnElectronics = [];
    for (let item of arguments) {
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
}

function Computer(name, energy, os, performance) {
    this.name = name;
    this.energy = energy;
    this.os = os;
    this.perfomance = performance;
    this.getInfo = function() {
        console.log(`Это ${this.name}. Он ест ${this.energy} Вт/ч. Установленная ОС - ${this.os}. Его производительность от 0 до 1 - ${this.perfomance}.`);
    }
}
Computer.prototype = new Electronics();

function Lamp(name, energy, brightness, size) {
    this.name = name;
    this.energy = energy;
    this.brightness = brightness;
    this.size = size;
    this.getInfo = function() {
        console.log(`Это ${this.name}. Он ест ${this.energy} Вт/ч. Уровень яркости от 0 до 1 - ${this.brightness}. Его размер - ${this.size}.`);
    }
}
Lamp.prototype = new Electronics();

const badComputer = new Computer("Andrew", 300, "Win XP", 0.3)
const bestComputer = new Computer("Simon", 700, "Win 11", 0.8)

const badLamp = new Lamp("Lux", 30, "0.2", "big")
const bestLamp = new Lamp("Exclusive", 20, "0.9", "very small")

// массив, где хранятся созданные объекты
arrayOfElectronics = [];

arrayOfElectronics.push(badComputer);
arrayOfElectronics.push(bestComputer);
arrayOfElectronics.push(badLamp);
arrayOfElectronics.push(bestLamp);

// пример функционала
Electronics.sumCurrentEnergy(arrayOfElectronics);
badComputer.turnSwitch();
bestLamp.turnSwitch();
Electronics.sumCurrentEnergy(arrayOfElectronics);

bestLamp.turnSwitch();
Electronics.sumCurrentEnergy(arrayOfElectronics);

bestLamp.getInfo();
badComputer.getInfo();