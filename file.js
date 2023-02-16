alert("Help!");
console.log("Help me!");
let myScore = 0
let cScore= 0
    function cTurn() {
        const randNum=Math.floor(Math.random()*3+1)
        switch(randNum) {
            case 1:
                computer='rock'
                
                break;
            case 2:
                computer = 'paper'
                
                break;
            case 3:
                computer = 'scissors'
                
                break;
            }
        }
    function checkWinner() {
        let player = prompt('pick')
        
        if (player==computer) {
            return "it's a drawe"
        } else if (computer=='rock'){
            return (player=='paper') ? `you win(paper beat rock), the score is ${myScore+=1}:${cScore}` : `you lose(cpu picked rock) the score is ${myScore}:${cScore+=1}`
        }  else if (computer=='paper'){
            return (player=='scissors') ? `you win(scissors beat paper), the score is ${myScore+=1}:${cScore}` : `you lose(cpu picked paper)the score is ${myScore}:${cScore+=1}`
        } else if (computer=='scissors'){
            return (player=='rock') ? `you win(rock beats scissors), the score is ${myScore+=1}:${cScore}` : `you lose(cpu picked scissors) the score is ${myScore}:${cScore+=1}`
        }
    }

       
            
