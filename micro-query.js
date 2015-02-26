/*!
 *  uQuery - A tiny and super fast url param parser.
 *  0.0.1
 *  (c) 2015 Aaron Harvey - aaron.harvey@fairchildsemi.com
 *  MIT
 */
/* exported uQuery */
window.uQuery = (function() {
    'use strict';
    var regex = /([^&=]+)=?([^&]*)/g;

    function getQueryString(needle) {
        var search = window.location.search.substring(1);
        var hash = window.location.hash.split("?");
        hash.shift();

        var queryString = search || hash.join('?');

        if (!queryString) return undefined;

        var match;
        while ((match = regex.exec(queryString))) {
            if (decodeURIComponent(match[1]) === needle)
                return decodeURIComponent(match[2]);
        }
    }
    return {
        get: getQueryString
    };
}());
