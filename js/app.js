// add buble event to easy to access all 
document.getElementById('main-div').addEventListener('click', function (event) {

    // call to Calculate button .
    document.getElementById('Calculate-btn').addEventListener('click', function () {
        const mainBalance = document.getElementById('income-input');
        const myIncome = parseInt(mainBalance.value);
        // Error handling start.
        if (isNaN(myIncome) || myIncome <= 0 || myIncome === '') {
            alert('Please enter a valid number thats you Earn.');
        };

        const food = document.getElementById('food');
        const myFood = parseInt(food.value);
        // Error handling start.
        if (isNaN(myFood) || myFood <= 0 || myFood === '') {
            alert('Please enter a valid number in *Food');
        };

        const rent = document.getElementById('rent');
        const myRent = parseInt(rent.value);
        // Error handling start.
        if (isNaN(myRent) || myRent <= 0 || myRent === '') {
            alert('Please enter a valid number in *Rent');
        };
        const cloths = document.getElementById('cloths');
        const myCloths = parseInt(cloths.value);
        // Error handling start.
        if (isNaN(myCloths) || myCloths <= 0 || myCloths === '') {
            alert('Please enter a valid number in *Cloths');
        };
        const totalExpense = myFood + myRent + myCloths;
        const totalExpenseField = document.getElementById('total-expences')
        totalExpenseField.innerText = totalExpense;
        const balance = myIncome - totalExpense;
        // Error handling start.
        if (totalExpense > myIncome) {
            alert('oh! you havent enough money to spend.');
        };
        const balanceFeild = document.getElementById('left-balance');
        balanceFeild.innerText = balance;
        document.getElementById('save-btn').addEventListener('click', function () {
            const saveInputField = document.getElementById('saving-input');
            const saving = parseInt(saveInputField.value);
            // Error handling start.
            if (isNaN(saving) || saving <= 0 || saving === '') {
                alert('Please enter a valid number in *Saving');
            };
            const finalSaving = (myIncome * saving) / 100;
            // Error handling start.
            if (finalSaving > balance) {
                alert('ups!!! you dont have enough money to saving');
            };
            const savingAmountField = document.getElementById('saving-amount');
            savingAmountField.innerText = finalSaving;
            const totalExpenseAndFinalSaving = totalExpense + finalSaving;
            const remainningAmount = myIncome - totalExpenseAndFinalSaving;
            const remainingBalanceField = document.getElementById('remaining-last-balance');
            remainingBalanceField.innerText = remainningAmount;
            // add a function to clear all input FileSystemDirectoryEntry. 

            clearInputValue(food);
            clearInputValue(rent);
            clearInputValue(cloths);





        });


    });




    event.stopPropagation();
});

function clearInputValue(inputName) {
    inputName.value = '';
};