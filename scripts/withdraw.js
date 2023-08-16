document.getElementById('btn-withdraw').addEventListener('click', () => {
    const withdraw = getInputValue('withdraw');
    const total = getInnerText('withdraw-total');
    const currentBalance = getInnerText('balance');
    // clear the field
    document.getElementById('withdraw').value = "";
    // case when withdraw amount is greater than balance
    if (parseInt(withdraw) > parseInt(currentBalance)) {
        alert("You don't have enough balance.")
        return;
    }
    
    // Update the withdraw field
    document.getElementById('withdraw-total').innerText = parseInt(total) + parseInt(withdraw);
    // Update the balance
    document.getElementById('balance').innerText = parseInt(currentBalance) - parseInt(withdraw);
    
})