var myQuestions = [
    {
        question: "Endermen can be damaged in several ways. Which of the following has been made up?",
        answers: {
            a: 'Melee attacks',
            b: 'Splash water bottles',
            c: 'Rolled up newspaper',
        },
        correctAnswer: 'a'


    },

    {
        question: "How many blocks of iron ore does it take to make one iron ingot?",
        answers: {
            a: '3',
            b: '1',
            c: 'What is an iron ingot? ',
        },
        correctAnswer: 'b'

    },

    {
        question: "What are Creepers scared of?",
        answers: {
            a: 'The dark',
            b: 'Spiders',
            c: 'Ocelots',
        },
        correctAnswer: 'c'


    },

    {
        question: "How do you make obsidian",
        answers: {
            a: 'Wood and iron',
            b: 'Water and diamonds',
            c: 'Water and lava',
        },
        correctAnswer: 'c'


    },

    {
        question: "How many people play Minecraft every month?",
        answers: {
            a: '55 million +',
            b: '100',
            c: '15 million',
        },
        correctAnswer: 'a'


    },

    {
        question: "what real-life animal was recorded to make the sound effects of the Ghasts?",
        answers: {
            a: 'Dog',
            b: 'Cat',
            c: 'Snake',
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
    function validateAnswers (quizContainer){
        var answerContainers = quizContainer.querySelectorAll('.answers');
        for (var i = 0; i < questions.length; i++){
            var userAnswer =
                (answerContainers[i].querySelector('input[name=question' + i + ']:checked') ||
                    {}).value;

            if (userAnswer == null){
                return false;
            }
            
        }
        return true;

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
        if (validateAnswers(quizContainer)){
            showResults(questions, quizContainer, resultsContainer); 
        
        }

        else {
            alert('Answer all questions!');
        }
        

    }



}

