const test = require('ava');
const m = require('.');

test('errres', t => {
    t.true(true);
    t.is(m, m);
});
