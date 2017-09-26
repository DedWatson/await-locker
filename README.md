## It's simple.

Read example.
```js
let lock = require('./index');

let example = async function () {
    let awaitEnd = lock();
    setTimeout(()=>{
        awaitEnd.resolve();
    }, 3000);

    console.log('Start!', new Date().getTime());

    let endPromise = await awaitEnd.promise;

    console.log('End!', new Date().getTime());
};
```