let userName = window.prompt('Please enter your name:')
let userScore = 0
let confirm = true

while(confirm === true) {
    gameLoop()
    confirm = window.confirm(userName + ', your final score is: ' + userScore + '. Would you like to play again?' )
    userScore = 0
    if(confirm === false) {
        window.alert('Thanks for playing!')
    }
}

function gameLoop() {
    for(let i = 0; i < questions.length; i++){
        let question = questions[i]
       let userAnswer = window.prompt(question.text)
       if(userAnswer == question.correctAnswer) {
            console.log('correct answer')
            userScore = userScore + 10
       }
    }
    
}