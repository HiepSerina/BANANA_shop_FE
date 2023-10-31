<template>
    <div class="cart-container">
        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th style="width: 150px;">Items</th>
                        <th style="min-width: 300px;">Float</th>
                        <th style="min-width: 300px;">Price</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(item, index) in listItem" :key="index">
                        <td style="width: 150px;">
                            <div class="item-img"><img :src="item.image" /></div>
                        </td>
                        <td style="min-width: 300px;">Float: {{ item.weaponFloat }}</td>
                        <td style="min-width: 300px;"><strong> ¥ {{ item.price }}</strong>
                        </td>
                        <td>
                            <button @click="deleteItem(item.id)">Delete</button>
                        </td>
                    </tr>
                    <tr>
                        <th style="width: 150px; color: red;">
                            Sum
                        </th>
                        <td style="min-width: 300px;"></td>
                        <td style="min-width: 300px;"><strong> ¥ {{ countOrder() }}</strong>
                        </td>
                        <td>
                            <button style="background-color: blue;">Buy All</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import { getAllOrder, deleteItem } from '../service/cart'
import { getItemById } from '../service/item';
import { getInfoUser } from '../service/auth';
export default {
    data() {
        return {
            listItem: []
        }
    },
    created() {
        this.getAllOrder();
    },
    methods: {
        async getInfoUser() {
            try {
                const res = await getInfoUser();
                return res.data.sub;
            }
            catch (err) {
                console.log(err);
            }
        },

        async getAllOrder() {
            this.listItem = [];
            const userId = await this.getInfoUser();
            const res = await getAllOrder(userId);
            const listOrder = res.data;
            listOrder.forEach(async (element) => {
                const itemArr = await getItemById(element.idItem);
                this.listItem.push({id:element._id,...itemArr.data});
            });
        },

        async deleteItem(id) {
            await deleteItem(id);
            await this.getAllOrder();
            this.$emitter.emit("showToast","Deleted successfully");
        },

        countOrder() {
            let sum = 0;
            this.listItem?.forEach(element => {
                sum += element.price;
            });
            return sum.toFixed(2);
        }
    },
}
</script>


<style scoped>
.cart-container{
    display: flex;
    justify-content: center;
    background: url("https://buff.163.com/static/images/site/header-bg_csgo.jpg") no-repeat;
    padding: 36px 0px;
}
.table-container {
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
    background: #773535;
    border: none;
    border-radius: 2px;
    cursor: pointer;
}
</style>