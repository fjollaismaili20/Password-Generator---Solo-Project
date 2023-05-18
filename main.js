const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordLength = 12

const passwordoneEL = document.getElementById("passwordone-el")
const passwordtwoEL = document.getElementById("passwordtwo-el")

const slider = document.getElementById("slider")
let sliderNumber = document.getElementById("sliderNumber")

function generatePassword(){
 let password = ''
 for(i = 0; i < passwordLength; i++){
   randomIndex = Math.floor(Math.random() * characters.length)
   console.log(randomIndex)
   password += characters[randomIndex]

 }
 
 return password

}

 
function showPasswords(){
   passwordoneEL.innerText = generatePassword()
   passwordtwoEL.innerText = generatePassword()
}

slider.addEventListener("input", function () {
   
   sliderNumber.textContent = `${slider.value}`;
  
   passwordLength = slider.value;
 });
