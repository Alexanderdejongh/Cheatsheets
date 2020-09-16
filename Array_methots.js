//ARRAY METHOTS

// variables
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const messieNumber = [1, 2, 3, 3, 6, 6, 5, 38, 2, 10, 2, 3, 3, 6, 6, 5, 38];
const spliceNumber = [1, 2, 3, 3, 6, 6, 5, 38, 2, 10, 2, 3, 3, 6, 6, 5, 38];
const numberString = "12345678910";
const arrayinarray = [1, [2, [3, [4]]]];
let zero = 0;
let count = {};
const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "a",
    "b",
    "c",
    "d",
    "e",
    "b",
    "c",
    "d",
    "e",
    "a",
    "a",
    "a",
];

const products = [{
        name: "Beer",
        price: 8,
        count: 4,
    },
    {
        name: "icecream",
        price: 4,
        count: 16,
    },
    {
        name: "VVV-card",
        price: 20,
        count: 1,
    },
    {
        name: "Phone",
        price: 800,
        count: 1,
    },
];

const strings = ["1", "2", "3", "4", "5"];

const persons = [{
        name: "Alex",
        age: 20,
    },
    {
        name: "Mark",
        age: 17,
    },
    {
        name: "Jan",
        age: 36,
    },
    {
        name: "Henk",
        age: 92,
    },
];

const randomNumber = [
    10,
    60,
    45,
    355,
    352,
    23,
    53,
    54,
    235,
    3525,
    5,
    3,
    52,
    25,
    6,
    7,
    8,
    99,
];

// _________________________________________________________________

// functie om de namen van de array van persons in een nieuwe variable te zetten

const namesPersonsOfPeople = persons.map((item) => {
    return item.name;
});
// console.log(namesPersonsOfPeople);

// _________________________________________________________________

//      !!!--- FOREACH --- !!!

// number.forEach(controleItem);

// function controleItem(item, index, arr) {
//     console.log("a[" + index + "]" + item);
// }

// Zelfde code in het kort - Arrow-Function

// number.forEach((item, index, arr) => {
//     console.log("a[" + index + "]" + item);
// });

number.forEach((item) => {
    zero += item;
});

// console.log(zero);

letters.forEach((item) => {
    if (count[item]) {
        count[item]++;
    } else {
        count[item] = 1;
    }
});

// console.log(count);

// _________________________________________________________________

//      !!!--- MAP --- !!!

// const numberDouble = number.map(double);

// function double(value, index, arr) {
//     return value * 2;
// }

const numberDouble = number.map(multiply);

function multiply(value, index) {
    //value, index, array
    return value * index;
}

// console.log(numberDouble);

const totalPriceProducts = products.map((item) => item.price * item.count);

// console.log(totalPriceProducts);

const totalPriceProductsArray = products.map((item) => ({
    name: item.name,
    totalValue: item.price * item.count,
}));

// console.log(totalPriceProductsArray);

const numbersOfString = strings.map(Number);

// console.log(numbersOfString);

// _________________________________________________________________

//      !!!--- FILTER ---  !!! +++ IndexOf +++ !!!

const even = number.filter(isEven);

function isEven(value) {
    return value % 2 === 0;
}

// console.log(even);

const adults = persons.filter((persons) => persons.age >= 18);

// console.log(adults);

const doubleNummerDeliter = messieNumber.filter((value, index, arr) => {
    return arr.indexOf(value) === index;
});

// console.log(doubleNummerDeliter);

// _________________________________________________________________

//      !!!--- REDUCE ---  !!! +++ SUM +++ !!!

const totalNumbers = number.reduce(sum, 0);

function sum(accumulator, value) {
    return accumulator + value;
}

// console.log(totalNumbers);

const maximumnubers = messieNumber.reduce(callback, -Infinity);

function callback(accumulator, value) {
    if (accumulator > value) {
        return accumulator;
    } else {
        return value;
    }
}

// console.log(maximumnubers);

const totalProductsValue = products.reduce(
    (acc, item) => acc + item.price * item.count,
    0
);

// console.log(totalProductsValue);

// _________________________________________________________________

/*       !!!--- SLICE ---  !!! */

const slicedNumbers = number.slice(1, 5);
const slicedNegativeNumbers = number.slice(-5);

// console.log(slicedNumbers);

// console.log(slicedNegativeNumbers);

// _________________________________________________________________

/*       !!!--- SPLICE ---  !!! */

const splicedNumber = spliceNumber.splice(1, 5);

// console.log(splicedNumber);
// console.log(spliceNumber);

/*       !!!--- SORT ---  !!! */

namesPersonsOfPeople.sort();
// console.log(namesPersonsOfPeople);

randomNumber.sort(compareFunction);

function compareFunction(a, b) {
    return a - b;
}

// console.log(randomNumber);

