//inisiasi soal dalam quiz
const questions = [
    {
        question: "Padanan kata Server ?",
        optionA: "Peladen",
        optionB: "Server",
        optionC: "Pusat Data",
        optionD: "Data Pusat",
        correctOption: "optionA"
    },

    {
        question: "Penulisan yang benar ?",
        optionA: "Realita",
        optionB: "Realitas",
        optionC: "Relate",
        optionD: "Relita",
        correctOption: "optionB"
    },

    {
        question: "Padanan kata Resort ?",
        optionA: "Guest House",
        optionB: "Villa",
        optionC: "Sanggraloka",
        optionD: "Sanggar Loka",
        correctOption: "optionC"
    },

    {
        question: "Padanan kata Bullying ?",
        optionA: "Mengejek",
        optionB: "Kekerasan Mental",
        optionC: "Pembulian",
        optionD: "Perundungan",
        correctOption: "optionD"
    },

    {
        question: "Penulisan yang benar ?",
        optionA: "Terima kasih",
        optionB: "Terimakasih",
        optionC: "Terima kasi",
        optionD: "Terimakasi",
        correctOption: "optionA"
    },

    {
        question: "Penggunaan tanda baca yang benar ?",
        optionA: "penghapus, pensil, dan buku",
        optionB: "penghapus,pensil,dan buku",
        optionC: "penghapus , pensil , dan buku",
        optionD: "penghapus, pensil dan, buku",
        correctOption: "optionA"
    },

    {
        question: "Penulisan yang benar ?",
        optionA: "Aktipitas",
        optionB: "Aktifitas",
        optionC: "Aktivitas",
        optionD: "Aktipfitas",
        correctOption: "optionC"
    },

    {
        question: "Manakah penulisan yang benar ?",
        optionA: "Sekedar",
        optionB: "Sakadar",
        optionC: "Sakedar",
        optionD: "Sekadar",
        correctOption: "optionD"
    },

    {
        question: "Padanan kata MC ?",
        optionA: "Master of Ceremony",
        optionB: "Host",
        optionC: "Pemandu",
        optionD: "Pewara",
        correctOption: "optionD"
    },

    {
        question: "Kata ganti orang yang dapat digunakan saat menyatakan pendapat pribadi disebut?",
        optionA: "Leksikal",
        optionB: "Pronomina",
        optionC: "Konjungsi",
        optionD: "Klasikal",
        correctOption: "optionB"
    },

    {
        question: "Cerita fiksi yang relatif pendek disebut ?",
        optionA: "Puisi",
        optionB: "Novel",
        optionC: "Cerita Pendek",
        optionD: "Pantun",
        correctOption: "optionC"
    },

  
    {
        question: "Kata berikut yang benar adalah ?",
        optionA: "Mengubah",
        optionB: "Merubah",
        optionC: "Merobah",
        optionD: "Mengobah",
        correctOption: "optionA"
    },


    {
        question: "Penulisan kata yang benar adalah? ?",
        optionA: "Standarisasi, kwitansi, frekuensi",
        optionB: "Standarrisasi, kuitansi, frekuensi",
        optionC: "Standardisasi, kwitansi, frekwensi",
        optionD: "Standardisasi, kuitansi, frekuensi",
        correctOption: "optionD"
    },

    
    {
        question: 'Penulisan kata "di" yang benar?',
        optionA: "di beli",
        optionB: "dicintai",
        optionC: "diluar",
        optionD: "dirumah",
        correctOption: "optionB"
    },

    
    {
        question: "Penulisan gabungan kata yang sesuai dengan PUEBI adalah ?",
        optionA: "Walikota",
        optionB: "Terimakasih",
        optionC: "Orang tua",
        optionD: "Pasca sarjana",
        correctOption: "optionC"
    },

    {
        question: "Pilihlah kata baku di bawah ini ?",
        optionA: "Praktek",
        optionB: "Risiko",
        optionC: "Legalisir",
        optionD: "Apotik",
        correctOption: "optionB"
    },
    

    {
        question: 'Setelah sekian lama akhirnya Jodi mampu "mempikat" hati Bulan. kata yang diapit tanda petik seharusnya ?',
        optionA: "Memikat",
        optionB: "Pikat",
        optionC: "Memperikat",
        optionD: "Mengikat",
        correctOption: "optionA"
    },

    {
        question: "Jika tidak ada mobil,_____tidak masalah",
        optionA: "motorpun",
        optionB: "motor pun",
        optionC: "pun motor",
        optionD: "motor-pun",
        correctOption: "optionB"
    }
/*
    {
        question: "What is the capital of Germany ?",
        optionA: "Georgia",
        optionB: "Missouri",
        optionC: "Oklahoma",
        optionD: "Berlin",
        correctOption: "optionD"
    },

    {
        question: "How many sides does an hexagon have ?",
        optionA: "Six",
        optionB: "Sevene",
        optionC: "Four",
        optionD: "Five",
        correctOption: "optionA"
    },

    {
        question: "How many planets are currently in the solar system ?",
        optionA: "Eleven",
        optionB: "Seven",
        optionC: "Nine",
        optionD: "Eight",
        correctOption: "optionD"
    },

    {
        question: "Which Planet is the hottest ?",
        optionA: "Jupitar",
        optionB: "Mercury",
        optionC: "Earth",
        optionD: "Venus",
        correctOption: "optionB"
    },

    {
        question: "where is the smallest bone in human body located?",
        optionA: "Toes",
        optionB: "Ears",
        optionC: "Fingers",
        optionD: "Nose",
        correctOption: "optionB"
    },

    {
        question: "How many hearts does an Octopus have ?",
        optionA: "One",
        optionB: "Two",
        optionC: "Three",
        optionD: "Four",
        correctOption: "optionC"
    },

    {
        question: "How many teeth does an adult human have ?",
        optionA: "28",
        optionB: "30",
        optionC: "32",
        optionD: "36",
        correctOption: "optionC"
    }
*/
]


