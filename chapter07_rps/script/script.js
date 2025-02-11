let comInput;
let randomNum = Math.random();

const SCISSORS = '가위';
const ROCK = '바위';
const PAPER = '보';

// 0이상 0.33 미만은 가위 0.33 이상 0.66 미만은 바위 0.66 이상 1 미만은 보로 comInput에 대입


userInput = prompt('가위, 바위, 보!')

// 입력한 값이 가위, 바위, 보중 하나라면 통과하는데 아니믄 잘못댓다 ㅋㅋ

if (userInput !== "가위" && userInput !== '바위' && userInput !== PAPER)
{
  console.log('가위, 바위, 보 중 하나를 입력해야합니다.');
}
else {
  // 이 부분이 유효성 검사를 통과한 부분이니
  // 나머지 정상 실행된 로직을 작성하도록 하는 편
  if(randomNum<0.33) {
    comInput = "가위"
  } else if(randomNum<0.66) {
    comInput = "바위"
  } else {
    comInput = "보"
  }
  
  console.log(comInput);

  // userInput을 기준으로 작성하겠습니다.
  if (userInput === SCISSORS) {
    // comInput 비교
    if (comInput === SCISSORS) {
      // 사용자가 비긴 경우
      alert(`컴퓨터 : ${comInput} - 컴퓨터와 비겼습니다`)
    } else if (comInput === ROCK) {
      alert(`컴퓨터 : ${comInput} - 컴퓨터가 이겼습니다`)
    } else if (comInput === PAPER) {
      alert(`컴퓨터 : ${comInput} - 컴퓨터를 이겼습니다`)
    }
  } else if (userInput === ROCK) {
    // comInput 비교
    if (comInput === ROCK) {
      // 사용자가 비긴 경우
      alert(`컴퓨터 : ${comInput} - 컴퓨터와 비겼습니다`)
    } else if (comInput === PAPER) {
      alert(`컴퓨터 : ${comInput} - 컴퓨터가 이겼습니다`)
    } else if (comInput === SCISSORS) {
      alert(`컴퓨터 : ${comInput} - 컴퓨터를 이겼습니다`)
    }
  } else {
    // comInput 비교
    if (comInput === PAPER) {
      // 사용자가 비긴 경우
      alert(`컴퓨터 : ${comInput} - 컴퓨터와 비겼습니다`)
    } else if (comInput === SCISSORS) {
      alert(`컴퓨터 : ${comInput} - 컴퓨터가 이겼습니다`)
    } else if (comInput === ROCK) {
      alert(`컴퓨터 : ${comInput} - 컴퓨터를 이겼습니다`)
    }
  }
}

// 개선안 : 상수를 활용


// switch 개선 부분
if(randomNum<0.33) {
  comInput = SCISSORS
} else if(randomNum<0.66) {
  comInput = ROCK
} else {
  comInput = PAPER
}

console.log(comInput);

switch(userInput) {
  case SCISSORS:
    switch(comInput) {
      case SCISSORS:
        alert(`컴퓨터 : ${comInput} - 컴퓨터와 비겼습니다.`);
        break;
      case ROCK:
        alert(`컴퓨터 : ${comInput} - 컴퓨터가 이겼습니다.`);
        break;
      case PAPER:
        alert(`컴퓨터 : ${comInput} - 컴퓨터를 이겼습니다.`);
        break;
    }
    break;
  case ROCK:
    switch(comInput) {
      case ROCK:
        alert(`컴퓨터 : ${comInput} - 컴퓨터와 비겼습니다.`);
        break;
      case PAPER:
        alert(`컴퓨터 : ${comInput} - 컴퓨터가 이겼습니다.`);
        break;
      case SCISSORS:
        alert(`컴퓨터 : ${comInput} - 컴퓨터를 이겼습니다.`);
        break;
    }
    break;
  case PAPER:
    switch(comInput) {
      case PAPER:
        alert(`컴퓨터 : ${comInput} - 컴퓨터와 비겼습니다.`);
        break;
      case SCISSORS:
        alert(`컴퓨터 : ${comInput} - 컴퓨터가 이겼습니다.`);
        break;
      case ROCK:
        alert(`컴퓨터 : ${comInput} - 컴퓨터를 이겼습니다.`);
        break;
    }
    break;
  default:
    alert('가위, 바위, 보 중에서 선택하셔야 합니다.')
}
