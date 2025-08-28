function textToNumber(select) {
  return parseInt(select.innerText);
}

// heart update javascript code
let heartSelector = document.querySelectorAll(".heart");
for (let h of heartSelector) {
  h.addEventListener("click", function (e) {
    let heartValueSelect = document.getElementById("heart-value");
    let heartCurrentValue = textToNumber(heartValueSelect);
    heartValueSelect.innerText = heartCurrentValue + 1;
  });
}

// for call btn functionality
let callBtn = document.querySelectorAll(".call-btn");
for (let h of callBtn) {
  h.addEventListener("click", function (e) {
    let serviceName=e.target.parentNode.parentNode.querySelector(".service-name");
    let serviceSubName=e.target.parentNode.parentNode.querySelector(".service-subname").innerText;
    let serviceNumber=e.target.parentNode.parentNode.querySelector(".service-number").innerText;
    let coinNumber=document.getElementById("coin")
    let currentCoin=textToNumber(coinNumber);
    if(currentCoin>=20)
    {
        window.alert(`📞 Calling ${serviceSubName} ${serviceNumber}...`)

        coinNumber.innerText=currentCoin-20;
    }else{
        window.alert("❌ You don’t have enough coins. A minimum of 20 coins is required to make a call.");
    }
  });
}
