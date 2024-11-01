function arg_func (arg1) {
    return function (arg2) {
        return arg1 + arg2;
    }
}

let f1 = arg_func(5);
console.log(f1(8));