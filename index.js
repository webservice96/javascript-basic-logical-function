/* celcius to farenheit */
function celcuisTofarenheit(cel) {
    let farenheit = (cel * 9 / 5) + 32;
    return farenheit;
}
const celcius = 0;
const toFarenheit = celcuisTofarenheit(celcius);
// console.log(`${celcius} Celcius to ${toFarenheit} farenheit`);

/* farenheit to celcius */
function farenheitToclcius(faren) {
    let farenheit = (faren - 32) * 5 / 9;
    return farenheit;
}
const farenheit = 100;
const toCelcius = farenheitToclcius(farenheit);
// console.log(`${farenheit} Farenheit to ${toCelcius.toFixed(4)} celcius`);

/* grade calculator */
function gradeCalculator(number) {
    if (number >= 80 && number <= 100) {
        return `Grade A+`;
    } else if (number >= 70 && number <= 79) {
        return `Grade A`;
    } else if (number >= 60 && number <= 69) {
        return `Grade A-`;
    } else if (number >= 50 && number <= 59) {
        return `Grade B`;
    } else if (number >= 40 && number <= 49) {
        return `Grade C`;
    } else if (number >= 33 && number <= 39) {
        return `Grade D`;
    } else if (number >= 0 && number <= 32) {
        return `Grade Fail`;
    }
}
const mynum = 20;
const result = gradeCalculator(mynum);
// console.log(result);

/* simple interest system */
function getInterest(amout, percentage) {
    let result = (amout / 100) * percentage;
    return result;
}
const amount = 100000;
const percent = 2;
const offer = getInterest(amount, percent);
// console.log(offer);


/* get interest by years */
function getInterestByYears(amout, year) {
    if (amout >= 100000 && year == 5) {
        let interest = (amout / 100) * 5;
        return `You will get 5% of bonus for ${interest} USD`;
    } else if (amout < 100000 && year == 2) {
        let interest = (amout / 100) * 2;
        return `You will get 2% of bonus for ${interest} USD`;
    } else {
        return `You can't get any interest for ${amount} USD in ${year} years`;
    }
}
const taka = 100000;
const yaer = 5;
const youInterest = getInterestByYears(taka, yaer);
// console.log(youInterest);

/* largest number from array using for loop */
function lergestNumber(numbers) {
    let largenum = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        let element = numbers[i];
        if (element > largenum) {
            largenum = element;
        }
    }
    return largenum;
}
let numbers = [10, 20, 4, 2, 801, 500, 1, 20000, 90];
console.log(lergestNumber(numbers));

/* small number */
function smallestNumber(numbers) {
    let largenum = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        let element = numbers[i];
        if (element < largenum) {
            largenum = element;
        }
    }
    return largenum;
}

let numbers2 = [10, 20, 4, 2, 801, 500, 1, 20000, 90];
console.log(smallestNumber(numbers2));