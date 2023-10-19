var createCounter = function(init) {
    const resetValue = init;
    let value = init;
    const increment = () => ++value;
    const decrement = () => --value;
    const reset = () => (value = resetValue);
    return {increment,decrement,reset};
};