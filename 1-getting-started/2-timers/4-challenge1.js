const theOneFunc = (say) => {
    console.log("Saying hello after " + say);
};

setTimeout(theOneFunc, 4 * 1000, 4);

setTimeout(theOneFunc, 8 * 1000, 8);



// Hello after 4 seconds

// Hello after 8 seconds

// You can define only ONE function
