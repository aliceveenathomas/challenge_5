const startGameButton = document.getElementById('start-game');
const sectionTimer = document.getElementById('section-timer');
const timerEl = document.getElementById('timer')
const sectionQuestion = document.getElementById('section-question');

const sectionLanding = document.getElementById('section-landing');
const sectionEndGame = document.getElementById('section-end-game');

const questionTitleEl = document.getElementById('question-title');
const questionChoices = document.getElementById('question-choices');




let timeRemaining =5;
let timerId;



function renderQuestion(questionIndex){

  // get the question
  const question = questions[questionIndex]

  // create the structure
  // set the question title
  questionTitleEl.textContent = question.title;


  // set the choices
  const choices = question.choices;
  questionChoices.textContent = "";

  for (let index = 0; index < choices.length; index++) {
    const choice = choices[index];

       const li = document.createElement('li');

    const button = document.createElement('button');



    button.setAttribute('class', 'question-choice');
    button.textContent = choice.title;


    button.addEventListener('click', function(event){
      // question
      // user click on choice

      // if user click on the correct answer
      if(choice.isAnswer){
       



      }else{
        // if user click on the wrong answer
        // deduct 5 sec away from timer
        timeRemaining = timeRemaining - 5;

      

      }
      // if user click on the choice of the final question
      const nextQuestionIndex = questionIndex + 1;

      if(nextQuestionIndex >= questions.length){
        // end game
        return endGame()
      }


      // move on to the next question
      renderQuestion(nextQuestionIndex);
      


    });


    li.appendChild(button);

    questionChoices.append(li);
  }



}





// when i click on the start button
startGameButton.addEventListener('click', function(event){
  // start the timer
  timerEl.textContent = timeRemaining;
  startTimer();
  // show the question
  sectionQuestion.classList.remove('hide');
  // hide the landing
  sectionLanding.classList.add('hide');
  
  renderQuestion(0);

})

function endGame(){
  // (show the end game screen)
  sectionEndGame.classList.remove('hide');
  // hide question section
  sectionQuestion.classList.add('hide');

  // hide timer
  sectionTimer.classList.add('hide');

  // stop the timer
  clearInterval(timerId);
}

function startTimer(){
  // timer
  // show the timer
  sectionTimer.classList.remove('hide');
  // once the timer starts
  timerId = setInterval(function(){
    // we will subtract 1 from the current timer count
    timeRemaining = timeRemaining - 1;
    // and update the dom for every passing sec
    timerEl.textContent = timeRemaining;

    // if timer expires while the game is not completed yet
    if (timeRemaining <= 0){

      // end game 
      endGame();

    }
  }, 1000);

}

