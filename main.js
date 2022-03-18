
//hard coded solution

//DataBase:
const one = 
`\n\n<div class="die"><div class="dot topLeft  invisible"></div>
\t<div class="dot topCenter invisible"></div>
\t<div class="dot topright  invisible"></div>
\t<div class="dot centerrLeft  invisible"></div>
\t<div class="dot centerCenter"></div>
\t<div class="dot centerright  invisible"></div>
\t<div class="dot bottomLeft  invisible"></div>               
\t<div class="dot bottomCenter invisible"></div>              
\t<div class="dot bottomright  invisible"></div>\n</div>`;

const two = 
`\n\n<div class="die"><div class="dot topLeft"></div>
\t<div class="dot topCenter invisible"></div>
\t<div class="dot topright  invisible"></div>
\t<div class="dot centerrLeft  invisible"></div>
\t<div class="dot centerCenter invisible"></div>
\t<div class="dot centerright  invisible"></div>
\t<div class="dot bottomLeft  invisible"></div>               
\t<div class="dot bottomCenter invisible"></div>              
\t<div class="dot bottomright"></div>\n</div>`;

const three = 
`\n\n<div class="die"><div class="dot topLeft"></div>
\t<div class="dot topCenter invisible"></div>
\t<div class="dot topright  invisible"></div>
\t<div class="dot centerrLeft  invisible"></div>
\t<div class="dot centerCenter"></div>
\t<div class="dot centerright  invisible"></div>
\t<div class="dot bottomLeft  invisible"></div>               
\t<div class="dot bottomCenter invisible"></div>              
\t<div class="dot bottomright"></div>\n</div>`;

const four = 
`\n\n<div class="die"><div class="dot topLeft"></div>
\t<div class="dot topCenter invisible"></div>
\t<div class="dot topright"></div>
\t<div class="dot centerrLeft  invisible"></div>
\t<div class="dot centerCenter invisible"></div>
\t<div class="dot centerright  invisible"></div>
\t<div class="dot bottomLeft"></div>               
\t<div class="dot bottomCenter invisible"></div>              
\t<div class="dot bottomright"></div>\n</div>`;

const five = 
`\n\n<div class="die"><div class="dot topLeft"></div>
\t<div class="dot topCenter invisible"></div>
\t<div class="dot topright"></div>
\t<div class="dot centerrLeft  invisible"></div>
\t<div class="dot centerCenter"></div>
\t<div class="dot centerright  invisible"></div>
\t<div class="dot bottomLeft"></div>               
\t<div class="dot bottomCenter invisible"></div>              
\t<div class="dot bottomright"></div>\n</div>`;

const six = 
`\n\n<div class="die">\n\t<div class="dot topLeft"></div>
\t<div class="dot topCenter invisible"></div>
\t<div class="dot topright"></div>
\t<div class="dot centerrLeft"></div>
\t<div class="dot centerCenter invisible"></div>
\t<div class="dot centerright"></div>
\t<div class="dot bottomLeft"></div>               
\t<div class="dot bottomCenter invisible"></div>              
\t<div class="dot bottomright"></div>\n</div>`;


const sides = {
    1:one,
    2:two,
    3:three,
    4:four,
    5:five,
    6:six,
}

const sidesStr = {
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
}

class rollEvent {
    constructor(amount){
        this.initialRolls = amount,
        this.one = 0,
        this.two = 0,
        this.three = 0,
        this.four = 0,
        this.five = 0,
        this.six = 0
    }
}

const newRoll = new rollEvent();

let amount = 1;
const plus = document.querySelector(".arrow-up");
const minus = document.querySelector(".arrow-down");
const displayAmount = document.querySelector("#amount");

const result1 = document.querySelector("#result1");
const result2 = document.querySelector("#result2");
const result3 = document.querySelector("#result3");
const result4 = document.querySelector("#result4");
const result5 = document.querySelector("#result5");
const result6 = document.querySelector("#result6");

const add = () => {
    amount++;   
    displayAmount.textContent = amount;
}

const subs = () => {
    if (amount > 1) {
        amount--;
        displayAmount.textContent = amount;
    }

}

//***  FUNCTIONS ***

//select random number from 1 to 6
const oneDieRoll = () => Math.floor(Math.random() * 6) + 1;

//select the correspondent die-face from DataBase
const sidesHtmlCode = (num) =>  sides[num];

//add the html str literal of the selected die-face to the final result 
const addDieToText = (moreHtmlText, htmlText = "") =>  {
    return htmlText += moreHtmlText;
}
const amountHandler = () => {

    newRoll.one = 0;
    newRoll.two = 0;
    newRoll.three = 0;
    newRoll.four = 0;
    newRoll.five = 0;
    newRoll.six = 0;

    let allDiceText = ""; //all the str literal goes here

    for (let i = 1; i <= amount; i++){

        const oneDie = oneDieRoll();
        newRoll[sidesStr[oneDie]]++;  
        //console.log(oneDie, newRoll[sidesStr[oneDie]]);
        allDiceText = addDieToText(sidesHtmlCode(oneDie), allDiceText);

    }
    console.log(newRoll.one, newRoll.two, newRoll.three, newRoll.four, newRoll.five, newRoll.six)

    result1.textContent = `x${newRoll.one}`;
    result2.textContent = `x${newRoll.two}`;
    result3.textContent = `x${newRoll.three}`;
    result4.textContent = `x${newRoll.four}`;
    result5.textContent = `x${newRoll.five}`;
    result6.textContent = `x${newRoll.six}`;

    return allDiceText;
}

const changeInnerHtml = (elementId, newContent) => {
    const element = document.querySelector(`#${elementId}`);
    element.innerHTML = newContent;
    return element.innerHTML;
}

const roll = () => {
    changeInnerHtml("rollingArea", amountHandler());
    const amount = document.querySelector("#amount").value = 0;
}

plus.addEventListener("click", add);
minus.addEventListener("click", subs);


