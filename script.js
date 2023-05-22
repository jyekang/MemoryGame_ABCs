/** @type {HTMLButtonElement} */
const btn1 = document.querySelector('#btn1')
/** @type {HTMLButtonElement} */
const btn2 = document.querySelector('#btn2')
/** @type {HTMLButtonElement} */
const btn3 = document.querySelector('#btn3')
/** @type {HTMLButtonElement} */
const btn4 = document.querySelector('#btn4')
/** @type {HTMLButtonElement} */
const btn5 = document.querySelector('#btn5')
/** @type {HTMLButtonElement} */
const btn6 = document.querySelector('#btn6')


// the three grand rules of coding according to javis friend
// 1. make it work




// 2. rule number make pretty
// 3. make run fast

const BACKIMG_URL = 'https://github.com/dae-hyun-kim/recruit-and-conquer/blob/master/images/card-back.png?raw=true'



const cardObj1 = {
    backImg: BACKIMG_URL,
    frontImg: 'https://github.com/dae-hyun-kim/recruit-and-conquer/blob/master/images/archer-intro.gif?raw=true',
    element: btn1,
    isFrontImg: 0,
    isBackImg: 1
};
const cardObj2 = {
    backImg: BACKIMG_URL,
    frontImg: 'https://github.com/dae-hyun-kim/recruit-and-conquer/blob/master/images/archer-intro.gif?raw=true',
    element: btn2,
    isFrontImg: 0,
    isBackImg: 1
};
const cardObj3 = {
    backImg: BACKIMG_URL,
    frontImg: 'https://github.com/dae-hyun-kim/recruit-and-conquer/blob/master/images/ninja-slashing.gif?raw=true',
    element: btn3,
    isFrontImg: 0,
    isBackImg: 1
};
const cardObj4 = {
    backImg: BACKIMG_URL,
    frontImg: 'https://github.com/dae-hyun-kim/recruit-and-conquer/blob/master/images/ninja-slashing.gif?raw=true',
    element: btn4,
    isFrontImg: 0,
    isBackImg: 1
};
const cardObj5 = {
    backImg: BACKIMG_URL,
    frontImg: 'https://github.com/dae-hyun-kim/recruit-and-conquer/blob/master/images/pirate-slashing.gif?raw=true',
    element: btn5,
    isFrontImg: 0,
    isBackImg: 1
};
const cardObj6 = {
    backImg: BACKIMG_URL,
    frontImg: 'https://github.com/dae-hyun-kim/recruit-and-conquer/blob/master/images/pirate-slashing.gif?raw=true',
    element: btn6,
    isFrontImg: 0,
    isBackImg: 1
};

const chars = 'somestring';
const gameState = {
    numberOfFaceUpCards: 0,
    /** @type {typeof cardObj6 | undefined } */
    lastSelected: undefined,
    /** @type {typeof cardObj6 | undefined } */
    firstSelected: undefined,

    // selected: []
}


// const backButtons = document.querySelectorAll('.backbutton');
// const backFaceButtons = [btn1, btn2, btn3, btn4, btn5, btn6]
const backFaceButtons = [cardObj1, cardObj2, cardObj3, cardObj4, cardObj5, cardObj6];




for(let i = 0; i < backFaceButtons.length; i++) {
    //we starty off with all the buttons w/ backface images
    backFaceButtons[i].element.querySelector('.back-face').src = backFaceButtons[i].backImg;
    //we're adding an eventListener to btn#. when it's clicked
    backFaceButtons[i].element.addEventListener('click', () => {
        
        // if (backFaceButtons[i].element.disabled) {
        //     return;
        // } else {
            //the btn# is disabled
            backFaceButtons[i].element.disabled = true;
        // }

        
        //then, we're changing the backbutton image to the front image
        backFaceButtons[i].element.querySelector('.back-face').src = backFaceButtons[i].frontImg;
    
        //the number of faceupcards = number of faceupcards +1
        gameState.numberOfFaceUpCards = gameState.numberOfFaceUpCards + 1;
        

        // -------------*****************************----------------------//
        
        //if the number of faceupcards reaches 2 and the front images for first selected and last selected do not match, 
        //then change the image source to the backface and make sure we can click it again (click disabled is false)
        //or can we say if first and second do not match (not including frong image)

        //if the number of face cards === 2 and the first and last selected match, remove/hide cards?

        //when all 6 cards are hidden, prompt restart button? alert restart button?

        //.remove .add 

        //shuffling cards

        //when 
        
        //shuffle object ; and then render
        //if the numberof faceup cards is one, then 
        if (gameState.numberOfFaceUpCards === 1) {
            gameState.firstSelected = backFaceButtons[i];
        
            // console.log('first selected is ', backFaceButtons[i].frontImg);
        } else if (gameState.numberOfFaceUpCards === 2) {
            gameState.lastSelected = backFaceButtons[i];
        
            // console.log('second selected is ', backFaceButtons[i].frontImg)
        }

        if (gameState.numberOfFaceUpCards === 2 && gameState.firstSelected.frontImg === gameState.lastSelected.frontImg) {
            /** @type {typeof cardObj6 | undefined } */
            gameState.firstSelected.element.style.opacity = 0; 
            gameState.lastSelected.element.style.opacity = 0;  
            gameState.numberOfFaceUpCards = 0
            
            // /** @type {typeof cardObj6 | undefined } */
            // gameState.lastSelected = backFaceButtons[i].backImg;
            // backFaceButtons[i].element.disabled = false;
        }

       //@@@@@@@@@@@ //check if all card opacity === 0 @@@@@@@@@@//
       let counter = 0

        for(let i = 0; i < backFaceButtons.length; i++) {
           if (backFaceButtons[i].element.style.opacity === "0") {
               counter = counter + 1
           }
        }

        //we have to check that the number in counter is the same number of the cards we have (.length)

        if(counter == backFaceButtons.length) {
            alert("You Win!")
        }

       //@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
        // if (gameState.numberOfFaceUpCards === 2 && gameState.firstSelected !== gameState.lastSelected) {
        //     /** @type {typeof cardObj6 | undefined } */
        //     gameState.firstSelected = backFaceButtons[i].backImg;
        //     backFaceButtons[i].element.disabled = false;
            
        //     /** @type {typeof cardObj6 | undefined } */
        //     gameState.lastSelected = backFaceButtons[i].backImg;
        //     backFaceButtons[i].element.disabled = false;
        // }
        //

        
//@@@@@@@@@ this is where the commented out note section was @@@@@@@@@//

        
})};
    


//@@@@@@@@@@@@@@ NOTE FOR ABOVE SECTION @@@@@@@@@@@@@@@@@@@@@@@@@@@//
// //if the numberof faceup cards is one, then 
// if (gameState.numberOfFaceUpCards === 1) {
//     gameState.firstSelected = backFaceButtons[i].element;

//     // console.log('first selected is ', backFaceButtons[i].frontImg);
// } else if (gameState.numberOfFaceUpCards === 2) {
//     gameState.lastSelected = backFaceButtons[i]

//     // console.log('second selected is ', backFaceButtons[i].frontImg)
// }


// if(gameState.numberOfFaceUpCards === 2 && gameState.firstSelected.frontImg === gameState.lastSelected.frontImg ){
//     // gameState.firstSelected.element.removeEventListener('click')
    
//     gameState.firstSelected.element.disabled = true;
//     gameState.lastSelected.element.disabled = true;
//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@//  
    

//do we need to define front image? 
//what is making the first card chagne?