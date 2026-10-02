<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Wallet BTC BCH</title>

<style>
body{
margin:0;
font-family:tahoma;
background:#111;
color:white;
text-align:center;
transition:.3s;
}

.container{
max-width:450px;
margin:20px auto;
padding:20px;
}

.card{
background:#222;
border-radius:20px;
padding:20px;
margin:15px 0;
}

h1{
color:#f5b700;
}

.price{
font-size:20px;
margin:10px;
}

.dot{
display:inline-block;
width:12px;
height:12px;
background:#00ff00;
border-radius:50%;
animation:blink 1s infinite;
}

@keyframes blink{
50%{opacity:.2;}
}

button{
border:0;
padding:12px 25px;
border-radius:15px;
font-size:16px;
cursor:pointer;
}

.themes button{
margin:5px;
}

.gold{background:#b8860b;}
.green{background:#006400;}
.yellow{background:#ffd700;color:#000;}
.red{background:#8b0000;}
.blue{background:#003399;}
.black{background:#000;}
</style>

</head>

<body>

<div class="container">

<h1>🔐 Wallet BTC BCH</h1>

<div class="card">

<h2>قیمت آنلاین</h2>

<div class="price">
🟠 Bitcoin 
<span class="dot"></span>
<br>
<span id="btc">درحال دریافت...</span>
</div>


<div class="price">
🟢 Bitcoin Cash
<span class="dot"></span>
<br>
<span id="bch">درحال دریافت...</span>
</div>

</div>


<div class="card">

<h2>کیف پول</h2>

<button>
ساخت کیف Bitcoin
</button>

<br><br>

<button>
ساخت کیف Bitcoin Cash
</button>

</div>


<div class="card themes">

<h3>تم کیف</h3>

<button class="gold" onclick="theme('#b8860b')">طلایی</button>
<button class="green" onclick="theme('#006400')">سبز</button>
<button class="yellow" onclick="theme('#ffd700')">زرد</button>
<button class="red" onclick="theme('#8b0000')">قرمز</button>
<button class="blue" onclick="theme('#003399')">آبی</button>
<button class="black" onclick="theme('#000')">مشکی</button>

</div>

</div>


<script>

function theme(color){
document.body.style.background=color;
}


async function price(){

try{

let btc=await fetch(
'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,bitcoin-cash&vs_currencies=usd'
);

let data=await btc.json();

document.getElementById("btc").innerHTML=
data.bitcoin.usd+" USD";

document.getElementById("bch").innerHTML=
data["bitcoin-cash"].usd+" USD";


}catch(e){

document.getElementById("btc").innerHTML="خطا";
document.getElementById("bch").innerHTML="خطا";

}

}

price();
setInterval(price,60000);

</script>

</body>
</html>
