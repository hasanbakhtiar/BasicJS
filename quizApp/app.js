function Question(text,choices,answer) {
            this.text = text;
            this.choices = choices;
            this.answer = answer;
}

//Question prototype
Question.prototype.checkAnswer = function(answer) {
    return this.answer === answer;
}

// Quiz Constructor
function Quiz(questions) {
    this.questions = questions;
    this.score = 0;
    this.questionIndex = 0
}

// Quiz prototype
Quiz.prototype.getQuestion = function() {
    return this.questions[this.questionIndex];
}

// Quiz isFinish
Quiz.prototype.isFinish = function() {
    return this.questions.lenght === this.questionIndex;
}

//Quiz guess
Quiz.prototype.guess = function() {
    var question = this.getQuestion();

    if(question.checkAnswer(answer))
            this.score++;
}
this.questionIndex++;

var q1 = new Question("whats the best programming?", new Array('C#','javascript','phton','asp.net'), 'javascript');
var q2 = new Question("whats the most popular programming?", new Array('C++','javascript','visual basic','node.js'), 'javascript');
var q3 = new Question("whats the best modern programming?", new Array('C#','javascript','phton','asp.net'), 'javascript');

var questions = new Array(q1,q2,q3);

//Start Quiz
var quiz = new Quiz(questions);

console.log(quiz.isFinish());

console.log(quiz.getQuestion());
quiz.guess('javascript');
console.log(quiz.getQuestion());
quiz.guess('javascript');

console.log(quiz.getQuestion());
quiz.guess('javascript');

console.log(quiz.isFinish());

