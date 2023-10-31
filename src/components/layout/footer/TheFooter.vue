<template>
    <footer class="footer">
            <div class="background_footer">
                <div class="grid">
                    <div class="grid__row">
                        <div class="grid__column-2-4">
                            <h3 class="footer__heading">Account settings</h3>
                            <ul class="footer-list">
                                <li class="footer-item">
                                    <a href="" class="footer-item__link">Steam Settings</a>
                                </li>
                            </ul>
                        </div>
                        <div class="grid__column-2-4">
                            <h3 class="footer__heading">Wallet Issues</h3>
                            <ul class="footer-list">
                                <li class="footer-item">
                                    <a href="" class="footer-item__link">Charging standards</a>
                                </li>
                            </ul>
                        </div>
                        <div class="grid__column-2-4">
                            <h3 class="footer__heading">FAQ</h3>
                            <ul class="footer-list">
                                <li class="footer-item">
                                    <a href="" class="footer-item__link">Buyers FAQ</a>
                                </li>
                                <li class="footer-item">
                                    <a href="" class="footer-item__link">Sellers FAQ</a>
                                </li>
                                <li class="footer-item">
                                    <a href="" class="footer-item__link">Unable to trade</a>
                                </li>
                                <li class="footer-item">
                                    <a href="" class="footer-item__link">Other FAQ</a>
                                </li>
                            </ul>
                        </div>
                        <div class="grid__column-2-4">
                            <h3 class="footer__heading">Convenient payment</h3>
                            <ul class="footer-list">
                                <li class="footer-item">
                                    <a href="" class="footer-item__link">Alipay</a>
                                </li>
                                <li class="footer-item">
                                    <a href="" class="footer-item__link">Bank card payments</a>
                                </li>
                                <li class="footer-item">
                                    <a href="" class="footer-item__link">WeChat payment</a>
                                </li>
                                
                            </ul>
                        </div>
                        <div class="grid__column-2-4">
                            <h3 class="footer__heading">BANANA APP</h3>
                            <div class="footer__download">
                                <img src="data:image/png;base64,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" alt="Download QR" class="footer__download-qr">
                                <div class="footer__download-apps">
                                    <a href="" class="footer__download-apps-link">
                                        <img src="img/Chplay.png" alt="" class="chplay">
                                        
                                    </a>
                                    <a href="" class="footer__download-apps-link">
                                        <img src="img/Apps.png" alt="" class="appstore">
                                
                                    </a>
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <div class="footer__bottom">
                    <div class="grid1">
                        <p class="footer__text">
                            Copyright © 1997-2023 based on Netease BUFF. Privacy Policy and Children's Personal Information Protection Policy. ICP Record: Guangdong B2-20090191-18.
                        </p>
                    </div>
                </div>
        </footer>
</template>

<style>
.background_footer {
    margin-left: 90px;
}

.footer {
    line-height: 24px;
    background: #272a2c url(../images/site/footer-bg.jpg) no-repeat center top;
    color: #959595;
    min-width: 1200px;
    overflow: hidden;
}
.footer__heading {
    font-size: 1rem;
    text-transform: uppercase;
    color: white;
}
.footer-list {
    list-style: none;
    padding-left: 0;
}
.footer-item {
    
}
.footer-item__link {
    font-size: 1rem;
    color: #959595;
    text-decoration: none;
    padding: 6px 0;
    display: block;
    
}
.footer-item__link:hover {
    color: #eea20e;
}
.footer__download {
    display: flex;
}
.footer__download-qr {
    width: 80px;
    height: 80px;
    /* object-fit: contain; */
    border: 1px solid var(--border-color);
    margin-left: 0;
   
}
.footer__download-apps-link {
    height: 140px;
    width: 30px;
}

.footer__download-apps {
    flex: 1;
    margin-left: 10px;
    
}
.footer__bottom {
    width: 100%;
    background-color: #f5f5f5;
    margin-top: 62px;
}
.grid1 {
    width: 100%;
}
.footer__text {
    
    margin: 0;
    text-align: center;
    font-size: 1rem;
    color: #737373;
}

/* grid  */
.grid {
    
    max-width: 100%;
    margin: 0 auto;
}
.grid__full-width {
    width: 100%;
}
.grid__row {
    display: flex;
    flex-wrap: wrap;
    margin-left: 8px;
    margin-right: 8px;
}
.grid__column-2 {
    padding-left: 5px;
    padding-right: 5px;
    width: 20%;
}
.grid__column-2-4 {
    padding-left: 5px;
    padding-right: 5px;
    width: 18%;
} 
.grid__column-10 {
    padding-left: 5px;
    padding-right: 5px;
    width: 80%;
}

</style>