class GradeCalc {
    constructor() {}

    /* grade calculator */
    gradeCalculator(number) {
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
}