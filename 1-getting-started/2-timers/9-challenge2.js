var count = 100;
var ms = 0;


var hello = number => {
    console.log("Hello World. " + number);

    ms++;

    if (ms % 5 == 0) {
       count = count + 100;
    }
    setTimeout(hello, count, count);
    
}

hello(100);