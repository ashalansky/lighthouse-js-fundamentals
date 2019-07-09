function merge(array1, array2) {

  var newArray = array1;

  for (var i = 0; i < array2.length; i++) {
    newArray.push(array2[i]);
  }

  return newArray.sort();

}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);