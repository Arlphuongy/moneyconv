const rates = {
  USD: 1,
  AUD: 1.53,
  EUR: 0.92,
  VND: 25400,
};

function convertFrom() {
  const amount = parseFloat(document.getElementById("amountFrom").value);
  const from = document.getElementById("fromCurrency").value;
  const to = document.getElementById("toCurrency").value;

  if (isNaN(amount)) {
    document.getElementById("amountTo").value = "";
    return;
  }

  const inUSD = amount / rates[from];
  const converted = inUSD * rates[to];
  document.getElementById("amountTo").value = parseFloat(converted.toFixed(6));
}

function convertTo() {
  const amount = parseFloat(document.getElementById("amountTo").value);
  const from = document.getElementById("fromCurrency").value;
  const to = document.getElementById("toCurrency").value;

  if (isNaN(amount)) {
    document.getElementById("amountFrom").value = "";
    return;
  }

  const inUSD = amount / rates[to];
  const converted = inUSD * rates[from];
  document.getElementById("amountFrom").value = parseFloat(converted.toFixed(6));
}