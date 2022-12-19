//state
const state = {
    coffee: 0,
    perSec: 0,
    quanityOne: 0,
    priceOne: 12,
    quanityTwo: 0,
    priceTwo:62,
    quanityThree: 0,
    priceThree: 100,
    quanityFour: 0,
    priceFour: 625,
    quanityFive: 0,
    priceFive: 1000,
    quanitySix: 0,
    priceSix: 5000,
    quanitySeven: 0,
    priceSeven: 10000,
    quanityEight: 0,
    priceEight: 50000,
}





// dom selecters 
document.getElementById('first-item').style.visibility = "hidden"
document.getElementById('second-item').style.visibility = "hidden"
document.getElementById('third-item').style.visibility = "hidden"
document.getElementById('fourth-item').style.visibility = "hidden"
document.getElementById('fifth-item').style.visibility = "hidden"
document.getElementById('sixth-item').style.visibility = "hidden"
document.getElementById('seventh-item').style.visibility = "hidden"
document.getElementById('eigth-item').style.visibility = "hidden"
document.getElementById('coffeeButton')

//coffeeClick
const coffeeClick = () => {
    state.coffee += 1
    document.getElementById('countNumber').innerText = state.coffee
    coffeeListener()
}
// test
coffeeButton.addEventListener('click', coffeeClick)

const buyClick = () => {
    buyListener()
 }
 const buyClickTwo = () => {
     buyListenerTwo()
 }
 const buyClickThree = () =>{
     buyListenerThree()
 }
 const buyClickFour = () => {
     buyListenerFour()
 }
 const buyClickFive = () => {
     buyListenerFive()
 }
 const buyClickSix = () => {
     buyListenerSix()
 }
 const buyClickSeven = () => {
     buyListenerSeven()
 }
 const buyClickEight = () => {
     buyListenerEight()
 }

buyOne.addEventListener('click', buyClick)
buyTwo.addEventListener('click', buyClickTwo)
buyThree.addEventListener('click', buyClickThree)
buyFour.addEventListener('click', buyClickFour)
buyFive.addEventListener('click', buyClickFive)
buySix.addEventListener('click', buyClickSix)
buySeven.addEventListener('click', buyClickSeven)
buyEight.addEventListener('click', buyClickEight)

//coffeeCostVisibility
if( state.coffee >= 10 ) {
    document.getElementById('first-item').style.visibility = "visible"
}

const coffeeListener = () => {
    if( state.coffee >= 10 ) {
        document.getElementById('first-item').style.visibility = "visible"
    } if (state.coffee >= 20){ 
        document.getElementById('second-item').style.visibility = "visible"
    } if (state.coffee >= 50){
        document.getElementById('third-item').style.visibility = "visible"
    } if (state.coffee >= 250){
        document.getElementById('fourth-item').style.visibility = "visible"
    }if (state.coffee >= 500){
        document.getElementById('fifth-item').style.visibility = 'visible'
    }if (state.coffee >= 750){
        document.getElementById('sixth-item').style.visibility = 'visible'
    }if (state.coffee >= 1000){
        document.getElementById('seventh-item').style.visibility = 'visible'
    }if (state.coffee >= 1500){
        document.getElementById('eigth-item').style.visibility = 'visible'
    }
}
//Allows the coffee to count up when coffe per sec is added
const totalCoffee = () => {
    state.coffee += state.perSec
    document.getElementById('countNumber').innerText = state.coffee
}
setInterval(totalCoffee,1000)



//Each items function that has the buttons to change the values
let currentSec = document.getElementById('perSec').innerText = state.perSec
document.getElementById('perSec').innerText = state.perSec + ' :coffee/second'

