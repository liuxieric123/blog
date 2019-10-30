<template>
    <div class="theme-container vuepress-theme-simple">
        <header class="header">
            <router-link
                to="/"
                :title="$description"
                class="site-name"
            >
                <img class='banner' :src="$withBase('/vue-blog.png')" alt="foo">
            </router-link>
            <div style="clear: both" />
        <nav-bar />
        </header>
        <home-page v-if="isHome" />
        <post-page v-else />
        <!-- <post-page v-else />
        <footer-bar /> -->
    </div>
</template>

<script>
    import homePage from '../components/home';
    import postPage from '../components/post';
    export default {
        components: {
            homePage,
            postPage
        },
        computed: {
            isHome() {
                return this.$page.path === '/';
            }
        }
    }
</script>