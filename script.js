const input = document.getElementById("input-box");
const alph = "abcdefghijklmnopqrstuvwxyz";

const outputAverage = document.getElementById("output-av");
const outputSum = document.getElementById("output-sum");

const calcAv = ()=>{
  const userInput = input.value.toLowerCase();
  const userInputSplit = Array.from(userInput).filter(v => alph.includes(v));
  const ttlValue = userInputSplit.reduce((p,c)=> p + alph.indexOf(c), 0);
  const average = ttlValue/userInputSplit.length; 
  
  if (isNaN(average)) 
    outputAverage.innerText = `Average Letter Placement: ...`;
  else 
    outputAverage.innerText = `Average Letter Placement: ${Math.round(average*100)/100}/26.00`;
  
  outputSum.innerText = ("Placement Sum: " + ttlValue);
}