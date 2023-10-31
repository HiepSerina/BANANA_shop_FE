<template>
    <div class="item-container">
        <div class="item-img">
            <BaseExterior :content="item.weaponExterior" :weaponQuality="item.category"/>
            <img :src="item.image">
            <div class="item-float" v-if="isFloat && item.weaponFloat!=0">Float: {{ item.weaponFloat }}</div>
        </div>
        <div class="item-footer">
            <div @click="viewDetail">{{ item.name }}</div>
            <span><strong>¥ {{ item.price }}</strong></span>
        </div>
    </div>
</template>

<script>
export default {
    name: "BaseItem",
    props:["item","isFloat"],
    methods:{
        viewDetail(){
            this.$router.push(`/detail/${this.item._id}`);
        }
    }
}
</script>

<style scoped>
.item-container {
    width: 220px;
    height: 210px;
    margin-bottom: 24px ;
    background: #f9f9f9;
    border-radius: 2px;
    box-shadow: 0 0 4px 0 rgba(149,149,149,.3);
    border: 1px solid #e4e4e4;
}

.item-img {
    position: relative;
    width: 220px;
    height: 116px;
    background: url("https://buff.163.com/static/images/item_bg.png") no-repeat;
    background-size: cover;
    padding: 20px 0 25px 0;
    display: flex;
    align-items: center;
    justify-content: center;
}

.item-img img {
    width: 130px;
    height: 130px;
}

.item-float {
    position: absolute;
    bottom: 0;
    background-color: #333;
    color: #959595;
    width: 220px;
    text-align: center;
    padding: 2px 0px;
}

.item-footer {
    background-color: #fff;
    color: #000;
    padding: 4px 12px;
}

.item-footer div{
    margin-bottom: 4px;
    font-size: 14px;
    color: #333;
    font-weight: 400;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.item-footer div:hover{
    color: #eea20e;
    cursor: pointer;
}

.item-footer span{
    color: #eea20e;
    font-size: 16px;
}

.item-img:hover img{
    transform: scale(1.4);
    cursor: pointer;
}
</style>