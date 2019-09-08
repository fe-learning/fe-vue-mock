<template>
    <div id="login">
        <h2>欢迎页面{{$route.params.p}}</h2>
        <button v-for="(btn, index) in btnLst" @click="goPage(btn.path)" :key="index">{{btn.text}}</button>
    </div>
</template>
<script>
export default {
    name: "welcome",
    data() {
        return {
            btnLst: [
                {
                    path: '/main',
                    text: '返回上一页面'
                },
                {
                    path:'/login/a',
                    text: '跳到a登录页面'
                },
                {
                    path:'/login/b',
                    text: '跳到b登录页面'
                }
            ]
        }
    },
    methods:{
        goPage(path) {
            console.log(this.$route.params.p)
            this.$router.push(path)
        }
    }
}
</script>