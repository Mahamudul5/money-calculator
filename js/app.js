// get input from income field and sent message for error.
// document.getElementById('Calculate-btn').addEventListener('click', function inputValidation() {
// //     const myIncome = document.getElementById('income-input');
// //     let totaIncome = parseFloat(myIncome.value);

// });
document.getElementById('Calculate-btn').addEventListener('click', function inputValidation() {
    const myfood = document.getElementById('food');
    let totalFoodExpense = myfood.value;
    let x = parseInt(totalFoodExpense);
    const myRent = document.getElementById('rent');
    let totalRentExpense = myRent.value;
    let y = parseInt(totalRentExpense);
    const myCloths = document.getElementById('cloths');
    let totalClothsExpense = myCloths.value;
    let z = parseInt(totalClothsExpense);
    const myIncome = document.getElementById('income-input');
    let totaIncome = parseFloat(myIncome.value);
    let total = x + y + z;
    let left = totaIncome - total;
    console.log(left);
    let expencesFeild = document.getElementById('total-expences');
    expencesFeild.innerText = total;
    let balanceField = document.getElementById('left-balance');
    balanceField.innerText = left;


});


