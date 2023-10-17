'use strict'
document.write("<h3>문제1: 구구셈</h3>");
for(let i=2; i<=4; i++){
  for(let j=1; j<=9; j++){
    document.write(`${i} X ${j} = ${i*j}<br>`);
  }
  document.write("<br>");
}


document.write("<h3>문제2: 학점</h3>");
let score = 83;
switch(Math.floor(score/10)){ //javascript에서는 나눗셈이 자동실수 계산됨
                              //Math.floor()로 내림 처리
  case 10:
  case 9:
    document.write(`점수: ${score} = 학점: A<br>`); break;
  case 8:
    document.write(`점수: ${score} = 학점: B<br>`); break;
  case 7:
    document.write(`점수: ${score} = 학점: C<br>`); break;
  case 6:
    document.write(`점수: ${score} = 학점: D<br>`); break;
  default:
    document.write(`점수: ${score} = 학점: F<br>`); break;
}


document.write("<h3>문제3: 값3개 중 중간값</h3>");
let arr = [30, 41, 39];
if (arr[0]>=arr[1]&&arr[0]<=arr[2]){
  document.write(`중간값: ${arr[0]}<br>`);
} else if(arr[1]>=arr[0]&&arr[1]<=arr[2]){
  document.write(`중간값: ${arr[1]}<br>`);
} else {
  document.write(`중간값: ${arr[2]}<br>`);
}


document.write("<h3>문제4: 삼각형 만들기</h3>");
let rows = 3;
for(let i=0;i<rows;i++){
  let str = '';
  for(let j=rows-i; j>0; j--)
    str += '&nbsp;';
  for(let j=0;j<=i*2;j++)
    str += '*';
  document.write(str+"<br>");
}


document.write("<h3>문제5: 값10개 중 최대값/최소값/중앙값/최대와 최소를 제외한 합계 구하기</h3>");
arr = [5,2,4,7,6,8,1,10,9,3];
document.write("주어진 배열 : "+arr+"<br>");
let sum=0;
let str='';

arr.sort(function(a,b){
  return a-b;
});


document.write(`최대값: ${arr[arr.length-1]}<br>`);
document.write(`최소값: ${arr[0]}<br>`);
if (arr.length%2==0){     // 배열의 갯수가 짝수라면
  let idx = arr.length/2-1;
  document.write(`중앙값: ${(arr[idx]+arr[idx+1])/2}<br>`);
} else                    // 배열의 갯수가 홀수라면
  document.write(`중앙값: ${arr[arr.length/2+1]}<br>`);

for (let num of arr.slice(1,arr.length-1)){
  sum += num;
}
document.write(`최대,최소를 제외한 합계: ${sum}<br>`);