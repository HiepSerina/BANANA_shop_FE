<template>
    <div class="market-menu-sreach">
        <div class="market-sreach-category">
            <div class="market-item" v-for="(name,index) in menu" :key="index" @click="filterItem('weaponCategory',name)">
                <div :class="['icon',className(index)]"></div>
                <span class="item-name">{{ name }}</span>
            </div>
        </div>
        <hr/>
        <div class="market-sreach-sort">
            <div>
                <BaseDropDownList optiondefault="weaponQuality" :options="this.$resource.listQuality" @filterItem="filterItemDrop"/>
            </div>
            <div>
                <BaseDropDownList optiondefault="category" :options="this.$resource.listCategory" @filterItem="filterItemDrop"/>
            </div>
            <div>
                <BaseDropDownList optiondefault="weaponExterior" :options="this.$resource.listExterior" @filterItem="filterItemDrop"/>
            </div>
            <input class="text-search" placeholder="Enter the item name" v-model="keyWord">
            <button @click="filterItemName">Search</button>
        </div>
    </div>
</template>

<script>
import {filterItem, getAllItem} from '../../../service/item'
import BaseDropDownList from '../../base/BaseDropDownList.vue';
export default {
    name: "TheHeaderMarket",
    components:{
        BaseDropDownList
    },
    data() {
        return {
            menu: ["Knives", "Gloves", "Rifles", "Pistols", "SMGs", "Shotguns", "Machineguns", "Stickers", "Agent", "Others"],
            keyWord: "",
            listItemMarket: [],
        }
    },
    methods:{
        className(index){
            return "icon-" + index;
        },

        async filterItem(type,value){
            const res = await filterItem(type,value);
            this.$emit("filterItem", res.data);
        },
        
        async filterItemName(){
            const res = await filterItem('nameSuggestions',this.keyWord);
            this.$emit("filterItem", res.data);
        },

        async filterItemDrop(data){
            let res = await filterItem(data.type,data.value);
            this.listItemMarket = res.data;
            if(data.value === "All"){
                res = await getAllItem();
                this.listItemMarket = res.data;
                this.listItemMarket = this.listItemMarket.slice(0,30);
            }
            this.$emit("filterItem", this.listItemMarket);
        }

    }
}
</script>

<style scoped>
.market-menu-sreach {
    margin-top: 20px;
    background: url("https://buff.163.com/static/images/site/marcket-header-bg.png") no-repeat;
    padding: 24px;
    background-size: cover;
    color: #9A9B9E;
    width: calc(100vw-20px);
    box-sizing: border-box;
}

.market-item {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 8px 0px;
    cursor: pointer;
}

.market-item:hover{
    background-color: #2d2f3e ;
}

.item-name {
    width: 100%;
    text-align: center;
    padding: 0px 16px;
}

.market-sreach-category {
    display: flex;
    height: 90px;
}

.icon {
    background: url("https://buff.163.com/static/images/sprite/icon_csgo.less.png?20230918144131");
    width: 32px;
    height: 32px;
}

.icon-0{
    background-position: -34px 0px;
}
.icon-1{
    background-position: -102px 0px;
}
.icon-2{
    background-position: -68px 0px;
}
.icon-3{
    background-position: 0px -68px;
}
.icon-4{
    background-position: -34px -68px;
}
.icon-5{
    background-position: -68px -34px;
}
.icon-6{
    background-position: -0px -34px;
}
.icon-7{
    background-position: 0px 0px;
}
.icon-8{
    background-position: 0px -102px;
}
.icon-9{
    background-position: -34px -34px;
}

hr{
    margin: 0;
    width: 100%;
}

.market-sreach-sort{
    display: flex;
    margin: 12px 12px 0px 12px;
}
.market-sreach-sort div{
    margin-left: 12px ;
    background-color: #2d2f3e;
}

.text-search{
    margin-left: auto ;
    background-color: rgba(72,134,255,.16);
    color: #E4E8EE;
    border: 1px solid #3F5D97;
    border-radius: 2px;
    min-height: 24px;
    padding: 3px 6px;
    line-height: 24px;
    outline: none;
}

.market-sreach-sort button{
    background: #3F5D97;
    color: #E1E5EC;
    font-size: 14px;
    border-radius: 0 2px 2px 0;
    margin-left: -2px;
    border: 1px solid #3F5D97;
    cursor: pointer;
}
.market-sreach-sort button:hover{
    background-color: #4773c8 ;
    color: #fff;
}
</style>