let shuffledQuestions = [] //empty array to hold shuffled selected questions

function handleQuestions() { 
    //function to shuffle and push 10 questions to shuffledQuestions array
    while (shuffledQuestions.length <= 9) {
        const random = questions[Math.floor(Math.random() * questions.length)]
        if (!shuffledQuestions.includes(random)) {
            shuffledQuestions.push(random)
        }
    }
}


let questionNumber = 1
let playerScore = 0  
let wrongAttempt = 0 
let indexNumber = 0

// function for displaying next question in the array to dom
function NextQuestion(index) {
    handleQuestions()
    const currentQuestion = shuffledQuestions[index]
    document.getElementById("question-number").innerHTML = questionNumber
    document.getElementById("player-score").innerHTML = playerScore
    document.getElementById("display-question").innerHTML = currentQuestion.question;
    document.getElementById("option-one-label").innerHTML = currentQuestion.optionA;
    document.getElementById("option-two-label").innerHTML = currentQuestion.optionB;
    document.getElementById("option-three-label").innerHTML = currentQuestion.optionC;
    document.getElementById("option-four-label").innerHTML = currentQuestion.optionD;

}


function checkForAnswer() {
    const currentQuestion = shuffledQuestions[indexNumber] //gets current Question 
    const currentQuestionAnswer = currentQuestion.correctOption //gets current Question's answer
    const options = document.getElementsByName("option"); //gets all elements in dom with name of 'option' (in this the radio inputs)
    let correctOption = null

    options.forEach((option) => {
        if (option.value === currentQuestionAnswer) {
            //get's correct's radio input with correct answer
            correctOption = option.labels[0].id
        }
    })
   
    //checking to make sure a radio input has been checked or an option being chosen
    if (options[0].checked === false && options[1].checked === false && options[2].checked === false && options[3].checked == false) {
        document.getElementById('option-modal').style.display = "flex"
    }

    //checking if checked radio button is same as answer
    options.forEach((option) => {
        if (option.checked === true && option.value === currentQuestionAnswer) {
            document.getElementById(correctOption).style.backgroundColor = "yellow"
            playerScore++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }

        else if (option.checked && option.value !== currentQuestionAnswer) {
            const wrongLabelId = option.labels[0].id
            document.getElementById(wrongLabelId).style.backgroundColor = "red"
            document.getElementById(correctOption).style.backgroundColor = "yellow"
            wrongAttempt++
            indexNumber++
            //set to delay question number till when next question loads
            setTimeout(() => {
                questionNumber++
            }, 1000)
        }
    })
}



//called when the next button is called
function handleNextQuestion() {
    checkForAnswer()
    unCheckRadioButtons()
    //delays next question displaying for a second
    setTimeout(() => {
        if (indexNumber <= 9) {
            NextQuestion(indexNumber)
        }
        else {
            handleEndGame()
        }
        resetOptionBackground()
    }, 1000);
}

//sets options background back to null after display the right/wrong colors
function resetOptionBackground() {
    const options = document.getElementsByName("option");
    options.forEach((option) => {
        document.getElementById(option.labels[0].id).style.backgroundColor = ""
    })
}

// unchecking all radio buttons for next question(can be done with map or foreach loop also)
function unCheckRadioButtons() {
    const options = document.getElementsByName("option");
    for (let i = 0; i < options.length; i++) {
        options[i].checked = false;
    }
}

// function for when all questions being answered
function handleEndGame() {
    let remark = null
    let remarkColor = null

    // condition check for player remark and remark color
    if (playerScore <= 3) {
        remark = "Yah.. Nilaimu Kurang, Belajar lagi ya...."
        remarkColor = "red"
    }
    else if (playerScore >= 4 && playerScore < 7) {
        remark = "CUKUP BAGUS, Tingkatkan Lagi!."
        remarkColor = "orange"
    }
    else if (playerScore >= 7) {
        remark = "LUAR BIASA, Tetap Belajar ya!."
        remarkColor = "green"
    }
    const playerGrade = (playerScore / 10) * 100

    //data to display to score board
    document.getElementById('remarks').innerHTML = remark
    document.getElementById('remarks').style.color = remarkColor
    document.getElementById('grade-percentage').innerHTML = playerGrade
    document.getElementById('wrong-answers').innerHTML = wrongAttempt
    document.getElementById('right-answers').innerHTML = playerScore
    document.getElementById('score-modal').style.display = "flex"

}

//closes score modal and resets game
function closeScoreModal() {
    questionNumber = 1
    playerScore = 0
    wrongAttempt = 0
    indexNumber = 0
    shuffledQuestions = []
    NextQuestion(indexNumber)
    document.getElementById('score-modal').style.display = "none"
}

//function to close warning modal
function closeOptionModal() {
    document.getElementById('option-modal').style.display = "none"
}
