let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer_1": "Tim Berners-Lee",
        "answer_2": "Ich",
        "answer_3": "Der Terminator",
        "answer_4": "Albert Einstein",
        "right_answer": 1
    },
    {
        "question": "Was ist ein Inhaltsleeres Element?",
        "answer_1": " < span > ",
        "answer_2": " < div > ",
        "answer_3": " < br > ",
        "answer_4": " < body > ",
        "right_answer": 3
    },
    {
        "question": "Was für eine Sprache ist HTML?",
        "answer_1": "Programmiersprache",
        "answer_2": "Englisch",
        "answer_3": "Deutsch",
        "answer_4": "Auszeichnungssprache",
        "right_answer": 4
    },
    {
        "question": "Was ist ein tag in HTML?",
        "answer_1": "Wenn es draußen hell ist",
        "answer_2": "Der Programmierer",
        "answer_3": "eine Anweisung",
        "answer_4": "ein Befehl, der Licht auf die Webseite bringt",
        "right_answer": 3
    }
];
let questionsCSS = [
    {
        "question": "Wer hat CSS erfunden?",
        "answer_1": "Albert Einstein",
        "answer_2": "Hakon Wium Lie",
        "answer_3": "Stephen Hawking",
        "answer_4": "ein Computer",
        "right_answer": 2
    },
    {
        "question": "Wer hat auch noch an CSS gearbeitet?",
        "answer_1": "Niemand",
        "answer_2": "Albert Einstein",
        "answer_3": "Bert Bos",
        "answer_4": "Stephen Hawking",
        "right_answer": 3
    },
    {
        "question": "Wofür steht CSS?",
        "answer_1": "den Style gestalten",
        "answer_2": "Cascading Sheets",
        "answer_3": "Cascading Style",
        "answer_4": "Cascading Style Sheets",
        "right_answer": 4
    },
    {
        "question": "Wozu wird CSS benötigt?",
        "answer_1": "für die Logik",
        "answer_2": "für die Grundstruktur einer Webseite",
        "answer_3": "für das Disign",
        "answer_4": "um die Verbindung zu anderen Webseiten aufzubauen",
        "right_answer": 3
    }
];
let questionsJS = [
    {
        "question": "Wer hat Javascript entwickelt?",
        "answer_1": "Apple",
        "answer_2": "Jeff Bazos",
        "answer_3": "Netscape",
        "answer_4": "eine freie Gruppe von Programmierern",
        "right_answer": 3
    },
    {
        "question": "Wozu wird Javascript verwendet?",
        "answer_1": "für die Grundstruktur einer Webseite",
        "answer_2": "für das Disign",
        "answer_3": "um die Verbindung zu anderen Webseiten aufzubauen",
        "answer_4": "für die Logik",
        "right_answer": 4
    },
    {
        "question": "Was ist Javascript für eine Sprache?",
        "answer_1": "Programmiersprache",
        "answer_2": "Französisch",
        "answer_3": "Gebärdensprache",
        "answer_4": "Auszeichnungssprache",
        "right_answer": 1
    },
    {
        "question": "Was wird in Javascript verwendet?",
        "answer_1": "tags",
        "answer_2": "function",
        "answer_3": "classen",
        "answer_4": "<div>",
        "right_answer": 2
    }
];
let questionsJAVA = [
    {
        "question": "Wer hat Java erfunden?",
        "answer_1": "eine künstliche Intelligenz",
        "answer_2": "Netscape",
        "answer_3": "Hakon Wium Lie",
        "answer_4": "James Gosling",
        "right_answer": 4
    },
    {
        "question": "Was ist Java?",
        "answer_1": "objektorientierten Programmiersprache",
        "answer_2": "eine Syntax",
        "answer_3": "ein Programm",
        "answer_4": "ein Script",
        "right_answer": 1
    },
    {
        "question": "Wann ist Java erschienen?",
        "answer_1": "1990",
        "answer_2": "1995",
        "answer_3": "1950",
        "answer_4": "2001",
        "right_answer": 2
    },
    {
        "question": "Wozu wird Java genutzt?",
        "answer_1": "Programme schreiben",
        "answer_2": "scripte schreiben",
        "answer_3": "als Taschenrechner",
        "answer_4": "zum Disignen",
        "right_answer": 1
    }
];


