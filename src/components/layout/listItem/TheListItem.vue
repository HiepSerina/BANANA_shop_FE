<template>
    <div class='list-container' :style="{'background-image': 'url(' + urlImg + ')'}">
        <div class="header">
            <div class="header-container">
                <div :class="['header-title',className()]">{{ header }}</div>
                <div class="header-item slected">
                    <img src="https://buff.163.com/static/images/games/logo_csgo2.png"/>&nbsp;
                    <span>CS2</span></div>
                <div class="header-item">
                    <img src="https://buff.163.com/static/images/games/logo_dota.png"/>&nbsp;
                    DOTA2</div>
                <div class="market" @click="this.$router.push('/market')">View Market</div>
            </div>
            <hr/>
        </div>
        <BaseItem v-for="(item,index) in listItem" :key="index" :item="item" :isFloat="header=='Popular'"/>
    </div>
</template>

<script>
import Benum from '../../../js/enum'
export default {
    name: "TheListItem",
    props:{
        urlImg: String,
        listItem: Array,
        header: String
    },
    methods:{
        className(){
            return "color_" + Benum.headerListItem[this.header];
        }
    }
}
</script>

<style scoped>
.list-container{
    display: flex;
    /* width: 100vw; */
    padding: 60px 100px;
    background: no-repeat;
    background-size: cover;
    box-sizing: border-box;
    flex-wrap: wrap ;
    justify-content: space-between;
    align-items: flex-start;
}

.header{
    width: 100%;
    margin-bottom: 24px ;
    height: 38px;
}

.header-container{
    display: flex;
    align-items: center;
    height: 38px;
}

.header-title{
    display: flex;
    width: 120px;
    height: 100%;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 18px;
    border-radius: 2px 2px 0px 0px;
}

.color_0{
    background-color: #bf9e4b ;
}

.color_1{
    background-color: #3D547D ;
}

hr{
    margin: 0;
    color: #bf9e4b;
    border: 1px solid ;
}

.header-item{
    display: flex;
    align-items: center;
    margin-left: 24px;
    color: #929394;
    cursor: pointer;
}

.market{
    margin-left: auto ;
    color: #929394;
    font-weight: 400;
    font-size: 16px;
}

.market:hover{
    color: #bf9e4b;
    cursor: pointer;
}

.slected{
    border-bottom: 3px solid #BF9E4B;
    height: 38px;
    display: flex;
    align-items: center;
}
</style>