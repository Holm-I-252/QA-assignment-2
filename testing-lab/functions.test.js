const {returnTwo, greeting, add, subtract, multiply, divide} = require('./functions')

test('tests to see if the function returns a 2', () => {
    expect(returnTwo()).toEqual(2)
    expect(typeof returnTwo()).toEqual('number')
})

test("tests to see if the function returns 'Hello, {name}.'", () => {
    expect(greeting('James')).toEqual("Hello, James.")
    expect(greeting('Jill')).toEqual("Hello, Jill.")
})

describe('Math Functions', () => {
test("tests to see if the function returns the correct sum", () => {
    expect(add(1,2)).toEqual(3)
    expect(add(5,9)).toEqual(14)
})

test('Test to see if the function properly subtracts 2 numbers', () => {
    expect(subtract(4, 1)).toEqual(3)
    expect(subtract(3000, 750)).toEqual(2250)
})

test('test to see if function properly multiplies 2 numbers', () => {
    expect(multiply(2, 5)).toEqual(10)
    expect(multiply(25, 4)).toEqual(100)
})

test('Test to see if function properly divides 2 numbers', () => {
    expect(divide(10, 2)).toEqual(5)
    expect(divide(100, 2)).toEqual(50)
})
})