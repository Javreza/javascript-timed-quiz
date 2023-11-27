
const start = document.getElementById("start");
const save = document.getElementById("saveScore");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const scoreDiv = document.getElementById("scoreContainer");
const highScoresDiv = document.getElementById("highScoresContainer");
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
        choiceD: "_-_-",
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
        question: "What can innerHTML be used for?",
        choiceA: "To build a server.",
        choiceB: "To set javascript variables.",
        choiceC: "To set an HTML boilerplate.",
        choiceD: "It can be used to update the html of an element via javascript.",
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
        question: "What opening/closing pair would you use to establish an array?",
        choiceA: "()",
        choiceB: "[]",
        choiceC: "{}",
        choiceD: "*//*",
        correct: "B"
    }
]
const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 10;
const questionTimeOut = 0; 
const questionTime = 10;
let TIMER;
let score = 0;

start.addEventListener("click",startQuiz);

function renderQuestion(){
    let q = questions[runningQuestion];
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
}

function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderCounter();
    TIMER = setInterval(renderCounter,1000);
}

function renderCounter(){
        if(count >= questionTimeOut){
            counter.innerHTML = count + " seconds left on question " + (runningQuestion+1);
            count--;
        }else{
            count = questionTime;

            if(runningQuestion < lastQuestion){
                runningQuestion++;
                renderQuestion();
            }else{
                clearInterval(TIMER);
                scoreRender();
            }
        }
    }

function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        score++;

    }
    count = questionTime; 
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
        clearInterval(TIMER);
        scoreRender();
    }
}


function saveScore(){
    var playerName = window.prompt("Please enter name");
    highScoresDiv.style.display = "block";
    var highscore = localStorage.getItem(playerName);

    if(highscore !== null){
        if (score > highscore) {
            localStorage.setItem(playerName, score);
            localStorage.getItem(playerName, score);      
        }
    }
    else{
        localStorage.setItem(playerName, score);
        localStorage.getItem(playerName, score);
    }
    sortScores();



    
}

function sortScores() {
    var dictionary = [];
    for(var i = 0; i < localStorage.length; i++)
    {
        dictionary.push([localStorage.key(i), localStorage.getItem(localStorage.key(i))]);
    }
    dictionary.sort((a,b)=>{return b[1] - a[1]})
    console.log(dictionary);
    highScoreRender(dictionary);
}

function highScoreRender(dictionary) {

    scoreDiv.style.display = "none";

    highScoresDiv.innerHTML = "<table>"
    highScoresDiv.innerHTML += `<tr><th>NAME</td><th>SCORE</th></tr>`;
    for(var k = 0; k < 10; k++){
    highScoresDiv.innerHTML += `<tr><td> ${dictionary[k][0]}</td><td>${dictionary[k][1] * 10}</td></tr>`;

    console.log(highScoresDiv.innerHTML)
    }

    console.log(highScoresDiv.innerHTML)
}

function scoreRender(){
    quiz.style.display = "none";
    scoreDiv.style.display = "block";
    const scorePerCent = Math.round(100 * score/questions.length);
    
    let scoreComment = (scorePerCent >= 80) ? "Excellent!" :
              (scorePerCent >= 60) ? "Well Done!" :
              (scorePerCent >= 40) ? "Oof." :
              (scorePerCent >= 20) ? "Yikes." :
              "Super Bad.";
    
    scoreDiv.innerHTML += "<p><br/><br/>"+ scoreComment +"</p>";
    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";
}











































