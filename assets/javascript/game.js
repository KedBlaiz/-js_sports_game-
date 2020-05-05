//team one

let shootOne = document.querySelector('#teamone-shoot-button')
let shotsTakenOne = document.querySelector('#teamone-numshots')
let goalsOne = document.querySelector('#teamone-numgoals')

shootOne.addEventListener('click', function () {
    console.log('team one take a shot')
    
    
    let teamOneNum = parseInt(shotsTakenOne.innerHTML) + 1
    shotsTakenOne.innerHTML = teamOneNum
    
    let teamOneGoals = parseInt(goalsOne.innerHTML) 
    goalsOne.innerHTML = teamOneGoals

    let randNum = Math.floor((Math.random() * 100) )
    if (randNum > 40) {
    goalsOne.innerHTML = Number(goalsOne.innerHTML) + 1
    }

    
})

//team two


let shootTwo = document.querySelector('#teamtwo-shoot-button')
let shotsTakenTwo = document.querySelector('#teamtwo-numshots')
let goalsTwo = document.querySelector('#teamtwo-numgoals')

shootTwo.addEventListener('click', function () {
    console.log('team two take a shot')
    
    
    
    let teamTwoNum = parseInt(shotsTakenTwo.innerHTML) + 1
    shotsTakenTwo.innerHTML = teamTwoNum
    
    let teamTwoGoals = parseInt(goalsTwo.innerHTML) 
    goalsTwo.innerHTML = teamTwoGoals
    
    let randNum = Math.floor((Math.random() * 100) )
    if (randNum > 40) {
    goalsTwo.innerHTML = Number(goalsOne.innerHTML) + 1
    }

let resetButton = document.querySelector('#reset-button') 
let numOfReset = document.querySelector('#num-resets')


resetButton.addEventListener('click', function(){
console.log('0')
    let newCounterValue = Number(numOfReset.innerHTML) + 1
    numOfReset.innerHTML = newCounterValue
    if (numOfReset.innerHTML > 0)
    shotsTakenOne.innerHTML = 0
    goalsOne.innerHTML = 0
    shotsTakenTwo.innerHTML = 0
    goalsTwo.innerHTML = 0
    })


   

})    




    















