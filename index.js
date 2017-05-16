const ini = require('ini');
const request = require('request');

module.exports = function (content) {
    const callback = this.async();
    try {
        const url = ini.parse(content).InternetShortcut.URL;
        request(url, function (err, _, data) {
            callback(err, data);
        });
    } catch (err) {
        callback(err);
    }
};
