module.exports = (err, res) => err ? Promise.reject(err) : Promise.resolve(res);
