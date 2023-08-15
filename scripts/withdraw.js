document.getElementById('btn-withdraw').addEventListener('click', () => {
    const withdraw = document.getElementById('withdraw').value;
    const total = document.getElementById('withdraw-total').innerText;
    const currentBalance = document.getElementById('balance').innerText;
    // clear the field
    document.getElementById('withdraw').value = "";
    // case when withdraw amount is greater than balance
    if (withdraw > currentBalance) {
        alert("You don't have enough value.")
        return;
    }
    // Update the withdraw field
    document.getElementById('withdraw-total').innerText = parseInt(total) + parseInt(withdraw);
    // Update the balance
    document.getElementById('balance').innerText = parseInt(currentBalance) - parseInt(withdraw);
    
})