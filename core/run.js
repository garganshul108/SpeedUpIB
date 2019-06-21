function getInput() {
    return new Promise((resolve, reject) => {
        let input = parseFloat(prompt("Speed Factor: "));
        // console.log(parseFloat(input));
        // console.log(typeof(parseFloat(input)));
        if (isNaN(input)) {
            alert("Incorrect input for speed");
            reject(new Error("Incorrect input for speed"));
        } else if (input > 3.0) {
            alert("Too high for Speed");
            reject(new Error("Too high for Speed"));
        } else resolve(parseFloat(input));
    });
}

setTimeout(() => {
    console.log("Anshul's Extension Works");
    getInput()
        .then((result) => {
            document.querySelector('video').playbackRate = result;
        }).catch((err) => {
            console.log("''Extension says \n\n", err.message, "\n\n''");
        });

}, 2000);