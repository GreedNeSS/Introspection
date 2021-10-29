'use strict';

const cSymbol = Symbol('c');


const object = {
	a: 1,
	[cSymbol]: 2,
	[Symbol('d')]: 3,
};

for (const key in object) {
	console.dir({ key, value: object[key] });
}

console.table({
	a: 'a' in object,
	b: 'b' in object,
	cSymbol: cSymbol in object,
	toString: toString in object,
});

console.log();

const array = [1, 2, 3];
array[cSymbol] = 4;
array.key = 5;

for (const key in array) {
	console.dir({ key, value: array[key] });
}

console.table({
	0: 0 in array,
	1: 1 in array,
	10: 10 in array,
	cSymbol: cSymbol in array,
	key: 'key' in array,
	toString: toString in array,
});