const productsInstoreHightoLow = products.sort((a, b) => {
    return a.price - b.price;
});

// console.log(productsInstoreHightoLow);

const productsInstoreLowtoHigh = products.sort((a, b) => {
    return b.count - a.count;
});

// console.log(productsInstoreLowtoHigh);

// _________________________________________________________________

/*       !!!--- CONCAT ---  !!! */

const concatNumbers = number.concat(messieNumber);
const concatNumbersAndslicednumbers = number.concat(
    messieNumber,
    spliceNumber,
    1200,
    222000000,
    messieNumber
);

// console.log(concatNumbers);
// console.log(concatNumbersAndslicednumbers);

/*       !!!--- FILL ---  !!! */

const filledNumber = concatNumbersAndslicednumbers.fill(0);

// console.log(filledNumber);

//functie die nummers aanmaakt (het nummer dat je wilt hebben)
function fillInNumbers(nummertjuh) {
    //die wordt in een Array gestopt
    return Array(nummertjuh)
        .fill(0) //Begint bij 0
        .map((_, idx) => idx + 1); //die voegt elke +1 toe aan de index van de map
}

// console.log(fillInNumbers(80));

// _________________________________________________________________

/*       !!!--- INCLUDES---  !!! */

const getNameofPeople = namesPersonsOfPeople.includes("jan");

// "zoek"Functie of er een naam aanwezig is in de lijst

function getNameFunction(name) {
    if ((name = namesPersonsOfPeople.includes(name))) {
        console.log("Yes you've geussed the right name");
    } else {
        console.log("The name is not in the list");
    }
}

const getName = getNameFunction;

// console.log(getNameofPeople);

// console.log(getName("Jan"));

// _________________________________________________________________
/*       !!!--- JOIN---  !!! */

const joinedNames = namesPersonsOfPeople.join(" - ");

// console.log(joinedNames);

// _________________________________________________________________

/*       !!!--- REVERSE---  !!! */

const reversedconcatNumbers = concatNumbers.reverse();

// console.log(reversedconcatNumbers);

// _________________________________________________________________

/*       !!!--- Push---  !!! */

persons.push({
    name: "levi",
    age: 25,
}, {
    name: "Jasper",
    age: 89,
});

// console.log(persons);

// _________________________________________________________________

/*       !!!--- POP---  !!! */

const latestPerson = persons.pop();

// console.log(latestPerson);

// _________________________________________________________________

/*       !!!--- UNSHIFT ---  !!!   !!! +++ SHIFT +++ !!!  */

const totalPersons = persons.unshift({
    name: "Jermy",
    age: 16,
}, {
    name: "Rafael",
    age: 12,
});

// console.log(persons, totalPersons); //het kan tegelijk het aantal 'strings' weergeven.

const LostPersons = persons.shift({
    name: "Jermy",
    age: 16,
});

// console.log(persons, LostPersons);

// _________________________________________________________________

/*       !!!--- INDEXOF ---  !!! !!! +++ LASTINDEXOF +++ !!!  */

const indexOfPerson = namesPersonsOfPeople.indexOf("Henk");

// console.log(namesPersonsOfPeople, indexOfPerson);

// _________________________________________________________________

/*       !!!--- EVERY ---  !!! !!! +++ Some +++ !!!  */

const numbersThatAreGreaterThan = persons.every(ifNumberisGreaterthan);

const numbersThatAreNotGreaterThan = persons.every(ifNumberisNotGreaterthan);

function ifNumberisGreaterthan(item) {
    return item.age >= 16;
}

function ifNumberisNotGreaterthan(item) {
    return item.age >= 12;
}

// console.log(numbersThatAreGreaterThan, " and..", numbersThatAreNotGreaterThan);

// const someNumbersThatAreGreaterThan = persons.some(ifNumberisGreaterthan);

// console.log(someNumbersThatAreGreaterThan);

// _________________________________________________________________

/*       !!!--- FIND ---  !!!   !!! +++ FINDINDEX +++ !!!   */

const findSomePerson = persons.find(findNamePerson);
const findPersonAge = persons.find(findNamePerson).age;

function findNamePerson(item) {
    return item.name === "Jan";
}

// console.log(findSomePerson, findPersonAge);

const findIndexPerson = persons.findIndex(findNamePerson);

// console.log(findIndexPerson);

// _________________________________________________________________

/*       !!!--- FROM ---  !!!   !!! +++ FLAT +++ !!! */

const stringFromnumberString = Array.from(numberString);

const mapFromnumberString = Array.from(numberString, (x) => Number(x));

// console.log(stringFromnumberString, mapFromnumberString);

const haalDubbeleNummersWeg = Array.from(new Set(numberString));

// console.log(haalDubbeleNummersWeg);

const haaldearrayslos = arrayinarray.flat(Infinity);

console.log(arrayinarray, haaldearrayslos);

// _________________________________________________________________