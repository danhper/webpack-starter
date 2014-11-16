var fs = require('fs');
var path = require('path');
var tasks = fs.readdirSync(path.join(__dirname, 'tasks'));

var config = {
  root: path.dirname(__dirname)
};
config.config = path.join(config.root, 'config');

tasks.forEach(function (task) {
  require(path.join(__dirname, './tasks', task))(config);
});
