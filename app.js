const quizData = [
  {
    question: "Quien gano las elecciones de Venezuela en 1998?",
    a: "El Conde Del Guacharo",
    b: "Hugo Chavez",
    c: "Yo",
    d: "Tú",
    correct: "b",
  },
  {
    question: "What is the most used programming language in 2020?",
    a: "Java",
    b: "Javascript",
    c: "Python",
    d: "None of the above",
    correct: "a",
  },
  {
    question: "Would you learn more languages?",
    a: "Yes",
    b: "Yes",
    c: "Definitely",
    d: "All of the above",
    correct: "d",
  },
  {
    question: "Best bootcamp ever?",
    a: "4Geeks",
    b: "Coding Dojo",
    c: "Mountain Dev",
    d: "idk",
    correct: "a",
  },
  {
    question: "What is your favorite Hobby?",
    a: "Videogames",
    b: "Coding",
    c: "Movies",
    d: "Pet my dog",
    correct: "d",
  },
];

const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAnswers () {
    answerEls.forEach((answerEl) => {
       answerEl.checked = false;
})};

submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `<h2>Respondiste correctamente ${score}/${quizData.length} preguntas.</h2>`
    }
  }
});
