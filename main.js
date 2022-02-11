
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

//functions
const oneDieRoll = () => Math.floor(Math.random() * 6) + 1;
//console.log(roll());


const sidesHtmlCode = (num) => sides[num];
    //num = sides from database, returns the html value of a num.
//console.log(sidesHtmlCode(2));


const addDieToText = (moreHtmlText, htmlText = "") =>  {

    return htmlText += moreHtmlText;
}//changeInnerHtml(areaHtml, sidesHtmlCode(oneDieRoll()));
    //return areaHtml + sidesHtmlCode(oneDieRoll());
//console.log(addDieToText(sides[4]));

//loop on how many dice-side-text need the html
const amountHandler = () => {
    const amount = document.querySelector("#amount").value;
    let allDiceText;

    for (let i = 1; i <= amount; i++){
        if (i === 1){
            allDiceText = addDieToText(sidesHtmlCode(oneDieRoll()));
        }else{
            allDiceText = addDieToText(sidesHtmlCode(oneDieRoll()), allDiceText);
        };
    }
    return allDiceText;
}

//const allDiceText = amountHandler();
//console.log(allDiceText);


const changeInnerHtml = (elementId, newContent) => {
    const element = document.querySelector(`#${elementId}`);
    element.innerHTML = newContent;
    return element.innerHTML;
}

const roll = () => {
    changeInnerHtml("rollingArea", amountHandler());
    const amount = document.querySelector("#amount").value = 0;
}





