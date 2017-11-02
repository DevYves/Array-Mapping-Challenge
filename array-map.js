var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];
var result = input.map(function(entry){
  var total = Math.sqrt((entry.x * entry.x) + (entry.y * entry.y))


return total;
}

  /* Your code here */);

console.log(result[0]);
console.log(result[1]);
console.log(result[2]);


