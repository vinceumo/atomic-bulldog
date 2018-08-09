/// <binding ProjectOpened='jsWatch, scssWatch' />
const requireDir = require('require-dir');

// Require all tasks in /tasks, including subfolders
requireDir('./Tasks', { recurse: true });