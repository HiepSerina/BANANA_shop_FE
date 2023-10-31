<template>
    <div class="exterior">
        <span :class="className()">{{ content }}</span>
        <span v-if="weaponQuality!='normal'" :class="['quality',{'quality_1': weaponQuality=='★' }]">{{ weaponQuality }}</span>
    </div>
</template>

<script>
import Benum from '../../js/enum';
export default {
    name: "BaseExterior",
    props:{
        content: String,
        weaponQuality: String,
    },
    methods:{
        className(){
            return "exterior" + "_"+ Benum.exterior[this.content];
        }
    }
}
</script>

<style scoped>
.exterior{
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
}

.exterior_0{
    background-color: #397439;
}

.exterior_1{
    background-color: #488b48;
}

.exterior_2{
    background-color: #f1ad4d;
}
.exterior_3{
    background-color: #b7625f;
}
.exterior_4{
    background-color: #993a38;
}

span{
    padding: 2px;
    border-radius: 2px;
    color: #fff;
}

.quality{
    background-color: #14181f;
    color: #c34021;
}

.quality_1{
    color: #8650ac;
}
</style>