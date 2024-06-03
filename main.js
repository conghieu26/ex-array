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

// Task 1:
document.getElementById("button-1").addEventListener("click" , () => {
  let total = 0;
  currenArray.forEach(element => {
     total += element;
  });
  document.getElementById("ex-1").innerHTML = total;
})

// Task 2:
document.getElementById("button-2").addEventListener("click", () => { 
  let count = 0;
  currenArray.map(element => { 
    if(element >= 0) {
      count += 1;
    }
  })
  document.getElementById("ex-2").innerHTML = count;
})

// Task 3:
document.getElementById("button-3").addEventListener("click", () => { 
  let currenNumber = currenArray[0];  
  currenArray.map(element => {
    if (currenNumber > element) {
      currenNumber = element;
    }
  })
  document.getElementById("ex-3").innerHTML = currenNumber;

})

// Task 4:
document.getElementById("button-4").addEventListener("click", () => { 
  let currenNumber = currenArray[0];  
  currenArray.filter(element => {
    if (element > 0 && currenNumber > element) {

      currenNumber = element;
      console.log(currenNumber);
    }
  })
  document.getElementById("ex-4").innerHTML = currenNumber;

})

// Task 5:
document.getElementById("button-5").addEventListener("click", () => { 
  currenArray.map(element => {
    // let number = currenArray[0];  
    if (element > 0) {
      newArray.push(element);
    } else {
      return document.getElementById("ex-5").innerHTML = -1;
    }
  })
  document.getElementById("ex-5").innerHTML = newArray.slice(-1);

})  

// Task 6:

document.getElementById("button-6").addEventListener("click", () => { 
  let number_1 = document.getElementById("number-1").value;
  let number_2 = document.getElementById("number-2").value;
  let newArray2 = [...currenArray];
  newArray2.splice(number_1 - 1 ,1, currenArray[number_2 - 1]);
  newArray2.splice(number_2 - 1 ,1, currenArray[number_1 - 1]);


  document.getElementById("ex-6").innerHTML = `[${newArray2}]`;
})  

// Task 7:
document.getElementById("button-7").addEventListener("click", () => { 
  currenArray.sort();

  document.getElementById("ex-7").innerHTML = `[${currenArray}]`;

})  

function deleteElement(element, arr) {

  return arr.filter((number) => { 
    return number != element
  })
  
}
// Task 8:
document.getElementById("button-8").addEventListener("click", () => { 
  let newArray3;
  currenArray.map(element => {
    if(element <= 2) { 
      return;
    } else {
      for(let i = 2 ; i < element; i ++ ){
        if (element % i == 0) {
          return newArray3 = deleteElement(element, currenArray);
        }
      }
    }
  })
  document.getElementById("ex-8").innerHTML = newArray3;
}) 

// Task 9:
document.getElementById("button-9").addEventListener("click", () => { 
  let newArray3 = []
  currenArray.map(element => {
    if(element <= 2) { 
      return;
    } else {
      for(let i = 2; i <= element - 1; i++) {
        if (element % i == 0) {
          return;
        } else {
          console.log(element);
        }
      }
    }
  })
  document.getElementById("ex-9").innerHTML = newArray;
}) 

// Task 10:
document.getElementById("button-10").addEventListener("click", () => { 
  let countNegativeNumber = 0; 
  let countPositiveNumber = 0;
  
  let RESULT = {
    NEGATIVE: "Số lượng số âm lớn hơn số lượng số dương",
    POSITIVE: "Số lượng số dương lớn hơn số lượng số âm",
    EQUAL: "Số lượng số dương Bằng nhau số lượng số âm "
  }
  currenArray.map(element => {
    if(element > 0) { 
      countNegativeNumber += 1;
    } else { 
      countPositiveNumber += 1;
    }
  })

  let largerNegativeNumber = countNegativeNumber > countPositiveNumber;
  let lagerPositiveNumber = countNegativeNumber < countPositiveNumber;

  if (largerNegativeNumber) {
     document.getElementById("ex-10").innerHTML = `Số lượng số âm: ${countNegativeNumber} - Số lượng số dương: ${countPositiveNumber} - Result: ${countNegativeNumber} > ${countPositiveNumber} -> ${RESULT.NEGATIVE}`;
  } else if (lagerPositiveNumber) {
     document.getElementById("ex-10").innerHTML = `Số lượng số âm: ${countNegativeNumber} - Số lượng số dương: ${countPositiveNumber} - Result: ${countNegativeNumber} < ${countPositiveNumber} -> ${RESULT.POSITIVE}`;;
  } else {
     document.getElementById("ex-10").innerHTML = `Số lượng số âm: ${countNegativeNumber} - Số lượng số dương: ${countPositiveNumber} - Result: ${countNegativeNumber} = ${countPositiveNumber} ->  ${RESULT.EQUAL}`;;
  } 
   
}) 