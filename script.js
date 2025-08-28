function textToNumber(select) {
  return parseInt(select.innerText);
}


function objectMaker(service,number,time)
{
    let singleHistory={
        service:service,
        number:number,
        time:time
    }
    return singleHistory;
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
let data=[];
for (let h of callBtn) {
  h.addEventListener("click", function (e) {
    let serviceName=e.target.parentNode.parentNode.querySelector(".service-name").innerText;
    let serviceSubName=e.target.parentNode.parentNode.querySelector(".service-subname").innerText;
    let serviceNumber=e.target.parentNode.parentNode.querySelector(".service-number").innerText;
    let coinNumber=document.getElementById("coin")
    let currentCoin=textToNumber(coinNumber);
    if(currentCoin>=20)
    {
        window.alert(`📞 Calling ${serviceSubName} ${serviceNumber}...`)
        coinNumber.innerText=currentCoin-20;
        
        let date= new Date();
        let  hours= date.getHours();
        let minute=date.getMinutes();
        let seconds=date.getSeconds();
        let ampm=hours>=12?"PM":"AM";
        hours=(hours<=12?hours:hours-12);
        hours=hours?hours:12;
        let time=( hours<10?" "+hours:hours) + ":"+ (minute<10?"0"+minute:minute)+":" +(seconds<10?"0"+seconds:seconds )+" "+ampm;
        data.push(objectMaker(serviceName,serviceNumber,time));
    
        let dataContainer=document.getElementById("history-container");
        dataContainer.innerHTML="";
        for(let ele of data){
            let createDiv=document.createElement("div");
            createDiv.innerHTML=`
                <div class="my-3">
                          <div class="bg-[#fafafa] flex rounded-xl p-3">
                    <div class="w-3/5">
                      <h1 class="inter text-lg font-semibold">${ele.service}</h1>
                      <p class="text=[#5c5c5c] text-lg hind-madurai">${ele.number}</p>
                    </div>
                    <div class="flex items-center justify-center w-2/5">
                      <p id="time" class="hind-madurai text-lg font-normaln text-[#111111]">${ele.time}</p>
                    </div>
                  </div>
                  </div>
            `
            dataContainer.appendChild(createDiv);
        }
    }else{
        window.alert("❌ You don’t have enough coins. A minimum of 20 coins is required to make a call.");
    }
  });
}



// copy text section

let copyBtn=document.querySelectorAll(".copy-btn")
for (let copy of copyBtn) {
  copy.addEventListener("click", function (e) {
    let copyNumberSelector=document.getElementById("copy");
    let currentCopyNumber=textToNumber(copyNumberSelector);
    let serviceNumber=e.target.parentNode.parentNode.querySelector(".service-number").innerText;
    window.navigator.clipboard.writeText(serviceNumber);
    window.alert(`The number has been copied. ${serviceNumber}`);
    copyNumberSelector.innerText=currentCopyNumber+1;
  });
}

document.getElementById("clear-btn").addEventListener("click",function(){
    data=[];
    document.getElementById("history-container").innerHTML="";
})

