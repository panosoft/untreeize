var is = require('is_js');
var R = require('ramda');

var untreeize = (tree, options, prefix, partialObj) => {
	options = options || {};
	options = R.merge({
		delimiter: ':'
	}, options);
	prefix = prefix || '';
	partialObj = R.clone(partialObj || {});
	var flat = [];
	var composeKey = key => prefix ? prefix + options.delimiter + key : key;
	R.forEach(key => {
		if (is.array(tree[key])) {
			R.forEach(row => {
				var flattened = untreeize(row, options, composeKey(key), partialObj);
				flat = R.concat(flat, R.map(fRow => R.merge(partialObj, fRow), flattened));
			}, tree[key]);
		}
		else
			partialObj[composeKey(key)] = tree[key];
	}, R.keys(tree));
	if (flat.length == 0)
		flat = R.append(partialObj, flat);
	return flat;
};

module.exports = untreeize;
