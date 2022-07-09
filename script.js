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

// Should work automatically with more theme buttons and theme styling
const themes = document.getElementsByClassName("theme-btn");
[].slice.call(themes).forEach(
  /** @param {HTMLElement} elem */
  (elem)=>{
    elem.onclick = ()=>{
      const theme = elem.getAttribute("set-theme");
      console.log(theme);
      if (theme == null) return;
      document.body.setAttribute("theme", theme);
    }
  }
);