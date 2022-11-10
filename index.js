let msg1= document.getElementById("message1");
console.log(msg1);

let number = Math.floor(Math.random()* 100)+1;
//console.log("random number (1-100): " + number);

let  attempts = 0;
let txt = "";


function guess(){
    if(attempts<5){
        //console.log("Number of attemps :" + attempts);
        let userInput = Number(document.getElementById("userInput").value);
        //console.log(userInput);

        // if(attempts<5){
        //     msg1.textContent = 
        // }

        if (userInput == number) {
            msg1.textContent = "You Have won!!!" 
            
        } 
        else if (userInput < number) {
            txt += attempts+1 + ". " + userInput + " (too low) <br>";
            msg1.textContent = "You  need to guess higher then " + userInput + " try again.";

            
        } 
        else if (userInput > number) {
            txt += attempts+1 + ". " + userInput + " (too high) <br>";
            msg1.textContent = "You need to guess lower then "  + userInput + " try again.";
        } 
        if(attempts>0){    
            document.getElementById("hideGuesses").innerHTML = "Your previous guesses";
            console.log(txt);
            const splitedWords = txt.split('<br>');
            console.log(splitedWords);
            let result  = splitedWords.slice(0,-2);
            console.log(result);
            document.getElementById("previousGuesses").innerHTML = result.join("<br>");
        }

         attempts++;
    }
    else{
        msg1.textContent = "You have reached maximum attempts!!"
    }

}

