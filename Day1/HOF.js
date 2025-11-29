function greet(name){
    return `Hello `+ name;
}
function higherOrderfunt(fn){
    return fn("Shahid");
}
console.log(higherOrderfunt(greet));

//Since greet is passed as an argument to higherOrder, we call higherOrder(greet). Inside it, fn("Shahid") is executed, which means greet("Shahid"). So greet receives "Shahid" and prints "Hello Shahid".
