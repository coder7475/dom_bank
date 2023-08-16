document.getElementById('btn-deposit').addEventListener('click', () => {
    const deposit = getInputValue('deposit');
    const total = getInnerText('deposit-total');
    const currentBalance = getInnerText('balance');

    document.getElementById('deposit').value = "";

    document.getElementById('deposit-total').innerText = parseInt(total) + parseInt(deposit);

    // Update the balance
    document.getElementById('balance').innerText = parseInt(currentBalance) + parseInt(deposit);

    
})