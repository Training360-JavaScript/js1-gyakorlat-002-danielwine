
const checker = (array, value) => ({
        exists: array.includes(value),
        index: array.findIndex(item => item == value),
        allElementsAreNumbers: array.every(item => typeof item == "number"),
        someElementsAreNumbers: array.some(item => typeof item == "number")
    })
