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

example();
```

```
Start! 1506544867
End!   1506544870
```

## It's work.
```
let example = async function () {
    let awaitEnd = lock();
    awaitEnd.resolve();

    console.log('Start!', new Date().getTime());

    let endPromise = await awaitEnd.promise;

    console.log('End!', new Date().getTime());
};

example();
```

```
Start! 1506545013174
End!   1506545013174
```