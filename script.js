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
const BACKIMG_URL = './Images/Sun.svg'

const buttonV2 = [btn1, btn2, btn3, btn4, btn5, btn6]
const shuffledButtonV2 = [...buttonV2].sort(() => Math.random() - 0.5)

const cardObj1 = {
    backImg: BACKIMG_URL,
    frontImg: './Images/A.svg', 
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
};

shuffle.addEventListener('click', () => {
    window.location.reload()
})


const backFaceButtons = [cardObj1, cardObj2, cardObj3, cardObj4, cardObj5, cardObj6];


for(let i = 0; i < backFaceButtons.length; i++) {
 
    backFaceButtons[i].element.querySelector('.back-face').src = backFaceButtons[i].backImg;
  
    backFaceButtons[i].element.addEventListener('click', () => {
        backFaceButtons[i].element.disabled = true;
        backFaceButtons[i].element.querySelector('.back-face').src = backFaceButtons[i].frontImg;
        gameState.numberOfFaceUpCards = gameState.numberOfFaceUpCards + 1;
        

        if (gameState.numberOfFaceUpCards === 1) {
            gameState.firstSelected = backFaceButtons[i];
        
        } else if (gameState.numberOfFaceUpCards === 2) {
            gameState.lastSelected = backFaceButtons[i];
            backFaceButtons[0].element.disabled = true;
            backFaceButtons[1].element.disabled = true;
            backFaceButtons[2].element.disabled = true;
            backFaceButtons[3].element.disabled = true;
            backFaceButtons[4].element.disabled = true;
            backFaceButtons[5].element.disabled = true;
        }
        
        setTimeout(()=> {
            backFaceButtons[i].element.disabled = true;  
            if (gameState.numberOfFaceUpCards === 2 && gameState.firstSelected.frontImg === gameState.lastSelected.frontImg) {
            
                    /** @type {typeof cardObj6 | undefined } */
                    gameState.firstSelected.element.style.opacity = 0; 
                    gameState.lastSelected.element.style.opacity = 0;  
                   
                    gameState.numberOfFaceUpCards = 0
                    backFaceButtons[0].element.disabled = false;
                    backFaceButtons[1].element.disabled = false;
                    backFaceButtons[2].element.disabled = false;
                    backFaceButtons[3].element.disabled = false;
                    backFaceButtons[4].element.disabled = false;
                    backFaceButtons[5].element.disabled = false;
                    gameState.firstSelected.element.disabled = true;
                    gameState.lastSelected.element.disabled = true;
        }} , 1000);

        if (gameState.numberOfFaceUpCards === 2 && gameState.firstSelected.frontImg !== gameState.lastSelected.frontImg) {
            
            setTimeout(()=>{
             /** @type {typeof cardObj6 | undefined } */
            gameState.firstSelected.element.querySelector('.back-face').src = gameState.firstSelected.backImg;
            gameState.lastSelected.element.querySelector('.back-face').src = gameState.lastSelected.backImg;
            gameState.firstSelected.element.disabled = false;
            gameState.lastSelected.element.disabled = false;
            backFaceButtons[0].element.disabled = false;
            backFaceButtons[1].element.disabled = false;
            backFaceButtons[2].element.disabled = false;
            backFaceButtons[3].element.disabled = false;
            backFaceButtons[4].element.disabled = false;
            backFaceButtons[5].element.disabled = false;
            }, 1000);
            gameState.numberOfFaceUpCards = 0;
       
    }

    restart.addEventListener('click', () => {
        backFaceButtons[i].element.style.opacity = 1;
        backFaceButtons[i].element.querySelector('.back-face').src = backFaceButtons[i].backImg;
        backFaceButtons[i].element.disabled = false;
        let counter = 0
    })

       setTimeout(()=>{
       
       let counter = 0

        for(let i = 0; i < backFaceButtons.length; i++) {
           if (backFaceButtons[i].element.style.opacity === "0") {
               counter = counter + 1
           }
        }

        if(counter == backFaceButtons.length) {
            alert("You Win!")
        }
    }, 2000);
    })}




