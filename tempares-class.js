class Tempareture {

    /* const */
    constructor() {}

    /* celcius to farenheit */
    celcuisTofarenheit(cel) {
        let farenheit = (cel * 9 / 5) + 32;
        return farenheit;
    }

    /* farenheit to celcius */
    farenheitToclcius(faren) {
        let farenheit = (faren - 32) * 5 / 9;
        return farenheit.toFixed(4);
    }
}

/* class init */
let tapmatra = new Tempareture();

const cTf = tapmatra.celcuisTofarenheit(37.7);
const fTc = tapmatra.farenheitToclcius(100);
console.log(cTf);
console.log(fTc);