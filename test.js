/* This is simply the code I used to do some testing of different ways to intersect */

var runs = 100000;


var res1 = null;
var testArray1 = ['testVal1', 'testVal2', 'testVal3', 'testVal4', 'testVal5', 'testVal6'];
var testArray2 = ['valTest1', 'valTest2', 'valTest3', 'valTest4', 'testVal5', 'valTest5', 'valTest6', 'valTest7'];
console.time('getIntersect');
for(var i1=0 ; i1 < runs ; i1++) {
  res1 = getIntersect(testArray1, testArray2);
}
console.timeEnd('getIntersect');
console.log(res1);
console.log(testArray1);
console.log(testArray2);

var res2 = null;
var testArray1 = ['testVal1', 'testVal2', 'testVal3', 'testVal4', 'testVal5', 'testVal6'];
var testArray2 = ['valTest1', 'valTest2', 'valTest3', 'valTest4', 'testVal5', 'valTest5', 'valTest6', 'valTest7'];
console.time('intersectSafe');
for(var i2=0 ; i2 < runs ; i2++) {
  res2 = intersectSafe(testArray1, testArray2);
}
console.timeEnd('intersectSafe');
console.log(res2);
console.log(testArray1);
console.log(testArray2);

var res3 = null;
var testArray1 = ['testVal1', 'testVal2', 'testVal3', 'testVal4', 'testVal5', 'testVal6'];
var testArray2 = ['valTest1', 'valTest2', 'valTest3', 'valTest4', 'testVal5', 'valTest5', 'valTest6', 'valTest7'];
console.time('intersectDestructive');
for(var i3=0 ; i3 < runs ; i3++) {
  res3 = intersectDestructive(testArray1, testArray2);
}
console.timeEnd('intersectDestructive');
console.log(res3);
console.log(testArray1);
console.log(testArray2);


function getIntersect(arr1, arr2) {
  var r = [], o = {}, l = arr2.length, i, v;
  for (i = 0; i < l; i++) {
    o[arr2[i]] = true;
  }
  l = arr1.length;
  for (i = 0; i < l; i++) {
    v = arr1[i];
    if (v in o) {
      r.push(v);
    }
  }
  return r;
}


/**
 * Credits for this should go to Edgar Villegas Alvarado
 * He showed a fast intersect solution on Stack Overflow:
 * http://stackoverflow.com/questions/1885557/simplest-code-for-array-intersection-in-javascript
 *
 * This is an expansion on his code, changed a bit to make it more versatile and "safe".
 * The additions make sure the arrays are sorted, but makes the code slower.
 * In return the original arrays doesn't get changed (sorted).
 */
function intersectSafe(arr1, arr2) {
  var ai = 0, bi = 0, result = new Array(), a = arr1.slice(0).sort(), b = arr2.slice(0).sort();
  while(ai < a.length && bi < b.length) {
    if(a[ai] < b[bi]) {
      ai++;
    } else if(a[ai] > b[bi]) {
      bi++;
    } else {
      result.push(a[ai]);
      ai++; bi++;
    }
  }
  return result;
}


/* destructively finds the intersection of
 * two arrays in a simple fashion.
 *
 * PARAMS
 *  a - first array, must already be sorted
 *  b - second array, must already be sorted
 *
 * NOTES
 *  State of input arrays is undefined when
 *  the function returns.  They should be
 *  (prolly) be dumped.
 *
 *  Should have O(n) operations, where n is
 *    n = MIN(a.length, b.length)
 */
function intersectDestructive(a, b) {
  a.sort(); b.sort();
  var result = new Array();
  while( a.length > 0 && b.length > 0 ) {
    if      (a[0] < b[0] ) { a.shift(); }
    else if (a[0] > b[0] ) { b.shift(); }
    else {
      /* they're equal */
      result.push(a.shift());
      b.shift();
    }
  }
  return result;
}

