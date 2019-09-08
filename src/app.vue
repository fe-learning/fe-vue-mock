<template>
    <div id="app">
        <h2>欢迎使用项目模板</h2>
        <router-view/>
    </div>
</template>

<script>
import api from './server/api.js'
export default {
    // App.vue是项目的根组件
    name: "App" ,
    created() {
        this.$axios.get(api.getUserInfo).then(res => {
            console.log(res)
        })
    }
}
</script>
<style lang="scss">
$black: black;
$yellow: yellow;
h2 {
    color: $black;
    background: $yellow;
    transform: translateY(20px)
}
</style>