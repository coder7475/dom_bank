document.getElementById('btn-withdraw').addEventListener('click', () => {
    const deposit = document.getElementById('withdraw').value;
    const total = document.getElementById('withdraw-total').innerText;

    document.getElementById('withdraw-total').innerText = parseInt(total) + parseInt(deposit);
})