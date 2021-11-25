const TestFunction = require( "./server");

describe('Test Functions', () => {
    test('Test TestFunction', () => {
        const { x, y } = { x: 1, y: 2};

        const result = TestFunction(x, y);

        expect(result).toBe(2);
    })
})