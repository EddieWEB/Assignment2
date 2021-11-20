console.log("hej")

let totalSum = []

function btnAdd() {

    let posSum = 0;
    let negSum = 0;

    let inputValue = document.querySelector("#inp").value
    if (inputValue >= 0) {
    console.log("positive")
    let newElement = document.createElement("li")
    let income = document.querySelector("#income")
    income.appendChild(newElement)
    //newElement.setAttribute("class", "li")    
    let text = document.createTextNode(inputValue)
    newElement.appendChild(text)
    totalSum.push(inputValue)

    totalSum.map((e)=> {
        posSum += parseFloat(e)
    })

    console.log(posSum)
    document.querySelector("#outputOne").textContent = posSum;

    }
    else {
        console.log("negative")
        let newElement = document.createElement("li")
        let expense = document.querySelector("#expense")
        expense.appendChild(newElement)
        //newElement.setAttribute("class", "li")    
        let text = document.createTextNode(inputValue)
        newElement.appendChild(text)
        totalSum.push(inputValue)
        totalSum.map((e)=> {
            negSum += parseFloat(e)
        })
    
        console.log(negSum)
        
        document.querySelector("#outputTwo").textContent = negSum;

    }

    document.querySelector("#total").textContent = posSum + negSum;

}

document.querySelector("#btn").addEventListener("click", btnAdd)