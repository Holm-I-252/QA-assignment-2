module.exports = {
    returnTwo: () => {
        return 2
    },

    greeting: (name) => {
        return `Hello, ${name}.`
    },

    add: (num1, num2) => {
        let sum = num1 + num2
        return sum
    },

    subtract: (num1, num2) => {
        let sum = num1 - num2
        return sum
    },

    multiply: (num1, num2) => {
        let sum = num1 * num2
        return sum
    },

    divide: (num1, num2) => {
        let sum = num1 / num2
        return sum
    },
}
