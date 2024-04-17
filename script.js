const cFrom = document.getElementById("cFrom")
const cTo = document.getElementById("cTo")
const convertBtn = document.getElementById("convertBtn")
const rateValue = document.getElementById("rateValue")
const eRateValue = document.getElementById("eRateValue")
const reverseBtn = document.getElementById("reverse")
let b
let ERConvert



const fetchOptions = async () => {
    data = await fetch("https://api.apilayer.com/exchangerates_data/latest",{ 
                      headers: {
                          "apikey": "ttDhsGvYEK82fpUO3mpmHRwnYC1Ik6eL"
    }},)
    objData = await data.json()

    curtypes = Object.keys(objData.rates)
    // console.log(curtypes)


    curtypes.forEach(e => {
        option1 = document.createElement("option")
        option1.innerText = e
        option1.setAttribute("value", e)
        cFrom.appendChild(option1)

    })

    curtypes.forEach(e => {
        option2 = document.createElement("option")
        option2.innerText = e
        option2.setAttribute("value", e)
        cTo.appendChild(option2)

    })
}

fetchOptions()

const valueConvert = async () => {
    data = await fetch(`https://api.exchangerate.host/latest?base=${cFrom.value}`)
    objData = await data.json()

    conRate = await objData.rates[cTo.value]
    // console.log(conRate)
    // return conRate
    exchangeRate =  (Number.parseFloat(rateValue.value)) * (Number.parseFloat(conRate))
    // 81.992732
    // roundedExchangeRate = 

    eRateValue.innerText = await exchangeRate
    // ERConvert = await exchangeRate


    
}


convertBtn.addEventListener('click' , () => {
    valueConvert()
})

reverseBtn.addEventListener('click', () => {
    let a
    let b
    let temp

    a = cFrom.value
    b = cTo.value
    temp = cFrom.value

    a = b
    cFrom.value = a
    cTo.value = temp
})
