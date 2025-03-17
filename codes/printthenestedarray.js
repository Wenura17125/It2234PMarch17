// Print nested array using forEach loop
let nestedArray = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
nestedArray.forEach((n) => {
  n.forEach((m) => {
    console.log(m);
  });
});