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
const restart = document.querySelector('#restart')
const shuffle = document.querySelector('#shuffle')
const BACKIMG_URL = 'https://github.com/dae-hyun-kim/recruit-and-conquer/blob/master/images/card-back.png?raw=true'

const buttonV2 = [btn1, btn2, btn3, btn4, btn5, btn6]
const shuffledButtonV2 = [...buttonV2].sort(() => Math.random() - 0.5)




const cardObj1 = {
    backImg: BACKIMG_URL,
    frontImg: './Images/A.svg', 
    // frontImg: 'https://github.com/dae-hyun-kim/recruit-and-conquer/blob/master/images/archer-intro.gif?raw=true',
    element: shuffledButtonV2[0],
    isFrontImg: 0,
    isBackImg: 1
};
const cardObj2 = {
    backImg: BACKIMG_URL,
    frontImg: './Images/A.svg',
    element: shuffledButtonV2[1],
    isFrontImg: 0,
    isBackImg: 1
};
const cardObj3 = {
    backImg: BACKIMG_URL,
    frontImg: './Images/B.svg',
    element: shuffledButtonV2[2],
    isFrontImg: 0,
    isBackImg: 1
};
const cardObj4 = {
    backImg: BACKIMG_URL,
    frontImg: './Images/B.svg',
    element: shuffledButtonV2[3],
    isFrontImg: 0,
    isBackImg: 1
};
const cardObj5 = {
    backImg: BACKIMG_URL,
    frontImg: './Images/C.svg',
    element: shuffledButtonV2[4],
    isFrontImg: 0,
    isBackImg: 1
};
const cardObj6 = {
    backImg: BACKIMG_URL,
    frontImg: './Images/C.svg',
    element: shuffledButtonV2[5],
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

}

shuffle.addEventListener('click', () => {
    window.location.reload()
})

//does this need to be here? was it used?
const backFaceButtons = [cardObj1, cardObj2, cardObj3, cardObj4, cardObj5, cardObj6];

// ***********@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*********
// function called shuffle

// in taht function create an array of all the available indices const arrOfIndices = [0, 1, 2, 3, 4, 5], and an empty arr shufffledIndicesArr []

// for (let i = 0; arrOfIndices.length === 0; i)
    // randomly pick an index from the array; Math.round(Math.random() * (arrOfIndices.length - 1))   3
    // then remove that randomly index from arrOfIndices, add it to shufffledIndicesArr [0, 1, 3, 4, 5], [2]

//starting with 0, going through array of backFaceButtons ^ 

//double check where this is used
const userClickAgain = true;

//**********@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@*************


for(let i = 0; i < backFaceButtons.length; i++) {
    //backface buttons (btn#) image source = backImg outlined in object above
    backFaceButtons[i].element.querySelector('.back-face').src = backFaceButtons[i].backImg;
    //we're adding an eventListener to btn#. when it's clicked
    backFaceButtons[i].element.addEventListener('click', () => {
    //the btn# is disabled if it has already been clicked (cant click same button twice and have it register anything)
    backFaceButtons[i].element.disabled = true;
    //then, we're changing the backbutton image to the front image
    backFaceButtons[i].element.querySelector('.back-face').src = backFaceButtons[i].frontImg;
    
    //the number of faceupcards = number of faceupcards +1; keeping track of how many cards are faceup
    gameState.numberOfFaceUpCards = gameState.numberOfFaceUpCards + 1;
        

        // -------------*****************************----------------------//
    
       
        if (gameState.numberOfFaceUpCards === 1) {
            gameState.firstSelected = backFaceButtons[i];
        
            // console.log('first selected is ', backFaceButtons[i].frontImg);
        } else if (gameState.numberOfFaceUpCards === 2) {
            gameState.lastSelected = backFaceButtons[i];
        
            // console.log('second selected is ', backFaceButtons[i].frontImg)
        }
      
      
        if (gameState.numberOfFaceUpCards === 2 && gameState.firstSelected.frontImg === gameState.lastSelected.frontImg) {
            setTimeout(()=>{
                /** @type {typeof cardObj6 | undefined } */
                gameState.firstSelected.element.style.opacity = 0; 
                gameState.lastSelected.element.style.opacity = 0;  
                } , 1000);
                gameState.numberOfFaceUpCards = 0
            
    }
            
            // /** @type {typeof cardObj6 | undefined } */
            // gameState.lastSelected = backFaceButtons[i].backImg;
            // backFaceButtons[i].element.disabled = false;
        
//@@@@@@@@@@@@@@@@ if two cards are turned over and front images do not match, change the image back to back image url @@@@@@@@@@@@//
        if (gameState.numberOfFaceUpCards === 2 && gameState.firstSelected.frontImg !== gameState.lastSelected.frontImg) {
            setTimeout(()=>{
             /** @type {typeof cardObj6 | undefined } */
            gameState.firstSelected.element.querySelector('.back-face').src = gameState.firstSelected.backImg;
            gameState.lastSelected.element.querySelector('.back-face').src = gameState.lastSelected.backImg;
            // gameState.lastSelected.frontImg = gameState.lastSelected.backImg
            gameState.firstSelected.element.disabled = false;
            gameState.lastSelected.element.disabled = false;
            }, 1500);
            gameState.numberOfFaceUpCards = 0;
       
    }

    restart.addEventListener('click', () => {
        backFaceButtons[i].element.style.opacity = 1;
        backFaceButtons[i].element.querySelector('.back-face').src = backFaceButtons[i].backImg;
        backFaceButtons[i].element.disabled = false;
        let counter = 0
    })

       //@@@@@@@@@@@ //check if all card opacity === 0 @@@@@@@@@@//
       setTimeout(()=>{
       
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
    }, 2000);
    })}

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


        





