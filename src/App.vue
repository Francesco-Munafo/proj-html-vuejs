<script>

</script>


<template>
    <header class="d-flex justify-content-between p-4">
        <div class="header_logo">
            <img width="300" src="./assets/img/theme_eduprime_logo.png" alt="">
        </div>
        <nav class="navbar navbar-expand-lg navbar-light">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarNavDropdown">

                    <ul class="navbar-nav">

                        <li class="nav-item dropdown px-1">
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
                        </li>
                    </ul>
                    <button class="rounded-5 border-0 p-2 px-3 ms-4">VIEW CONTACTS</button>
                </div>
            </div>
        </nav>

    </header>

    <main>
        <section id="jumbotron">
            <div class="background_overlay d-flex justify-content-center text-center pt-5">
                <div class="col-4">
                    <h1 class="fw-bold ls_1">Key to your success</h1>
                    <p class=" fs-5">EduPrime is the most versatile WordPress theme for educational purposes, showcasing
                        universities, courses, secondary schools etc.</p>
                    <div class="d-flex my-5 justify-content-center">
                        <button class="bg_warning txt_white fw-medium rounded-5 border-0 p-4 px-5 ms-4">Search
                            courses</button>
                        <button class="bg_light txt_danger fw-medium rounded-5 border-0 p-4 px-5 ms-4">Apply for
                            university</button>
                    </div>
                </div>
            </div>
        </section>

        <section id="section_splitter"></section>

        <section id="courses">
            <div class="container">
                <img width="48px" src="./assets/img/Books-icon.png" alt="books">
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
                        <img class="img-fluid" src="./assets/img/Graduation-Illustration.png" alt="">
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

                        <div class="col py-3 d-flex flex-column align-items-center">
                            <img class="img-fluid" src="./assets/img/Gavel-v2.png" alt="">
                            <h6 class="mt-2 mb-0 txt_danger">Law Faculty</h6>
                        </div>
                        <div class="col py-3 d-flex flex-column align-items-center">
                            <img class="img-fluid" src="./assets/img/Coins-tabs-v2.png" alt="">
                            <h6 class="mt-2 mb-0 txt_danger">Economy</h6>
                        </div>
                        <div class="col py-3 d-flex flex-column align-items-center">
                            <img class="img-fluid" src="./assets/img/Medicine-tabs-v2.png" alt="">
                            <h6 class="mt-2 mb-0 txt_danger">Medicine</h6>
                        </div>
                        <div class="col py-3 d-flex flex-column align-items-center">
                            <img class="img-fluid" src="./assets/img/Computer-tabs-v2.png" alt="">
                            <h6 class="mt-2 mb-0 txt_danger">Computer Science</h6>
                        </div>
                        <div class="col py-3 d-flex flex-column align-items-center">
                            <img class="img-fluid" src="./assets/img/Palette-tabs-v2.png" alt="">
                            <h6 class="mt-2 mb-0 txt_danger">Graphic Design</h6>
                        </div>

                    </div>
                </div>
            </div>
            <div class="container faculty">
                <div class="row row-cols-2 justify-content-center">
                    <div class="col text-center">
                        <img src="./assets/img/Gavel-Illustration-e1556884768193.png" alt="">
                    </div>
                    <div class="col">
                        <h2 class="txt_main fw-bold mb-4">Law Faculty</h2>
                        <p>Learning from world-leading academics and practitioners, you'll not only receive an outstanding
                            grounding in the theory of law, but you will be able to understand how those principles are
                            applied in practice through a range of student-led activities and competitions.</p>
                        <button class="bg_danger txt_white fw-medium rounded-5 border-0 mt-4 p-4 px-5">Read more</button>
                    </div>
                </div>
            </div>
        </section>

        <section id="faculties_splitter"></section>

        <section id="events">
            <div class="row justify-content-center m-0 ">
                <div class="col d-flex flex-column align-items-center">
                    <img class="d-block pb-3" width="48px" src="./assets/img/Clock-and-Bell.png" alt="">
                    <h2 class="fw-bold txt_white bg-danger d-inline-block m-auto">University Year</h2>

                    <div class="timeline">

                        <div class="orientation description">
                            <h5>Orientation</h5>
                           <p>First day of the university year, all students gather for the opening ceremony and then network with others.</p> 
                        </div>

                        <div class="demo description">
                           <h5>Demo Classes</h5>
                           <p>In the first week, students try to accomodate with the teaching style and choose their optional courses.</p> 
                        </div>

                        <div class="evaluation description">
                           <h5>Evaluation</h5>
                           <p>At the end of a semester, students take a general evaluation test for every subject they're learning.</p> 
                        </div>

                        <div class="graduation description">
                           <h5>Graduation Day</h5>
                           <p>At the end of a semester, students take a general evaluation test for every subject they're learning.</p> 
                        </div>

                        
                        <img src="./assets/img/Timeline-Item.png" alt="">
                    </div>

                </div>
            </div>

        </section>

    </main>

    <footer>

    </footer>
</template>


<style></style>
