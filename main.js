console.log("hej")

let totalSum = []
let posArray = []
let negArray = []


function btnAdd() {
    let posSum = 0;
    let negSum = 0;
    let totalAmount=0;
    let inputValue = document.querySelector("#inp").value
    if (inputValue >= 0) {
    let newElement = document.createElement("li")
    let income = document.querySelector("#income")
    income.appendChild(newElement)    
    let text = document.createTextNode(inputValue)
    newElement.appendChild(text)
    totalSum.push(inputValue)
    posArray.push(inputValue)

    for (let i = 0; i < posArray.length; i++) {
        posSum += Number(posArray[i]);
    }

    document.querySelector("#outputOne").textContent = posSum;

    }
    else {
        console.log("negative")
        let newElement = document.createElement("li")
        let expense = document.querySelector("#expense")
        expense.appendChild(newElement)    
        let text = document.createTextNode(inputValue)
        newElement.appendChild(text)
        totalSum.push(inputValue)
        negArray.push(inputValue)    
        for (let i = 0; i < negArray.length; i++) {
            negSum += Number(negArray[i]);
        }
        
        document.querySelector("#outputTwo").textContent = negSum;

    }

        for (let i = 0; i < totalSum.length; i++) {
            totalAmount += Number(totalSum[i]);
        }
    
    document.querySelector("#totalNumber").textContent = totalAmount

}   

document.querySelector("#btn").addEventListener("click", btnAdd)