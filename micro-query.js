/*!
 *  uQuery - A minimal URL parameter parsing library.
 *  v0.1.2
 *  (c) 2015 Aaron Harvey - aaron.harvey@fairchildsemi.com
 *  MIT License
 */

/* exported uQuery */
(function() {
    'use strict';
    var regex = /([^&=]+)=?([^&]*)/g;
    var match, store = {};

    var haystack = window.location.search || window.location.hash;
    haystack = haystack.substring(haystack.indexOf('?') + 1, haystack.length);

    while ((match = regex.exec(haystack))) {
        store[decodeURIComponent(match[1])] = decodeURIComponent(match[2]);
    }

    window.uQuery = function (needle) {
        return store[needle];
    };
})();
