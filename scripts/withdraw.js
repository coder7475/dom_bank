document.getElementById('btn-withdraw').addEventListener('click', () => {
    const withdraw = document.getElementById('withdraw').value;
    const total = document.getElementById('withdraw-total').innerText;
    // Update the withdraw field
    document.getElementById('withdraw-total').innerText = parseInt(total) + parseInt(withdraw);

    const currentBalance = document.getElementById('balance').innerText;
    // Update the balance
    document.getElementById('balance').innerText = parseInt(currentBalance) - parseInt(withdraw);
    // clear the field
    document.getElementById('withdraw').value = "";
})