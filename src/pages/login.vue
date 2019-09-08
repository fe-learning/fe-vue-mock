<template>
    <div id="login">
        <h2>登录页面{{$route.params.p}}</h2>
        <button v-for="(btn, index) in btnLst" @click="goPage(btn.path)" :key="index">{{btn.text}}</button>
    </div>
</template>
<script>
export default {
    name: "Login",
    data() {
        return {
            btnLst: [
                {
                    path: '/main',
                    text: '返回上一页面'
                },
                {
                    path:'/welcome/a',
                    text: '跳到a欢迎页面'
                },
                {
                    path:'/welcome/b',
                    text: '跳到b欢迎页面'
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