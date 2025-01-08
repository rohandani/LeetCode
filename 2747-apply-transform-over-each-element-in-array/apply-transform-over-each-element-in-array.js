/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const len = arr.length;
    const res = [];
    for(let i=0; i< len; i++) {
        res.push(fn(arr[i], i));
    }
    return res;
};