const buyListener = () => {
    if( state.coffee >= (state.priceOne) && buyClick ) { 
            state.coffee -= state.priceOne
            state.quanityOne += 1
            state.priceOne += 2 + (3 * state.quanityOne)  
            state.perSec += 1       
                               
            document.getElementById('quanityOne').innerText = 'Quanity: ' + state.quanityOne
            document.getElementById('perSec').innerText = state.perSec + ' :coffee/second'
            document.getElementById('costOne').innerText = 'Cost: ' + state.priceOne + ' coffee'
    }
}
const buyListenerTwo = () => {
    if( state.coffee >= (state.priceTwo) && buyClickTwo ) { 
        state.coffee -= state.priceTwo
        state.quanityTwo += 1
        state.priceTwo += 2 + (3 * state.quanityTwo)
        state.perSec += 2      
                           
        document.getElementById('quanityTwo').innerText = 'Quanity: ' + state.quanityTwo
        document.getElementById('perSec').innerText = state.perSec + ' :coffee/second'
        document.getElementById('costTwo').innerText = 'Cost: ' + state.priceTwo + ' coffee'
}  
}
const buyListenerThree = () => {
if( state.coffee >= (state.priceThree) && buyClickThree ) { 
    state.coffee -= state.priceThree
    state.quanityThree += 1
    state.priceThree += 2 + (3 * state.quanityThree)
    state.perSec += 5   
                       
    document.getElementById('quanityThree').innerText = 'Quanity: ' + state.quanityThree
    document.getElementById('perSec').innerText = state.perSec + ' :coffee/second'
    document.getElementById('costThree').innerText = 'Cost: ' + state.priceThree + ' coffee'
} 
}
const buyListenerFour = () => {
if( state.coffee >= (state.priceFour) && buyClickFour ) { 
    state.coffee -= state.priceFour
    state.quanityFour += 1
    state.priceFour += 6 + (3 * state.quanityFour)
    state.perSec += 10      
                       
    document.getElementById('quanityFour').innerText = 'Quanity: ' + state.quanityFour
    document.getElementById('perSec').innerText = state.perSec + ' :coffee/second'
    document.getElementById('costFour').innerText = 'Cost: ' + state.priceFour + ' coffee'
}
}
const buyListenerFive = () => {
if( state.coffee >= (state.priceFive) && buyClickFive ) { 
    state.coffee -= state.priceFive
    state.quanityFive += 1
    state.priceFive += 8 + (3 * state.quanityFive)
    state.perSec += 20      
                       
    document.getElementById('quanityFive').innerText = 'Quanity: ' + state.quanityFive
    document.getElementById('perSec').innerText = state.perSec + ' :coffee/second'
    document.getElementById('costFive').innerText = 'Cost: ' + state.priceFive + ' coffee'
}
}
const buyListenerSix = () => {
if( state.coffee >= (state.priceSix) && buyClickSix ) { 
    state.coffee -= state.priceSix
    state.quanitySix += 1
    state.priceSix += 10 + (3 * state.quanitySix)
    state.perSec += 50      
                       
    document.getElementById('quanitySix').innerText = 'Quanity: ' + state.quanitySix
    document.getElementById('perSec').innerText = state.perSec + ' :coffee/second'
    document.getElementById('costSix').innerText = 'Cost: ' + state.priceSix + ' coffee'
}
}
const buyListenerSeven = () => {
if( state.coffee >= (state.priceSeven) && buyClickSeven ) { 
    state.coffee -= state.priceSeven
    state.quanitySeven += 1
    state.priceSeven += 15 + (3 * state.quanitySeven)
    state.perSec += 100      
                       
    document.getElementById('quanitySeven').innerText = 'Quanity: ' + state.quanitySeven
    document.getElementById('perSec').innerText = state.perSec + ' :coffee/second'
    document.getElementById('costSeven').innerText = 'Cost: ' + state.priceSeven + ' coffee'
}
}
const buyListenerEight = () => {
if( state.coffee >= (state.priceEight) && buyClickEight ) { 
    state.coffee -= state.priceEight
    state.quanityEight += 1
    state.priceEight += 20 + (3 * state.quanityEight)
    state.perSec += 200       
                       
    document.getElementById('quanityEight').innerText = 'Quanity: ' + state.quanityEight
    document.getElementById('perSec').innerText = state.perSec + ' :coffee/second'
    document.getElementById('costEight').innerText = 'Cost: ' + state.priceEight + ' coffee'
}
}