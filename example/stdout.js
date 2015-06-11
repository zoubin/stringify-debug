var debug = require('..')('debug:object');

debug('input', undefined, true, null, 1, { x:1, y:2, z:[3,4], w:{ a:5, b:6 } }, f)

function f() {
}
