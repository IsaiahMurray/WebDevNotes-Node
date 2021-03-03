//! A promise is an object that can be used to represent the eventual completion of an async operation

var delay = (seconds) => new Promise((resolves, rejects) => {
    setTimeout(() => {
        resolves('the long delay has ended')
    }, seconds * 1000);
});

delay(1)
  .then(console.log)
  .then(() => 42)
  .then((number) => console.log(`Hello world: ${number}`))

console.log('end first tick');
