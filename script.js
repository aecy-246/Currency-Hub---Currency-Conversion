const FromSelect = document.querySelector("#fromSelect");
const ToSelect = document.querySelector("#toSelect");
const input = document.querySelector("#amount");
const output = document.querySelector("#result");
const btn = document.getElementById("btn");
const flipbtn = document.querySelector(".swap-button");
let from = FromSelect.value;
let to = ToSelect.value;
const info2 = document.querySelector("#info2");
const info1 = document.querySelector("#info1");
const info3 = document.querySelector("#info3");
const inputLogo = document.querySelector("#inputlogo");
const outputLogo = document.querySelector("#outputlogo");

const convert = async function(){
    let mul;
    from = FromSelect.value;
    to = ToSelect.value;
    if(from === "USD"){
        const URL = "https://open.er-api.com/v6/latest/USD";
        const promise = await fetch(URL);
        let FromData = await promise.json();
        if(to==="INR"){
            mul = FromData.rates[to]; // This is an alternative to the long if else
        }
        else if(to==="USD"){
            mul = 1;
        }
        else if(to==="EUR"){
            mul = FromData.rates.EUR;
        }
        else if(to==="GBP"){
            mul = FromData.rates.GBP;
        }
        else if(to==="JPY"){
            mul = FromData.rates.JPY;
        }
        else if(to==="CAD"){
            mul = FromData.rates.CAD;
        }
        else if(to==="AUD"){
            mul = FromData.rates.AUD;
        }
    }


    else if(from === "INR"){
        const URL = "https://open.er-api.com/v6/latest/INR";
        const promise = await fetch(URL);
        let FromData = await promise.json();
        if(to==="INR"){
            mul =1;
        }
        else if(to==="USD"){
            mul = FromData.rates.USD;
        }
        else if(to==="EUR"){
            mul = FromData.rates.EUR;
        }
        else if(to==="GBP"){
            mul = FromData.rates.GBP;
        }
        else if(to==="JPY"){
            mul = FromData.rates.JPY;
        }
        else if(to==="CAD"){
            mul = FromData.rates.CAD;
        }
        else if(to==="AUD"){
            mul = FromData.rates.AUD;
        }
    }


    else if(from === "EUR"){
        const URL = "https://open.er-api.com/v6/latest/EUR";
        const promise = await fetch(URL);
        let FromData = await promise.json();
        if(to==="INR"){
            mul = FromData.rates.INR;
        }
        else if(to==="USD"){
            mul = FromData.rates.USD;
        }
        else if(to==="EUR"){
            mul = 1;
        }
        else if(to==="GBP"){
            mul = FromData.rates.GBP;
        }
        else if(to==="JPY"){
            mul = FromData.rates.JPY;
        }
        else if(to==="CAD"){
            mul = FromData.rates.CAD;
        }
        else if(to==="AUD"){
            mul = FromData.rates.AUD;
        }
    }
    else if(from === "GBP"){
        const URL = "https://open.er-api.com/v6/latest/GBP";
        const promise = await fetch(URL);
        let FromData = await promise.json();
        if(to==="INR"){
            mul = FromData.rates.INR;
        }
        else if(to==="USD"){
            mul = FromData.rates.USD;
        }
        else if(to==="EUR"){
            mul = FromData.rates.EUR;
        }
        else if(to==="GBP"){
            mul = 1;
        }
        else if(to==="JPY"){
            mul = FromData.rates.JPY;
        }
        else if(to==="CAD"){
            mul = FromData.rates.CAD;
        }
        else if(to==="AUD"){
            mul = FromData.rates.AUD;
        }
    }
    else if(from === "JPY"){
        const URL = "https://open.er-api.com/v6/latest/JPY";
        const promise = await fetch(URL);
        let FromData = await promise.json();
        if(to==="INR"){
            mul = FromData.rates.INR;
        }
        else if(to==="USD"){
            mul = FromData.rates.USD;
        }
        else if(to==="EUR"){
            mul = FromData.rates.EUR;
        }
        else if(to==="GBP"){
            mul = FromData.rates.GBP;
        }
        else if(to==="JPY"){
            mul = 1;
        }
        else if(to==="CAD"){
            mul = FromData.rates.CAD;
        }
        else if(to==="AUD"){
            mul = FromData.rates.AUD;
        }
    }
    else if(from === "CAD"){
        const URL = "https://open.er-api.com/v6/latest/CAD";
        const promise = await fetch(URL);
        let FromData = await promise.json();
        if(to==="INR"){
            mul = FromData.rates.INR;
        }
        else if(to==="USD"){
            mul = FromData.rates.USD;
        }
        else if(to==="EUR"){
            mul = FromData.rates.EUR;
        }
        else if(to==="GBP"){
            mul = FromData.rates.GBP;
        }
        else if(to==="JPY"){
            mul = FromData.rates.JPY;
        }
        else if(to==="CAD"){
            mul = 1;
        }
        else if(to==="AUD"){
            mul = FromData.rates.AUD;
        }
    }
    else if(from === "AUD"){
        const URL = "https://open.er-api.com/v6/latest/AUD";
        const promise = await fetch(URL);
        let FromData = await promise.json();
        if(to==="INR"){
            mul = FromData.rates.INR;
        }
        else if(to==="USD"){
            mul = FromData.rates.USD;
        }
        else if(to==="EUR"){
            mul = FromData.rates.EUR;
        }
        else if(to==="GBP"){
            mul = FromData.rates.GBP;
        }
        else if(to==="JPY"){
            mul = FromData.rates.JPY;
        }
        else if(to==="CAD"){
            mul = FromData.rates.CAD;
        }
        else if(to==="AUD"){
            mul = 1;
        }
    }
    output.textContent=(input.value*mul).toFixed(2);
    info2.textContent = mul.toFixed(4);
    info1.textContent = from;
    info3.textContent = to;
}


const flip = function(){
    FromSelect.value = to;
    ToSelect.value = from;
    from = FromSelect.value;
    to = ToSelect.value;
}


btn.addEventListener("click", convert);

flipbtn.addEventListener("click", flip);