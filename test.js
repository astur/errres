const test = require('ava');
const errres = require('.');
const type = v => ({}).toString.call(v).slice(8, -1);

test('type', t => {
    t.is(type(errres()), 'Promise');
});

test('res', async t => {
    t.is(await errres(null, 'TEST'), 'TEST');
    t.is(await errres(), undefined);
});

test('err', async t => {
    t.is(await errres('TEST').catch(e => e), 'TEST');
    const err = await t.throws(errres('TEST'));
    t.is(err, 'TEST');
});
