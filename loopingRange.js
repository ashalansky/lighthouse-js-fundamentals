function range(start, end, step) {
  let array = [];

  if ((start === undefined || end === undefined || step === undefined) || start > end || step < 0) {
    return array;
  }

  else {
    for (start; start <= end; start += step) {
      array.push(start);
    }
  }
  return array;
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));