let currentQustion = 0;
let rigthquestions = 0;
let rightAudio = new Audio('audio/right.mp3');
let failAudio = new Audio('audio/fail.mp3');

function init() {
    document.getElementById('screenWelcome').style = ``;
    document.getElementById('arrowContainer').style = `display: none`;
}


function showQuestion() { /*Zeigt die Fragen und möglichen Antworten*/

document.getElementById('screenWelcome').style = `display: none`;
document.getElementById('answer-screen').style = ``;
document.getElementById('arrowContainer').style = ``;

    if (gameIsOver()) {
      showEndScreen();
    } else {
       showNextQuestion();
    }
}

function gameIsOver() {
    return currentQustion >= questions.length
}


function showEndScreen() {
    document.getElementById('screen-finish-container').style = ``;
    document.getElementById('answer-screen').style = `display: none`;
    document.getElementById('arrowContainer').style = `display: none`;


    document.getElementById('score-fullnumber').innerHTML = questions.length;
    document.getElementById('score').innerHTML = rigthquestions;
}


function showNextQuestion() {
    let question = questions[currentQustion];
    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}



function answer(selection) {
    let question = questions[currentQustion]; /*übergibt question ein Element aus dem Array questions. [currentQustion] sagt , dass das 0te Element genommen werden soll (siehe oben)*/
    let selectedQuestionNumber = selection.slice(-1); /*.slice(-1) nimmt den letzten Buchstaben oder Zahl von der ID die auf selction liegt, dann wird diese übergeben*/
    let idOFRightAnswer = `answer_${question['right_answer']}`; /*übergibt die ID von der richtigen Antwort*/

    if (rightAnswerSelected(selectedQuestionNumber, question)) { /*Wenn die Nummern von selectedQuestionNumber == question['right_answer'] übereinstimmen, dann wird Richtig ausgespielt*/
        document.getElementById(selection).parentNode.childNodes[1].classList.add('rigth');  /*färbt den container grün*/
        document.getElementById(selection).parentNode.classList.add('rigth');  /*färbt den container grün*/

        rightAudio.play();
        rigthquestions++;


    } else {
        document.getElementById(selection).parentNode.childNodes[1].classList.add('wrong'); /* färbt den continer rot*/
        document.getElementById(selection).parentNode.classList.add('wrong'); /* färbt den continer rot*/
        document.getElementById(idOFRightAnswer).parentNode.childNodes[1].classList.add('rigth');  /*färbt den container grün*/
        document.getElementById(idOFRightAnswer).parentNode.classList.add('rigth');  /*färbt den container grün*/

        failAudio.play();
    }
    document.getElementById('arrowNext').disabeled = false;
}


function rightAnswerSelected(selectedQuestionNumber, question) {
    return selectedQuestionNumber == question['right_answer']
}


function nextQuestion() {
    currentQustion++; /* erweitert currentQuestion um 1*/
    document.getElementById('arrowNext').disabeled = true;
    resetAnswerButton();
    showQuestion();
}


