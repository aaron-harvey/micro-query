/*!
 *  uQuery - A minimal (<300 bytes minified) URL parameter parsing library.
 *  0.1.1
 *  (c) 2015 Aaron Harvey - aaron.harvey@fairchildsemi.com
 *  MIT License
 */

/* exported uQuery */
(function() {
    'use strict';
    var regex = /([^&=]+)=?([^&]*)/g;
    var search = window.location.search.substring(1);
    var hash = window.location.hash.split("?");
    hash.shift();

    var match, store = {};
    var queryString = search || hash.join('?');
    while ((match = regex.exec(queryString))) {
        store[decodeURIComponent(match[1])] = decodeURIComponent(match[2]);
    }

    window.uQuery = function (needle) {
        return store[needle];
    };
})();
