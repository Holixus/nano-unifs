var AJSFS = require('nano-ajsfs'),
    DirFS = require('nano-dirfs');


module.exports = function newUniFS(root) {
	return new (typeof root === 'string' ? DirFS : AJSFS)(root);
};

