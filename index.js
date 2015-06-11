var arrayify = require('arrayify-slice');
var debug = require('debug');

module.exports = function () {
    var orig = debug.apply(null, arguments);
    return function () {
        var args = arrayify(arguments)
            .map(function (info) {
                if (info && typeof info === 'object') {
                    return JSON.stringify(info);
                }
                if (typeof info === 'function') {
                    return '[function]' + info.name;
                }
                return info;
            });
        orig.apply(null, args);
    };
};

