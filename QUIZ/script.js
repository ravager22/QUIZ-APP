const quizDB = [
    {
        question: "Q1: What is the full form of CN in terms of engineering?",
        a: "Cartoon Network",
        b: "Cricket Network",
        c: "Canonical Name",
        d: "Computer Networking",
        ans: "ans4"
    },
    {
        question: "Q2: What is the full form of CSS?",
        a: "Cascading Style Sheets",
        b: "Cascading Style Shits",
        c: "Cascading Style Sheep",
        d: "Cartoon Style Sheets",
        ans: "ans1"
    },
    {
        question: "Q3: What is the full form of HTTP?",
        a: "Hypertext Transfer Product",
        b: "Hypertext Transfer Protocol",
        c: "Hypotext Transfer Product",
        d: "Hypotext Transfer Protocol",
        ans: "ans2"
    },
    {
        question: "Q4: What is the real name of US AGENT in MCU?",
        a: "Steve Rogers",
        b: "Bucky Barnes",
        c: "Wade Wilson",
        d: "John F Walker",
        ans: "ans4"
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore')
let questionCount=0;
let score = 0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount];
    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
   let answer;

   answers.forEach((curAnsElem) => {
       if(curAnsElem.checked){
        answer = curAnsElem.id;
       }
   });
   return answer;
};

const deselectAll = () => {
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}

submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer);
    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };
    questionCount++;

    deselectAll();

    if(questionCount < quizDB.length)
    {
        loadQuestion()
    }
    else{
        showScore.innerHTML = `
          <h3> Your score ${score}/${quizDB.length} </h3>
          <button class="btn" onclick="location.reload()"> PLAY AGAIN? </button>
        `;
        showScore.classList.remove('scoreArea');
    }
});