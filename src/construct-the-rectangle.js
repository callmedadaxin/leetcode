/**
 * @param {number} area
 * @return {number[]}
 */
// var constructRectangle = function(area) {
//   var L = area,
//       W = 1

//   for (l = L;l > W; l--) {
//     // 不能除尽，则继续
//     if (area % l !== 0) {
//       continue
//     }
    
//     W = area / l
//     L = l
//   }

//   return [L, W]  
// }

var largestDividable = (area) => {
  for (let i = parseInt(Math.sqrt(area)); i > 0; i--) {
    if (area % i === 0) return i;
  }
}

var constructRectangle = function(area) {
  if (area === 0) return [0, 0];

  let w = largestDividable(area);
  let l = area / w;
  return [l, w];
};

for (var i = 1; i < 1000; i+= parseInt(Math.random() * 20)) {
  console.log(constructRectangle(i))
}

