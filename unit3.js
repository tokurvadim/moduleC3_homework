const object = {
    'A': 5,
    'B': 6
};

// Task 1
function logOwnProperties(obj) {
    for (let item in obj) {
        if (obj.hasOwnProperty(item)) console.log(`Ключ: ${item}, значение: ${obj[item]}`);
    }
}

logOwnProperties(object);

// Task 2
function hasProperty(prop, obj) {
    for (let item in obj) {
        if (item === prop) return true;
    }
    return false;
}

console.log(hasProperty('A', object))
console.log(hasProperty('C', object));

//Task 3
function createNullObj (){
    return Object.create(null);
}

const nullObj = createNullObj();
console.log(Object.getPrototypeOf(nullObj));