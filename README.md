# extend-array

Extend (prototype) the Array object with new features - currently only intersect...

### Example
	require('extend-array');
	var testArray1 = ['testVal1', 'testVal2', 'testVal3', 'testVal4', 'testVal5'];
	var testArray2 = ['valTest1', 'valTest2', 'testVal5', 'valTest3', 'valTest4'];
	var res = testArray1.intersect(testArray2);
	console.log(res);
	[ 'testVal5' ]

### This is an early BETA version

As soon as the module has shown it's worth and stability on a live system, it will be marked as version >= 1.0.0.

Until then: Feel free to play around with it, learn from it.

### To install

	npm install extend-array

