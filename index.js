/**
 * extend-array
 * Extends the Array class with a couple of useful new methods
 * They are all "hidden" with enumerable: hidden using defineProperty
 */

/**
 * Credits for this should go to Edgar Villegas Alvarado
 * He showed a fast intersect solution on Stack Overflow:
 * http://stackoverflow.com/questions/1885557/simplest-code-for-array-intersection-in-javascript
 *
 * This is an expansion on his code, changed a bit to make it more "safe" and fit more use cases.
 * The additions make sure the arrays are sorted, but makes the code slower.
 * In return the original arrays doesn't get changed (sorted).
 */
Array.prototype.intersect = function(arr) {
  // The last check here, is a check for a bug spotted, when running a large node.js App
  // Exact problem not located, but these checks ensures that there isn't an error thrown
  if( (arguments.length === 1) && (this.toString() != '[object global]') ) {
    var ai = 0, bi = 0, result = new Array(), a = this.slice(0).sort(), b = arr.slice(0).sort();
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
};
Object.defineProperty(Array.prototype, 'intersect', { enumerable: false });

/**
 * Credits for this should go to LiraNuna
 * He showed this function on Stack Overflow:
 * http://stackoverflow.com/questions/1584370/how-to-merge-two-arrays-in-javascript
 */
Array.prototype.unique = function() {
  if( this.toString() != '[object global]' ) {
    var a = this;
    for(var i=0; i<a.length; ++i) {
      for(var j=i+1; j<a.length; ++j) {
        if(a[i] === a[j]) {
          a.splice(j--, 1);
        }
      }
    }
    return a;
  }
};
Object.defineProperty(Array.prototype, 'unique', { enumerable: false });

Array.prototype.merge = function() {
  if( (arguments.length >= 1) && (this.toString() != '[object global]') ) {
    return this.concat.apply(this, arguments).unique();
  } else return this;
};
Object.defineProperty(Array.prototype, 'merge', { enumerable: false });
