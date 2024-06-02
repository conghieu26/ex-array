let arr = [];
let currenArray = handleAddNumber();
let newArray = [];

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

document.getElementById("button-2").addEventListener("click", () => { 
  let count = 0;
  currenArray.map(element => { 
    if(element >= 0) {
      count += 1;
    }
  })
  document.getElementById("ex-2").innerHTML = count;
})


document.getElementById("button-3").addEventListener("click", () => { 
  let currenNumber = currenArray[0];  
  currenArray.map(element => {
    if (currenNumber > element) {
      currenNumber = element;
    }
    document.getElementById("ex-3").innerHTML = currenNumber;
  })
})

document.getElementById("button-4").addEventListener("click", () => { 
  let currenNumber = currenArray[0];  
  currenArray.filter(element => {
    if (element > 0 && currenNumber > element) {

      currenNumber = element;
      console.log(currenNumber);
    }

    document.getElementById("ex-4").innerHTML = currenNumber;
  })
})

document.getElementById("button-5").addEventListener("click", () => { 
  currenArray.map(element => {
    // let number = currenArray[0];  
    if (element > 0) {
      newArray.push(element);
    } else {
      return document.getElementById("ex-5").innerHTML = -1;
    }
    document.getElementById("ex-5").innerHTML = newArray.slice(-1);
  })
})  

document.getElementById("button-6").addEventListener("click", () => { 
  let number_1 = document.getElementById("number-1").value;
  let number_2 = document.getElementById("number-2").value;
  let newArray2 = [...currenArray];
  newArray2.splice(number_1 - 1 ,1, currenArray[number_2 - 1]);
  newArray2.splice(number_2 - 1 ,1, currenArray[number_1 - 1]);


    document.getElementById("ex-6").innerHTML = `[${newArray2}]`;
})  

document.getElementById("button-7").addEventListener("click", () => { 
  

  document.getElementById("ex-7").innerHTML = newArray;

})  

document.getElementById("button-8").addEventListener("click", () => { 
  let count = 0;
  currenArray.map(element => {
    if (element > 0) {
      count += element;
    }
    document.getElementById("ex-8").innerHTML = count;
  })
}) 
