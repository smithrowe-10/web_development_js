// 가위 버튼에 적용할 click handler

const SCISSORS = '가위'
const ROCK = '바위'
const PAPER = '보'


function onScissorsClick() {    // 버튼 클릭했어요 -> userInput prompt가 필요없죠
  let comInput;   // 즉 지역변수로 처리를 하는 중
  let randomNum = Math.floor(Math.random() * 3)+1;

  if (randomNum == 1) comInput = SCISSORS;
  else if (randomNum == 2) comInput = ROCK;
  else comInput = PAPER;

  if (comInput === SCISSORS) {
    alert(`컴퓨터 : ${comInput} - 컴퓨터와 비겼습니다.`);
  } else if (comInput === ROCK) {
    alert(`컴퓨터 : ${comInput} - 컴퓨터가 이겼습니다.`);
  } else {
    alert(`컴퓨터 : ${comInput} - 컴퓨터를 이겼습니다.`);
  }
}

// onRockClick()

function onRockClick() {    // 버튼 클릭했어요 -> userInput prompt가 필요없죠
  let comInput;   // 즉 지역변수로 처리를 하는 중
  let randomNum = Math.floor(Math.random() * 3)+1;

  if (randomNum == 1) comInput = SCISSORS;
  else if (randomNum == 2) comInput = ROCK;
  else comInput = PAPER;

  if (comInput === ROCK) {
    alert(`컴퓨터 : ${comInput} - 컴퓨터와 비겼습니다.`);
  } else if (comInput === PAPER) {
    alert(`컴퓨터 : ${comInput} - 컴퓨터가 이겼습니다.`);
  } else {
    alert(`컴퓨터 : ${comInput} - 컴퓨터를 이겼습니다.`);
  }
}

// onPaperClick() 정의하고 index.html에 대입하고 최종결론을 내세요.

function onPaperClick() {    // 버튼 클릭했어요 -> userInput prompt가 필요없죠
  let comInput;   // 즉 지역변수로 처리를 하는 중
  let randomNum = Math.floor(Math.random() * 3)+1;

  if (randomNum == 1) comInput = SCISSORS;
  else if (randomNum == 2) comInput = ROCK;
  else comInput = PAPER;

  if (comInput === PAPER) {
    alert(`컴퓨터 : ${comInput} - 컴퓨터와 비겼습니다.`);
  } else if (comInput === SCISSORS) {
    alert(`컴퓨터 : ${comInput} - 컴퓨터가 이겼습니다.`);
  } else {
    alert(`컴퓨터 : ${comInput} - 컴퓨터를 이겼습니다.`);
  }
}

// 위의 코드는 call1() 유형으로 각각의 3개의 함수로 정의
// 밑의 코드는 call2() 유형으로 하나의 함수로 통합
function onButtonClick(userInput) {
  let comInput;
  let randomNum = Math.floor(Math.random() * 3)+1;

  if (randomNum == 1) comInput = SCISSORS;
  else if (randomNum == 2) comInput = ROCK;
  else comInput = PAPER;

  // 출력문 리팩토링 파트
  let result = `컴퓨터 : ${comInput}`

  console.log(userInput)
  console.log(comInput)

  if (userInput === SCISSORS) {
    // comInput 비교
    if (comInput === SCISSORS) {
      // 사용자가 비긴 경우
      result += ' - 비겼습니다.';
    } else if (comInput === ROCK) {
      result += ' - 비겼습니다.';
    } else if (comInput === PAPER) {
      result += ' - 졌습니다.';
    }
  } else if (userInput === ROCK) {
    // comInput 비교
    if (comInput === ROCK) {
      // 사용자가 비긴 경우
      result += ' - 비겼습니다.';
    } else if (comInput === PAPER) {
      result += ' - 비겼습니다.';
    } else if (comInput === SCISSORS) {
      result += ' - 졌습니다.';
    }
  } else {
    // comInput 비교
    if (comInput === PAPER) {
      // 사용자가 비긴 경우
      result += ' - 비겼습니다.';
    } else if (comInput === SCISSORS) {
      result += ' - 이겼습니다.';
    } else if (comInput === ROCK) {
      result += ' - 졌습니다.';
    }
  }
  alert(result);
}
