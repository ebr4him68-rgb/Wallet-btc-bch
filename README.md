<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">

<title>Wallet BTC BCH</title>

<style>
body{
margin:0;
font-family:tahoma;
background:#050505;
color:white;
text-align:center;
}

.box{
max-width:420px;
margin:20px auto;
padding:20px;
}

.logo{
font-size:45px;
}

.card{
background:#151515;
border-radius:25px;
padding:20px;
margin:15px 0;
box-shadow:0 0 20px #333;
}

input{
width:90%;
padding:13px;
margin:8px;
border-radius:12px;
border:0;
font-size:16px;
}

button{
padding:12px 25px;
border:0;
border-radius:15px;
background:#f5b700;
font-size:17px;
cursor:pointer;
}

.coin{
display:flex;
justify-content:center;
gap:10px;
align-items:center;
font-size:18px;
}

.dot{
width:12px;
height:12px;
background:#00ff00;
border-radius:50%;
display:inline-block;
animation:blink 1s infinite;
}

@keyframes blink{
50%{opacity:.2}
}

.menu{
display:none;
}

</style>
</head>


<body>

<div class="box">

<div class="logo">
🟠 ₿ 🟢
</div>

<h1>Wallet BTC BCH</h1>


<div class="card">

<h3>قیمت زنده</h3>

<div class="coin">
₿ Bitcoin
<span class="dot"></span>
</div>
<p id="btc">درحال دریافت...</p>


<div class="coin">
🟢 Bitcoin Cash
<span class="dot"></span>
</div>
<p id="bch">درحال دریافت...</p>

</div>



<div class="card" id="login">

<h2>ورود به کیف</h2>

<input id="email" placeholder="ایمیل">

<input id="pass" type="password" placeholder="رمز عبور">

<br>

<button onclick="login()">
ورود
</button>

</div>



<div class="card menu" id="wallet">

<h2>خوش آمدید</h2>

<p id="user"></p>

<hr>

<h3>تنظیمات</h3>

<input id="oldpass" placeholder="رمز قبلی">

<input id="newpass" placeholder="رمز جدید">

<input id="newpass2" placeholder="تکرار رمز جدید">

<button onclick="changePass()">
تغییر رمز
</button>


<br><br>

<button onclick="admin()">
پنل مدیریت
</button>

</div>


</div>



<script>

let savedEmail=localStorage.getItem("email");
let savedPass=localStorage.getItem("pass");


function login(){

let e=document.getElementById("email").value;
let p=document.getElementById("pass").value;


if(!savedEmail){

localStorage.setItem("email",e);
localStorage.setItem("pass",p);

alert("حساب ساخته شد");

}else if(e==savedEmail && p==savedPass){

openWallet();

}else{

alert("ایمیل یا رمز اشتباه است");

}

}



function openWallet(){

document.getElementById("login").style.display="none";

document.getElementById("wallet").style.display="block";

document.getElementById("user").innerHTML=
"ایمیل: "+localStorage.getItem("email");

}



function changePass(){

let old=document.getElementById("oldpass").value;
let n1=document.getElementById("newpass").value;
let n2=document.getElementById("newpass2").value;


if(old==localStorage.getItem("pass") && n1==n2){

localStorage.setItem("pass",n1);

alert("رمز تغییر کرد");

}else{

alert("رمز قبلی یا تکرار جدید اشتباه است");

}

}



function admin(){

let p=prompt("رمز مدیریت:");

if(p=="Admin321"){

alert("ورود مدیر موفق شد");

}else{

alert("رمز اشتباه");

}

}



async function prices(){

try{

let r=await fetch(
"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,bitcoin-cash&vs_currencies=usd"
);

let d=await r.json();

btc.innerHTML=d.bitcoin.usd+" USD";

bch.innerHTML=d["bitcoin-cash"].usd+" USD";


}catch(e){}

}


prices();

setInterval(prices,60000);


</script>


</body>
</html>
