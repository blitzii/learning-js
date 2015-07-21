// Looping A Triangle
// - Print a triangle of '#' with base width = 7
var triLayer = "";
while (triLayer.length < 7) {
  triLayer += "\#";
  console.log(triLayer);
}

// FizzBuzz
// - Print numbers 1-100
// - If multiple of 3 -> print 'Fizz'
// - If multiple of 5 (and not 3) -> print 'Buzz'
// - If multiple of both -> print 'FizzBuzz'

for (fzbz = 1; fzbz <= 100; fzbz++) {
  if (fzbz % 3 == 0)
    if (fzbz % 5 == 0)
      console.log('FizzBuzz')
    else
      console.log('Fizz')
  else if (fzbz % 5 == 0)
    console.log('Buzz')
  else
    console.log(fzbz)
}

// Chess Board
// - Create string that represents 8x8 Grid
// - Space for white, # for black
// - Then make this work for any size grid
var chess = "";
var wht_blk = true;
var grid_size = 10;
for (i = 0; i < grid_size; i++) {
  for (j = 0; j < grid_size; j++) {
    if (!wht_blk)
      chess += "#";
    else
      chess += " ";
    wht_blk = !wht_blk
    if (j == grid_size - 1)
      chess += "\n"
  }
  if (grid_size % 2 == 0)
    wht_blk = !wht_blk
}
console.log(chess)
