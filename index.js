var rest = require('./rest.js'),
    ws = require('./ws.js');

var BFX = function(api_key, api_secret) {
    return {
        api_key: api_key,
        api_secret: api_secret,
        rest: new rest(api_key, api_secret),
        this: new ws(api_key, api_secret)
    }
};

module.exports = BFX;