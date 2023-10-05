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
    {{ logoPath }}
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
                                data-bs-toggle="dropdown" aria-expanded="false">
                                {{item.name}}
                            </a>
                            <ul v-if="item.dropDownMenu != undefined" class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li v-for="option in item.dropDownMenu"><a class="dropdown-item" :href="option.link">{{ option.name }}</a></li>
                                
                            </ul>
                        </li>


                        <!-- <li class="nav-item dropdown px-1">
                            <a class="nav-link dropdown-toggle txt_white" href="#" id="navbarDropdownMenuLink" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Home
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a class="dropdown-item" href="#">Lorem.</a></li>
                                <li><a class="dropdown-item" href="#">Lorem.</a></li>
                                <li><a class="dropdown-item" href="#">Lorem.</a></li>
                            </ul>
                        </li>

                        <li class="nav-item dropdown px-1">
                            <a class="nav-link dropdown-toggle txt_white" href="#" id="navbarDropdownMenuLink" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Courses
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>

                        <li class="nav-item px-1">
                            <a class="nav-link txt_white" href="#">About Us</a>
                        </li>

                        <li class="nav-item dropdown px-1">
                            <a class="nav-link dropdown-toggle txt_white" href="#" id="navbarDropdownMenuLink" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                News
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>

                        <li class="nav-item dropdown px-1">
                            <a class="nav-link dropdown-toggle txt_white" href="#" id="navbarDropdownMenuLink" role="button"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                Pages
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        <li class="nav-item px-1">
                            <a class="nav-link txt_white" href="#">Conctact</a>
                        </li>
                        <li class="nav-item px-1">
                            <a class="nav-link txt_white" href="#">Purchase</a>
                        </li> -->
                    </ul>
                    <button class="rounded-5 border-0 p-2 px-3 ms-4">VIEW CONTACTS</button>
                </div>
            </div>
        </nav>

    </header>
</template>

<style scoped></style>
