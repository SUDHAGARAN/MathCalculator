var exec = require('cordova/exec');

// module.exports.coolMethod = function(arg0, success, error) {
//     exec(success, error, 'MathCalculator', 'coolMethod', [arg0]);
// };

module.exports.add = function(arg0, success, error) {
    exec(success, error, 'MathCalculator', 'add', [argo]);
}

module.exports.substract = function(arg0, success, error) {
    exec(success, error, 'MathCalculator', 'substract', [argo]);
}