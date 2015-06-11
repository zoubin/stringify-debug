var arrayify = require('arrayify-slice');
var debug = require('debug');

module.exports = function () {
    var orig = debug.apply(null, arguments);
    return function () {
        var args = arrayify(arguments)
            .filter(isNotUndefined)
            .map(function (info) {
                if (info && typeof info === 'object') {
                    return JSON.stringify(info);
                }
                if (typeof info === 'function') {
                    return info.name;
                }
                return info;
            });
        orig.apply(null, args);
    };
};

function isNotUndefined(v) {
    return typeof v !== 'undefined';
}
