function sum(...array) {
    let total = 0

    for(let i = 0; i < array.length; i++) {
        total += array[i] 
    }
    return total
}


function continuousAdd(num) {
    
    let args = []

    return function _curryAdd(num) {
        args.push(num)
        console.log(sum(args))
        // return _curryAdd
    }


}





// ----------------------------------- Bind with Args ----------------------
