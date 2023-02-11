function answer(x, y) {
  let result = [];
  // 코드 구현 
  
  if (x>y){ 
  for(let i=y; i <= x; i++){
  result.push(i);
    }
   } else {
  for(let i = 0; i <= y; i++){
  result.push(i);
    }
   }

  // 
  return result;
// 
  console.log(result)
}

let input = [
    [3, 7],
    [8, 3],
    [12, 10],
];

console.log(input);

function jung(){
  for (let i = 0; i < input.length; i++) {
    console.log(`#${i + 1}`+"["+ answer(input[i][0], input[i][1])+"]");
  }
}

console.log(jung());


// 결과
// #1 [ 3, 4, 5, 6, 7 ]
// #2 [ 3, 4, 5, 6, 7, 8 ]
// #3 [ 10, 11, 12 ]
