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

// Task 8:
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;
  if (num % 2 === 0 || num % 3 === 0) return false;
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }
  return true;
}

function findFirstPrime(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(arr[i])) {
      return arr[i]; 
    }
  }
  return -1; 
}

document.getElementById("button-8").addEventListener("click", () => { 
  let firstPrime = findFirstPrime(currenArray);
  document.getElementById("ex-8").innerHTML = firstPrime;
});

// Task 9:
function isInteger(num) {
  return num % 1 === 0;
}

document.getElementById("button-9").addEventListener("click", () => { 
  let count = 0;
  currenArray.map((number) => { 
    if(isInteger(number)) { 
      count += 1;
    } else {
      return;
    }
  })
  document.getElementById("ex-9").innerHTML = count;
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