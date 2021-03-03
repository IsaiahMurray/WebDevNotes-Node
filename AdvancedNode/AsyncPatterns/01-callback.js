//! This delay function is a demonstration to show async code
//? The callback is not invoked until it's ready(after the specified amount of seconds)

function delay(seconds, callback) {
    setTimeout(callback, seconds*1000);
}

console.log('starting delays');
delay(2, () => {
    console.log('two seconds');
    delay(1, () => {
        console.log('three seconds');
        delay(1, () => {
            console.log('four seconds');
        })
    })
})
