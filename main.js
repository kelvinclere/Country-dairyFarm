const leapYear = {January:31, February:29, March:31, April:30, May:31, June:30, July:31, August:31, September:30, October:31, November:30, December:31}
let shedProduction = {}

let selling_price = 45;
var dailyProduction = 0;
let week = 7;
let year = 365;
let time;

const id1 = document.getElementById('total')
const id2 = document.getElementById('income')
const id3 = document.getElementById('LeapYear')


function report(){

    shedProduction.A = parseInt(document.getElementById('first-a').value);
    shedProduction.B = parseInt(document.getElementById('first-b').value);
    shedProduction.C = parseInt(document.getElementById('first-c').value);
    shedProduction.D = parseInt(document.getElementById('first-d').value);

    function totalProduction(){

        let header = document.createElement('h3')
        header.textContent = " Milk Produced per Shed & Total Amount Produced"

        id1.appendChild(header)

        for (const property in shedProduction){

            let shedDiv = document.createElement('p')

            shedDiv.innerHTML = `Your production is shed ${property} ${shedProduction[property]} litres per day`

            id1.appendChild(shedDiv)

            console.log(`Your production is shed ${property} ${shedProduction[property]} litres per day`)
        }
    
        for (const x in shedProduction){
            dailyProduction += shedProduction[x];
        }

        let totalDiv = document.createElement('p')

        totalDiv.innerHTML = `The total production is ${dailyProduction} litres per day`

        id1.appendChild(totalDiv)

        console.log(`The total production is ${dailyProduction} litres per day`)
    }
    
    // function to calculate income per week(per year)
    
    function incomeOverTime(){
        let header2 = document.createElement('h3')
        header2.textContent = "Weekly & Yearly Earnings"

        id2.appendChild(header2)

        let weekDiv = document.createElement('p')
        weekDiv.innerHTML = `Your weekly income will be ${dailyProduction*week*selling_price}`
        id2.appendChild(weekDiv)

        let monthDiv = document.createElement('p')
        monthDiv.innerHTML = `Your yearly income will be ${dailyProduction*year*selling_price}`
        id2.appendChild(monthDiv)

        console.log(`Your weekly income will be ${dailyProduction*week*selling_price}`)
        console.log(`Your yearly income will be ${dailyProduction*year*selling_price}`)
    }
    
    // function to calculate income per month in a leap year
    
    function incomeLeapYear(){

        let header3 = document.createElement('h3')
        header3.textContent = "Earnings Per Month in a Leap Year"

        id3.appendChild(header3)

        for(const month in leapYear){

            let leapDiv = document.createElement('p')

            leapDiv.innerHTML = `Your income for ${month} is ${leapYear[month]*selling_price*dailyProduction}`
            id3.appendChild(leapDiv) 
            
            console.log(`Your income for ${month} is ${leapYear[month]*selling_price*dailyProduction}`)
        }
    }

    totalProduction()
    console.log("")
    incomeOverTime(selling_price, time)
    console.log("")
    incomeLeapYear()
}
