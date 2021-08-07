class LargeSmall {
    constructor() {}

    /* largest number from array using for loop */
    lergestNumber(numbers) {
        let largenum = numbers[0];
        for (let i = 1; i < numbers.length; i++) {
            let element = numbers[i];
            if (element > largenum) {
                largenum = element;
            }
        }
        return largenum;
    }

    /* small number */
    smallestNumber(numbers) {
        let smallnum = numbers[0];
        for (let i = 1; i < numbers.length; i++) {
            let element = numbers[i];
            if (element < smallnum) {
                smallnum = element;
            }
        }
        return smallnum;
    }
}