'user strict'

let randomNumber = Math.trunc(Math.random()*20) +1;
let score = 20;

const displayMessage = function (class_nam, message){
            console.log(document.querySelector('.'+ class_nam).textContent = message)
}

displayMessage('random_number', 'Random Number')

document.querySelector('.check').addEventListener('click', function(){
            const guess = Number(document.querySelector('.number').value);
            
            if(!guess){
                        displayMessage('display','Enter a valid number!!')
            }

            else if(guess === randomNumber){
                        displayMessage('display',"You won!!")

                        displayMessage('label_highscore_value',score)
            }

            else if (guess !== randomNumber){
                        if (score > 1){
                                    displayMessage('display',guess > randomNumber ? 'Too high!!': 'Too low!!')

                                    score--;
                                    displayMessage('label_score_value',score);
                        }
                        else{
                                    displayMessage('label_score_value','0')
                                    displayMessage('display','You lost!!')
                        }
                        
            }
})

document.querySelector('.play_again').addEventListener('click', function(){
            score = 20;
            randomNumber = Math.trunc(Math.random()*20) +1;

            displayMessage('random_number', 'Random Number')
            displayMessage('label_score_value',score)
            document.querySelector('.number').value = '';
            displayMessage('display', 'Start guessing!!')
            
})

