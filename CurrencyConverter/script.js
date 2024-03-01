const dropList = document.querySelectorAll(".drop-list select");
fromCurrency = document.querySelector(".from select");
toCurrency = document.querySelector(".to select");
getRateBtn = document.querySelector("form button");

for (let i = 0; i < dropList.length; i++) {
  for (currency_code in country_list) {
    let selected;
    if (i == 0) {
      selected = currency_code == "CNY" ? "selected" : "";
    } else if (i == 1) {
      selected = currency_code == "USD" ? "selected" : "";
    }
    let optionTag = `<option value="${currency_code}" ${selected}>${
      currency_code + " - " + country_list[currency_code]
    }</option>`;
    dropList[i].insertAdjacentHTML("beforeend", optionTag);
  }

  dropList[i].addEventListener("change", (e) => {
    loadFlag(e.target);
  });
}

const exchangeIcon = document.querySelector(".drop-list .icon");
exchangeIcon.addEventListener("click", () => {
  let tempCode = fromCurrency.value;
  fromCurrency.value = toCurrency.value;
  toCurrency.value = tempCode;
  loadFlag(fromCurrency);
  loadFlag(toCurrency);
  getExchangeRate();
});

getRateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  getExchangeRate();
});

//获取汇率
function getExchangeRate() {
  const amount = document.querySelector(".amount input");
  const exchangeRateTxt = document.querySelector(".exchange-rate");
  exchangeRateTxt.innerText = "汇率换算中...";
  let amountVal = amount.value;

  if (amountVal == "" || amountVal == "0") {
    amount.value = "1";
    amountVal = 1;
  }

  let url = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/${fromCurrency.value}`;
  fetch(url)
    .then((res) => res.json())
    .then((result) => {
      let exchangeRate = result.conversion_rates[toCurrency.value];
      let totalExchangeRate = (amountVal * exchangeRate).toFixed(4);
      exchangeRateTxt.innerText = `${amountVal} ${fromCurrency.value} = ${totalExchangeRate} ${toCurrency.value}`;
    })
    .catch(() => {
      exchangeRateTxt.innerText = "汇率换算失败了...";
    });
}

//获取国旗图标
function loadFlag(element) {
  for (code in flag_list) {
    if (code == element.value) {
      let imgTag = element.parentElement.querySelector("img");
      imgTag.src = `https://flagsapi.com/${flag_list[code]}/flat/64.png`;
    }
  }

  getExchangeRate();
}

window.addEventListener("load", (e) => {
  getExchangeRate();
});
