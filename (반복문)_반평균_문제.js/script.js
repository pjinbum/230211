/*** 반 평균 구하기 ***/

function answer(score) {
  let average = 0;
  
  for (let i = 0; i < score.length; i++) {
    average += score[i];
  }
  
  average = average / score.length;
  
  return average.toFixed(2);
  // let average = 0;
  // // 코드 구현 
  
  // for (let i = 0; i < score.length; i++) {
  //   average += score[i];
  // }
  
  // average = average / score.length;
  
  // return average.toFixed(2);

  // // 
  // // return average;
}


let input = [
  [80, 95, 65, 70, 100],
  [82, 77, 51, 64, 73, 90, 80],
  [100, 71, 59, 88, 72, 75, 91, 93],
];
// min = Math.min.apply(null, input)
input =Math.min(null , input );
console.log(input);

for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}

// 결과
// #1 82.00
// #2 73.86
// #3 81.13
