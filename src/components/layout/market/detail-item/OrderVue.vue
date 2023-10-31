<template>
    <div class="table-container">
        <table>
            <thead>
                <tr>
                    <th style="width: 150px;">Items</th>
                    <th style="min-width: 300px;">Float</th>
                    <th style="min-width: 300px;">Seller</th>
                    <th style="min-width: 300px;">Price</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(seller, index) in listSeller" :key="index">
                    <td style="width: 150px;">
                        <div class="item-img"><img :src="item.image" /></div>
                    </td>
                    <td style="min-width: 300px;">Float: {{ item.weaponFloat * generateRandomNumber(90, 110) / 100 }}</td>
                    <td style="min-width: 300px;"><span>{{ seller }}</span></td>
                    <td style="min-width: 300px;"><strong> ¥ {{ (item.price * generateRandomNumber(90, 110) /
                        100).toFixed(2) }}</strong>
                    </td>
                    <td>
                        <button>Buy</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "OrderVue",
    props: ["item"],
    data() {
        return {
            listSeller: []
        }
    },
    created() {
        for (let i = 0; i < 10; ++i) {
            const seller = 'U' + this.generateRandomNumber(1000000000, 9999999999);
            this.listSeller.push(seller);
        }
    },
    methods: {
        generateRandomNumber(min, max) {
            const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
            return randomNumber;
        }
    }
}
</script>

<style scoped>
.table-container {
    width: 100%;
    max-width: 100vw;
    background: #f5f5f5;
    color: #959595;
}

th,
td {
    text-align: left;
    padding: 20px;
    border: none;
    border-bottom: 1px solid #e9e9e9;
}


tr:hover {
    background: #e5e5e5;
}

img {
    width: 52px;
    height: 52px;
}

.item-img {
    cursor: pointer;
    display: flex;
    background-image: url(https://buff.163.com/static/images/item_bg.png);
    background-position: center;
    align-items: center;
    justify-content: center;
    width: 88px;
    height: 66px;
}

strong {
    color: #eea20e;
    font-size: 17px;
}

button {
    height: 30px;
    line-height: 30px;
    padding: 0 6px;
    font-size: 14px;
    min-width: 68px;
    color: #fff !important;
    background: #4773c8;
    border: none;
    border-radius: 2px;
    cursor: pointer;
}
</style>