function resetAnswerButton() {
    document.getElementById('answer_1').parentNode.classList.remove('wrong'); /*entfernt die farbe wieder*/
    document.getElementById('answer_1').parentNode.childNodes[1].classList.remove('rigth');  /*entfernt die farbe wieder*/
    document.getElementById('answer_1').parentNode.classList.remove('rigth'); /*entfernt die farbe wieder*/
    document.getElementById('answer_1').parentNode.childNodes[1].classList.remove('wrong');  /*entfernt die farbe wieder*/

    document.getElementById('answer_2').parentNode.classList.remove('wrong'); /*entfernt die farbe wieder*/
    document.getElementById('answer_2').parentNode.childNodes[1].classList.remove('rigth');  /*entfernt die farbe wieder*/
    document.getElementById('answer_2').parentNode.classList.remove('rigth'); /*entfernt die farbe wieder*/
    document.getElementById('answer_2').parentNode.childNodes[1].classList.remove('wrong');  /*entfernt die farbe wieder*/

    document.getElementById('answer_3').parentNode.classList.remove('wrong'); /*entfernt die farbe wieder*/
    document.getElementById('answer_3').parentNode.childNodes[1].classList.remove('rigth');  /*entfernt die farbe wieder*/
    document.getElementById('answer_3').parentNode.classList.remove('rigth'); /*entfernt die farbe wieder*/
    document.getElementById('answer_3').parentNode.childNodes[1].classList.remove('wrong');  /*entfernt die farbe wieder*/

    document.getElementById('answer_4').parentNode.classList.remove('wrong'); /*entfernt die farbe wieder*/
    document.getElementById('answer_4').parentNode.childNodes[1].classList.remove('rigth');  /*entfernt die farbe wieder*/
    document.getElementById('answer_4').parentNode.classList.remove('rigth'); /*entfernt die farbe wieder*/
    document.getElementById('answer_4').parentNode.childNodes[1].classList.remove('wrong');  /*entfernt die farbe wieder*/
}


function replay() {
    document.getElementById('screen-finish-container').style = `display: none`;
    document.getElementById('answer-screen').style = ``;
    document.getElementById('screenWelcome').style = `display: none`;

    currentQustion = 0;
    rigthquestions = 0;

    showQuestion()
}


function showHTMLQuestion() {
    document.getElementById('screenWelcome').style = `display: none`;
document.getElementById('answer-screen').style = ``;
document.getElementById('arrowContainer').style = ``;

    if (gameIsOver()) {
      showEndScreen();
    } else {
        showNextQuestion();
    }
}


function showNextQuestionHTML() {
    let question = questions[currentQustion];
    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}


function showCSSQuestion() {
    document.getElementById('screenWelcome').style = `display: none`;
document.getElementById('answer-screen').style = ``;
document.getElementById('arrowContainer').style = ``;

    if (gameIsOver()) {
      showEndScreen();
    } else {
       showNextQuestionCSS();
       nextQuestionCSS(i);
    }
}

function nextQuestionCSS(i) {
    document.getElementById('arrowContainer').innerHTML = ``;
    document.getElementById('arrowContainer').innerHTML = /*html*/`  <div class="arrow-background"><img class="arrow-go-back" src="img/icons8-arrow-91-left.png"></div>
    <button class="arrow-background" onclick="nextQuestion(i)" id="arrowNext"><img class="arrow-go-back"
            src="img/icons8-arrow-91-reigth.png"></button>`;
}


function showNextQuestionCSS() {
    let question = questionsCSS[currentQustion];
    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}


function showJSQuestion() {
    document.getElementById('screenWelcome').style = `display: none`;
document.getElementById('answer-screen').style = ``;
document.getElementById('arrowContainer').style = ``;
document.getElementById('arrowContainer').innerHTML = ``
document.getElementById('arrowContainer').innerHTML = /*HTML*/`
<div class="arrow-background"><img class="arrow-go-back" src="img/icons8-arrow-91-left.png"></div>
<button class="arrow-background" onclick="nextQuestion()" id="arrowNext"><img class="arrow-go-back"
        src="img/icons8-arrow-91-reigth.png"></button>`;

    if (gameIsOver()) {
      showEndScreen();
    } else {
       showNextQuestionJS();
    }

}


function showNextQuestionJS() {
    let question = questionsJS[currentQustion];
    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}


function showJAVAQuestion() {
    document.getElementById('screenWelcome').style = `display: none`;
document.getElementById('answer-screen').style = ``;
document.getElementById('arrowContainer').style = ``;

    if (gameIsOver()) {
      showEndScreen();
    } else {
       showNextQuestionJAVA();
    }

}


function showNextQuestionJAVA() {
    let question = questionsJAVA[currentQustion];
    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
}