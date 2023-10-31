<template>
    <div class="market-container">
        <span class="cru-market">
            Market
        </span>
        <TheHeaderMarket @filterItem="filterItem"/>
        <TheMarketContent :listItem="listItem"/>
    </div>
</template>

<script>
import TheHeaderMarket from '../components/layout/market/TheHeaderMarket.vue';
import TheMarketContent from '../components/layout/market/TheMarketContent.vue';
export default {
    name: "Market",
    components:{
        TheHeaderMarket,
        TheMarketContent
    },
    data(){
        return{
            listItem:[],
        }
    },
    methods:{
        filterItem(data){
            this.listItem = data;
        }
    }
}
</script>

<style scoped>
.market-container{
    background: url("https://buff.163.com/static/images/site/header-bg_csgo.jpg") no-repeat;
    color: #fff;
    padding: 24px 36px;
    width: 100vw;
    box-sizing: border-box;
    background-color: #ededed;
}
</style>
