const input = document.getElementById("input-box");
const alph = ("abcdefghijklmnopqrstuvwxyz");

const calcAv = () => {
  let ttlValue = 0;
  let average = 0;
  let usrIn = input.value.toLowerCase();
  let goodStr = usrIn;

  for (let i = 0; i < usrIn.length; i++) {
    goodStr = usrIn.split("").filter((v, i, a)=> alph.includes(v)).join(""); //add char to new array if also found in 'alph'
    console.log(alph.includes(usrIn.charAt(i)) + " " + goodStr);
    ttlValue += alph.indexOf(usrIn.charAt(i)) + 1;
  }

  average = ttlValue/goodStr.length; 
  document.getElementById("output-av").innerText = ("Average Letter Placement: " + average.toFixed(2) + "/26.00");
  document.getElementById("output-sum").innerText = ("Placement Sum: " + ttlValue);
}