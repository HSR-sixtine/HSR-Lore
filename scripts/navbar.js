$(document).ready(function(){
    $("#navbarContainer").load("navbar.html", function() {
        // Ajouter la classe "active" à l'élément correspondant dans la barre de navigation
        var pageClass = $("#container").attr("class");
        $("nav ul li").each(function() {
            if ($(this).text().trim() === pageClass) {
                $(this).addClass("active");
            }
        });
    });
});
