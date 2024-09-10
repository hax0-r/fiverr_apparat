    // navbar.js
    document.addEventListener("DOMContentLoaded", function () {
        const navbarTemplate = `
       <div class="z-20 w-full fixed transition-all" id="bgChangeNav">
        <div class="mx-auto  max-w-screen-xl px-6 lg:px-8 relative">
            <div class="relative flex justify-between h-20 space-x-10 w-full">
                <div class="flex justify-start">
                    <a class="flex flex-shrink-0 items-center" href="./index.html">
                        <img class="block h-[6rem] w-auto" src="./Docs/Assets/Images/logo.png">
                    </a>
                </div>
                <ul class="hidden md:flex justify-center items-center gap-8 font-medium">
                    <li><a class="hover:text-[#fff] text-white transition-all navUnderLine" href="#">Vendre</a></li>
                    <li><a class="hover:text-[#fff] text-white transition-all navUnderLine" href="#">Louer</a></li>
                    <li><a class="hover:text-[#fff] text-white transition-all navUnderLine" href="#">Acheter</a></li>
                    <li><a class="hover:text-[#fff] text-white transition-all navUnderLine" href="#">Contacts</a></li>
                    <li><a class="hover:text-[#fff] text-white transition-all navUnderLine" href="#">Temoignages</a>
                    </li>
                    <div class="flex items-center gap-4 text-xl text-white">
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-linkedin-in text-[1.4rem]"></i>
                        <i class="fa-brands fa-instagram text-2xl"></i>
                    </div>
                </ul>
                <div id="openNav"
                    class="flex-shrink-0 cursor-pointer flex md:hidden px-2 py-3 items-center space-x-8 flex-1 justify-end justify-self-end">
                    <i class="fa-solid fa-bars text-2xl text-[#fff]"></i>
                </div>
            </div>
        </div>
        <div class="responsive overflow-hidden relative transition-all">
            <div id="resNav"
                class="w-[0rem] overflow-hidden bg-gradient-to-b from-[#fe8a39] to-[#fd3838] transition-all h-screen fixed top-0 left-0 z-50">
                <h1 id="closenNav" class="absolute cursor-pointer right-10 top-8 text-2xl font-bold"><i
                        class="fa-solid fa-xmark"></i></h1>
                <div class="p-5 ">
                    <img src="./Docs/Assets/logo.png" class="h-16" alt="">
                    <ul class="flex flex-col gap-2 mt-10">
                        <li class="text-white text-xl hover:bg-[#fff]  transition-all rounded-lg hover:shadow-md p-3"><a
                                href="./proBanks.html">Banques Pro</a></li>
                        <li class="text-white text-xl hover:bg-[#fff]  transition-all rounded-lg hover:shadow-md p-3"><a
                                href="./assurance.html">Assurances</a></li>
                        <li class="text-white text-xl hover:bg-[#fff]  transition-all rounded-lg hover:shadow-md p-3"><a
                                href="./story.html">Notre histoire</a></li>
                        <li class="text-white text-xl hover:bg-[#fff]  transition-all rounded-lg hover:shadow-md p-3"><a
                                href="./blog.html">Blog</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    `;

        // Inject the navbar into the HTML
        document.getElementById("navbar").innerHTML = navbarTemplate;

        const openNav = document.getElementById(`openNav`)
        const closenNav = document.getElementById(`closenNav`)
        const resNav = document.getElementById(`resNav`)

        openNav.addEventListener('click', () => {
            resNav.style.width = "22rem"
        })
        closenNav.addEventListener('click', () => {
            resNav.style.width = "0rem"
        })

    });


