let btn_deposit = document.getElementById("btn-deposit");

btn_deposit.addEventListener('click', function(){
   let deposit_amount = document.getElementById('deposit-amount');
   let input_deposit = document.getElementById('deposit-input');
   let amountDeposit = input_deposit.value;
   deposit_amount.innerText =  amountDeposit;
   input_deposit.value = "";
   // sum Deposit
   let amount = document.getElementById('amount');
   let amountSum = amount.innerText;
   let coverNumber = parseInt(amountSum);
   let newTotal = coverNumber + parseInt(amountDeposit);
   amount.innerText = newTotal;
});

let btn_withdraw = document.getElementById("btn-withdraw");

btn_withdraw.addEventListener('click', function(){
    let withdraw_amount = document.getElementById('Withdraw-amount');
    let input_withdraw = document.getElementById('withdraw-input');
    let withdrawAmount = input_withdraw.value;
    withdraw_amount.innerText = withdrawAmount;
    input_withdraw.value = "";
    // sub withddraw
    let amount = document.getElementById('amount');
    let amountSum = amount.innerText;
    let coverNumber = parseInt(amountSum);
    let sub = coverNumber - parseInt(withdrawAmount) ;
    amount.innerText = sub;
});