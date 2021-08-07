class Interest {
    constructor() {}

    /* simple interest system */
    getInterest(amout, percentage) {
        let result = (amout / 100) * percentage;
        return result;
    }

    /* get interest by years */
    getInterestByYears(amout, year) {
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
}