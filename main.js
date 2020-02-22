//select all variables
const bill = document.getElementById ('bill');
const quality = document.getElementById ('quality');
const peopleNumb = document.getElementById ('peopleNumb');
const tipCalcForm = document.getElementById('form');
const result = document.getElementById("result");
const resetBtn = document.getElementById('resetBtn');
const calcBtn = document.getElementById('calcBtn');


//The class of TipCalculator
class TipCalculator{ 
    constructor (bill, quality, peopleNumb){
    this.bill = bill;
    this.quality = quality;
    this.peopleNumb = peopleNumb;}

}

// reset the calc btn
resetBtn.addEventListener('click', () => {
    tipCalcForm.reset();
});

    //form submit...
    tipCalcForm.addEventListener('submit', e => {
    e.preventDefault();
    //the input value
    const tipCalculator = new TipCalculator (bill.value, quality.value, peopleNumb.value);

    if (tipCalculator.peopleNumb == "" || tipCalculator.bill == "")
    {
        alert(`you can't let any of the two fields empty`);
        peopleNumb.focus();
        bill.focus();
    }
    else if (tipCalculator.bill <= 0 || tipCalculator.peopleNumb <= 0 || isNaN(parseFloat(tipCalculator.bill)) 
    ||isNaN(parseFloat(tipCalculator.peopleNumb)))
    {
        alert("Please fill this field with a correct value, letters and negative numbers not aviable");
    }
    else
    {
    //calculate the tip amount (bill/peopleNumb)*quality
    function calculate ()
    {
    let tip = (this.bill.value/this.peopleNumb.value)*this.quality.value;
   //for the float numbers
   tip = Math.round(tip*100)/(100);
   //2 digits after decimal point
   tip = tip.toFixed(2);
   return tip;
    }
    //output the result on click the calc btn
    calcBtn.addEventListener('click', (e) => {
        e.preventDefault();
        //calling the function 
        let resultOfCalc = calculate();
        //add the result to html
        result.innerHTML = resultOfCalc;
    })
    }
   });
   























