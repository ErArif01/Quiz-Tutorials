const sectionIds= ['welcome-section', 'quiz-section', 'code-section'];
let currentSectionIndex = 0;
let currentQuestionIndex = 0;


const questions = [
  {question:'What is the capital of France?', options: ['Berlin', 'Madrid', 'Paris', 'Rome'], correctAnswer: 'Paris'},
  {question: 'Which programming language is this tutorial written in ?', options: [ 'Java', 'JavaScript', 'Python', 'C++'], correctAnswer: 'JavaScript'},
  {question: 'What is the largest planet in our solar system ?', options: ['Mars', 'Jupyter', 'Earth', 'Saturn'], correctAnswer: 'Jupyter'},
  {question: 'What is the powerhouse of the cell?', options: ['Nucleus', 'Mitochondria', 'Endoplasmic Reticulum', 'Golgi Apparatus'], correctAnswer: 'Mitochondria'},
  ];

function displaySection() {
  const sections = document.querySelectorAll('section');
  sections.forEach( section => section.classList.add('hidden'));
  const currentSection= document.getElementById(sectionIds[currentSectionIndex]);
  if (currentSection) {
    currentSection.classList.remove('hidden');
  }
  if (currentSectionIndex === 1) {
    displayQuestion();
  }
}
function nextSection() {
  if (currentSectionIndex < sectionIds.length - 1) {
    currentSectionIndex++;
    displaySection();
  } else {
    alert('Tutorial completed! Well done!');
  }
}

function displayQuestion() {
  const questionContainer = document.getElementById('question-container');
  const currentQuestion = questions[currentQuestionIndex];

  if (currentQuestion) {
    const optionsHTML =  currentQuestion.options.map(option => '<label><input type= "radio" name = "answer" value="${option}">${option}}</label>').join('');
    questionContainer.innerHTML = '<p>${currentQuestion.question}</p>${optionsHTML}';
  } else {
      questionContainer.innerHTML = '<p>Quiz completed! Well Done! </p>';
  }
}

function checkAnswer() {
  const userAnswer = document.querySelector( 'input[name="answer"]:checked');
    if (userAnswer) {
      const answer = userAnswer.value;
      const currentQuestion = quextions[currentQuestionIndex];
      if ( answer === currentQuestion.correctAnswer) {
        alert('Correct!');
      } else {
        alert('Incorrect. The correct answer is : ${currentQuestion.correctAnswer}');
      }
      currentQuestionIndex++;
      displayQuestion();
    } else { 
      alert('please select an answer.');
    }
}
displaySection();
    
