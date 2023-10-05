<script>
export default {
name: 'AppFooter',
props: {
    footerItems: Array,
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
    <footer class="bg_danger">

        <div class="container pt-5 pb-3 mt-5">
            <div class="row">
                <div class="col-4 d-flex flex-column">
                    <div class="footer_logo mb-5">
                        <img width="300" :src="getImagePath(logoPath)" alt="">
                    </div>
                    <p class="txt_white">{{ this.footerItems[0].eduDescription[0].description}}</p>
                    <div class="social d-flex gap-3 pt-3">
                        <div class="social_icon" v-for="icon in this.footerItems[0].eduDescription[0].socials[0]">
                            <font-awesome-icon class=" fs-3 txt_white p-2" :icon="icon" />
                        </div>
                        



                    </div>
                </div>
                <div class="col-2 ps-5">
                    <ul class="list-unstyled">
                        <h6 class="card-subtitle txt_white fw-bold mb-2 py-2 ">{{this.footerItems[0].getEdu[0].title}}</h6>
                        <li v-for="link in this.footerItems[0].getEdu[0].links "><a :href="link.link">{{ link.name }}</a></li>
                        
                    </ul>
                </div>
                <div class="col-2 ps-5">
                    <ul class="list-unstyled">
                        <h6 class="card-subtitle txt_white fw-bold mb-2 py-2 ">{{this.footerItems[0].networking[0].title}}</h6>
                        <li v-for="link in this.footerItems[0].networking[0].links"><a :href="link.link">{{ link.name }}</a></li>
                        
                    </ul>
                </div>
                <div class="col-4 d-flex flex-column align-items-end">
                    <div class="input-group w-75 ms-5">

                        <input type="text" class="form-control rounded-5 my-1 position-relative input_area"
                            placeholder="Search..." aria-label="Recipient's username" aria-describedby="button-addon2">
                        <button class="btn bg_warning txt_white rounded-5 position-relative submit" type="button"
                            id="button-addon2"><font-awesome-icon :icon="['fas', 'magnifying-glass']" /></button>
                    </div>
                    <div class="categories w-75 text-end pt-4">
                        <h6 class="card-subtitle txt_white fw-bold mb-2 py-2 w-100">{{this.footerItems[0].search.title}}</h6>
                        <div class="pills d-flex justify-content-end flex-wrap gap-2">
                            <span class="badge rounded-pill border border-1 p-2 fw-medium" v-for="pill in this.footerItems[0].search.categories">{{ pill }}</span>
                        
                        </div>
                    </div>
                </div>
            </div>
        </div>


    </footer>
</template>


<style lang="scss" scoped></style>