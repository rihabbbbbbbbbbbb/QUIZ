function nextStep(step) {
    const currentStep = document.querySelector('.form-step.active');
    currentStep.classList.remove('active');
    document.getElementById(`form-step-${step}`).classList.add('active');
}

function prevStep(step) {
    const currentStep = document.querySelector('.form-step.active');
    currentStep.classList.remove('active');
    document.getElementById(`form-step-${step}`).classList.add('active');
}

function submitQuiz() {
    const answers = {
        q1: 'c',
        q2: 'b',
        q3: 'c', // Corrected answer for q3
        q4: 'c', // Added q4 answer
        q6: 'b', // Added q6 answer
        q7: 'c', // Added q7 answer
        q8: 'c', // Added q8 answer
        q9: 'b', // Added q9 answer
        q10: 'd' // Added q10 answer
    };

    let score = 0;
    const totalQuestions = Object.keys(answers).length;

    for (let question in answers) {
        const userAnswer = document.querySelector(`input[name="${question}"]:checked`);
        if (userAnswer && userAnswer.value === answers[question]) {
            score++;
        }
    }

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = `<h2 >You scored ${score} out of ${totalQuestions}</h2>`;

    const solutionsDiv = document.getElementById('solutions');
    if (score < totalQuestions) {
        solutionsDiv.innerHTML = '<h3>Solutions:</h3><ul>';
        for (let question in answers) {
            const userAnswer = document.querySelector(`input[name="${question}"]:checked`);
            if (!userAnswer || userAnswer.value !== answers[question]) {
                solutionsDiv.innerHTML += `<li> <b style="color:green ; ">Question ${question.slice(1)}: </b> Correct answer is ${answers[question].toUpperCase()}</li>`;
            }
        }
        solutionsDiv.innerHTML += '</ul>';
    }

    nextStep(4);
}


document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('form-step-1').classList.add('active');
});

document.addEventListener('DOMContentLoaded', function () {
    showStep(1);
});

function showStep(step) {
    // Hide all steps
    document.querySelectorAll('.form-step').forEach(function (formStep) {
        formStep.classList.remove('active');
    });

    // Show current step
    document.getElementById('form-step-' + step).classList.add('active');

    // Update progress bar
    document.querySelectorAll('.step').forEach(function (progressStep) {
        progressStep.classList.remove('active');
    });
    for (let i = 1; i <= step; i++) {
        document.getElementById('step-' + i).classList.add('active');
    }
}

function nextStep(step) {
    showStep(step);
}

function prevStep(step) {
    showStep(step);
}

