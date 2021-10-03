let questions = document.querySelectorAll('.question-info');
// let textBox = document.querySelectorAll('.hidden');
let spans = document.querySelectorAll('.close');

function onQuestionHandler(e) {
  e.preventDefault();
  this.parentElement.nextElementSibling.classList.toggle('hidden');
  console.dir(this)
};

questions.forEach((question) => {
  question.addEventListener('click', onQuestionHandler)
});