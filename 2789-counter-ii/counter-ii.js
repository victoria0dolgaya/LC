var createCounter = function(init) {
    let current = init;
    return {
        increment(){
            return ++current;
        },
        decrement(){
            return --current;
        },
        reset(){
            current = init;
            return current;
        }
    }

}