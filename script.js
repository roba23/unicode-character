function detectChar(){
    const input = document.getElementById("inputCharacter").value;
    
    if(input){
        const unicodeValue = input.charCodeAt(0);
        const result = `The unicode value of "${input}" is ${unicodeValue}`;
        document.getElementById('result').textContent = result;

    }
    else{
        document.getElementById('result').textContent = "Please Enter A Character";
    }
}