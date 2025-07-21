const path = require('path');

module.exports = path.dirname(require.main.filename);
// This will return the directory name of the main module, which is typically the root directory of