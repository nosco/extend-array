/**
 * Credits for this should go to Edgar Villegas Alvarado
 * He showed a fast intersect solution on Stack Overflow:
 * http://stackoverflow.com/questions/1885557/simplest-code-for-array-intersection-in-javascript
 *
 * This is an expansion on his code, changed a bit to make it more "safe" and fit more use cases.
 * The additions make sure the arrays are sorted, but makes the code slower.
 * In return the original arrays doesn't get changed (sorted).
 */
Array.prototype.intersect(arr1, arr2) {
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



// This is the original intersect code by Edgar Villegas Alvarado
// Thank you! :)

/* finds the intersection of
 * two arrays in a simple fashion.
 *
 * PARAMS
 *  a - first array, must already be sorted
 *  b - second array, must already be sorted
 *
 * NOTES
 *
 *  Should have O(n) operations, where n is
 *    n = MIN(a.length(), b.length())
 */

// function intersect_safe(a, b)
// {
//   var ai=0, bi=0;
//   var result = new Array();

//   while( ai < a.length && bi < b.length )
//   {
//      if      (a[ai] < b[bi] ){ ai++; }
//      else if (a[ai] > b[bi] ){ bi++; }
//      else /* they're equal */
//      {
//        result.push(a[ai]);
//        ai++;
//        bi++;
//      }
//   }

//   return result;
// }
