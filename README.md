<!DOCTYPE html>
<html lang="fa" dir="rtl"><meta name="google-site-verification" content="lZLR5uhyQqsieKLPlzF1qPCvRwreEXdlfhfuPFujwiE" />
<head><head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Crypto Wallet</title>

<meta name="description" content="Crypto Wallet - Secure digital wallet for BTC BCH LTC DOGE">

<meta name="google-site-verification" content="lZLR5uhyQqsieKLPlzF1qPCvRwreEXdlfhfuPFujwiE" />

</head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Crypto Wallet</title>

<style>
body{
    margin:0;
    font-family:tahoma,Arial;
    background:#111;
    color:white;
}

.header{
    background:#000;
    padding:20px;
    text-align:center;
    font-size:24px;
    color:#ff9800;
}

.price-box{
    display:flex;
    gap:10px;
    padding:15px;
    overflow:auto;
}

.price{
    background:#222;
    padding:12px;
    border-radius:15px;
    min-width:140px;
}

.green{
    color:#00ff66;
}

.wallet{
    padding:20px;
}

.coin{
    background:#222;
    margin:12px 0;
    padding:20px;
    border-radius:18px;
    cursor:pointer;
    display:flex;
    justify-content:space-between;
}

.coin:hover{
    background:#333;
}

.page{
    display:none;
    padding:20px;
}

button{
    width:100%;
    padding:15px;
    border:0;
    border-radius:15px;
    margin:8px 0;
    font-size:18px;
    cursor:pointer;
}

.send{
    background:#ff9800;
}

.receive{
    background:#00c853;
}

.address{
    background:#222;
    padding:15px;
    border-radius:15px;
    word-break:break-all;
}
</style>

</head>

<body>

<div class="header">
💰 کیف پول کریپتو
</div>


<div class="price-box">

<div class="price">
🟢 BTC<br>
<span>Bitcoin</span>
</div>

<div class="price">
🟢 BCH<br>
<span>Bitcoin Cash</span>
</div>

<div class="price">
🟢 LTC<br>
<span>Litecoin</span>
</div>

<div class="price">
🟢 DOGE<br>
<span>Dogecoin</span>
</div>

</div>


<div id="home" class="wallet">

<h3>ارزهای من</h3>

<div class="coin" onclick="openCoin('BTC')">
₿ Bitcoin
<span>BTC</span>
</div>

<div class="coin" onclick="openCoin('BCH')">
🟢 Bitcoin Cash
<span>BCH</span>
</div>

<div class="coin" onclick="openCoin('LTC')">
⚡ Litecoin
<span>LTC</span>
</div>

<div class="coin" onclick="openCoin('DOGE')">
🐕 Dogecoin
<span>DOGE</span>
</div>

</div>



<div id="coinPage" class="page">

<h2 id="coinName"></h2>

<button class="send" onclick="alert('صفحه ارسال در مرحله بعد متصل می‌شود')">
ارسال
</button>

<button class="receive" onclick="showReceive()">
دریافت
</button>

<div id="receiveBox"></div>

<br>

<button onclick="back()">
بازگشت
</button>

</div>



<script>

let addresses={

BTC:"1Q99GpYnEU9yELNLjiJUWopNT1HatRYQrV",

BCH:"bitcoincash:qrj64uh0xlah2wzksudq3g5eeg2ewdyg6urq5kywku",

LTC:"LZeRDFWbPLpuqeAw7m5i5YcYiu32RAM6c",

DOGE:"DA9xxxxxxxxxxxxxxxxxxxxxxxx"

};


let current="";


function openCoin(c){

current=c;

document.getElementById("home").style.display="none";

document.getElementById("coinPage").style.display="block";

document.getElementById("coinName").innerHTML=c+" Wallet";

}


function showReceive(){

document.getElementById("receiveBox").innerHTML=

"<h3>آدرس دریافت "+current+"</h3>"+
"<div class='address'>"+
addresses[current]+
"</div>";

}


function back(){

document.getElementById("coinPage").style.display="none";

document.getElementById("home").style.display="block";

}

</script>


</body>
</html>
