let num;

do {
    num = parseInt(prompt("digita um número"));
    
    if (num % 2 == 0) {   
        console.log("O número é par")    
    } else {
        console.log("O número é impar")
    }
          

} while (num != 0 )

