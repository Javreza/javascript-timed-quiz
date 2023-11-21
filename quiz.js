// select all elements
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create our questions
var questions = [
    {
        question: "What does querySelector() do?",
        choiceA: "It selects the first element from the document that matches a specified  CSS id or class tag.",
        choiceB: "The method allows users to select in what order to execute code.",
        choiceC: "It choses the last element that matches the indicated id tag.",
        choiceD: "It allows you to see the runtimes of selected functions.",
        correct: "A"
    },
    {
        question: "What does console.log() do?",
        choiceA: "Allows the selection color palletes for their websites.",
        choiceB: "Outputs whatever it indicated to output within its parentheses.",
        choiceC: "It is a method used to change the theme of a browser for any user.",
        choiceD: "This method allows to adjust the framerate of the computer.",
        correct: "B"
    },
    {
        question: "What are event listeners used for?",
        choiceA: "They are typically used to see whether a computer's software has been updated.",
        choiceB: "They can typically check if hardware in a computer has been updated.",
        choiceC: "They log whether or not a type of input has occured on an indicated element.",
        choiceD: "It allows you to see the runtimes of selected functions.",
        correct: "C"
    },
    {
        question: "What is the logical operator for 'OR' in JavaScript?",
        choiceA: "??",
        choiceB: "%%",
        choiceC: "==",
        choiceD: "||",
        correct: "D"
    },
    {
        question: "What is the logical operator for 'AND' in Javascript?",
        choiceA: "&&",
        choiceB: "^^",
        choiceC: "@@",
        choiceD: "",
        correct: "A"
    },
    {
        question: "What is the value of the following variable? var bool = !(!true) || !((!false));",
        choiceA: "true",
        choiceB: "false",
        choiceC: "not true",
        choiceD: "Cannot be determined.",
        correct: "A"
    },
    {
        question: "How could you make an html file reference a javascript file titled 'scripted'?",
        choiceA: "<script rel='scripted.js' src='sripted.js'",
        choiceB: "<script rel='scripted' src='javascript.js'></script>",
        choiceC: "<script src='javascript.js'></script>",
        choiceD: "<script src='scripted.js'></script>",
        correct: "D"
    },
    {
        question: "What method would you use to alter the styling of an element with JavaScript?",
        choiceA: ".setAttribute()",
        choiceB: ".setElementStyle()",
        choiceC: ".alterElement()",
        choiceD: ".styleAttributes()",
        correct: "A"
    },
    {
        question: "What method what you use to select the second child of an element?",
        choiceA: "element.children[1]",
        choiceB: "element.children[2]",
        choiceC: "element.child[1]",
        choiceD: "element.child[2]",
        correct: "A"
    },
    {
        question: "What opening/closing pair would you use to establish an array??",
        choiceA: "()",
        choiceB: "[]",
        choiceC: "{}",
        choiceD: "*//*",
        correct: "B"
    }
]

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 10;
const questionTimeOut = 0; // 10s
const questionTime = 10;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); // 1000ms = 1s
}

// render progress
function renderProgress(){
    for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}

// counter render

function renderCounter(){
        if(count >= questionTimeOut){
            counter.innerHTML = count;
            // timeGauge.style.width = count * gaugeUnit + "px";
            count--;
        }else{
            count = questionTime;

            // change progress color to red
            answerIsWrong();
            if(runningQuestion < lastQuestion){
                runningQuestion++;
                renderQuestion();
            }else{
                // end the quiz and show the score
                clearInterval(TIMER);
                scoreRender();
            }
        }
    }

// checkAnwer

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        // answer is correct
        score++;
        // change progress color to green
        answerIsCorrect();
    }else{
        // answer is wrong
        // change progress color to red
        answerIsWrong();
    }
    count = questionTime; 
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
    }
}

// answer is correct
function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is Wrong
function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

// score render
function scoreRender(){
    scoreDiv.style.display = "block";
    
    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);
    
    // choose the image based on the scorePerCent
    let scoreComment = (scorePerCent >= 80) ? "Excellent!" :
              (scorePerCent >= 60) ? "You passed!" :
              (scorePerCent >= 40) ? "Next time will be better." :
              (scorePerCent >= 20) ? "You bombed." :
              "You REALLY bombed.";
    
    scoreDiv.innerHTML = "<p><br/><br/>"+ scoreComment +"</p>";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}









































