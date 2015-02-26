/*!
 *  uQuery - a fast and very small url parameter parser.
 *  0.0.1
 *  (c) 2015 Aaron Harvey - aaron.harvey@fairchildsemi.com
 *  MIT
 */

/* exported uQuery */
(function() {
    'use strict';
    var regex = /([^&=]+)=?([^&]*)/g;
    var search = window.location.search.substring(1);
    var hash = window.location.hash.split("?");
    hash.shift();

    var store = {};
    var queryString = search || hash.join('?');
    if (!queryString) return undefined;

    var match;
    while ((match = regex.exec(queryString))) {
        store[decodeURIComponent(match[1])] = decodeURIComponent(match[2]);
    }

    window.uQuery = function (needle) {
        return store[needle];
    };
})();

/* TODO: Test against a cached version that preparses the url. */
