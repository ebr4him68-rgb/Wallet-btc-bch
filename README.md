<!DOCTYPE html>
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
</body>
</html># Wallet-btc-bch
