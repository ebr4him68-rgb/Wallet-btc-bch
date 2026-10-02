<link rel="manifest" href="manifest.json">
<html lang="fa" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>My Crypto Wallet</title>

<style>
*{box-sizing:border-box}

body{
    margin:0;
    font-family:Tahoma,Arial,sans-serif;
    background:
      radial-gradient(circle at 20% 10%,#27335d 0,#11172d 35%,#080b16 100%);
    color:#fff;
    min-height:100vh;
}

button,input{
    font-family:inherit;
}

.container{
    width:min(1100px,94%);
    margin:auto;
}

header{
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding:20px 0;
    gap:12px;
}

.logo{
    font-size:22px;
    font-weight:bold;
}

.logo span{
    color:#f5b942;
}

.bell{
    position:relative;
    width:48px;
    height:48px;
    border:0;
    border-radius:50%;
    background:#171e35;
    color:#ffd45c;
    font-size:23px;
    cursor:pointer;
    box-shadow:0 8px 25px #0005;
}

.badge{
    position:absolute;
    top:-3px;
    left:-3px;
    background:#e53935;
    color:white;
    width:21px;
    height:21px;
    border-radius:50%;
    font-size:11px;
    display:none;
    align-items:center;
    justify-content:center;
}

.pricebar{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:12px;
    margin-bottom:20px;
}

.price{
    background:#11182b;
    border:1px solid #293452;
    border-radius:18px;
    padding:14px;
}

.price-title{
    color:#aeb8d1;
    font-size:13px;
}

.price-value{
    margin-top:6px;
    font-size:20px;
    font-weight:bold;
}

.wallet{
    background:rgba(14,20,38,.94);
    border:1px solid #293452;
    border-radius:28px;
    padding:25px;
    box-shadow:0 25px 70px #0006;
}

.auth{
    max-width:450px;
    margin:70px auto;
}

h1,h2,h3{
    margin-top:0;
}

.subtitle{
    color:#aeb8d1;
    line-height:1.8;
}

input{
    width:100%;
    padding:15px;
    margin:7px 0 12px;
    border-radius:13px;
    border:1px solid #303b5b;
    background:#0b1020;
    color:#fff;
    outline:none;
    font-size:15px;
}

input:focus{
    border-color:#f5b942;
}

.btn{
    border:0;
    border-radius:14px;
    padding:14px 18px;
    cursor:pointer;
    font-size:15px;
    font-weight:bold;
    transition:.2s;
}

.btn:hover{
    transform:translateY(-1px);
}

.primary{
    background:#f5b942;
    color:#15100a;
}

.secondary{
    background:#202a46;
    color:white;
}

.danger{
    background:#54252c;
    color:#fff;
}

.coin-select{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:15px;
    margin:20px 0;
}

.coin{
    background:#121a30;
    border:1px solid #303b5b;
    border-radius:20px;
    padding:18px;
    cursor:pointer;
    text-align:center;
}

.coin.active{
    border-color:#f5b942;
    background:#241f13;
}

.coin-icon{
    font-size:30px;
    margin-bottom:8px;
}

.coin-name{
    font-weight:bold;
}

.coin-symbol{
    color:#9da8c1;
    margin-top:4px;
}

.balance{
    text-align:center;
    padding:25px 10px;
}

.balance-label{
    color:#9da8c1;
}

.balance-number{
    font-size:42px;
    font-weight:bold;
    margin:10px 0;
    word-break:break-word;
}

.balance-usd{
    color:#f5b942;
    font-size:17px;
}

.actions{
    display:grid;
    grid-template-columns:1fr 1fr;
    gap:15px;
    margin:20px 0;
}

.receive-card,
.send-card{
    background:#10182b;
    border:1px solid #293452;
    border-radius:20px;
    padding:20px;
    margin-top:18px;
}

.address{
    background:#080d19;
    border:1px dashed #465270;
    border-radius:12px;
    padding:14px;
    word-break:break-all;
    direction:ltr;
    text-align:left;
    margin:12px 0;
    color:#dfe6f8;
}

.copy{
    width:100%;
}

.status{
    margin-top:15px;
    padding:13px;
    border-radius:12px;
    background:#15253b;
    color:#bcd7ff;
    display:none;
}

.notifications{
    display:none;
    position:absolute;
    left:3%;
    right:3%;
    top:82px;
    max-width:430px;
    margin-left:auto;
    z-index:20;
    background:#11182b;
    border:1px solid #35405d;
    border-radius:20px;
    padding:18px;
    box-shadow:0 25px 70px #0008;
}

.notification{
    border-bottom:1px solid #293452;
    padding:13px 0;
}

.notification:last-child{
    border-bottom:0;
}

.notification small{
    color:#8792aa;
}

.empty{
    color:#8792aa;
    text-align:center;
    padding:15px;
}

.footer{
    text-align:center;
    color:#68738c;
    font-size:12px;
    padding:25px;
}

.hidden{
    display:none!important;
}

.logout{
    margin-top:20px;
    text-align:center;
}

@media(max-width:600px){
    .pricebar{
        grid-template-columns:1fr;
    }

    .wallet{
        padding:17px;
        border-radius:22px;
    }

    .balance-number{
        font-size:31px;
    }

    .actions{
        grid-template-columns:1fr 1fr;
    }

    .coin-select{
        gap:9px;
    }
}
</style>
</head>

<body>

<div class="container">

<header>
    <div class="logo">CRYPTO <span>WALLET</span></div>

    <button class="bell" id="bellBtn" type="button">
        🔔
        <span class="badge" id="badge">0</span>
    </button>
</header>

<div class="notifications" id="notifications">
    <h3>اعلان‌ها</h3>
    <div id="notificationList">
        <div class="empty">اعلانی وجود ندارد</div>
    </div>
</div>

<!-- LOGIN -->
<section id="authSection" class="wallet auth">

    <h2>ورود به کیف پول</h2>

    <p class="subtitle">
        با ایمیل و رمز عبور وارد کیف پول خود شوید.
    </p>

    <label>ایمیل</label>
    <input id="email" type="email" placeholder="example@email.com">

    <label>رمز عبور</label>
    <input id="password" type="password" placeholder="رمز عبور">

    <button class="btn primary" id="loginBtn" style="width:100%">
        ورود / ثبت‌نام
    </button>

    <div id="authMessage" class="status"></div>

</section>


<!-- WALLET -->
<section id="walletSection" class="wallet hidden">

    <div style="display:flex;justify-content:space-between;align-items:center;gap:10px">
        <div>
            <h2>کیف پول من</h2>
            <div id="userEmail" class="subtitle"></div>
        </div>
    </div>


    <!-- COIN SELECT -->
    <div class="coin-select">

        <div class="coin active" id="btcCoin">
            <div class="coin-icon">₿</div>
            <div class="coin-name">Bitcoin</div>
            <div class="coin-symbol">BTC</div>
        </div>

        <div class="coin" id="bchCoin">
            <div class="coin-icon">₿</div>
            <div class="coin-name">Bitcoin Cash</div>
            <div class="coin-symbol">BCH</div>
        </div>

    </div>


    <!-- BALANCE -->
    <div class="balance">

        <div class="balance-label">
            موجودی <span id="coinLabel">BTC</span>
        </div>

        <div class="balance-number" id="balance">
            0.00000000
        </div>

        <div class="balance-usd" id="balanceUsd">
            ارزش تقریبی: $0
        </div>

    </div>


    <!-- ACTIONS -->
    <div class="actions">

        <button class="btn primary" id="receiveBtn">
            ↓ دریافت
        </button>

        <button class="btn secondary" id="sendBtn">
            ↑ ارسال
        </button>

    </div>


    <!-- RECEIVE -->
    <div class="receive-card hidden" id="receiveCard">

        <h3>دریافت <span id="receiveCoin">BTC</span></h3>

        <p class="subtitle">
            این آدرس را برای دریافت ارز انتخاب‌شده استفاده کنید.
        </p>

        <div class="address" id="receiveAddress"></div>

        <button class="btn secondary copy" id="copyBtn">
            📋 کپی آدرس
        </button>

        <div class="status" id="copyStatus"></div>

    </div>


    <!-- SEND -->
    <div class="send-card hidden" id="sendCard">

        <h3>ارسال <span id="sendCoin">BTC</span></h3>

        <label>آدرس مقصد</label>

        <input
            id="destination"
            type="text"
            dir="ltr"
            placeholder="آدرس کیف پول مقصد"
        >

        <label>مقدار <span id="amountCoin">BTC</span></label>

        <input
            id="amount"
            type="number"
            min="0"
            step="any"
            placeholder="0.00000000"
        >

        <button class="btn primary" id="requestBtn" style="width:100%">
            ایجاد درخواست ارسال
        </button>

        <div class="status" id="requestStatus"></div>

    </div>


    <div class="logout">
        <button class="btn danger" id="logoutBtn">
            خروج از کیف
        </button>
    </div>

</section>


<div class="footer">
    BTC / BCH Wallet
</div>

</div>


<script>
/* =========================================================
   WALLET SETTINGS
========================================================= */

const RECEIVE_ADDRESSES = {
    BTC: "1Q99GpYnEU9yELNLjiJUWopNT1HatRYQrV",
    BCH: "bitcoincash:qrj64uh0xlah2wzksudq3g5eeg2ewdyg6urq5kywku"
};


/* =========================================================
   LOCAL DATA
========================================================= */

let selectedCoin = "BTC";

let prices = {
    BTC: 0,
    BCH: 0
};

let notifications = [];

let currentUser = null;


/* =========================================================
   ELEMENTS
========================================================= */

const authSection = document.getElementById("authSection");
const walletSection = document.getElementById("walletSection");

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const loginBtn = document.getElementById("loginBtn");
const logoutBtn = document.getElementById("logoutBtn");

const userEmail = document.getElementById("userEmail");

const btcCoin = document.getElementById("btcCoin");
const bchCoin = document.getElementById("bchCoin");

const coinLabel = document.getElementById("coinLabel");
const balance = document.getElementById("balance");
const balanceUsd = document.getElementById("balanceUsd");

const receiveBtn = document.getElementById("receiveBtn");
const sendBtn = document.getElementById("sendBtn");

const receiveCard = document.getElementById("receiveCard");
const sendCard = document.getElementById("sendCard");

const receiveCoin = document.getElementById("receiveCoin");
const sendCoin = document.getElementById("sendCoin");
const amountCoin = document.getElementById("amountCoin");

const receiveAddress = document.getElementById("receiveAddress");
const copyBtn = document.getElementById("copyBtn");
const copyStatus = document.getElementById("copyStatus");

const destination = document.getElementById("destination");
const amount = document.getElementById("amount");

const requestBtn = document.getElementById("requestBtn");
const requestStatus = document.getElementById("requestStatus");

const bellBtn = document.getElementById("bellBtn");
const notificationsBox = document.getElementById("notifications");
const notificationList = document.getElementById("notificationList");
const badge = document.getElementById("badge");


/* =========================================================
   SIMPLE LOCAL ACCOUNT
========================================================= */

function getAccounts(){
    try{
        return JSON.parse(localStorage.getItem("walletAccounts") || "{}");
    }catch{
        return {};
    }
}

function saveAccounts(accounts){
    localStorage.setItem("walletAccounts", JSON.stringify(accounts));
}


/* =========================================================
   LOGIN / REGISTER
========================================================= */

loginBtn.addEventListener("click", function(){

    const email = emailInput.value.trim().toLowerCase();
    const password = passwordInput.value;

    if(!email || !email.includes("@")){
        showAuth("لطفاً ایمیل معتبر وارد کنید.");
        return;
    }

    if(password.length < 6){
        showAuth("رمز عبور باید حداقل ۶ کاراکتر باشد.");
        return;
    }

    const accounts = getAccounts();

    if(!accounts[email]){

        accounts[email] = {
            email: email,
            password: password,
            balance: {
                BTC: 0,
                BCH: 0
            }
        };

        saveAccounts(accounts);

    }else{

        if(accounts[email].password !== password){
            showAuth("ایمیل یا رمز عبور صحیح نیست.");
            return;
        }

    }

    currentUser = accounts[email];

    localStorage.setItem("loggedWalletUser", email);

    openWallet();

});


function showAuth(message){

    const box = document.getElementById("authMessage");

    box.textContent = message;
    box.style.display = "block";

}


/* =========================================================
   OPEN WALLET
========================================================= */

function openWallet(){

    authSection.classList.add("hidden");
    walletSection.classList.remove("hidden");

    userEmail.textContent = currentUser.email;

    loadNotifications();

    updateWallet();

}


/* =========================================================
   LOGOUT
========================================================= */

logoutBtn.addEventListener("click", function(){

    localStorage.removeItem("loggedWalletUser");

    currentUser = null;

    walletSection.classList.add("hidden");
    authSection.classList.remove("hidden");

});


/* =========================================================
   COIN SELECT
========================================================= */

btcCoin.addEventListener("click", function(){

    selectedCoin = "BTC";

    btcCoin.classList.add("active");
    bchCoin.classList.remove("active");

    updateWallet();

});


bchCoin.addEventListener("click", function(){

    selectedCoin = "BCH";

    bchCoin.classList.add("active");
    btcCoin.classList.remove("active");

    updateWallet();

});


/* =========================================================
   UPDATE WALLET
========================================================= */

function updateWallet(){

    coinLabel.textContent = selectedCoin;

    receiveCoin.textContent = selectedCoin;
    sendCoin.textContent = selectedCoin;
    amountCoin.textContent = selectedCoin;

    receiveAddress.textContent =
        RECEIVE_ADDRESSES[selectedCoin];

    const value =
        currentUser?.balance?.[selectedCoin] || 0;

    balance.textContent =
        Number(value).toFixed(8);

    const usd =
        Number(value) * Number(prices[selectedCoin] || 0);

    balanceUsd.textContent =
        "ارزش تقریبی: $" + formatUSD(usd);

}


/* =========================================================
   RECEIVE
========================================================= */

receiveBtn.addEventListener("click", function(){

    receiveCard.classList.remove("hidden");
    sendCard.classList.add("hidden");

    receiveAddress.textContent =
        RECEIVE_ADDRESSES[selectedCoin];

});


/* =========================================================
   SEND
========================================================= */

sendBtn.addEventListener("click", function(){

    sendCard.classList.remove("hidden");
    receiveCard.classList.add("hidden");

    destination.focus();

});


/* =========================================================
   COPY ADDRESS
========================================================= */

copyBtn.addEventListener("click", async function(){

    const address =
        RECEIVE_ADDRESSES[selectedCoin];

    try{

        await navigator.clipboard.writeText(address);

        copyStatus.textContent =
            "آدرس با موفقیت کپی شد.";

        copyStatus.style.display = "block";

    }catch{

        copyStatus.textContent =
            "کپی خودکار انجام نشد؛ آدرس را دستی کپی کنید.";

        copyStatus.style.display = "block";

    }

});


/* =========================================================
   CREATE SEND REQUEST
========================================================= */

requestBtn.addEventListener("click", function(){

    const address =
        destination.value.trim();

    const value =
        Number(amount.value);

    if(!address){
        showRequest("آدرس مقصد را وارد کنید.");
        return;
    }

    if(!Number.isFinite(value) || value <= 0){
        showRequest("مقدار معتبر وارد کنید.");
        return;
    }

    const request = {

        id: "REQ-" + Date.now(),

        email: currentUser.email,

        coin: selectedCoin,

        amount: value,

        destination: address,

        status: "در حال بررسی",

        createdAt: new Date().toLocaleString("fa-IR")

    };


    /* درخواست‌ها فعلاً در مرورگر ذخیره می‌شوند */
    const requests =
        JSON.parse(localStorage.getItem("sendRequests") || "[]");

    requests.push(request);

    localStorage.setItem(
        "sendRequests",
        JSON.stringify(requests)
    );


    /* اعلان برای کاربر */

    addNotification({

        title: "درخواست ارسال ثبت شد",

        message:
            `${value} ${selectedCoin} به آدرس مقصد ثبت شد و در حال بررسی است.`,

        date:
            new Date().toLocaleString("fa-IR")

    });


    showRequest(
        "درخواست ارسال ایجاد شد و وضعیت آن «در حال بررسی» است."
    );


    destination.value = "";
    amount.value = "";

});


function showRequest(message){

    requestStatus.textContent = message;

    requestStatus.style.display = "block";

}


/* =========================================================
   NOTIFICATIONS
========================================================= */

function loadNotifications(){

    try{

        notifications =
            JSON.parse(
                localStorage.getItem(
                    "walletNotifications_" + currentUser.email
                ) || "[]"
            );

    }catch{

        notifications = [];

    }

    renderNotifications();

}


function saveNotifications(){

    localStorage.setItem(

        "walletNotifications_" + currentUser.email,

        JSON.stringify(notifications)

    );

}


function addNotification(item){

    notifications.unshift(item);

    if(notifications.length > 50){

        notifications =
            notifications.slice(0,50);

    }

    saveNotifications();

    renderNotifications();

}


function renderNotifications(){

    notificationList.innerHTML = "";

    if(notifications.length === 0){

        notificationList.innerHTML =
            '<div class="empty">اعلانی وجود ندارد</div>';

        badge.style.display = "none";

        return;

    }


    notifications.forEach(function(item){

        const div =
            document.createElement("div");

        div.className = "notification";

        div.innerHTML = `

            <strong>${escapeHTML(item.title)}</strong>

            <div style="margin-top:6px">
                ${escapeHTML(item.message)}
            </div>

            <small>
                ${escapeHTML(item.date)}
            </small>

        `;

        notificationList.appendChild(div);

    });


    badge.textContent =
        notifications.length > 99
        ? "99+"
        : notifications.length;

    badge.style.display = "flex";

}


bellBtn.addEventListener("click", function(){

    if(
        notificationsBox.style.display === "block"
    ){

        notificationsBox.style.display = "none";

    }else{

        notificationsBox.style.display = "block";

    }

});


/* =========================================================
   PRICE DATA
========================================================= */

/*
   قیمت‌ها از CoinGecko دریافت می‌شوند.
   برای نسخه نهایی می‌توانیم Backend بسازیم تا
   قیمت‌ها را از چندین منبع جمع‌آوری و میانگین‌گیری کند.
*/

async function loadPrices(){

    try{

        const response = await fetch(
            "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cbitcoin-cash&vs_currencies=usd"
        );

        if(!response.ok){
            throw new Error("Price API error");
        }

        const data = await response.json();

        prices.BTC =
            Number(data.bitcoin?.usd || 0);

        prices.BCH =
            Number(data["bitcoin-cash"]?.usd || 0);

        updatePriceCards();

        updateWallet();

    }catch(error){

        console.log("قیمت آنلاین دریافت نشد.");

    }

}


function updatePriceCards(){

    const btcPrice =
        document.getElementById("btcPrice");

    const bchPrice =
        document.getElementById("bchPrice");

    if(btcPrice){

        btcPrice.textContent =
            "$" + formatUSD(prices.BTC);

    }

    if(bchPrice){

        bchPrice.textContent =
            "$" + formatUSD(prices.BCH);

    }

}


function formatUSD(value){

    if(!Number.isFinite(value)){
        return "0";
    }

    return value.toLocaleString(
        "en-US",
        {
            maximumFractionDigits:2
        }
    );

}


/* =========================================================
   SECURITY HELPERS FOR DISPLAY
========================================================= */

function escapeHTML(value){

    return String(value)

        .replaceAll("&","&amp;")

        .replaceAll("<","&lt;")

        .replaceAll(">","&gt;")

        .replaceAll('"',"&quot;")

        .replaceAll("'","&#039;");

}


/* =========================================================
   RESTORE LOGIN
========================================================= */

(function restore(){

    const email =
        localStorage.getItem("loggedWalletUser");

    if(!email){
        return;
    }

    const accounts =
        getAccounts();

    if(accounts[email]){

        currentUser =
            accounts[email];

        openWallet();

    }

})();


/* =========================================================
   INITIAL PRICE LOAD + REFRESH
========================================================= */

loadPrices();

setInterval(function(){

    loadPrices();

}, 60000);


/* =========================================================
   CLOSE NOTIFICATION WHEN CLICKING OUTSIDE
========================================================= */

document.addEventListener("click", function(event){

    if(
        !notificationsBox.contains(event.target) &&
        !bellBtn.contains(event.target)
    ){

        notificationsBox.style.display = "none";

    }

});

</script>
<style>
.wallet-back-btn{
    width:100%;
    margin-bottom:15px;
    padding:13px 16px;
    border:1px solid #303b5b;
    border-radius:13px;
    background:#202a46;
    color:#fff;
    font-family:inherit;
    font-size:15px;
    font-weight:bold;
    cursor:pointer;
    transition:.2s;
}

.wallet-back-btn:hover{
    background:#2d3a5d;
    transform:translateY(-1px);
}

.wallet-back-btn:active{
    transform:scale(.98);
}
</style>

<script>
(function(){

    function addBackButton(){

        const sendCard = document.getElementById("sendCard");

        if(!sendCard){
            return;
        }

        /* جلوگیری از ساخته شدن چند دکمه */
        if(document.getElementById("walletBackButton")){
            return;
        }

        const button = document.createElement("button");

        button.id = "walletBackButton";
        button.type = "button";
        button.className = "wallet-back-btn";
        button.textContent = "← برگشت به صفحه اصلی";

        /* دکمه را اول بخش ارسال قرار می‌دهیم */
        sendCard.insertBefore(
            button,
            sendCard.firstChild
        );

        button.addEventListener("click", function(){

            /* بستن صفحه ارسال */
            sendCard.classList.add("hidden");

            /* بستن صفحه دریافت در صورت باز بودن */
            const receiveCard =
                document.getElementById("receiveCard");

            if(receiveCard){
                receiveCard.classList.add("hidden");
            }

            /* پاک کردن فرم ارسال */
            const destination =
                document.getElementById("destination");

            const amount =
                document.getElementById("amount");

            if(destination){
                destination.value = "";
            }

            if(amount){
                amount.value = "";
            }

            /* پاک کردن پیام قبلی */
            const requestStatus =
                document.getElementById("requestStatus");

            if(requestStatus){
                requestStatus.textContent = "";
                requestStatus.style.display = "none";
            }

        });

    }


    /*
      چون sendCard از قبل در صفحه وجود دارد،
      دکمه را مستقیماً اضافه می‌کنیم.
    */
    addBackButton();

})();
</script>
<style>
/* =========================
   BTC / BCH LIVE PRICE BAR
========================= */

.crypto-live-bar {
    width: 100%;
    display: flex;
    gap: 12px;
    margin: 15px 0;
    flex-wrap: wrap;
    box-sizing: border-box;
}

.crypto-live-card {
    flex: 1;
    min-width: 230px;
    background: linear-gradient(145deg, #111827, #0b1220);
    border: 1px solid #293752;
    border-radius: 17px;
    padding: 14px 16px;
    box-sizing: border-box;
    box-shadow: 0 6px 20px rgba(0,0,0,.25);
}

.crypto-live-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.crypto-coin-info {
    display: flex;
    align-items: center;
    gap: 11px;
}

/* لوگوی سکه */
.crypto-logo {
    width: 42px;
    height: 42px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    box-shadow: 0 3px 12px rgba(0,0,0,.35);
}

/* Bitcoin */
.btc-logo {
    background: #f7931a;
}

/* Bitcoin Cash */
.bch-logo {
    background: #0ac18e;
}

/* حرف B برای لوگوی بیت کوین */
.btc-logo span {
    color: white;
    font-size: 27px;
    font-weight: 900;
    font-family: Arial, sans-serif;
}

/* لوگوی BCH */
.bch-logo span {
    color: white;
    font-size: 24px;
    font-weight: 900;
    font-family: Arial, sans-serif;
}

.crypto-coin-name {
    color: #aeb9cc;
    font-size: 12px;
}

.crypto-coin-symbol {
    color: #fff;
    font-size: 18px;
    font-weight: 900;
    margin-top: 2px;
}

.crypto-live-status {
    display: flex;
    align-items: center;
    gap: 6px;
    color: #4ade80;
    font-size: 11px;
}

/* چراغ سبز چشمک زن */
.crypto-live-dot {
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: #22c55e;
    box-shadow: 0 0 9px #22c55e;
    animation: cryptoBlink 1s infinite;
}

@keyframes cryptoBlink {

    0%,100% {
        opacity: 1;
        transform: scale(1);
        box-shadow: 0 0 9px #22c55e;
    }

    50% {
        opacity: .25;
        transform: scale(.75);
        box-shadow: 0 0 2px #22c55e;
    }

}

.crypto-live-price {
    margin-top: 12px;
    color: #fff;
    font-size: 22px;
    font-weight: 900;
}

.crypto-live-source {
    margin-top: 5px;
    color: #7f8da8;
    font-size: 10px;
}

.crypto-live-count {
    margin-top: 7px;
    color: #7f8da8;
    font-size: 10px;
}

.crypto-live-count span {
    color: #4ade80;
    font-weight: bold;
}

@media(max-width:600px) {

    .crypto-live-bar {
        flex-direction: column;
    }

    .crypto-live-card {
        width: 100%;
        min-width: 100%;
    }

}
</style>


<script>
(function () {

    "use strict";


    /* =========================
       حذف نوار قیمت قبلی
    ========================= */

    const old1 =
        document.getElementById("liveCryptoPrices");

    if (old1) {
        old1.style.display = "none";
    }


    const old2 =
        document.getElementById("multiExchangePrices");

    if (old2) {
        old2.style.display = "none";
    }


    const old3 =
        document.querySelector(".pricebar");

    if (old3) {
        old3.style.display = "none";
    }


    /* =========================
       ساخت نوار جدید
    ========================= */

    function createCryptoBar() {

        if (
            document.getElementById(
                "officialCryptoLiveBar"
            )
        ) {
            return;
        }


        const bar =
            document.createElement("div");

        bar.id =
            "officialCryptoLiveBar";

        bar.className =
            "crypto-live-bar";


        bar.innerHTML = `

            <!-- ================= BTC ================= -->

            <div class="crypto-live-card">

                <div class="crypto-live-top">

                    <div class="crypto-coin-info">

                        <div class="crypto-logo btc-logo">
                            <span>₿</span>
                        </div>

                        <div>

                            <div class="crypto-coin-name">
                                Bitcoin
                            </div>

                            <div class="crypto-coin-symbol">
                                BTC
                            </div>

                        </div>

                    </div>


                    <div class="crypto-live-status">

                        <span class="crypto-live-dot"></span>

                        آنلاین

                    </div>

                </div>


                <div
                    id="officialBTCPrice"
                    class="crypto-live-price">

                    در حال دریافت...

                </div>


                <div class="crypto-live-source">
                    قیمت تجمیعی بازار
                </div>


                <div class="crypto-live-count">

                    منابع فعال:
                    <span id="officialBTCCount">
                        0
                    </span>

                </div>

            </div>


            <!-- ================= BCH ================= -->

            <div class="crypto-live-card">

                <div class="crypto-live-top">

                    <div class="crypto-coin-info">

                        <div class="crypto-logo bch-logo">

                            <span>
                                ₿
                            </span>

                        </div>

                        <div>

                            <div class="crypto-coin-name">
                                Bitcoin Cash
                            </div>

                            <div class="crypto-coin-symbol">
                                BCH
                            </div>

                        </div>

                    </div>


                    <div class="crypto-live-status">

                        <span class="crypto-live-dot"></span>

                        آنلاین

                    </div>

                </div>


                <div
                    id="officialBCHPrice"
                    class="crypto-live-price">

                    در حال دریافت...

                </div>


                <div class="crypto-live-source">
                    قیمت تجمیعی بازار
                </div>


                <div class="crypto-live-count">

                    منابع فعال:
                    <span id="officialBCHCount">
                        0
                    </span>

                </div>

            </div>

        `;


        const header =
            document.querySelector("header");


        if (
            header &&
            header.parentNode
        ) {

            header.parentNode.insertBefore(
                bar,
                header.nextSibling
            );

        } else {

            document.body.prepend(bar);

        }

    }


    /* =========================
       دریافت اطلاعات
    ========================= */

    async function getJSON(url) {

        try {

            const controller =
                new AbortController();


            const timer =
                setTimeout(
                    function () {
                        controller.abort();
                    },
                    7000
                );


            const response =
                await fetch(
                    url,
                    {
                        cache: "no-store",
                        signal: controller.signal
                    }
                );


            clearTimeout(timer);


            if (!response.ok) {
                throw new Error("API Error");
            }


            return await response.json();

        } catch (error) {

            return null;

        }

    }


    /* =========================
       بررسی قیمت
    ========================= */

    function goodPrice(value) {

        return (
            typeof value === "number" &&
            isFinite(value) &&
            value > 0
        );

    }


    /* =========================
       Binance
    ========================= */

    async function getBinance() {

        const btc =
            await getJSON(
                "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT"
            );


        const bch =
            await getJSON(
                "https://api.binance.com/api/v3/ticker/price?symbol=BCHUSDT"
            );


        return {

            btc:
                btc
                ? Number(btc.price)
                : null,

            bch:
                bch
                ? Number(bch.price)
                : null

        };

    }


    /* =========================
       Kraken
    ========================= */

    async function getKraken() {

        const btc =
            await getJSON(
                "https://api.kraken.com/0/public/Ticker?pair=XBTUSDT"
            );


        const bch =
            await getJSON(
                "https://api.kraken.com/0/public/Ticker?pair=BCHUSDT"
            );


        let btcPrice = null;
        let bchPrice = null;


        if (
            btc &&
            btc.result
        ) {

            const key =
                Object.keys(
                    btc.result
                )[0];


            if (key) {

                btcPrice =
                    Number(
                        btc.result[key].c[0]
                    );

            }

        }


        if (
            bch &&
            bch.result
        ) {

            const key =
                Object.keys(
                    bch.result
                )[0];


            if (key) {

                bchPrice =
                    Number(
                        bch.result[key].c[0]
                    );

            }

        }


        return {

            btc: btcPrice,
            bch: bchPrice

        };

    }


    /* =========================
       Coinbase
    ========================= */

    async function getCoinbase() {

        const btc =
            await getJSON(
                "https://api.coinbase.com/v2/prices/BTC-USD/spot"
            );


        const bch =
            await getJSON(
                "https://api.coinbase.com/v2/prices/BCH-USD/spot"
            );


        return {

            btc:
                btc &&
                btc.data
                ? Number(
                    btc.data.amount
                )
                : null,

            bch:
                bch &&
                bch.data
                ? Number(
                    bch.data.amount
                )
                : null

        };

    }


    /* =========================
       CoinGecko
    ========================= */

    async function getCoinGecko() {

        const data =
            await getJSON(
                "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,bitcoin-cash&vs_currencies=usd"
            );


        return {

            btc:
                data &&
                data.bitcoin
                ? Number(
                    data.bitcoin.usd
                )
                : null,

            bch:
                data &&
                data["bitcoin-cash"]
                ? Number(
                    data["bitcoin-cash"].usd
                )
                : null

        };

    }


    /* =========================
       Bitfinex
    ========================= */

    async function getBitfinex() {

        const btc =
            await getJSON(
                "https://api-pub.bitfinex.com/v2/ticker/tBTCUSD"
            );


        const bch =
            await getJSON(
                "https://api-pub.bitfinex.com/v2/ticker/tBCHUSD"
            );


        return {

            btc:
                btc
                ? Number(btc[6])
                : null,

            bch:
                bch
                ? Number(bch[6])
                : null

        };

    }


    /* =========================
       OKX
    ========================= */

    async function getOKX() {

        const btc =
            await getJSON(
                "https://www.okx.com/api/v5/market/ticker?instId=BTC-USDT"
            );


        const bch =
            await getJSON(
                "https://www.okx.com/api/v5/market/ticker?instId=BCH-USDT"
            );


        return {

            btc:
                btc &&
                btc.data &&
                btc.data[0]
                ? Number(
                    btc.data[0].last
                )
                : null,

            bch:
                bch &&
                bch.data &&
                bch.data[0]
                ? Number(
                    bch.data[0].last
                )
                : null

        };

    }


    /* =========================
       Gemini
    ========================= */

    async function getGemini() {

        const btc =
            await getJSON(
                "https://api.gemini.com/v1/pubticker/btcusd"
            );


        const bch =
            await getJSON(
                "https://api.gemini.com/v1/pubticker/bchusd"
            );


        return {

            btc:
                btc
                ? Number(btc.last)
                : null,

            bch:
                bch
                ? Number(bch.last)
                : null

        };

    }


    /* =========================
       Crypto.com
    ========================= */

    async function getCryptoCom() {

        const btc =
            await getJSON(
                "https://api.crypto.com/exchange/v1/public/get-ticker?instrument_name=BTC_USDT"
            );


        const bch =
            await getJSON(
                "https://api.crypto.com/exchange/v1/public/get-ticker?instrument_name=BCH_USDT"
            );


        return {

            btc:
                btc &&
                btc.result &&
                btc.result.data &&
                btc.result.data[0]
                ? Number(
                    btc.result.data[0].a
                )
                : null,

            bch:
                bch &&
                bch.result &&
                bch.result.data &&
                bch.result.data[0]
                ? Number(
                    bch.result.data[0].a
                )
                : null

        };

    }


    /* =========================
       محاسبه قیمت نهایی
    ========================= */

    function calculateAverage(values) {

        const valid =
            values.filter(
                goodPrice
            );


        if (!valid.length) {
            return null;
        }


        return (
            valid.reduce(
                function(sum, value) {
                    return sum + value;
                },
                0
            ) / valid.length
        );

    }


    /* =========================
       بروزرسانی قیمت
    ========================= */

    async function updatePrices() {

        const requests = [

            getBinance(),
            getKraken(),
            getCoinbase(),
            getCoinGecko(),
            getBitfinex(),
            getOKX(),
            getGemini(),
            getCryptoCom()

        ];


        const results =
            await Promise.allSettled(
                requests
            );


        const btcPrices = [];
        const bchPrices = [];


        results.forEach(
            function(result) {

                if (
                    result.status ===
                    "fulfilled"
                ) {

                    const value =
                        result.value;


                    if (
                        value &&
                        goodPrice(value.btc)
                    ) {

                        btcPrices.push(
                            value.btc
                        );

                    }


                    if (
                        value &&
                        goodPrice(value.bch)
                    ) {

                        bchPrices.push(
                            value.bch
                        );

                    }

                }

            }
        );


        const btc =
            calculateAverage(
                btcPrices
            );


        const bch =
            calculateAverage(
                bchPrices
            );


        const btcElement =
            document.getElementById(
                "officialBTCPrice"
            );


        const bchElement =
            document.getElementById(
                "officialBCHPrice"
            );


        const btcCount =
            document.getElementById(
                "officialBTCCount"
            );


        const bchCount =
            document.getElementById(
                "officialBCHCount"
            );


        if (
            btcElement &&
            goodPrice(btc)
        ) {

            btcElement.textContent =
                "$" +
                btc.toLocaleString(
                    "en-US",
                    {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    }
                );

        }


        if (
            bchElement &&
            goodPrice(bch)
        ) {

            bchElement.textContent =
                "$" +
                bch.toLocaleString(
                    "en-US",
                    {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    }
                );

        }


        if (btcCount) {

            btcCount.textContent =
                btcPrices.length;

        }


        if (bchCount) {

            bchCount.textContent =
                bchPrices.length;

        }

    }


    /* =========================
       اجرا
    ========================= */

    createCryptoBar();

    updatePrices();


    /*
       هر 20 ثانیه بروزرسانی
    */

    setInterval(
        updatePrices,
        20000
    );



      glow
    );
  }

})();
</script>

