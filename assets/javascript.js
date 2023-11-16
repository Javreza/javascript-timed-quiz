var start = document.getElementById("start");
var assesment = document.getElementById("assesment");
var question = document.getElementById("question");
var counter = document.getElementById("counter");

var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");

var progress = document.getElementById("progress");

var scoreBoard = document.getElementById("scoreBoard");

var questions = [
    {
        question: "What does querySelector() do?",
        choiceA: "It selects the first element from the document that matches a specified  CSS id or class tag.",
        choiceB: "The method allows users to select in what order to execute code.",
        choiceC: "It choses the last element that matches the indicated id tag.",
        choiceD: "It allows you to see the runtimes of selected functions.",
        answer: "A"
    },
    {
        question: "What does console.log() do?",
        choiceA: "Allows the selection color palletes for their websites.",
        choiceB: "Outputs whatever it indicated to output within its parentheses.",
        choiceC: "It is a method used to change the theme of a browser for any user.",
        choiceD: "This method allows to adjust the framerate of the computer.",
        answer: "B"
    },
    {
        question: "What are event listeners used for?",
        choiceA: "They are typically used to see whether a computer's software has been updated.",
        choiceB: "They can typically check if hardware in a computer has been updated.",
        choiceC: "They log whether or not a type of input has occured.",
        choiceD: "It allows you to see the runtimes of selected functions.",
        answer: "C"
    },
    {
        question: "What is the logical operator for 'OR' in JavaScript?",
        choiceA: "??",
        choiceB: "%%",
        choiceC: "==",
        choiceD: "||",
        answer: "D"
    },
    {
        question: "What is the logical operator for 'AND' in Javascript?",
        choiceA: "&&",
        choiceB: "^^",
        choiceC: "@@",
        choiceD: "",
        answer: "A"
    },
    {
        question: "What does querySelector() do?",
        choiceA: "It selects the first element from the document that matches a specified  CSS id or class tag.",
        choiceB: "The method allows users to select in what order to execute code.",
        choiceC: "It choses the last element that matches the indicated id tag.",
        choiceD: "It allows you to see the runtimes of selected functions.",
        answer: "A"
    },
    {
        question: "What does querySelector() do?",
        choiceA: "It selects the first element from the document that matches a specified  CSS id or class tag.",
        choiceB: "The method allows users to select in what order to execute code.",
        choiceC: "It choses the last element that matches the indicated id tag.",
        choiceD: "It allows you to see the runtimes of selected functions.",
        answer: "D"
    },
    {
        question: "What does querySelector() do?",
        choiceA: "It selects the first element from the document that matches a specified  CSS id or class tag.",
        choiceB: "The method allows users to select in what order to execute code.",
        choiceC: "It choses the last element that matches the indicated id tag.",
        choiceD: "It allows you to see the runtimes of selected functions.",
        answer: "A"
    },
    {
        question: "What does querySelector() do?",
        choiceA: "It selects the first element from the document that matches a specified  CSS id or class tag.",
        choiceB: "The method allows users to select in what order to execute code.",
        choiceC: "It choses the last element that matches the indicated id tag.",
        choiceD: "It allows you to see the runtimes of selected functions.",
        answer: "A"
    },
    {
        question: "What does querySelector() do?",
        choiceA: "It selects the first element from the document that matches a specified  CSS id or class tag.",
        choiceB: "The method allows users to select in what order to execute code.",
        choiceC: "It choses the last element that matches the indicated id tag.",
        choiceD: "It allows you to see the runtimes of selected functions.",
        answer: "B"
    }
]
