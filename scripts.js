const menuLinks = document.querySelectorAll(".menu-link");

menuLinks.forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const dropdown = this.nextElementSibling;

        document.querySelectorAll(".dropdown").forEach(menu=>{
            if(menu !== dropdown){
                menu.style.display = "none";
            }
        });

        dropdown.style.display =
        dropdown.style.display === "block"
        ? "none"
        : "block";

    });

});