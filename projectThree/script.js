const quizBank = [
    {
        question: "'I remember when we broke up, the first time, saying 'This is it, I've had enough''",
        a: "One Last Time by Ariana Grande",
        b: "We Are Never Ever Getting Back Together by Taylor Swift",
        c: "Call Out My Name by The Weeknd",
        d: "You Belong With Me by Taylor Swift",
        correct: "b",
    },
    {
        question: "'Just gonna stand there and watch me burn? Well that's alright because I like the way it hurts'",
        a: "Toxic by Britney Spears",
        b: "New Rules by Dua Lipa",
        c: "Shape of You by Ed Sheeran",
        d: "Love the Way You Lie by Rihanna and Eminem",
        correct: "d",
    },
    {
        question: "'Stop calling, stop calling, I don't want to think anymore. I got my head and my heart on the dance floor'",
        a: "Telephone by Lady Gaga and Beyonce",
        b: "Love Song by Selena Gomez",
        c: "Kill Bill by SZA",
        d: "Heart Attack by Demi Lovato",
        correct: "a",
    },
    {
        question: "'Got my mind on your body and your body on my mind. Got a taste for the cherry, I just need to take a bite'",
        a: "Cruel Summer by Taylor Swift",
        b: "Cool For the Summer by Demi Lovato",
        c: "Burn by Ellie Goulding",
        d: "Still Into You by Paramore",
        correct: "b",
    },
    {
        question: "'Let's go all the way tonight, no regrets, just love. We can dance, until we die. You and I, will be young forever'",
        a: "Sorry by Justin Bieber",
        b: "Party in the USA by Miley Cyrus",
        c: "Teenage Dream by Katy Perry",
        d: "deja vu by Olivia Rodrigo",
        correct: "c",
    },
    {
        question: "'I won't lie to you, I know he's just not right for you'",
        a: "Treat You Better by Shawn Mendes",
        b: "Boyfriend by Justin Bieber",
        c: "Marry You by Bruno Mars",
        d: "Sugar by Maroon 5",
        correct: "a",
    },
    {
        question: "'With a taste of your lips, I'm on a ride, You're toxic, I'm slippin' under'",
        a: "One of the Girls by The Weeknd",
        b: "Hot N Cold by Katy Perry",
        c: "Attention by Charlie Puth",
        d: "Toxic by Britney Spears",
        correct: "d",
    },
    {
        question: "'This hit that ice cold Michelle Pfeiffer, that white gold. This one for them hood girls, them good girls straight masterpieces'",
        a: "One Dance by Drake",
        b: "Can't Feel My Face by The Weeknd",
        c: "Uptown Funk by Bruno Mars and Mark Ronson",
        d: "Whistle by Flo Rida",
        correct: "c",
    },
];

const quiz = document.getElementById('quiz')
const answerE1s = document.querySelectorAll('.answer')
const questionE1 = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz(){
    deselectAnswers()
    const currentQuizBank = quizBank[currentQuiz]

    questionE1.innerText = currentQuizBank.question
    a_text.innerText = currentQuizBank.a
    b_text.innerText = currentQuizBank.b
    c_text.innerText = currentQuizBank.c
    d_text.innerText = currentQuizBank.d
}

function deselectAnswers() {
    answerE1s.forEach(answerE1 => answerE1.checked = false)
}

function getSelected() {
    let answer
    answerE1s.forEach(answerE1 => {
        if(answerE1.checked) {
            answer = answerE1.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if (answer === quizBank[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizBank.length){
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizBank.length} questions correctly!</h2>

            <button onclick="location.reload()"><b>Play Again<b>!</button>
            `
        }
    }
})

