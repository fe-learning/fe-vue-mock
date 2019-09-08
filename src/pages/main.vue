<template>
    <div id="mian">
        <h2>this is main pages</h2>
        <div v-for="(link, index) in linkLst" :key="index">
            <router-link :to="link.to">{{link.text}}</router-link>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Main',
    data() {
        return {
            linkLst: [
                {
                    to: '/welcome/a',
                    text: '欢迎页面a'
                },
                {
                    to: '/welcome/b',
                    text: '欢迎页面b'
                },
                {
                    to: '/login/a',
                    text: '欢迎页面a'
                },
                {
                    to: '/login/b',
                    text: '欢迎页面b'
                }
            ]
        }
    }
}
</script>