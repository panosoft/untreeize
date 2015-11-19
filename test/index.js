var expect = require('chai').expect;
var untreeize = require('../lib');

describe('reverse treeize:', function () {
	it('degenerate case', function () {
		var degenerate = {
			a: 1,
			b: 2
		};
		expect(untreeize(degenerate)).to.deep.equals([degenerate]);
	});
	it('tree case', function () {
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
		var flattened = [
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
		expect(untreeize(tree)).to.deep.equals(flattened);
	});
});
