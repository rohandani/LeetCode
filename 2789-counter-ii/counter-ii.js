/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    const initialVal = init;
    let updatedVal = init;
    const increment = () => {
        return ++updatedVal;
    }
    const decrement = () => {
        return --updatedVal;
    }
    const reset = () => {
        updatedVal = initialVal;
        return initialVal;
    }
    return {
        increment,
        decrement,
        reset
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */