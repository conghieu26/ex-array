let arr = [];
let currenArray = handleAddNumber();

  function handleAddNumber() {
    var inputEle = document.getElementById("text");
    var valueInput = Number(inputEle.value);

    
      if (valueInput == 0) {
        return arr = [];
      }

      if(isNaN(valueInput)) {
        alert("Not a Number");
        inputEle.value = " ";
        inputEle.focus();
        return;
      }

      arr.push(valueInput);
      inputEle.value = "";
      inputEle.focus();
      document.getElementById("display").innerHTML = `[${arr.join(", ")}]`;
      return arr;
  }


document.getElementById("button").addEventListener("click" , handleAddNumber);

document.getElementById("text").addEventListener("keypress", (e) => {
  if (e.key === "Enter") { 
    handleAddNumber();
  }
})
document.getElementById("button-1").addEventListener("click" , () => {
  let total = 0;
  currenArray.forEach(element => {
     total += element;
  });
  document.getElementById("ex-1").innerHTML = total;
})

document.getElementById("button-2").addEventListener("click", element => { 
  let count = 0;
  currenArray.map(element => { 
    if(element >= 0) {
      count += 1;
    }
  })
  document.getElementById("ex-2").innerHTML = count;
})


document.getElementById("button-3").addEventListener("click", element => { 
  currenArray.map(element => {
    let currenNumber = 0;  
    if (currenNumber > element) {
      currenNumber = element;
    }
    document.getElementById("ex-3").innerHTML = currenNumber;
  })
})

document.getElementById("button-4").addEventListener("click", element => { 
  currenArray.filter(element => {
    let currenNumber = currenArray[0];  
    if (element > 0 && currenNumber > element) {

      currenNumber = element;
      console.log(currenNumber);
    }

    document.getElementById("ex-4").innerHTML = currenNumber;
  })
})

document.getElementById("button-5").addEventListener("click", element => { 
  currenArray.map(element => {
    // let number = currenArray[0];  
    if (element > 0) {
      
      console.log(currenArray);
    }

    // document.getElementById("ex-5").innerHTML = currenNumber;
  })
})  