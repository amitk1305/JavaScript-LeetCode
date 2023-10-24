var debounce = function(fn, t) {
    let executionTime = 0
    let ref

    return function(...args) {
        const currentTime = Date.now()
        if (currentTime <= executionTime) clearTimeout(ref)
        executionTime = currentTime + t
        
        ref = setTimeout(() => {
            return fn(...args)
        }, t)
    }
};