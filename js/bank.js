/* 
*   Deposit Money the Bow er Baap er Bank 
*   Step - 1 Add event listener to the deposit button
*/
document.getElementById('btn-deposit').addEventListener('click', function(){
    /* 
    *   Step - 2 Get the deposit amount form the deposit input field
    *   For input field use .value to the value inside the input field 
    */
    const depositField = document.getElementById('deposit-amount');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    // Clear the deposit field
    depositField.value = '';

    if(isNaN(newDepositAmount)){
        alert('Please provide a valid number!');
        return;
    }

    /* 
    *   Step - 3 Get the current deposit total
    *   For non-input (element other than input, textarea) use innerText to get the text 
    */
    const totalDepositElement = document.getElementById('total-deposit');
    const prvDepositTotalString = totalDepositElement.innerText;
    const prvDepositTotal = parseFloat(prvDepositTotalString);

    // Step - 4 Add number to set the total deposit
    const currentDepositTotal = prvDepositTotal + newDepositAmount;
    totalDepositElement.innerText = currentDepositTotal;

    // Step - 5 Get balance current total
    const balanceTotalElement = document.getElementById('total-balance');
    const balanceTotalElementString = balanceTotalElement.innerText;
    const prvBalanceTotal = parseFloat(balanceTotalElementString);

    // Step - 6 Calculate current total balance
    const currentBalanceTotal = prvBalanceTotal + newDepositAmount;
    // Set the balance total
    balanceTotalElement.innerText = currentBalanceTotal;
});

/* 
*   Withdraw Money the Bow er Baap er Bank
*   Step - 1 Add event listener to the withdraw button
*/
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // Step -2
    const withdrawField = document.getElementById('withdraw-amount');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    // Clear The withdraw field
    withdrawField.value = '';

    if(isNaN(newWithdrawAmount)){
        alert('Please provide a valid number!');
        return;
    }

    // Step -3
    const totalWithdrawElement = document.getElementById('total-withdraw');
    const prvWithdrawTotalString = totalWithdrawElement.innerText;
    const prvWithdrawTotal = parseFloat(prvWithdrawTotalString);

    // Step -5
    const balanceTotalElement = document.getElementById('total-balance');
    const balanceTotalElementString = balanceTotalElement.innerText;
    const prvBalanceTotal = parseFloat(balanceTotalElementString);

    if(newWithdrawAmount > prvBalanceTotal){
        alert('Bower Baaper Bank a Eto Taka nay!');
        return;
    }

    // Step - 4
    const currentWithdrawTotal = prvWithdrawTotal + newWithdrawAmount;
    totalWithdrawElement.innerText = currentWithdrawTotal;

    // Step - 6 Calculate current total balance
    const currentBalanceTotal = prvBalanceTotal - newWithdrawAmount;
    balanceTotalElement.innerText = currentBalanceTotal;

});

