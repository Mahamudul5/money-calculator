// get input from income field and sent message for error.

document.getElementById('Calculate-btn').addEventListener('click', function inputIncome() {
    const myIncome = document.getElementById('income-input');
    let totaIncome = parseFloat(myIncome.value);


});

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
document.getElementById('save-btn').addEventListener('click', function () {
    const savingInput = document.getElementById('saving-input');
    const myIncome = document.getElementById('income-input');
    let totaIncome = parseFloat(myIncome.value);
    let savingParsentage = parseInt(savingInput.value);

    let finalSaving = (totaIncome * savingParsentage) / 100;
    console.log(finalSaving);
    const savingAmount = document.getElementById('saving-amount');
    savingAmount.innerText = finalSaving;
    const remainingAmountField = document.getElementById('remaining-last-balance');
    let forFood = document.getElementById('food');
    let expenseForFood = parseInt(forFood.value);
    let forRent = document.getElementById('rent');
    let expenseForRent = parseInt(forRent.value);
    let forCloths = document.getElementById('cloths');
    let expenseForCloths = parseInt(forCloths.value);
    let inTotalExpense = expenseForFood + expenseForRent + expenseForCloths;
    console.log(inTotalExpense);
    console.log(totaIncome);
    console.log(finalSaving);

    const finalSavingWithIntotalExpense = finalSaving + inTotalExpense;
    const remainningAmount = totaIncome - finalSavingWithIntotalExpense;
    remainingAmountField.innerText = remainningAmount;


});


