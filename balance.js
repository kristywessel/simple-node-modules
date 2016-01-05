/**
 * Created by KristyWessel on 1/5/16.
 */

var random = require('./random');

var dollar = require('./dollar');

function randomBalance() {
    return dollar(random(100, 1000000));
}

function returnText() {
    return "Account balance:\n";
}

exports.balance = randomBalance;
exports.text = returnText;