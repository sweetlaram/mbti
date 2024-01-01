import { questions } from './data.js'
//다른 파일을 불러올 때 import from 키워드 사용

const progressValueEl = document.querySelector('.progress .value')
const numberEl = document.querySelector('.number')
const questionEl = document.querySelector('.question')
const choice1El = document.querySelector('.choice1')
const choice2El = document.querySelector('.choice2')

let currentNumber = 0
let mbti = ''
// 사용자가 최종적으로 모두 답변했을 때 그 결과를 mbti변수에 담아서 실제 결과 페이지에 이용하는 용도로 사용하기 위함이므로 빈 데이터로 작성

function renderQuestion() {
  const question = questions[currentNumber]
  // currentnumber를 통해 현재 질문의 번호가 몇번인지를 알 수 있게 만들었으므로, 0대신 currentNumber변수를 넣어줘야함.->답변을 선택할 때마다+1이 되므로 그 식을 만들어주기 위한 작업!
  numberEl.innerHTML = question.number
  // 질문객체데이터(변수)에서 number라는 속성에 들어있는 그 값을 할당하겠다
  // innerHTML그 부분에 어떤 코드를 넣었을 때 값을 출력할 수 있게 하는 명령어
  questionEl.innerHTML = question.question
  choice1El.innerHTML = question.choices[0].text
  choice2El.innerHTML = question.choices[1].text
  progressValueEl.style.width = (currentNumber+1) * 10 + '%'
}
function nextQuestion(choiceNumber) {
  if(currentNumber === questions.length - 1) {
    showResultPage()
    return
  }
  const question = questions[currentNumber]
  mbti = mbti + question.choices[choiceNumber].value
  // mbti라는 변수에다가= ''비워져있는 데이터에서 + i가 나오게되면
  currentNumber = currentNumber+1
  renderQuestion()
}
function showResultPage() {
  location.href = './results.html?mbti=' + mbti //쿼리스트링:물음표로 시작, 전달하고싶은 데이터는 가장 뒷쪽에 작성, =로 연결, abc는 데이터이름
}

choice1El.addEventListener('click',function() {
  nextQuestion(0)
})
choice2El.addEventListener('click',function() {
  nextQuestion(1)
})
renderQuestion()