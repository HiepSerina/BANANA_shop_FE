<template>
    <div class="market-container">
        <span class="cru-market">
            Market > {{ itemTest.name }}
        </span>
        <div class="detail-item">
            <div class="bg-img">
                <div class="detail-img" :style="{ 'background-image': 'url(' + itemTest.image + ')' }"></div>
            </div>
            <div class="parameter">
                <h1>{{ itemTest.name }}</h1>
                <p>
                    <span><label>Quality |</label>{{ itemTest.weaponQuality }}</span>
                    <span><label>Category |</label>{{ itemTest.category }}</span>
                    <span><label>Type |</label>{{ itemTest.type }}</span>
                </p>
                <hr />
                <p>
                    <label>Reference price |</label> <strong class="price-te">¥ {{ itemTest.price }}</strong> ($ {{
                        (itemTest.price / 7.29190260476).toFixed(2) }})
                </p>
            </div>
            <div class="detail-right">
                <button class="btn-sell btn">Sell</button>
                <button class="btn-buy btn" @click="placeOrder">Place buy order</button>
            </div>
        </div>
        <OrderVue :item="itemTest" />
    </div>
</template>

<script>
import { getItemById} from '../../../../service/item';
import { getInfoUser } from '../../../../service/auth';
import OrderVue from './OrderVue.vue';
import { createOrder } from '../../../../service/cart'
export default {
    name: "DetailItem",
    components: {
        OrderVue
    },
    props: {
        item: Object,
    },
    data() {
        return {
            itemTest: {
                "_id": "650c5be5150f6d72f6253b4a",
                "name": "StatTrak SSG 08",
                "type": "Weapon",
                "weaponCategory": "Rifles",
                "weaponExterior": "Factory New",
                "weaponFloat": 0.0682124421000481,
                "weaponQuality": "normal",
                "category": "StatTrak",
                "price": 714.62,
                "image": "https://g.fp.ps.netease.com/market/file/5aa09c5146072bfb7e8a51aaWlzIxRru",
                "createdAt": "2023-09-21T15:06:13.600Z",
                "updatedAt": "2023-09-21T15:06:13.600Z",
                "__v": 0
            },
            itemId: "",
        }
    },
    async created() {
        this.itemId = this.$route.params.id;
        this.itemTest = await this.getbyId();
    },
    methods: {
        async getbyId() {
            const res = await getItemById(this.itemId);
            return res.data;
        },

        async getInfoUser() {
            try {
                const res = await getInfoUser();
                return res.data.sub;
            }
            catch (err) {
                console.log(err);
            }
        },

        async placeOrder() {
            try {
                const userId = await this.getInfoUser();
                await createOrder(userId, this.itemTest._id);
                this.$emitter.emit("showToast", "Add to cart successfully");
                this.$router.push("/market");
            }
            catch(err){
                this.$emitter.emit("showToast", "Login required");
            }
            
        },
    }
}
</script>

<style scoped>
.market-container {
    background: url("https://buff.163.com/static/images/site/header-bg_csgo.jpg") no-repeat;
    color: #fff;
    padding: 24px 36px;
    width: 100vw;
    box-sizing: border-box;
    background-color: #ededed;
}

.detail-item {
    display: flex;
    background: url('https://buff.163.com/static/images/site/detail-header-bg.jpg') no-repeat;
    padding: 16px;
}

.detail-img {
    width: 287px;
    height: 194px;
    background-size: cover;
    background-position: center center;
    background-repeat: repeat-y;
}

.bg-img {
    background: url(https://buff.163.com/static/images/goods_detail_bg.png);
}

.parameter {
    padding-left: 16px;
}

.parameter p {
    margin: 18px 0px;
}

.parameter h1 {
    font-size: 24px;
    line-height: 24px;
    color: #fff;
}

.parameter p span {
    color: #c6cad0;
    margin: 0 24px 0 0;
}

label {
    color: #90969c;
    margin-right: 9px;
    cursor: default;
}


.price-te {
    color: #eea20e !important;
    font-size: 18px;
}

.detail-right {
    width: 30%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    padding-bottom: 36px;
}

.btn {
    height: 30px;
    line-height: 30px;
    padding: 0 6px;
    font-size: 14px;
    min-width: 84px;
    color: #fff;
    border: none;
    border-radius: 2px;
    cursor: pointer;
}

.btn-sell {
    background: #45536c;
    margin: 0px 12px;
}

.btn-buy {
    background: #773535;
}
</style>