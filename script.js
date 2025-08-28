function textToNumber(select)
{
    return parseInt(select.innerText);
}


// heart update javascript code
let heartSelector=document.querySelectorAll(".heart")
for(let h of heartSelector)
{
    h.addEventListener("click",function(e){
      
        
       let heartValueSelect=document.getElementById("heart-value")
       let heartCurrentValue=textToNumber(heartValueSelect)
       heartValueSelect.innerText=heartCurrentValue+1;
        
    })
}



