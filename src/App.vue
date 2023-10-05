<script>
import { linkList } from './header.js'
import { footerItems } from './footer.js'
import AppHeader from './components/AppHeader.vue'
import AppMain from './components/AppMain.vue'
import AppFooter from './components/AppFooter.vue'
export default {
    data() {

        return {
            linkList,
            footerItems
        }
    },
    components: {
        AppHeader,
        AppFooter,
        AppMain
    }
}
</script>


<template>
    <AppHeader logoPath="../assets/img/theme_eduprime_logo.png" :navItems="this.linkList">
    </AppHeader>

    <AppMain></AppMain>

    <AppFooter logoPath="../assets/img/theme_eduprime_logo.png" :footerItems="this.footerItems"></AppFooter>
    
</template>


<style></style>
