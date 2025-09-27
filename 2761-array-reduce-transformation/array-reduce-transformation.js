var reduce = function (nums, fn, init) {
    let result = init;
    for (i = 0; i < nums.length; i++) {
        result = fn(result, nums[i]);
    }
    return result;
}
