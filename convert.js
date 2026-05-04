// all rates relative to USD
const rates = {
  USD: 1,
  AUD: 1.53,
  EUR: 0.92,
  VND: 25400,
};

function convert() {
  const amount = parseFloat(document.getElementById("amount").value);
  const from = document.getElementById("fromCurrency").value;
  const to = document.getElementById("toCurrency").value;

  if (isNaN(amount) || amount < 0) {
    document.getElementById("result").textContent = "Please enter a valid amount.";
    return;
  }

  // Convert to USD first, then to target currency
  const inUSD = amount / rates[from];
  const converted = inUSD * rates[to];

  document.getElementById("result").textContent =
    amount + " " + from + " = " + converted.toFixed(2) + " " + to;
}