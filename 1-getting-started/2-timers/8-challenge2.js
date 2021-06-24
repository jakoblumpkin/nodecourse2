var counter = 0;

const hello = setInterval(
   () => {
    console.log('Hello World');
    if( counter === 4) {
        clearInterval(hello);
        console.log("Done");
    }
   counter ++;
        },
        1000
);

console.log(counter);
// clearinterval
// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.
