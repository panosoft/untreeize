# untreeize

Flattens hierarchical data, e.g. reverses treeize. (see [kwhitley/treeize](https://github.com/kwhitley/treeize))

[![npm version](https://img.shields.io/npm/v/untreeize.svg)](https://www.npmjs.com/package/untreeize)
[![Travis](https://img.shields.io/travis/panosoft/untreeize.svg)](https://travis-ci.org/panosoft/untreeize)

## Installation

```sh
npm install untreeize
```

## Usage

Non-curried version, `untreeize`.
```js
var untreeize = require('untreeize').untreeize;

var tree = {
	a: 1,
	cs: [
		{
			x: 2,
			zs: [
				{r: 3, s:4, t:5},
				{r: 6, s:7, t:8}
			]
		},
		{
			x: 9,
			zs: [
				{r: 10, s:11, t:12},
				{r: 13, s:14, t:15}
			]
		}
	]
};

var flattened = untreeize(tree);

// flatten is equal to the following
flattened == [
	{
		a: 1,
		'cs:x': 2,
		'cs:zs:r': 3,
		'cs:zs:s': 4,
		'cs:zs:t': 5
	},
	{
		a: 1,
		'cs:x': 2,
		'cs:zs:r': 6,
		'cs:zs:s': 7,
		'cs:zs:t': 8
	},
	{
		a: 1,
		'cs:x': 9,
		'cs:zs:r': 10,
		'cs:zs:s': 11,
		'cs:zs:t': 12
	},
	{
		a: 1,
		'cs:x': 9,
		'cs:zs:r': 13,
		'cs:zs:s': 14,
		'cs:zs:t': 15
	}
];
```

Curried version, untreeizeCurried (curried via [Ramda](http://ramdajs.com/)).

```js
var untreeize = require('untreeize').untreeizeCurried;
var flattenUsingDotDelimiter = untreeize({delimiter: '.'})
var flattened = flattenUsingDotDelimiter(tree);

// flatten is equal to the following
flattened == [
	{
		a: 1,
		'cs.x': 2,
		'cs.zs.r': 3,
		'cs.zs.s': 4,
		'cs.zs.t': 5
	},
	{
		a: 1,
		'cs.x': 2,
		'cs.zs.r': 6,
		'cs.zs.s': 7,
		'cs.zs.t': 8
	},
	{
		a: 1,
		'cs.x': 9,
		'cs.zs.r': 10,
		'cs.zs.s': 11,
		'cs.zs.t': 12
	},
	{
		a: 1,
		'cs.x': 9,
		'cs.zs.r': 13,
		'cs.zs.s': 14,
		'cs.zs.t': 15
	}
];

```

## API

### untreeize ( tree [, options] )

This will flatten hierarchical data.

__Arguments__

- `tree` - a hierarchical data structure, e.g. the output of treeize `grow` function.


- `options` - options object optionally containing the following keys
	+ `delimiter` - define delimiter between keys (defaults to ':' )