<!-- =========================
     GLOBAL SITE THEME SWITCHER
     ========================= -->

<style>
#global-theme-panel{
  position:fixed;
  left:50%;
  bottom:14px;
  transform:translateX(-50%);
  z-index:999999;
  display:flex;
  gap:8px;
  padding:9px;
  border-radius:18px;
  background:rgba(10,10,15,.88);
  backdrop-filter:blur(12px);
  border:1px solid rgba(255,255,255,.18);
  box-shadow:0 10px 35px rgba(0,0,0,.35);
}

.global-theme-btn{
  width:42px;
  height:42px;
  padding:0;
  border-radius:13px;
  border:2px solid rgba(255,255,255,.7);
  cursor:pointer;
  transition:.25s;
  box-shadow:0 4px 12px rgba(0,0,0,.3);
}

.global-theme-btn:hover{
  transform:translateY(-3px) scale(1.06);
  border-color:#fff;
}

.global-theme-btn.active{
  transform:scale(1.1);
  box-shadow:
    0 0 0 3px rgba(255,255,255,.25),
    0 0 18px rgba(255,255,255,.4);
}

/* -------------------------
   تم 1: نارنجی / طلایی
   ------------------------- */
html[data-site-theme="orange"] body{
  background:
    radial-gradient(circle at top,#3b2208 0%,#111 45%,#050505 100%) !important;
  color:#fff !important;
}

html[data-site-theme="orange"] header,
html[data-site-theme="orange"] nav,
html[data-site-theme="orange"] main,
html[data-site-theme="orange"] section,
html[data-site-theme="orange"] article,
html[data-site-theme="orange"] .card,
html[data-site-theme="orange"] .container{
  --theme-main:#f7931a;
  --theme-second:#ffd166;
}

/* -------------------------
   تم 2: آبی / فیروزه‌ای
   ------------------------- */
html[data-site-theme="blue"] body{
  background:
    radial-gradient(circle at top,#06345b 0%,#071521 45%,#02070b 100%) !important;
  color:#fff !important;
}

/* -------------------------
   تم 3: بنفش / صورتی
   ------------------------- */
html[data-site-theme="purple"] body{
  background:
    radial-gradient(circle at top,#4a125d 0%,#190b29 48%,#07040c 100%) !important;
  color:#fff !important;
}

/* -------------------------
   تم 4: سبز / طلایی
   ------------------------- */
html[data-site-theme="green"] body{
  background:
    radial-gradient(circle at top,#073d2b 0%,#071812 48%,#020705 100%) !important;
  color:#fff !important;
}

/* -------------------------
   تم 5: Glam زنانه
   ------------------------- */
html[data-site-theme="glam"] body{
  background:
    radial-gradient(circle at 20% 10%,#ff4fa3 0%,transparent 28%),
    radial-gradient(circle at 80% 20%,#8b3dff 0%,transparent 30%),
    linear-gradient(135deg,#170715,#09030d 55%,#210617) !important;
  color:#fff !important;
}

/* -------------------------
   تم 6: قرمز / مشکی
   ------------------------- */
html[data-site-theme="red"] body{
  background:
    radial-gradient(circle at top,#5c0909 0%,#170606 45%,#030303 100%) !important;
  color:#fff !important;
}

/* -------------------------
   تم 7: طلایی / مشکی
   ------------------------- */
html[data-site-theme="gold"] body{
  background:
    radial-gradient(circle at top,#5a4507 0%,#191406 45%,#030303 100%) !important;
  color:#fff !important;
}

/* -------------------------
   تم 8: یخی / آبی
   ------------------------- */
html[data-site-theme="ice"] body{
  background:
    radial-gradient(circle at top,#164d70 0%,#071522 45%,#02070b 100%) !important;
  color:#fff !important;
}

/* -------------------------
   تم 9: صورتی / بنفش
   ------------------------- */
html[data-site-theme="pink"] body{
  background:
    radial-gradient(circle at top,#8d174f 0%,#2a0a2e 45%,#070309 100%) !important;
  color:#fff !important;
}

/* -------------------------
   تم 10: نئون
   ------------------------- */
html[data-site-theme="neon"] body{
  background:
    radial-gradient(circle at 30% 10%,#00c6ff 0%,transparent 25%),
    radial-gradient(circle at 80% 80%,#ff00cc 0%,transparent 28%),
    #030509 !important;
  color:#fff !important;
}

/* ظاهر عمومی اجزای سایت */
html[data-site-theme] header,
html[data-site-theme] nav,
html[data-site-theme] .card,
html[data-site-theme] .wallet-card,
html[data-site-theme] .wallet,
html[data-site-theme] .panel,
html[data-site-theme] .box,
html[data-site-theme] .container-box,
html[data-site-theme] .transaction,
html[data-site-theme] .balance-card{
  transition:
    background .35s,
    border-color .35s,
    box-shadow .35s !important;
}

/* رنگ دکمه‌های اصلی سایت */
html[data-site-theme] button:not(#global-theme-panel button),
html[data-site-theme] .btn,
html[data-site-theme] .button{
  transition:.3s !important;
}

/* لینک‌ها */
html[data-site-theme="orange"] a{color:#ffb347 !important}
html[data-site-theme="blue"] a{color:#64d8ff !important}
html[data-site-theme="purple"] a{color:#e58cff !important}
html[data-site-theme="green"] a{color:#62ffb0 !important}
html[data-site-theme="glam"] a{color:#ff8ac7 !important}
html[data-site-theme="red"] a{color:#ff7777 !important}
html[data-site-theme="gold"] a{color:#ffe082 !important}
html[data-site-theme="ice"] a{color:#9eeaff !important}
html[data-site-theme="pink"] a{color:#ff8fc7 !important}
html[data-site-theme="neon"] a{color:#00ffff !important}

/* پنل انتخاب تم */
#global-theme-panel{
  direction:ltr;
}

/* موبایل */
@media(max-width:600px){
  #global-theme-panel{
    max-width:94vw;
    overflow-x:auto;
  }

  .global-theme-btn{
    min-width:38px;
    width:38px;
    height:38px;
  }
}
</style>

<!-- دکمه‌های دو رنگ -->
<div id="global-theme-panel">

  <!-- نارنجی + طلایی -->
  <button class="global-theme-btn active"
    style="background:linear-gradient(135deg,#f7931a 0 50%,#ffd166 50% 100%)"
    title="نارنجی طلایی"
    onclick="setGlobalTheme('orange',this)">
  </button>

  <!-- آبی + فیروزه‌ای -->
  <button class="global-theme-btn"
    style="background:linear-gradient(135deg,#1565c0 0 50%,#00e5ff 50% 100%)"
    title="آبی فیروزه‌ای"
    onclick="setGlobalTheme('blue',this)">
  </button>

  <!-- بنفش + صورتی -->
  <button class="global-theme-btn"
    style="background:linear-gradient(135deg,#7b1fa2 0 50%,#ff4081 50% 100%)"
    title="بنفش صورتی"
    onclick="setGlobalTheme('purple',this)">
  </button>

  <!-- سبز + طلایی -->
  <button class="global-theme-btn"
    style="background:linear-gradient(135deg,#087f5b 0 50%,#d4af37 50% 100%)"
    title="سبز طلایی"
    onclick="setGlobalTheme('green',this)">
  </button>

  <!-- Glam -->
  <button class="global-theme-btn"
    style="background:linear-gradient(135deg,#ff3f9f 0 50%,#8b3dff 50% 100%)"
    title="Glam"
    onclick="setGlobalTheme('glam',this)">
  </button>

  <!-- قرمز + مشکی -->
  <button class="global-theme-btn"
    style="background:linear-gradient(135deg,#e53935 0 50%,#111 50% 100%)"
    title="قرمز مشکی"
    onclick="setGlobalTheme('red',this)">
  </button>

  <!-- طلایی + مشکی -->
  <button class="global-theme-btn"
    style="background:linear-gradient(135deg,#ffd700 0 50%,#111 50% 100%)"
    title="طلایی مشکی"
    onclick="setGlobalTheme('gold',this)">
  </button>

  <!-- یخی + آبی -->
  <button class="global-theme-btn"
    style="background:linear-gradient(135deg,#b9f3ff 0 50%,#1677b8 50% 100%)"
    title="یخی"
    onclick="setGlobalTheme('ice',this)">
  </button>

  <!-- صورتی + بنفش -->
  <button class="global-theme-btn"
    style="background:linear-gradient(135deg,#ff4f9a 0 50%,#6a1b9a 50% 100%)"
    title="صورتی"
    onclick="setGlobalTheme('pink',this)">
  </button>

  <!-- نئون -->
  <button class="global-theme-btn"
    style="background:linear-gradient(135deg,#00ffff 0 50%,#ff00cc 50% 100%)"
    title="نئون"
    onclick="setGlobalTheme('neon',this)">
  </button>

</div>

<script>
function setGlobalTheme(theme, button){

  /* فقط تم ظاهری سایت تغییر می‌کند */
  document.documentElement.setAttribute(
    'data-site-theme',
    theme
  );

  /* دکمه فعال */
  document.querySelectorAll('.global-theme-btn')
    .forEach(function(btn){
      btn.classList.remove('active');
    });

  if(button){
    button.classList.add('active');
  }

  /* ذخیره فقط انتخاب تم */
  try{
    localStorage.setItem(
      'globalSiteTheme',
      theme
    );
  }catch(e){}
}


/* اجرای تم ذخیره‌شده */
(function(){

  let savedTheme = null;

  try{
    savedTheme = localStorage.getItem(
      'globalSiteTheme'
    );
  }catch(e){}

  if(savedTheme){
    document.documentElement.setAttribute(
      'data-site-theme',
      savedTheme
    );

    setTimeout(function(){

      document.querySelectorAll(
        '.global-theme-btn'
      ).forEach(function(btn){

        if(
          btn.getAttribute('onclick') &&
          btn.getAttribute('onclick')
            .includes("'" + savedTheme + "'")
        ){
          btn.classList.add('active');
        }else{
          btn.classList.remove('active');
        }

      });

    },50);

  }else{

    document.documentElement.setAttribute(
      'data-site-theme',
      'orange'
    );

  }

})();
</script>```html
<!-- ===== LIVE BTC + BCH PRICE BANNER ===== -->

<style>
.crypto-price-banner{
  width:calc(100% - 20px);
  margin:12px auto 18px;
  padding:10px;
  background:#050505;
  border:1px solid #252525;
  border-radius:16px;
  display:flex;
  gap:10px;
  direction:ltr;
  box-sizing:border-box;
  box-shadow:0 6px 22px rgba(0,0,0,.45);
}

.crypto-price-box{
  flex:1;
  background:#101010;
  border:1px solid #292929;
  border-radius:12px;
  padding:12px 8px;
  text-align:center;
}

.crypto-title{
  font-size:15px;
  font-weight:900;
  margin-bottom:5px;
}

.crypto-symbol{
  color:#888;
  font-size:10px;
  margin-bottom:7px;
}

.crypto-value{
  color:#fff;
  font-size:17px;
  font-weight:900;
  white-space:nowrap;
}

.price-dot{
  display:inline-block;
  width:7px;
  height:7px;
  border-radius:50%;
  margin-right:5px;
  animation:pricePulse 1s infinite;
}

@keyframes pricePulse{
  0%,100%{opacity:1}
  50%{opacity:.25}
}

/* BTC */
.btc-box .crypto-title{
  color:#ff9500;
}

.btc-box .price-dot{
  background:#ff9500;
  box-shadow:0 0 9px #ff9500;
}

/* BCH */
.bch-box .crypto-title{
  color:#20df70;
}

.bch-box .price-dot{
  background:#20df70;
  box-shadow:0 0 9px #20df70;
}

@media(max-width:600px){
  .crypto-price-banner{
    gap:7px;
    padding:7px;
  }

  .crypto-price-box{
    padding:9px 4px;
  }

  .crypto-title{
    font-size:12px;
  }

  .crypto-value{
    font-size:13px;
  }
}
</style>

<div class="crypto-price-banner">

  <!-- BTC -->
  <div class="crypto-price-box btc-box">
    <div class="crypto-title">
      <span class="price-dot"></span>
      BITCOIN
    </div>

    <div class="crypto-symbol">
      BTC / USD
    </div>

    <div class="crypto-value" id="btcLivePrice">
      Loading...
    </div>
  </div>

  <!-- BCH -->
  <div class="crypto-price-box bch-box">
    <div class="crypto-title">
      <span class="price-dot"></span>
      BITCOIN CASH
    </div>

    <div class="crypto-symbol">
      BCH / USD
    </div>

    <div class="crypto-value" id="bchLivePrice">
      Loading...
    </div>
  </div>

</div>

<script>
async function updateBTCBCHPrices(){

  try{

    const response = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,bitcoin-cash&vs_currencies=usd",
      {cache:"no-store"}
    );

    if(!response.ok){
      throw new Error("Price API error");
    }

    const data = await response.json();

    if(data.bitcoin?.usd){
      document.getElementById("btcLivePrice").textContent =
        "$" + Number(data.bitcoin.usd).toLocaleString(
          "en-US",
          {
            minimumFractionDigits:2,
            maximumFractionDigits:2
          }
        );
    }

    if(data["bitcoin-cash"]?.usd){
      document.getElementById("bchLivePrice").textContent =
        "$" + Number(data["bitcoin-cash"].usd).toLocaleString(
          "en-US",
          {
            minimumFractionDigits:2,
            maximumFractionDigits:2
          }
        );
    }

  }catch(error){

    console.log("BTC/BCH price error:",error);

    /* در صورت قطع موقت API،
       قیمت قبلی باقی می‌ماند */
  }
}

/* دریافت اولیه */
updateBTCBCHPrices();

/* بروزرسانی هر 20 ثانیه */
setInterval(updateBTCBCHPrices,20000);
</script>
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

<script>
const supabase = window.supabase.createClient(
  "https://nuwtfkflunxjfuerauom.supabase.co",
  "sb_publishable_DKgyYcJ6XQtRJ2XjoFnkSQ_Q1IMWDac"
);
</script>
<!-- SUPABASE CONNECTION -->
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>

<script>
window.supabaseClient = window.supabase.createClient(
  "https://nuwtfkflunxjfuerauom.supabase.co",
  "sb_publishable_DKgyYcJ6XQtRJ2XjoFnkSQ_Q1IMWDac"
);
</script>
<!-- SUPABASE CONNECTION -->
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
</script>
<!-- ADMIN PANEL -->
<style>
#adminPanel{
  display:none;
  position:fixed;
  inset:0;
  z-index:99999;
  background:#111;
  color:#fff;
  padding:20px;
  overflow:auto;
  direction:rtl;
  font-family:Arial;
}

.admin-box{
  max-width:700px;
  margin:auto;
}

.admin-box h2{
  text-align:center;
  color:#ffd000;
}

.admin-input{
  width:100%;
  box-sizing:border-box;
  padding:13px;
  margin:7px 0;
  border-radius:8px;
  border:1px solid #555;
  background:#222;
  color:#fff;
}

.admin-btn{
  width:100%;
  padding:13px;
  margin-top:8px;
  border:0;
  border-radius:8px;
  background:#ffd000;
  color:#111;
  font-weight:bold;
  cursor:pointer;
}

.admin-close{
  background:#d22;
  color:white;
}

#adminLogin{
  max-width:400px;
  margin:80px auto;
  text-align:center;
}
</style>

<!-- دکمه ورود ادمین -->
<button
  onclick="openAdminLogin()"
  style="
  position:fixed;
  top:15px;
  left:15px;
  z-index:9999;
  background:#222;
  color:#ffd000;
  border:1px solid #ffd000;
  border-radius:8px;
  padding:8px 12px;
  ">
  🔐 ادمین
</button>

<div id="adminPanel">

  <div id="adminLogin">

    <h2>🔐 ورود مدیر</h2>

    <input
      id="adminPassword"
      class="admin-input"
      type="password"
      placeholder="رمز عبور مدیر">

    <button class="admin-btn" onclick="loginAdmin()">
      ورود به پنل
    </button>

    <p id="adminError" style="color:#ff4444;"></p>

  </div>

  <div class="admin-box" id="adminDashboard" style="display:none">

    <h2>👑 پنل مدیریت</h2>

    <button class="admin-btn" onclick="loadAdminTransactions()">
      🔄 دریافت تراکنش‌ها
    </button>

    <div id="adminTransactions" style="margin-top:20px">
      هنوز تراکنشی دریافت نشده است.
    </div>

    <button
      class="admin-btn admin-close"
      onclick="closeAdmin()">
      خروج از پنل
    </button>

  </div>

</div>

<script>

const ADMIN_PASSWORD = "Admin321";

function openAdminLogin(){

  document.getElementById("adminPanel").style.display = "block";

}

function loginAdmin(){

  const pass =
    document.getElementById("adminPassword").value;

  if(pass === ADMIN_PASSWORD){

    document.getElementById("adminLogin").style.display = "none";

    document.getElementById("adminDashboard").style.display = "block";

    loadAdminTransactions();

  }else{

    document.getElementById("adminError").textContent =
      "رمز عبور اشتباه است";

  }

}

function closeAdmin(){

  document.getElementById("adminPanel").style.display = "none";

  document.getElementById("adminLogin").style.display = "block";

  document.getElementById("adminDashboard").style.display = "none";

  document.getElementById("adminPassword").value = "";

}

async function loadAdminTransactions(){

  const box =
    document.getElementById("adminTransactions");

  box.innerHTML = "در حال دریافت تراکنش‌ها...";

  try{

    const { data, error } =
      await window.supabaseClient
      .from("transactions")
      .select("*")
      .order("created_at", { ascending:false });

    if(error){

      box.innerHTML =
        "خطا در دریافت تراکنش‌ها:<br>" +
        error.message;

      return;

    }

    if(!data || data.length === 0){

      box.innerHTML = "هنوز تراکنشی ثبت نشده است.";

      return;

    }

    box.innerHTML = "";

    data.forEach(function(tx){

      const item = document.createElement("div");

      item.style.cssText = `
        background:#202020;
        border:1px solid #444;
        border-radius:10px;
        padding:15px;
        margin-bottom:12px;
      `;

      item.innerHTML = `
        <b>🪙 ارز:</b> ${escapeAdmin(tx.coin)}<br>
        <b>💰 مقدار:</b> ${escapeAdmin(tx.amount)}<br>
        <b>📧 کاربر:</b> ${escapeAdmin(tx.user_id)}<br>
        <b>📍 آدرس مقصد:</b><br>
        <span style="word-break:break-all">
        ${escapeAdmin(tx.to_address)}
        </span><br>
        <b>📌 وضعیت:</b> ${escapeAdmin(tx.status)}<br>
        <b>🧾 TxID:</b>
        ${escapeAdmin(tx.txid || "هنوز ثبت نشده")}<br>
        <b>🕐 تاریخ:</b>
        ${escapeAdmin(tx.created_at)}
      `;

      box.appendChild(item);

    });

  }catch(err){

    box.innerHTML =
      "خطا: " + err.message;

  }

}

function escapeAdmin(value){

  return String(value ?? "")
    .replace(/&/g,"&amp;")
    .replace(/</g,"&lt;")
    .replace(/>/g,"&gt;")
    .replace(/"/g,"&quot;")
    .replace(/'/g,"&#039;");

}

</script>
<script>
function startAdminRealtime(){

  if(!window.supabaseClient){
    console.log("Supabase هنوز آماده نیست");
    return;
  }

  window.supabaseClient
    .channel("admin-transactions-live")
    .on(
      "postgres_changes",
      {
        event: "INSERT",
        schema: "public",
        table: "transactions"
      },
      function(payload){

        console.log("تراکنش جدید:", payload.new);

        // دوباره لیست تراکنش‌ها را می‌خواند
        if(
          document.getElementById("adminDashboard") &&
          document.getElementById("adminDashboard").style.display !== "none"
        ){
          loadAdminTransactions();
        }

        // اعلان صوتی ساده
        try{
          const audio = new Audio(
            "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQQAAAAA"
          );
          audio.play().catch(()=>{});
        }catch(e){}

      }
    )
    .subscribe(function(status){

      console.log("Realtime:", status);

    });

}

// کمی صبر می‌کنیم تا Supabase لود شود
setTimeout(startAdminRealtime, 1500);
</script>
<button id="backPageBtn" 
style="
position:fixed;
top:15px;
right:15px;
z-index:999999;
background:#ffd000;
color:#000;
border:none;
border-radius:10px;
padding:10px 15px;
font-size:16px;
cursor:pointer;">
</button>
</script>
<!-- SUPABASE AUTH SYSTEM -->

<script>

async function registerUser(email, password){

  const { data, error } =
  await window.supabaseClient.auth.signUp({
    email: email,
    password: password
  });

  if(error){
    alert(error.message);
    return;
  }

  alert(
    "ثبت نام انجام شد. ایمیل تایید را باز کنید."
  );

}



async function loginUser(email, password){

  const { data, error } =
  await window.supabaseClient.auth.signInWithPassword({
    email: email,
    password: password
  });


  if(error){

    alert(error.message);
    return;

  }


  alert("ورود موفق شد");

}



async function changePassword(newPassword){

  const { data, error } =
  await window.supabaseClient.auth.updateUser({

    password: newPassword

  });


  if(error){

    alert(error.message);
    return;

  }


  alert("رمز عبور تغییر کرد");

}




async function getCurrentUser(){

  const { data } =
  await window.supabaseClient.auth.getSession();


  if(data.session){

    console.log(
      "کاربر:",
      data.session.user.email
    );

  }

}


getCurrentUser();


</script>
<script>

async function checkEmailVerified(){

  const { data, error } =
  await window.supabaseClient.auth.getSession();


  if(error || !data.session){
    return;
  }


  const user = data.session.user;


  // بررسی تایید ایمیل
  if(!user.email_confirmed_at){

    alert(
      "لطفاً ابتدا ایمیل خود را تایید کنید."
    );

    await window.supabaseClient.auth.signOut();

    location.reload();

    return false;
  }


  return true;

}


// هر بار صفحه باز شد بررسی کن
checkEmailVerified();


</script>
<!-- USER BALANCE BOX -->

<div id="balanceBox" style="
position:relative;
margin:15px auto;
max-width:400px;
background:#111;
color:white;
border-radius:15px;
padding:20px;
text-align:center;
direction:rtl;
">

<div style="font-size:28px;color:#00ff66;font-weight:bold;">
$ <span id="usdBalance">0</span>
</div>

<div style="margin-top:15px;font-size:18px;">
₿ Bitcoin:
<span id="btcBalance">0</span>
</div>

<div style="margin-top:10px;font-size:18px;">
🟢 Bitcoin Cash:
<span id="bchBalance">0</span>
</div>

</div>


<script>

let userBalance = {
 btc:0,
 bch:0,
 usd:0
};


// نمایش موجودی
function showBalance(){

document.getElementById("btcBalance").innerHTML =
userBalance.btc + " BTC";


document.getElementById("bchBalance").innerHTML =
userBalance.bch + " BCH";


document.getElementById("usdBalance").innerHTML =
userBalance.usd.toFixed(2);

}


// قیمت تقریبی و تبدیل به دلار
async function updateUSD(){

try{

let r =
await fetch(
"https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,bitcoin-cash&vs_currencies=usd"
);

let p = await r.json();


let btcPrice =
p.bitcoin.usd;


let bchPrice =
p["bitcoin-cash"].usd;


userBalance.usd =
(userBalance.btc * btcPrice)
+
(userBalance.bch * bchPrice);


showBalance();


}catch(e){

console.log("price error");

}

}


updateUSD();

setInterval(updateUSD,60000);


</script>
<script>
if ("serviceWorker" in navigator) {

  window.addEventListener("load", function(){

    navigator.serviceWorker.register(
      "/service-worker.js"
    )
    .then(function(){

      console.log("Service Worker فعال شد");

    })
    .catch(function(error){

      console.log("Service Worker Error:", error);

    });

  });

}
</script>
</body>
