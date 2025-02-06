// console.log('Hello, JavaScript');
// // 주석은 이렇게

// // 길게 작성했을 경우에도 동일하게 ctrl + / 를 이용하여 주석처리

// // 변수와 상수
// let darkModeOn = true;
// const PI = 3.14159;
// // index.html 파일 생성 -> 개발자 도구를 통해서 콘솔 확인이 가능합니다.

// let a = 1
// console.log(a)
// a = 2;          // java에서 처음 선언 및 초기화하는 것과 재대입 상에서의 차이를 생각
// console.log(a)
// // 변수 b를 선언해서 a에 대입하는 방식
// let b = a;
// console.log(a, b) // 결과값 : 2 2 : 콤마는 출력되지 않는 점에주목

// // Java와의 차이점
// a = "안녕하세요"    // 2인 a에 String 자료형대입
// b = true;          // 2인 b에 boolean 자료형 대입
// console.log(a, b)  // 결과값 : 안녕하세요 true : 
// // 이상의 코드에서 자바스크립트 / 파이썬에서는 데이터의 종류를 구분하는데 있어 타 언어만큼 엄격한기준이 있지 않음

// // 상수 관련
// const A = 5;
// console.log(A)

// 오류 발생 사례 
// A = 10;
//  Uncaught TypeError: Assignment to constant variable.  at n00hellojs.js:30:3

// let c = 10; -> 동일한 변수를 두번 선언했기 때문에 오류
// let c = 12;
// Uncaught SyntaxError: Identifier 'c' has already been declared (at n00hellojs.js:34:5)

// let bool01 = true;
// let bool02 = false;

// console.log(bool01,bool02); //true false

// console.log(typeof bool01); // boolean

// let z = 1;
// console.log(typeof z) //number (int가 아님 ㄷㄷㄷ)

// const bool03 = 1<2;
// const bool04 = 1>2;
// console.log(bool03,bool04); // true false
// //이상의 코드에서 알수있는 점은 조건식에자주 사용되고, 비교연산의 결과값을 산출할 때 많이 사용됩니다.

// let bool05 = !true;
// let bool06 = !bool05;
// let bool07 = !!bool06;

// console.log(bool05,bool06,bool07);  // false true true

// let num1 = 10;  // 정수
// let num2 = 3.14; // 실수

// console.log(typeof num1);  //number
// console.log(typeof num2) ; //number

// 사칙 연산 
// console.log(1+2); // 3 (연산 가능)
// console.log(3-num1);
// console.log(num1*num2);
// console.log(num1/num2);
// console.log(num1%num2);

// const NUM3 = (num1 + num2) * 10;
// console.log(NUM3);

// const str01 = 'hello';
// const str02 = '월드';

// console.log(typeof str01);  //string
// console.log(typeof '1');    //string

// let str03 = str01 + " World";
// console.log(str03);
// console.log(str02);

// str03 = str03 + " 🍖";
// console.log(str03);

// undefined / null

// let x;
// console.log(x, typeof x); // undefined 'undefined'
// // typeof가 반환하는 값은 문자열
// x = 1;
// console.log(x);
// console.log(typeof x);

// x = null;
// console.log(x,typeof x);
// null 'object'
// null의 타입은 object로 반환 -> 초기 설계부실 문제

// 연산자 관련 수업

// const a = 1; 
// const b = 1;
// const c = "1";
// const d = 2;

// console.log(a == b, a != b);  // true / false
// console.log(a == c, a != c);  // true / false
// console.log(a == d, a != d);  // false/ true
// console.log(a === c, a !== c);// false / true
// console.log(a > b, a >= b, a <= b); // false true true
// console.log(a > d, a < d, a <= d); // false true true

// const str01 = "ABC";
// const str02 = "DEF";

// console.log(str01 > str02); // false
// console.log(str01<str02); // true
// // 문자열의 경우 알파벳 앞에오는게더 크다고 판단

// // 삼항연산자 관련 수업
// let bool01 = true;
// let result = bool01 ? "참" : "거짓";
// console.log(result) // 참

// let num05 = 28;
// console.log("num05 는 03의 배수" + (num05 % 3 === 0 ? "입니다." : "가 아닙니다."))
//num05 는 03의 배수가 아닙니다.

// 객체 관련 수업
const person01 = {
  name: "김민건",
  age:25,
  address: "부산",
  married: false
};

console.log(typeof person01);
console.log(person01);

/*
원래 이렇게 찍혀야함 
{name: '김민건', age: 25, address: '부산', married: false}

console.log로 찍었더니 key에 "" 붙어있는 걸로 보아 JSON 형태로 표기됨
{
    name: '김민건', 
    age: 25, 
    address: '부산', 
    married: false
}
*/

// 객체 접근방법 -> JAVA와 동일
// # 1 마치 인스턴스 변수 처럼
console.log(person01.name)
// # 2 Java에서의 Map 자료형과 같은 방식이라는 점에서
console.log(person01["name"])
//와 같은 방식으로 출력할 수 있음.

const person01Age = person01.age;
const typeOfMarried = typeof person01
["married"];

console.log(person01Age, typeOfMarried);
// 25 'boolean'

// 객체를 통해서 지정한 value를 상수에 저장하여 (#1, #2를 이용해서 특정값만 산출한 후에), 걔네만 콘솔에 출력함.

person01.job = "programmer";
person01["bloodtype"] = "O";

console.log(person01);

/*
address: "부산"
age: 25
bloodtype: "O"
job: "programmer"
married: false
name: "김민건"
*/

// 기존 프로퍼티 수정 방식
person01.age++;
person01["job"] = "teacher";

console.log(person01)

//const로 선언한 객체 자체를 바꾸려고 하면
person01 = {} // 오류발생