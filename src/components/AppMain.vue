<script>
import { faculties } from '../store.js'
export default {

    data(){
        return{

           faculties,
           activeIndex : 0
        }
    },

 name: 'AppMain',
 

 methods: {
    getImagePath: function (img) {
            return new URL(img, import.meta.url).href
        }
 }
}
</script>

<template>
    <main>
        <section id="jumbotron">
            <div class="background_overlay d-flex justify-content-center text-center pt-5">
                <div class="col-4">
                    <h1 class="fw-bold ls_1">Key to your success</h1>
                    <p class=" fs-5">EduPrime is the most versatile WordPress theme for educational purposes, showcasing
                        universities, courses, secondary schools etc.</p>
                    <div class="d-flex my-5 justify-content-center">
                        <button class="bg_warning txt_white fw-medium rounded-5 border-0 p-4 px-5 ms-4"><font-awesome-icon
                                :icon="['fas', 'magnifying-glass']" /> Search
                            courses</button>
                        <button class="bg_light txt_danger fw-medium rounded-5 border-0 p-4 px-5 ms-4"><font-awesome-icon
                                :icon="['fas', 'user-plus']" /> Apply for
                            university</button>
                    </div>
                </div>
            </div>
        </section>

        <section id="section_splitter"></section>

        <section id="courses">
            <div class="container">
                <img width="48px" src="../assets/img/Books-icon.png" alt="books">
                <div class="row">
                    <div class="col-6 mt-3">
                        <h2 class="txt_main ls_1 fw-bold">Thousands of courses for any type of student</h2>
                        <p>At EduPrime, it doesn't matter what domain you wish to pursue a career in. Here you can find a
                            course that satisfies your needs within a click away and applies for a course in a matter of
                            minutes. EduPrime is ranked as the most versatile university in the world, thanks to the number
                            of courses it provides</p>
                        <button class="bg_warning txt_white fw-medium rounded-5 border-0 mt-4 p-4 px-5">Browse through
                            courses</button>
                    </div>
                    <div class="col-6">
                        <img class="img-fluid" src="../assets/img/Graduation-Illustration.png" alt="">
                    </div>
                </div>


            </div>
        </section>

        <section id="faculties" class="py-5">
            <div class="row m-0 justify-content-center">
                <div class="col text-center p-0">
                    <h2 class="txt_main fw-bold">Faculties available at EduPrime</h2>
                    <p class="w-25 m-auto">A single university with a load of courses, tailored to satisfy any student's
                        needs</p>
                </div>
            </div>
            <div class="faculties_list">
                <div class="container">
                    <div class="row row-cols-5 justify-content-center align-items-center">

                        <div class="col py-3 d-flex flex-column align-items-center" v-for="(faculty, index) in this.faculties" @click="this.activeIndex = index" :class="this.activeIndex === index ? 'active' : ''">
                            <img class="img-fluid" :src="getImagePath(faculty.img)" alt="">
                            <h6 class="mt-2 mb-0 txt_danger">{{ faculty.title }}</h6>
                        </div>
                        

                    </div>
                </div>
            </div>
            <div class="container faculty">
                <div class="row row-cols-2 justify-content-center">
                    <div class="col text-center">
                        <img :src="getImagePath(this.faculties[this.activeIndex].descriptionImg)" alt="">
                    </div>
                    <div class="col">
                        <h2 class="txt_main fw-bold mb-4">{{ this.faculties[this.activeIndex].title }}</h2>
                        <p>{{ this.faculties[this.activeIndex].description }}</p>
                        <button class="bg_danger txt_white fw-medium rounded-5 border-0 mt-4 p-4 px-5">Read more</button>
                    </div>
                </div>
            </div>
        </section>

        <section id="faculties_splitter"></section>

        <section id="events">
            <div class="row justify-content-center m-0 ">
                <div class="col d-flex flex-column align-items-center">
                    <img class="d-block pb-3" width="48px" src="../assets/img/Clock-and-Bell.png" alt="">
                    <h2 class="fw-bold txt_white bg-danger d-inline-block m-auto">University Year</h2>

                    <div class="timeline">

                        <div class="orientation description">
                            <h5>Orientation</h5>
                            <p>First day of the university year, all students gather for the opening ceremony and then
                                network with others.</p>
                        </div>

                        <div class="demo description">
                            <h5>Demo Classes</h5>
                            <p>In the first week, students try to accomodate with the teaching style and choose their
                                optional courses.</p>
                        </div>

                        <div class="evaluation description">
                            <h5>Evaluation</h5>
                            <p>At the end of a semester, students take a general evaluation test for every subject they're
                                learning.</p>
                        </div>

                        <div class="graduation description">
                            <h5>Graduation Day</h5>
                            <p>At the end of a semester, students take a general evaluation test for every subject they're
                                learning.</p>
                        </div>


                        <img src="../assets/img/Timeline-Item.png" alt="">
                    </div>

                </div>
            </div>
            <div class="row justify-content-center m-0">
                <div class="col d-flex flex-column align-items-center">
                    <img class="d-block pb-3" width="48" src="../assets/img/upcoming-events-calendar-icon.png" alt="">
                    <h2 class="fw-bold txt_white d-inline-block m-auto">Upcoming Events</h2>
                    <div class="container mt-5 d-flex flex-column justify-content-between gap-5">
                        <div class="row row-cols-3">
                            <div class="col">
                                <div class="card rounded-4">
                                    <div class="card-body text-center pb-0">
                                        <h3 class="card-title txt_main fw-bold">Coaching Sessions</h3>
                                        <h6 class="card-subtitle txt_light_dark fw-normal mb-2 py-2 text-muted ">
                                            <font-awesome-icon :icon="['far', 'calendar-days']" /> 20 May 21:30 PM
                                        </h6>
                                        <p class="card-text txt_light_dark">Lorem ipsum dolor, sit amet consectetur
                                            adipisicing elit. Placeat, voluptates.</p>
                                        <button
                                            class="bg_danger flying_button txt_white fw-medium rounded-5 border-0 p-2 px-4"><font-awesome-icon
                                                :icon="['fas', 'plus']" /> Find more</button>
                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card rounded-4">
                                    <div class="card-body text-center pb-0">
                                        <h3 class="card-title txt_main fw-bold">Coaching Sessions</h3>
                                        <h6 class="card-subtitle txt_light_dark fw-normal mb-2 py-2 text-muted ">
                                            <font-awesome-icon :icon="['far', 'calendar-days']" /> 24 Mar 18:00 PM
                                        </h6>
                                        <p class="card-text txt_light_dark">Lorem ipsum dolor, sit amet consectetur
                                            adipisicing elit. Placeat, voluptates.</p>
                                        <button
                                            class="bg_danger flying_button txt_white fw-medium rounded-5 border-0 p-2 px-4"><font-awesome-icon
                                                :icon="['fas', 'plus']" /> Find more</button>

                                    </div>
                                </div>
                            </div>
                            <div class="col">
                                <div class="card rounded-4">
                                    <div class="card-body text-center pb-0">
                                        <h3 class="card-title txt_main fw-bold">Coaching Sessions</h3>
                                        <h6 class="card-subtitle txt_light_dark fw-normal mb-2 py-2 text-muted">
                                            <font-awesome-icon :icon="['far', 'calendar-days']" /> 12 Feb 13:30 PM
                                        </h6>
                                        <p class="card-text txt_light_dark">Lorem ipsum dolor, sit amet consectetur
                                            adipisicing elit. Placeat, voluptates.</p>
                                        <button
                                            class="bg_danger flying_button txt_white fw-medium rounded-5 border-0 p-2 px-4"><font-awesome-icon
                                                :icon="['fas', 'plus']" /> Find more</button>

                                    </div>
                                </div>
                            </div>

                        </div>
                        <button class="btn bg_warning txt_white fw-medium rounded-5 border-0 mt-4 p-4 px-5 m-auto">View All
                            Events</button>
                    </div>
                </div>

            </div>

        </section>

        <section id="events_splitter"></section>

        <section id="latest_courses">
            <div class="container">
                <h2 class="txt_main ls_1 fw-bold">Latest Courses</h2>
                <div class="row row-cols-4">
                    <div class="col">
                        <div class="card rounded-4 border-0">
                            <div class="card-body text-center pb-0">
                                <img width="100" class="img-fluid" src="../assets/img/Decisions-icon.png" alt="">
                                <h6 class="card-subtitle txt_main fw-bold mb-2 py-2">Make Better Decisions</h6>
                                <h6 class="card-subtitle txt_light_dark fw-normal mb-2 py-2 text-muted">
                                    <font-awesome-icon :icon="['far', 'user']" /> Teacher: <span class=" fw-medium">James
                                        Collins</span>
                                </h6>
                                <h6 class="card-subtitle txt_light_dark fw-normal mb-2 py-2 text-muted">
                                    <font-awesome-icon :icon="['fas', 'money-bill-1']" /> Price: <span
                                        class=" fw-medium">$21.00</span>
                                </h6>
                                <button
                                    class="bg_danger txt_white flying_button fw-medium rounded-5 border-0 p-2 px-4"><font-awesome-icon
                                        :icon="['far', 'eye']" /> View Course</button>
                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card rounded-4 border-0">
                            <div class="card-body text-center pb-0">
                                <img width="100" class="img-fluid" src="../assets/img/Speaker-icon.png" alt="">
                                <h6 class="card-subtitle txt_main fw-bold mb-2 py-2">How to be a speaker</h6>
                                <h6 class="card-subtitle txt_light_dark fw-normal mb-2 py-2 text-muted">
                                    <font-awesome-icon :icon="['far', 'user']" /> Teacher: <span class=" fw-medium">James
                                        Collins</span>
                                </h6>
                                <h6 class="card-subtitle txt_light_dark fw-normal mb-2 py-2 text-muted">
                                    <font-awesome-icon :icon="['fas', 'money-bill-1']" /> Price: <span
                                        class=" fw-medium">Free</span>
                                </h6>
                                <button
                                    class="bg_danger txt_white flying_button fw-medium rounded-5 border-0 p-2 px-4"><font-awesome-icon
                                        :icon="['far', 'eye']" /> View Course</button>

                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card rounded-4 border-0">
                            <div class="card-body text-center pb-0">
                                <img width="100" class="img-fluid" src="../assets/img/Network-icon.png" alt="">
                                <h6 class="card-subtitle txt_main fw-bold mb-2 py-2">Network Introductions</h6>
                                <h6 class="card-subtitle txt_light_dark fw-normal mb-2 py-2 text-muted">
                                    <font-awesome-icon :icon="['far', 'user']" /> Teacher: <span class=" fw-medium">James
                                        Collins</span>
                                </h6>
                                <h6 class="card-subtitle txt_light_dark fw-normal mb-2 py-2 text-muted">
                                    <font-awesome-icon :icon="['fas', 'money-bill-1']" /> Price: <span
                                        class=" fw-medium">Free</span>
                                </h6>
                                <button
                                    class="bg_danger txt_white flying_button fw-medium rounded-5 border-0 p-2 px-4"><font-awesome-icon
                                        :icon="['far', 'eye']" /> View Course</button>

                            </div>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card rounded-4 border-0">
                            <div class="card-body text-center pb-0">
                                <img width="100" class="img-fluid" src="../assets/img/Brand-icon.png" alt="">
                                <h6 class="card-subtitle txt_main fw-bold mb-2 py-2 ">Brand Management</h6>
                                <h6 class="card-subtitle txt_light_dark fw-normal mb-2 py-2 text-muted">
                                    <font-awesome-icon :icon="['far', 'user']" /> Teacher: <span class=" fw-medium">James
                                        Collins</span>
                                </h6>
                                <h6 class="card-subtitle txt_light_dark fw-normal mb-2 py-2 text-muted">
                                    <font-awesome-icon :icon="['fas', 'money-bill-1']" /> Price: <span
                                        class=" fw-medium">Free</span>
                                </h6>
                                <button
                                    class="bg_danger txt_white flying_button fw-medium rounded-5 border-0 p-2 px-4"><font-awesome-icon
                                        :icon="['far', 'eye']" /> View Course</button>

                            </div>
                        </div>
                    </div>

                </div>
                <section id="methods">
                    <div class="container">
                        <img width="48" src="../assets/img/Exam-icon.png" alt="books">
                        <div class="row row-cols-2">
                            <div class="col mt-3">
                                <div class="wrapper ">
                                    <h2 class="txt_main ls_1 fw-bold my-4">The most efficient examination method</h2>
                                    <p>EduPrime has gathered teachers from around the globe to brainstorm in order to
                                        facilitate the evaluation of our students. Every teacher from our university has an
                                        influence on how students are evaluated at his/her subject.</p>
                                    <button class="bg_danger txt_white fw-medium rounded-5 border-0 mt-4 p-4 px-5">Discover
                                        the Method</button>
                                </div>

                            </div>
                            <div class="col">
                                <img class="img-fluid" src="../assets/img/Exam-Illustration.png" alt="">
                            </div>

                            <div class="col">
                                <img class="img-fluid" src="../assets/img/Girl-Illustration.png" alt="">
                            </div>

                            <div class="col">
                                <div class="mx-5">
                                    <img width="48" src="../assets/img/Exam-icon-1.png" alt="">
                                    <h2 class="txt_main ls_1 fw-bold my-4">Variable fees for international students</h2>
                                    <p class="mt-5">EduPrime has gathered teachers from around the globe to brainstorm in
                                        order to
                                        facilitate
                                        the evaluation of our students. Every teacher from our university has an influence
                                        on
                                        how students are evaluated at his/her subject.</p>
                                    <button class="bg_danger txt_white fw-medium rounded-5 border-0 mt-5 p-4 px-5">List of
                                        Fees</button>
                                </div>
                            </div>
                        </div>


                    </div>
                </section>

            </div>

        </section>
        <section id="newsletter">
            <div class="container d-flex justify-content-between align-items-center">
                <div class="col-6">
                    <h3 class="txt_white">Subscribe now to our Newsletter !</h3>
                </div>
                <div class="col-6">
                    <div class="input-group w-75 ms-auto">

                        <input type="text" class="form-control rounded-5 my-1 input_area" placeholder="Email address..."
                            aria-label="Recipient's username" aria-describedby="button-addon2">
                        <button class="btn bg_warning txt_white rounded-5 position-relative submit" type="button"
                            id="button-addon2"><font-awesome-icon :icon="['fas', 'paper-plane']" /></button>
                    </div>
                </div>

            </div>
        </section>

        <section id="partners">

            <div class="row m-0 justify-content-center">
                <div class="col text-center p-0">
                    <h2 class="txt_main fw-bold">Partners</h2>
                    <p class="w-25 m-auto mt-5">Leverage agile frameworks to provide a robust synopsis for hugh level
                        overviews. Iterative approaches to corporate strategy</p>
                </div>
            </div>
            <div class="container my-5">
                <div class="partner_icons row align-items-center justify-content-center">
                    <div class="col">
                        <img class="img-fluid" src="../assets/img/partner-2.png" alt="">
                    </div>
                    <div class="col">
                        <img class="img-fluid" src="../assets/img/partner-3.png" alt="">
                    </div>
                    <div class="col">
                        <img class="img-fluid" src="../assets/img/partner-4.png" alt="">
                    </div>
                    <div class="col">
                        <img class="img-fluid" src="../assets/img/partner-5.png" alt="">
                    </div>
                    <div class="col">
                        <img class="img-fluid" src="../assets/img/partner-6.png" alt="">
                    </div>
                    <div class="col">
                        <img class="img-fluid" src="../assets/img/partner-8.png" alt="">
                    </div>
                    <div class="col">
                        <img class="img-fluid" src="../assets/img/partner-1.png" alt="">
                    </div>
                    <div class="col">
                        <img class="img-fluid" src="../assets/img/partner-7.png" alt="">
                    </div>

                </div>

            </div>
        </section>

        <section id="partner_splitter"></section>

    </main>
</template>


<style lang="scss" scoped></style>