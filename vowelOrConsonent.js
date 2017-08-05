function letter() {
var vowels = ["a","e","i","o","u"];
        char = prompt("Your Letter");

         if (vowels.indexOf(char.toLowerCase()) >= 0)         
             alert("Your letter is a vowel");        
        else
            alert("Your letter is a consonant");
}


       console.log("Entered char is" +letter());