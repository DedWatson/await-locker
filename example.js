"use strict";

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

let example2 = async function () {
    let awaitEnd = lock();
    awaitEnd.resolve();

    console.log('Start!', new Date().getTime());

    let endPromise = await awaitEnd.promise;

    console.log('End!', new Date().getTime());
};

example2();