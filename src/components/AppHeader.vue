<script>
export default {
    name: 'AppHeader',
    props: {
        navItems: Array,
        logoPath: String
    },
    methods: {
        getImagePath: function (img) {
            return new URL(img, import.meta.url).href
        }
    }
}
</script>

<template>

    <header class="d-flex justify-content-between p-4">
        <div class="header_logo">
            <img width="300" :src="getImagePath(logoPath)" alt="">
        </div>
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarNavDropdown">

                    <ul class="navbar-nav">

                        <li v-for="item in this.navItems" class="nav-item dropdown px-1">
                            <a class="nav-link txt_white" :class="item.dropDownMenu != undefined ? 'dropdown-toggle' : ''" :href="item.link" id="navbarDropdownMenuLink" role="button"
                                :data-bs-toggle="item.dropDownMenu != undefined ? 'dropdown' : ''" aria-expanded="false">
                                {{item.name}}
                            </a>
                            <ul v-if="item.dropDownMenu != undefined" class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li v-for="option in item.dropDownMenu"><a class="dropdown-item" :href="option.link">{{ option.name }}</a></li>
                                
                            </ul>
                        </li>

                    </ul>
                    <button class="rounded-5 border-0 p-2 px-3 ms-4">VIEW CONTACTS</button>
                </div>
            </div>
        </nav>

    </header>
</template>

<style scoped></style>
