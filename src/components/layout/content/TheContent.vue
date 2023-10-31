<template>
    <div>
        <router-view></router-view>
        <BaseToast />
    </div>
</template>

<script>
import BaseToast from '../../base/BaseToast.vue';
export default {
    name: "TheContent",
    components: {
        BaseToast,
    },
}
</script>