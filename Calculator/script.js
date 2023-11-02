let display = document.getElementById("display");

let output=(num)=>{
    display.value += num;
}

let clr=()=>{
    display.value ="";
}

let result=()=>{
    try{
        display.value = display.value.replace("x", "*");
        display.value = eval(display.value);
    }
    catch{
        alert("Enter a valid Expression");
        display.value ="";
    }
}