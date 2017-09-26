"use strict";

/**
 *
 * @return {{resolve: *, promise: Promise}}
 */
module.exports = function () {
    let res = null;
    let promise = new Promise((resolve)=>{
        res = resolve;
    });
    return {resolve: res, promise: promise};
};