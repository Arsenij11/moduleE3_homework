let st = null;
 
function counter (start, stop) {
    switch (st) {
        case null:
            st = start;
            console.log(st);
            break;
        case stop:
            clearInterval(intervalID);
            break;
        default:
            st++;
            console.log(st);
            break;
    }
}

let intervalID = setInterval(counter, 1000, 5, 15);