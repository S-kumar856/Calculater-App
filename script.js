
const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

let str = ''; 

buttons.forEach(button => {
  button.addEventListener("click", (e) => {
    const value = e.target.textContent.trim();
     const validCharacters = /^[0-9+\-*/.%=]$/;

    if (value === "=") {
      try {
        let result = eval(str); 
         
        if (Number.isInteger(result)) {
          str = result.toString();
        } else {
          str = result.toFixed(3);
        }display.value = str;
      } catch (error) {
        display.value = "Error"; 
      }
    }
    else if(value == "Reset"){
        str = '';
        display.value = '';

    }
    else if(value === "DEL"){
        str = str.slice(0,-1);
        display.value = str;
    }

    else if(validCharacters.test(value)){
        str += value ;
        display.value = str

    }
    });
  });













    // else if (value === "Reset") {
    //   str = '';
    //   display.value = '';
    // }
  
    // else if (value === "DEL") {
    //   str = str.slice(0, -1);
    //   display.value = str;
    // }
    
 
