/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    const toBe = function(anotherVal) {
        if(val === anotherVal) {
            return true;
        }
        throw Error("Not Equal");
    }
    const notToBe = function(anotherVal) {
         if(val !== anotherVal) {
            return true;
        }
        throw Error("Equal");
    }
    return {
        toBe,
        notToBe
    }
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */