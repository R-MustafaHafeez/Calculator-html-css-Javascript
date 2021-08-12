


let screen = document.getElementById('screen');
function onlyNumberKey(evt) {
          
    
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if ((ASCIICode >= 97 && ASCIICode <=112) &&(ASCIICode >=65 && ASCIICode <= 90))
    console.log("error ");
        return false;
}
buttons = document.querySelectorAll('button');
let screenValue='';
for (item of buttons) {
    item.addEventListener('click', (e) => {
        buttonText = e.target.innerText;
        console.log('Button text is ', buttonText)

         if (buttonText=='X')
         {
             buttonText='*';
             screenValue += buttonText;
             Screen.value=screenValue;

         }
         else if (buttonText=='=' )
         {
             screen.value=eval(screenValue);
         }
         else if (buttonText=='C' )
         {  
             screenValue='';
             screen.value=screenValue;
         }
         else{
             screenValue+=buttonText;
             screen.value=screenValue; 

         }

    })
}
