/*** 반 평균 구하기 ***/

function answer(score) {
  let average = 0;
   sum = 0;
   average = 0;

  for (let i = 0; i < score.length; i++) {
    sum += score[i];
    // sum = sum + score[i]
  }

  average = sum / score.length;
  // return average.toFixed(2);
  return average;
  // // 코드 구현 
  
  // for (let i = 0; i < score.length; i++) {
  //   average += score[i];
  // }
  
  // average = average / score.length;
  
  // return average.toFixed(2);

  // // 
  // // return average;

  //소수점 3번째 자리부터 반올림
  // this is not complete
}


let input = [
  [80, 95, 65, 70, 100],
  [82, 77, 51, 64, 73, 90, 80],
  [100, 71, 59, 88, 72, 75, 91, 93],
];


for (let i = 0; i < input.length; i++) {
  console.log(`#${i + 1} ${answer(input[i])}`);
}

// 결과
// #1 82.00
// #2 73.86
// #3 81.13
