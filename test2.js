require('./index');
var testArray1 = ['testVal1', 'testVal2', 'testVal3', 'testVal4', 'testVal5'];
var testArray2 = ['valTest1', 'valTest2', 'testVal5', 'valTest3', 'valTest4'];
var res = testArray1.intersect(testArray2);
console.log(res);