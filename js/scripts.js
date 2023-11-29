function showNav(){
    const nav = document.querySelector("#nav");
    const menuIcon = document.querySelector("#menu-icon");

    if(!nav.classList.contains("responsive")){
        nav.classList.add("responsive");
        menuIcon.classList.remove("bi-list");
        menuIcon.classList.add("bi-x");
    }else{
        nav.classList.remove("responsive");
        menuIcon.classList.remove("bi-x");
        menuIcon.classList.add("bi-list");
    }
}