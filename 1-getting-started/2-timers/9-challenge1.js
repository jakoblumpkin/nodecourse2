var count = 1;

var hello = number => {
    console.log("Hello World. " + number);
    count ++;
    setTimeout(hello, count * 1000, count);
}

hello(1);