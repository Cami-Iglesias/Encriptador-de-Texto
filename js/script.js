const buttonToEncrypt = document.getElementById("encriptar");
const buttonToDecrypt = document.getElementById("desencriptar");
const buttonCopy = document.querySelector(".boton-copiar");

buttonToEncrypt.onclick = function() {

    let text = document.querySelector("#texto").value;
    let lowerCaseText = text.toLowerCase();
    let longitudTexto = text.length;
    let result = "";
    document.querySelector("#texto-encriptado").innerHTML = "";
    
    for(let i=0; i < longitudTexto; i++){

        if(lowerCaseText.charAt(i) === "a"){
            result += "ai";
            
        } else if (lowerCaseText.charAt(i) === "e") {
            result += "enter";
          
        } else if (lowerCaseText.charAt(i)=== "i") {
            result += "imes";
          
        } else if (lowerCaseText.charAt(i) === "o") {
            result += "ober";
               
        } else if (lowerCaseText.charAt(i) === "u") {
            result += "ufat";

        } else {
            result += lowerCaseText.charAt(i);
            
        }
    }
    
    document.querySelector("#texto-encriptado").innerHTML = result;
    
}

buttonToDecrypt.onclick = function() {
    
    let EncryptedTxt = document.querySelector("#texto").value;
    let lowerCaseEncryptedTxt = EncryptedTxt.toLowerCase();
    let longitudTexto = EncryptedTxt.length;

 
    for(let i=0; i<longitudTexto;i++){
    if(lowerCaseEncryptedTxt.charAt(i) === "a"){
        
        lowerCaseEncryptedTxt = lowerCaseEncryptedTxt.replace(/ai/g,"a");

    } else if (lowerCaseEncryptedTxt.charAt(i) ==="e"){
        
        lowerCaseEncryptedTxt = lowerCaseEncryptedTxt.replace(/enter/g,"e");

    } else if (lowerCaseEncryptedTxt.charAt(i) === "i"){
        
        lowerCaseEncryptedTxt = lowerCaseEncryptedTxt.replace(/imes/g,"i");

    } else if (lowerCaseEncryptedTxt.charAt(i) === "o"){
        
        lowerCaseEncryptedTxt =lowerCaseEncryptedTxt.replace(/ober/g,"o");

    } else if (lowerCaseEncryptedTxt.charAt(i) === "u"){
        
        lowerCaseEncryptedTxt = lowerCaseEncryptedTxt.replace(/ufat/g,"u");

    }
 }

document.querySelector("#texto-encriptado").innerHTML = lowerCaseEncryptedTxt;
    
}

buttonCopy.onclick = function() {

    let textToCopy = document.querySelector("#texto-encriptado").value;
    navigator.clipboard.writeText(textToCopy);

}
