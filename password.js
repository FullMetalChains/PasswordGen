const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

generateEl.addEventListener('click', () => {
    const length = +lengthEl.value;
    const hasLower = lowercaseEl.checked;
    const hasUpper = uppercaseEl.checked;
    const hasNumber = numbersEl.checked;
    const hasSymbol = symbolsEl.checked;
    let password = generatePassword(hasLower, hasUpper, hasNumber, hasSymbol, length);
    resultEl.innerHTML = password;    

})


const randomFunc = {
    lower : genlower,
    upper : genupper,
    number : gennum,
    symbol : gensym
};



function genlower (){
    return String.fromCharCode(Math.floor(Math.random()*26) + 97);
    // console.log(String.fromCharCode(Math.floor(Math.random()*26) + 97));
}

function genupper (){
    return String.fromCharCode(Math.floor(Math.random()*26) + 97);
    // console.log(String.fromCharCode(Math.floor(Math.random()*26) + 65));
}

function gennum (){
    return String.fromCharCode(Math.floor(Math.random()*9.9) + 48);
    // console.log(String.fromCharCode(Math.floor(Math.random()*9.9) + 48));
}

function gensym() {
	const symbols = '!@#$%^&*(){}[]=<>/,.'
	return symbols[Math.floor(Math.random() * symbols.length)];
}


function generatePassword (lower, upper, number, symbol, length){
    let pw = "";
    //Filter checked and unchecked
    const typesCount = lower + upper + number + symbol
    const typesArr =[{lower}, {upper}, {number}, {symbol}].filter(
        (item) => {
            return Object.values(item)[0]
        }
    
    )
    for(let i =0; i < typesCount; i++)
    {
        let hold = Object.values(typesArr)[i]
        console.log(Object.keys(hold)[0])
    }
    if(typesCount === 0)
    {
        return pw;
    }
    for(let i =0; i< length; i++)
    {
        let rand = Math.floor(Math.random()*typesCount);
        let hold = Object.values(typesArr)[rand]
        pw += randomFunc[Object.keys(hold)[0]]()
        // console.log(rand);
        // pw +=
    }
    return pw;

}