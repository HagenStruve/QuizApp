let questions = [
    {
        "question": "Wer ist hier der Boss?",
        "answer_1": "ES",
        "answer_2": "Du",
        "answer_3": "Er",
        "answer_4": "Sie",
        "right_answer": 4
    },
    {
        "question": "Wer ist hier der Boss?",
        "answer_1": "Ich",
        "answer_2": "Du",
        "answer_3": "Er",
        "answer_4": "Sie",
        "right_answer": 4
    },
    {
        "question": "Wer ist hier der Boss?",
        "answer_1": "Ich",
        "answer_2": "Du",
        "answer_3": "Er",
        "answer_4": "Sie",
        "right_answer": 1
    },
    {
        "question": "Wer ist hier der Boss?",
        "answer_1": "Ich",
        "answer_2": "Du",
        "answer_3": "Er",
        "answer_4": "Sie",
        "right_answer": 3
    }
];

let currentQustion = 0;


function init() {
    showQuestion()
}


function showQuestion() { /*Zeigt die Fragen und möglichen Antworten*/
    let question = questions[currentQustion];
    question['question']

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

    if (selectedQuestionNumber == question['right_answer']) { /*Wenn die Nummern von selectedQuestionNumber == question['right_answer'] übereinstimmen, dann wird Richtig ausgespielt*/
        document.getElementById(selection).parentNode.childNodes[1].classList.add('rigth');  /*färbt den container grün*/
        document.getElementById(selection).parentNode.classList.add('rigth');  /*färbt den container grün*/
    } else {
        document.getElementById(selection).parentNode.childNodes[1].classList.add('wrong'); /* färbt den continer rot*/
        document.getElementById(selection).parentNode.classList.add('wrong'); /* färbt den continer rot*/
        document.getElementById(idOFRightAnswer).parentNode.childNodes[1].classList.add('rigth');  /*färbt den container grün*/
        document.getElementById(idOFRightAnswer).parentNode.classList.add('rigth');  /*färbt den container grün*/
    }
    document.getElementById('arrowNext').disabeled = false;
}


function nextQuestion() {
    currentQustion++; /* erweitert currentQuestion um 1*/
    showQuestion();

    document.getElementById('arrowNext').disabeled = true;

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

function noWay() {
    alert('Bitte wähle erst eine Antwort');
}