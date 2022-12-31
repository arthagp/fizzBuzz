const getBuzz = ()=>{
    const getNum = document.getElementById("inputNumber").value;
    const divClass = document.getElementById("printValue");
    const createP = document.createElement("p");
    const pColor = document.getElementById("color");
    console.log(getNum);
    if (getNum == 0) {
        console.log("invalidInput");
        pColor.innerHTML="Invalid Input";
        pColor.style.color="red";
    } else {
        if (getNum % 3 === 0 && getNum % 5 === 0) {
            console.log("FizzBuzz!");
            createP.innerHTML="FizzBuzz!";
            divClass.append(createP);
            divClass.style.color= 'none';
        } else if(getNum % 3 === 0){
            console.log("Fizz!");
            createP.innerHTML="Fizz!";
            divClass.append(createP);
        }else if(getNum % 5 === 0){
            console.log("Buzz!");
            createP.innerHTML="Buzz!";
            divClass.append(createP);
        } else {
            createP.innerHTML=getNum;
            divClass.append(createP);
        }
    }    
}