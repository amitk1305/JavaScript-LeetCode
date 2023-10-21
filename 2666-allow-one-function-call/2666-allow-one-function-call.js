var once = function(fn) {
    let times=0;
    return function(...args){
           times+=1;     
           if(times==1)
               return fn(...args);
           return undefined;
    }
};