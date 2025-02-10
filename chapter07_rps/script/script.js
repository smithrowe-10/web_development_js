// let userInput()

let comInput;
let randomNum = Math.random();

// 0이상 0.33 미만은 가위 0.33 이상 0.66 미만은 바위 0.66 이상 1 미만은 보로 comInput에 대입

if(randomNum<0.33) {
  comInput = "가위"
} else if(randomNum<0.66) {
  comInput = "바위"
} else {
  comInput = "보"
}

console.log(comInput);

userInput = prompt('가위, 바위, 보!')

// 입력한 값이 가위, 바위, 보중 하나라면 통과하는데 아니믄 잘못댓다 ㅋㅋ

if (userInput === "가위" || userInput === '바위' || userInput === '보')
{
  console.log(userInput);
}else {
  alert('가위, 바위, 보 중 하나를 입력해야합니다.');
}