<template>
    <div>
        <div class="block-header">
            <div class="item">Sale</div>
            <div class="item">Purchase</div>
            <div class="item">Popular</div>
            <div class="right">
                <div class="sort-by-price item">
                    <input type="text" placeholder="Min float" v-model="minFLoat" />
                    - <input type="text" placeholder="Max float" v-model="maxFLoat" />
                    <div class="btn-search-by-float" v-if="isShowSearch1" @click="searchByFloat">Search</div>
                </div>
                <div class="sort-by-price item">
                    ¥<input type="text" placeholder="Min price" v-model="minPrice" />
                    - ¥<input type="text" placeholder="Max price" v-model="maxPrice" />
                    <div class="btn-search-by-price" v-if="isShowSearch" @click="searchByPrice">Search</div>
                </div>
                <BaseDropDownList optiondefault="Sort" :options="listSort" @sort="sortBy"/>
            </div>
        </div>
        <div class='list-container'>
            <BaseItem v-for="(item, index) in listItemMarket" :key="index" :item="item" :isFloat="true" />
        </div>
    </div>
</template>

<script>
import { getAllItem, filterItemByPrice, sortItem , filterItemByFloat} from "../../../service/item.js"
import TheListItem from "../listItem/TheListItem.vue";
import BaseDropDownList from "../../base/BaseDropDownList.vue";
export default {
    name: "TheMarketContent",
    components: {
        TheListItem,
        BaseDropDownList
    },
    props: ["listItem"],
    watch: {
        listItem: function () {
            this.listItemMarket = this.listItem;
        },
        maxPrice: function(){
            this.isShowSearch = true;
        },
        maxFLoat: function(){
            this.isShowSearch1 = true;
        }
    },
    data() {
        return {
            listItemMarket: [],
            listSort: ["default", "price", "quantify"],
            minPrice: "",
            maxPrice: "",
            minFLoat: "",
            maxFLoat: "",
            isShowSearch: false,
            isShowSearch1: false,
        }
    },
    created() {
        this.getAllItem();
    },
    methods: {
        async getAllItem() {
            const res = await getAllItem();
            this.listItemMarket = res.data;
            this.listItemMarket = this.listItemMarket.slice(0, 30);
        },

        async searchByPrice(){
            const res = await filterItemByPrice(this.minPrice,this.maxPrice);
            this.listItemMarket = res.data;
            this.isShowSearch = false;
            this.maxPrice = "";
            this.minPrice = "";
        },
        async searchByFloat(){
            const res = await filterItemByFloat(this.minFLoat,this.maxFLoat);
            this.listItemMarket = res.data;
            this.isShowSearch1 = false;
            this.maxFLoat = "";
            this.minFLoat = "";
        },
        async sortBy(value){
            const res = await sortItem(value);
            this.listItemMarket = res.data;
        }
    }
}
</script>

<style scoped>
.list-container {
    display: flex;
    padding: 24px 36px;
    box-sizing: border-box;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: self-start;
    background-color: #fff;
}

.block-header {
    margin-top: 24px;
    background: #1c202b;
    padding-bottom: 1px;
    min-height: 52px;
    display: flex;
    align-items: center;
}

.block-header .item {
    font-size: 15px;
    text-align: center;
    cursor: pointer;
    color: #929394;
    border-right: 1px solid #303b4f;
    padding: 0px 24px;
    min-width: 150px;
}

.right{
    margin-left: auto ;
    display: flex;
    align-items: center;
}

.sort-by-price{
    position: relative;
}
.sort-by-float{
    position: relative;
}
.sort-by-price input{
    width: 56px;
    margin: 0 6px;
    text-align: center;
    font-size: 12px;
    background: 0 0;
    border: 1px solid #e3e3e3;
    padding: 3px 6px;
    line-height: 24px;
    min-height: 24px;
    border-radius: 2px;
    vertical-align: middle;
    color: #E4E8EE;
}

.btn-search-by-price{
    position: absolute;
    padding: 8px;
    cursor: pointer;
    width: 40px;
    background: #1c202b;
    left: calc(50%-20px);
    border-radius: 4px;
}
.btn-search-by-float{
    position: absolute;
    padding: 8px;
    cursor: pointer;
    width: 40px;
    background: #1c202b;
    left: calc(50%-20px);
    border-radius: 4px;
}
</style>