

var expect = val => ({
    toBe: otherVal => val === otherVal || (() => { throw new Error("Not Equal") })(),
    notToBe: otherVal => val !== otherVal || (() => { throw new Error("Equal") })()
});
