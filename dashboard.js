const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const amount = document.getElementById("amount");
const result = document.getElementById("result");
const convertBtn = document.getElementById("convertBtn");

const API_KEY = "aa19420b1800c7bd9411a3ff";

let rates = {};

// Currency -> Flag Emoji
const flags = {
    USD: "🇺🇸",
    INR: "🇮🇳",
    EUR: "🇪🇺",
    GBP: "🇬🇧",
    JPY: "🇯🇵",
    AUD: "🇦🇺",
    CAD: "🇨🇦",
    CHF: "🇨🇭",
    CNY: "🇨🇳",
    AED: "🇦🇪",
    SGD: "🇸🇬",
    NZD: "🇳🇿",
    PKR: "🇵🇰",
    BDT: "🇧🇩",
    SAR: "🇸🇦",
    QAR: "🇶🇦",
    KWD: "🇰🇼",
    THB: "🇹🇭",
    MYR: "🇲🇾"
};

async function loadCurrencies() {

    try {

        const response = await fetch(
            `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`
        );

        const data = await response.json();

        if (data.result !== "success") {
            result.textContent = "Unable to fetch currency data.";
            return;
        }

        rates = data.conversion_rates;

        fromCurrency.innerHTML = "";
        toCurrency.innerHTML = "";

        for (const currency in rates) {

            const flag = flags[currency] || "🏳️";

            fromCurrency.innerHTML += `
                <option value="${currency}">
                    ${flag} ${currency}
                </option>
            `;

            toCurrency.innerHTML += `
                <option value="${currency}">
                    ${flag} ${currency}
                </option>
            `;
        }

        fromCurrency.value = "USD";
        toCurrency.value = "INR";

    } catch (error) {

        console.error(error);
        result.textContent = "Error loading currency data.";
    }
}

loadCurrencies();

convertBtn.addEventListener("click", () => {

    const amt = Number(amount.value);

    if (amt <= 0 || isNaN(amt)) {
        result.textContent = "Please enter a valid amount.";
        return;
    }

    const from = fromCurrency.value;
    const to = toCurrency.value;

    const usdAmount = amt / rates[from];
    const convertedAmount = usdAmount * rates[to];

    const exchangeRate = rates[to] / rates[from];

    result.innerHTML = `
        <h2>${amt} ${from} = ${convertedAmount.toFixed(2)} ${to}</h2>
        <p>1 ${from} = ${exchangeRate.toFixed(4)} ${to}</p>
    `;
});

// Swap Button
const swapBtn = document.getElementById("swapBtn");

if (swapBtn) {

    swapBtn.addEventListener("click", () => {

        const temp = fromCurrency.value;

        fromCurrency.value = toCurrency.value;
        toCurrency.value = temp;

    });

}