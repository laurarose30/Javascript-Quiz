var myQuestions = [
    {
        question: "what is 2+2",
        answers: {
            a: '4',
            b: '8',
            c: '6',
        },
        correctAnswer: 'b'


    },

    {
        question: "what is 2+2",
        answers: {
            a: '4',
            b: '8',
            c: '6',
        },
        correctAnswer: 'b'

    },

    {
        question: "what is 2+2",
        answers: {
            a: '4',
            b: '8',
            c: '6',
        },
        correctAnswer: 'b'


    },

    {
        question: "what is 2+2",
        answers: {
            a: '4',
            b: '8',
            c: '6',
        },
        correctAnswer: 'b'


    },

    {
        question: "what is 2+2",
        answers: {
            a: '4',
            b: '8',
            c: '6',
        },
        correctAnswer: 'b'


    },

    {
        question: "what is 2+2",
        answers: {
            a: '4',
            b: '8',
            c: '6',
        },
        correctAnswer: 'b'


    },];


var quizContainer =
    document.getElementById('quiz');
var resultsContainer =
    document.getElementById('results');
var submitButton =
    document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);


function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

    function showQuestions(questions, quizContainer) {

        var output = [];
        var answers;

        // i++ (increases a value) is the same as i = i + 1;
        // if length == 6, it will run 6 times and then stop

        for (var i = 0; i < questions.length; i++) {

            // [] - empty array literal  

            answers = [];
            for (letter in questions[i].answers) {
                answers.push(
                    '<li class="ans">'
                    + '<label>'
                    + '<input type="radio" name="question' + i + '" value="' + letter + '">'
                    + letter + ': '
                    + questions[i].answers[letter]
                    + '</label>'
                    + '</li>'
                );

            }
            // push - adding a new item to the list
            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers"><ul>' + answers.join('') + '</ul></div>'
            );
        }

        quizContainer.innerHTML = output.join('');
    }

    function showResults(questions, quizContainer, resultsContainer) {

        var answerContainers = quizContainer.querySelectorAll('.answers');

        var userAnswer = '';
        var numCorrect = 0;

        for (var i = 0; i < questions.length; i++) {

            userAnswer =
                (answerContainers[i].querySelector('input[name=question' + i + ']:checked') ||
                    {}).value;


            if (userAnswer === questions[i].correctAnswer) {
                numCorrect++;
                answerContainers[i].style.color = 'lightgreen';
            }

            else {

                answerContainers[i].style.color = 'red';
            }
        }
        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length + ' correct ';

    }

    showQuestions(questions, quizContainer);


    submitButton.onclick = function () {
        showResults(questions, quizContainer, resultsContainer);

    }



}

