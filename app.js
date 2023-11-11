const ammount = document.querySelector('.ammount');
const slect = document.querySelector('.slect')
const person = document.querySelector('.person')
const result = document.querySelector('#result')
const button = document.querySelector('.sub-btn');

button.addEventListener('click', () => {
    const total = ammount.value * (slect.value / 100);
    const subTotal = parseFloat(+ammount.value + total);
    const totals = subTotal / person.value;
    const totalBill = parseFloat(total) + parseFloat(ammount.value);
    console.log(totalBill);

    result.innerHTML = `
        <p class="tip-re"> ⭐️Tip: $${total.toFixed(2)}</p>
        <p class="tip-re">💰 Total: $${totals.toFixed(2)} Each</p>
        <p class="tip-re"> Total-Bill: $${totalBill.toFixed(2)}</p>
        <button id="print" class="sub-btn">Print</button>
    `;

    const printButton = document.querySelector('#print');
    printButton.addEventListener('click', () => {
        window.print();
    });
});


