document.getElementById('btn-deposit').addEventListener('click', () => {
    const deposit = document.getElementById('deposit').value;
    const total = document.getElementById('deposit-total').innerText;

    document.getElementById('deposit-total').innerText = parseInt(total) + parseInt(deposit);
    document.getElementById('deposit').value = "";
})